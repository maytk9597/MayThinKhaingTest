import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {detailTitleTxt, detainTxtColor, WHITE} from '../../styles/colors';
import {windowHeight, windowWidth} from '../../styles/mixins';
const DetailSubPage = ({navigation, route}) => {
  const item = route.params;
  return (
    <View>
      <ImageBackground
        source={item.src}
        style={{
          height: windowHeight * 0.4,
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <Text
          style={{
            color: detailTitleTxt,
            fontSize: 30,
            fontWeight: '800',
            width: '70%',
          }}>
          {item.activity}
        </Text>
      </ImageBackground>
      <View style={{padding: 20}}>
        <View
          style={{
            width: windowWidth * 0.6,
          }}>
          <Text
            style={{
              color: detainTxtColor,
              fontSize: 40,
              paddingBottom: 10,
              fontWeight: '600',
            }}>
            {item.id}
          </Text>
          <View
            style={{
              borderTopColor: detainTxtColor,
              borderTopWidth: 1,
              alignSelf: 'flex-start',
            }}>
            <Text
              style={{
                color: detainTxtColor,
                fontSize: 30,
                paddingVertical: 10,
                fontWeight: '600',
              }}>
              {item.month}
            </Text>
            <Text
              style={{
                color: detainTxtColor,
                fontSize: 18,
                paddingBottom: 10,
              }}>
              {item.event}
            </Text>
          </View>
          <Text
            style={{
              color: detainTxtColor,
              fontSize: 10,
              paddingBottom: 10,
            }}>
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
          <Text
            style={{
              color: detainTxtColor,
              fontSize: 15,
              paddingBottom: 5,
              borderBottomColor: detainTxtColor,
              borderBottomWidth: 1,
            }}>
            Location
          </Text>
          <Text
            style={{
              color: detainTxtColor,
              fontSize: 12,
              paddingBottom: 20,
              fontWeight: '800',
            }}>
            EVENT LOCATION
          </Text>
          <Text
            style={{
              color: detainTxtColor,
              fontSize: 15,
              paddingBottom: 5,
              borderBottomColor: detainTxtColor,
              borderBottomWidth: 1,
            }}>
            Time
          </Text>
          <Text
            style={{
              color: detainTxtColor,
              fontSize: 12,
              paddingBottom: 20,
              fontWeight: '800',
            }}>
            16:00 Am .{'\n'}18:00 Am
          </Text>
          <Text
            style={{
              color: detainTxtColor,
              fontSize: 15,
              paddingBottom: 5,
              borderBottomColor: detainTxtColor,
              borderBottomWidth: 1,
            }}>
            Back
          </Text>
        </View>
      </View>
    </View>
  );
};
export default DetailSubPage;
