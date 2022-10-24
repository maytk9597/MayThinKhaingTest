import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {txtColor} from '../styles/colors';
import {windowHeight} from '../styles/mixins';

export default profileInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/profile.png')}
            style={styles.profileImg}
            resizeMode="contain"
          />
        </View>

        <View style={styles.txtColor}>
          <View style={styles.txtContainer}>
            <Text>Hi,</Text>
            <Text style={styles.nameTxt}>Lucy Connor</Text>
          </View>
          <Text>25 device on</Text>
        </View>
      </View>
      <Text style={styles.tempTxt}>24°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight * 0.12,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    height: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {paddingRight: 20},
  profileImg: {width: 50},
  txtColor: {color: txtColor},
  txtContainer: {flexDirection: 'row', paddingBottom: 5},
  nameTxt: {fontWeight: 'bold'},
  tempTxt: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#F3F6F2',
    color: '#B8BEB2',
  },
});
