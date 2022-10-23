import React from 'react';
import {Image, Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import {
  BLACK,
  cardBackground,
  cardWhiteBackground,
  switchOff,
  switchOn,
  switchTrackColor,
  WHITE,
} from '../styles/colors';

export default componentCard = ({item, onValueChange, navigation}) => {
  return (
    <Pressable
      onPress={() =>
        item.name === 'Smart AC' && navigation.navigate('AC Detail')
      }
      style={styles.mainContainer(item)}>
      {/* <View > */}
      <View style={styles.container}>
        {item.name !== 'Other' && (
          <Image source={item.switch ? item.src_white : item.src} />
        )}
        <View style={styles.contentContainer}>
          {item.name !== 'Other' ? (
            <Text style={styles.titleContainer(item)}>{item.name}</Text>
          ) : (
            <View style={{width: '60%'}}>
              <Text style={styles.otherTitle(item)}>48</Text>
              <Text style={styles.otherSubTitle(item)}>Total Visits</Text>
              <Image
                source={item.switch ? item.src_white : item.src}
                style={{height: '50%', width: '70%'}}
              />
            </View>
          )}
          <Switch
            style={styles.switchStyle}
            trackColor={{
              false: switchTrackColor,
              true: switchTrackColor,
            }}
            thumbColor={item.switch ? switchOn : switchOff}
            ios_backgroundColor={switchTrackColor}
            onValueChange={onValueChange}
            value={item.switch}
          />
        </View>
      </View>
      {/* </View> */}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  mainContainer: item => ({
    backgroundColor: item.switch ? cardBackground : cardWhiteBackground,
    flex: 1,
    borderRadius: 20,
    height: 150,
    padding: 15,
    margin: 5,
  }),
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleContainer: item => ({
    fontSize: 15,
    width: '60%',
    color: item.switch ? WHITE : BLACK,
  }),
  otherTitle: item => ({
    fontSize: 35,
    fontWeight: 'bold',
    color: item.switch ? WHITE : BLACK,
  }),
  otherSubTitle: item => ({
    color: item.switch ? WHITE : BLACK,
    marginBottom: 3,
  }),
  switchStyle: {transform: [{rotate: '-90deg'}], marginBottom: 10},
});
