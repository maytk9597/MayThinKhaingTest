import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native';
import {BLACK, WHITE} from '../styles/colors';
export default ACCard = ({text, title}) => {
  return (
    <View
      style={{
        width: '47%',
        backgroundColor: WHITE,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 35,
          textAlign: 'center',
          padding: 15,
          color: BLACK,
        }}>
        {text}
      </Text>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          paddingBottom: 15,
          color: BLACK,
        }}>
        {title}
      </Text>
    </View>
  );
};
