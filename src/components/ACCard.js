import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {BLACK, WHITE} from '../styles/colors';
export default ACCard = ({text, title}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.txtContainer}>{text}</Text>
      <Text style={styles.titleContainer}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '47%',
    backgroundColor: WHITE,
    borderRadius: 10,
  },
  txtContainer: {
    fontSize: 35,
    textAlign: 'center',
    padding: 15,
    color: BLACK,
  },
  titleContainer: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 15,
    color: BLACK,
  },
});
