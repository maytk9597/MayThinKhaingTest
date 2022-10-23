import React from 'react';

import {View, Pressable, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {BLACK, BUTTONBGCOLOR, PRIMARYTXTCOLOR, WHITE} from '../styles/colors';
import {focusedIcon, icon, windowHeight} from '../styles/mixins';

// import {SelectWheel} from '.';

const TabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null;
  }
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={[
              styles.mainItemContainer,
              {borderRightWidth: label == 'notes' ? 3 : 0},
            ]}>
            <Pressable
              onPress={
                route.name == 'Main' || route.name == 'Sub' ? onPress : null
              }
              style={{
                backgroundColor: route.name == 'Add' ? BUTTONBGCOLOR : WHITE,
                borderRadius: 20,
              }}>
              <View style={styles.iconContainer}>
                <Icon
                  name={isFocused ? focusedIcon[route.name] : icon[route.name]}
                  size={30}
                  color={BLACK}
                />
                {isFocused && (
                  <EntypoIcon name={'dot-single'} size={20} color={BLACK} />
                )}
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: WHITE,
    borderRadius: 20,
    marginHorizontal: windowHeight * 0.025,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 1,
    borderColor: '#333B42',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});

export default TabBar;
