require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const helmet = require('helmet');
const mysql = require('mysql');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

app.use(helmet());

// for mail
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');

/**
 * Connect to mysql database
 */
const dbCon = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
dbCon.connect(error => {
  if (error) throw error;
  console.log('database connected');
});

/**
 * Mail service
 */
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

var mailOptions = {
  from: process.env.MAIL_FROM_ADDRESS,
  subject: 'You have unseen notifications!',
};

const readHTMLFile = function (path, callback) {
  fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
    if (err) {
      callback(err);
      throw err;
    } else {
      callback(null, html);
    }
  });
};

/**
 * return random id string
 * @return string
 */
const randomId = () => {
  return crypto.randomBytes(8).toString('hex');
};

/**
 * socket io connection
 */
var publishers = [];
io.on('connection', socket => {
  socket.emit('active-publishers', {
    active_publishers: publishers,
  });

  socket.on('publisher-connect', async ({socket_id}) => {
    socket.socket_id = socket_id;
    publishers.push({
      one_time_socket_id: socket.id,
      socket_id: socket_id,
    });
    socket.join(socket_id);
    io.emit('new-publisher-connect', {
      active_publishers: publishers,
    });
  });

  socket.on(
    'user-connect',
    async ({id, socket_id, end_user_name, to_email}) => {
      socket.to(socket_id).emit('users', {
        roomId: id,
        username: end_user_name,
        seen: 0,
      });
      // mail sent if the publisher is not online
      var publisherExist = publishers.find(
        ({socket_id}) => socket_id === socket_id,
      );
      if (!publisherExist) {
        readHTMLFile('./notification-mail.html', function (err, html) {
          var template = handlebars.compile(html);
          var replacements = {
            username: end_user_name,
          };
          var htmlToSend = template(replacements);
          mailOptions['to'] = to_email;
          mailOptions['html'] = htmlToSend;
          transporter.sendMail(mailOptions, function (error) {
            if (error) {
              console.log(error);
            }
          });
        });
      }
    },
  );

  socket.on('select-room', async ({roomId}) => {
    socket.join(roomId);
  });

  socket.on(
    'send-message',
    async ({message, roomId, to_socket_id, to_email, from_username}) => {
      socket.to(roomId).emit('private-message', {
        message,
        roomId,
        from_username,
      });

      // mail sent if the publisher is not online
      var publisherExist = publishers.find(
        ({socket_id}) => socket_id === to_socket_id,
      );
      if (to_email && !publisherExist) {
        readHTMLFile('./notification-mail.html', function (err, html) {
          var template = handlebars.compile(html);
          var replacements = {
            username: from_username,
          };
          var htmlToSend = template(replacements);
          mailOptions['to'] = to_email;
          mailOptions['html'] = htmlToSend;
          transporter.sendMail(mailOptions, function (error) {
            if (error) {
              console.log(error);
            }
          });
        });
      }
    },
  );

  socket.on('on-end-chat', async ({roomId}) => {
    socket.to(roomId).emit('emit-end-chat', {
      status: true,
      roomId: roomId,
    });
  });

  socket.on('disconnect', () => {
    disconnect_publisher = publishers.filter(
      publisher => publisher.one_time_socket_id === socket.id,
    );
    publishers = publishers.filter(
      publisher => publisher.one_time_socket_id !== socket.id,
    );
    if (disconnect_publisher.length > 0) {
      io.emit('publisher-disconnect', {
        socket_id: disconnect_publisher[0].socket_id,
      });
    }
  });

  socket.on('connect_error', err => console.log('connect error'));
  socket.on('connect_failed', err => console.log('connect_failed'));
  socket.on('reconnect_failed', err => console.log('reconnect_failed'));
});

/**
 * server running
 */
server.listen(3000, () => {
  console.log('SocketIO server is running');
});
