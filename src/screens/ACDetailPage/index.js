import React, {useState} from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ACCard from '../../components/ACCard';
import CircleSlider from '../../components/CircularSlider';
import {BLACK, WHITE} from '../../styles/colors';
import {windowHeight, windowWidth} from '../../styles/mixins';
import ACDetailPageStyle from './style';

const ACDetailPage = ({navigation}) => {
  const [select, setSelect] = useState('temperature');
  const [value, setValue] = useState();
  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={false} />
      <View style={ACDetailPageStyle.backBtnContainer}>
        <Icon
          name="chevron-back"
          size={30}
          color={BLACK}
          onPress={() => navigation.goBack()}
        />
        <Icon name="md-settings-outline" size={23} color={BLACK} />
      </View>
      <View style={ACDetailPageStyle.btnContainer}>
        <Pressable
          onPress={() => setSelect('temperature')}
          style={ACDetailPageStyle.tempContainer(select)}>
          <Text style={ACDetailPageStyle.txtStyle(select)}>Temperature</Text>
        </Pressable>
        <Pressable
          onPress={() => setSelect('statics')}
          style={ACDetailPageStyle.staticsContainer(select)}>
          <Text style={ACDetailPageStyle.staticTxtStyle(select)}>Statics</Text>
        </Pressable>
      </View>
      <View style={ACDetailPageStyle.sliderContainer}>
        <CircleSlider
          value={value}
          dialRadius={150}
          textColor={'white'}
          startCoord={0}
          onValueChange={value => setValue(value)}
        />
      </View>
      <View style={ACDetailPageStyle.cardContainer}>
        <ACCard text={`${value}`} title={'Temperature'} />
        <ACCard text={'47%'} title={'Humidity'} />
      </View>
    </View>
  );
};
export default ACDetailPage;
