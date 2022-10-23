import React, {useState} from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ACCard from '../../components/ACCard';
import {BLACK, WHITE} from '../../styles/colors';
import {windowHeight, windowWidth} from '../../styles/mixins';

const ACDetailPage = ({navigation}) => {
  const [select, setSelect] = useState('temperature');
  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={false} />
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          paddingHorizontal: 30,
          paddingVertical: 10,
          alignContent: 'center',
          justifyContent: 'space-between',
        }}>
        <Icon
          name="chevron-back"
          size={30}
          color={BLACK}
          onPress={() => navigation.goBack()}
        />
        <Icon name="md-settings-outline" size={23} color={BLACK} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 30,
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          backgroundColor: WHITE,
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => setSelect('temperature')}
          style={{
            backgroundColor: select == 'temperature' ? BLACK : WHITE,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 25,
            width: '50%',
          }}>
          <Text
            style={{
              color: select == 'temperature' ? WHITE : BLACK,
              fontSize: 16,
              textAlign: 'center',
            }}>
            Temperature
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelect('statics')}
          style={{
            backgroundColor: select == 'temperature' ? WHITE : BLACK,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 25,
            width: '50%',
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              color: select == 'temperature' ? BLACK : WHITE,
              fontSize: 16,
              textAlign: 'center',
            }}>
            Statics
          </Text>
        </Pressable>
      </View>
      <View
        style={{height: windowHeight * 0.45, backgroundColor: BLACK}}></View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 30,
          alignContent: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ACCard text={'24°'} title={'Temperature'} />
        <ACCard text={'47%'} title={'Humidity'} />
      </View>
    </View>
  );
};
export default ACDetailPage;
