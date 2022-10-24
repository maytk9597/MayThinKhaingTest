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
import UsageCard from '../../components/usageCard';
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
import {
  dataSource,
  fetchTotalUsageAPI,
  transformDataForBarChart,
} from '../../utils';
import MainPageStyle from './style';

const MainPage = ({navigation}) => {
  const [data, setData] = useState(dataSource);
  const [total, setTotal] = useState(0);
  const toggleSwitch = (value, index) => {
    const newData = [...data];
    newData[index].switch = value;
    setData(newData);
  };
  const fetchTotalUsageData = async () => {
    await fetchTotalUsageAPI('2022-10-23').then(data => {
      {
        setTotal(data[0].total);
      }
    });
  };
  useEffect(() => {
    fetchTotalUsageData();
  }, []);
  return (
    <SafeAreaView>
      <StatusBar translucent={false} />
      <ProfileInfo />
      <View style={MainPageStyle.usageCardContainer}>
        <View style={MainPageStyle.usageContainer}>
          <Text style={{paddingHorizontal: 10}}>Total Usage</Text>
          <Text style={MainPageStyle.amountContainer}>{total}kw</Text>
        </View>
        <UsageCard />
      </View>
      <View style={MainPageStyle.mainContainer}>
        <Text style={MainPageStyle.titleContainer}>Smart Devices</Text>
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
