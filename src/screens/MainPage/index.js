import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Switch,
  Text,
} from 'react-native';
import {Dimensions, SafeAreaView, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ComponentCard from '../../components/componentCard';
import ProfileInfo from '../../components/profileInfo';
import {
  BLACK,
  cardBackground,
  cardWhiteBackground,
  switchOff,
  switchOn,
  switchTrackColor,
  txtColor,
  UsageCARD,
  WHITE,
} from '../../styles/colors';
import {windowHeight, windowWidth} from '../../styles/mixins';
import {dataSource, transformDataForBarChart} from '../../utils';

const MainPage = ({navigation}) => {
  const [data, setData] = useState(dataSource);
  const toggleSwitch = (value, index) => {
    const newData = [...data];
    newData[index].switch = value;
    setData(newData);
  };
  return (
    <SafeAreaView>
      <StatusBar translucent={false} />
      <ProfileInfo />
      <View
        style={{
          height: windowHeight * 0.27,
          backgroundColor: UsageCARD,
        }}></View>
      <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <Text style={{color: txtColor, fontSize: 25, padding: 5}}>
          Smart Devices
        </Text>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <ComponentCard
              item={item}
              onValueChange={value => toggleSwitch(value, index)}
              navigation={navigation}
            />
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};
export default MainPage;
