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
                style={{
                  height: windowHeight * 0.4,
                  width: windowWidth,
                  resizeMode: 'contain',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '30%',
                    backgroundColor: BLACkwithOpacity,
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      color: detailTitleTxt,
                      fontSize: 40,
                      fontWeight: 'bold',
                    }}>
                    {item.id}
                  </Text>
                  <Text
                    style={{
                      color: detailTitleTxt,
                      fontSize: 25,
                      marginVertical: 10,
                    }}>
                    {item.month}
                  </Text>
                  <Text style={{color: detailTitleTxt}}>{item.event}</Text>
                  <Pressable
                    onPress={() => handleOnPress(item)}
                    style={{
                      marginTop: 15,
                      padding: 3,
                      backgroundColor: 'grey',
                      borderRadius: 6,
                    }}>
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
