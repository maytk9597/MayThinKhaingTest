import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
} from 'react-native';
import {View} from 'react-native';
import {
  BLACK,
  BLACkwithOpacity,
  detailTitleTxt,
  WHITE,
} from '../../styles/colors';
import {subPageData, windowHeight, windowWidth} from '../../styles/mixins';
import SubPageStyle from './style';
const SubPage = ({navigation}) => {
  const handleOnPress = item => {
    navigation.navigate('Detail Sub Page', item);
  };
  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <FlatList
        data={subPageData}
        renderItem={({item, index}) => {
          return (
            <Pressable onPress={() => handleOnPress(item)}>
              <ImageBackground
                source={item.src}
                style={SubPageStyle.imgBackground}>
                <View style={SubPageStyle.mainContainer}>
                  <Text style={SubPageStyle.monthNumContainer}>{item.id}</Text>
                  <Text style={SubPageStyle.monthContainer}>{item.month}</Text>
                  <Text style={{color: detailTitleTxt}}>{item.event}</Text>
                  <Pressable
                    onPress={() => handleOnPress(item)}
                    style={SubPageStyle.pressContainer}>
                    <Text style={{fontSize: 12}}> More Details</Text>
                  </Pressable>
                </View>
              </ImageBackground>
            </Pressable>
          );
        }}
      />
    </View>
  );
};
export default SubPage;
