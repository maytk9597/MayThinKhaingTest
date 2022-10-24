import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {detailTitleTxt, detainTxtColor, WHITE} from '../../styles/colors';
import {windowHeight, windowWidth} from '../../styles/mixins';
import DetailSubPageStyle from './style';
const DetailSubPage = ({navigation, route}) => {
  const item = route.params;
  return (
    <View>
      <ImageBackground source={item.src} style={DetailSubPageStyle.imgBgStyle}>
        <Text style={DetailSubPageStyle.activityTxtStyle}>{item.activity}</Text>
      </ImageBackground>
      <View style={{padding: 20}}>
        <View
          style={{
            width: windowWidth * 0.6,
          }}>
          <Text style={DetailSubPageStyle.numMonthStyle}>{item.id}</Text>
          <View style={DetailSubPageStyle.monthContainer}>
            <Text style={DetailSubPageStyle.monthTxtStyle}>{item.month}</Text>
            <Text style={DetailSubPageStyle.eventContainer}>{item.event}</Text>
          </View>
          <Text style={DetailSubPageStyle.txtContainer}>
            Lorem ipsum dolor sit amet. Hic blanditiis quod a laboriosam
            consequatur aut reiciendis numquam hic quisquam assumenda aut
            voluptatibus voluptatum qui ipsa animi. Sit nisi voluptas est
            nostrum iste et iure perspiciatis et enim enim est quia facere est
            eligendi beatae. At quisquam consequatur sed consectetur asperiores
            in dolorum eligendi!
          </Text>
        </View>
        <View
          style={{
            width: '40%',
            alignSelf: 'flex-end',
          }}>
          <Text style={DetailSubPageStyle.locationContainer}>Location</Text>
          <Text style={DetailSubPageStyle.location}>EVENT LOCATION</Text>
          <Text style={DetailSubPageStyle.timeContainer}>Time</Text>
          <Text style={DetailSubPageStyle.time}>16:00 Am .{'\n'}18:00 Am</Text>
          <Text style={DetailSubPageStyle.backTxt}>Back</Text>
        </View>
      </View>
    </View>
  );
};
export default DetailSubPage;
