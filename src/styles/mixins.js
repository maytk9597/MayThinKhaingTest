import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const welcomeMorningMsg = "The home wasn't the space without you";
export const welcomeNoonMsg = 'People usually are the happiest at home';
export const welcomeNightMsg =
  'When I see the rain, you are the first in my mind-welcome';

export const gestureConfig = {
  velocityThreshold: 3,
  directionalOffsetThreshold: 80,
};

export const focusedIcon = {
  Main: 'home',
  Sub: 'view-grid',
  Add: 'plus',
  Graph: 'chart-box',
  Profile: 'face-man',
};
export const icon = {
  Main: 'home-outline',
  Sub: 'view-grid-outline',
  Add: 'plus',
  Graph: 'chart-box-outline',
  Profile: 'face-man',
};

export const subPageData = [
  {
    id: '01',
    month: 'JAN',
    event: 'Lunar New Year',
    activity: 'Catch The Lion Dance Show!',
    src: require('../../assets/JAN.jpg'),
  },
  {
    id: '02',
    month: 'FEB',
    event: "Valentine's Day",
    activity: 'Enjoy a romantic evening under the stars!',
    src: require('../../assets/FEB.jpg'),
  },

  {
    id: '03',
    month: 'MAR',
    event: 'Healthy Lifestyle',
    activity: 'Meet my fitness instructor!',
    src: require('../../assets/MAR.jpg'),
  },
  {
    id: '04',
    month: 'APR',
    event: 'Earth Day',
    activity: 'Lights out! Let’s go glamping!',
    src: require('../../assets/APR.jpg'),
  },
  {
    id: '05',
    month: 'MAY',
    event: 'International Family Day',
    activity: 'Enjoy a game of lawn bowling!',
    src: require('../../assets/MAY.jpg'),
  },
  {
    id: '06',
    month: 'JUN',
    event: 'School Holidays',
    activity: 'Time to explore the world of flora & wildlife',
    src: require('../../assets/JUN.jpg'),
  },
  {
    id: '07',
    month: 'JUL',
    event: 'Holidays',
    activity: 'Community Yoga',
    src: require('../../assets/JUL.jpg'),
  },
  {
    id: '08',
    month: 'AUG',
    event: 'World Seniors Day',
    activity: 'Harvest fruits and vegetables with Grandma!',
    src: require('../../assets/AUG.jpg'),
  },
  {
    id: '09',
    month: 'SEP',
    event: 'September Break',
    activity: 'Play date with my friends at the Tree House!',
    src: require('../../assets/SEP.jpg'),
  },
  {
    id: '10',
    month: 'OCT',
    event: 'Oktoberfest',
    activity: 'Celebrations with my community',
    src: require('../../assets/OCT.jpg'),
  },
  {
    id: '11',
    month: 'NOV',
    event: 'Birthday',
    activity: 'Birthday dinner with my friends!',
    src: require('../../assets/NOV.jpg'),
  },
  {
    id: '12',
    month: 'DEC',
    event: 'Christmas Caroling',
    activity: 'Party around the Christmas tree!',
    src: require('../../assets/DEC.jpg'),
  },
];
