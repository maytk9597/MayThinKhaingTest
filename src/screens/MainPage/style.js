import {StyleSheet} from 'react-native';
import {BLACK, txtColor, UsageCARD, WHITE} from '../../styles/colors';
import {windowHeight} from '../../styles/mixins';

const MainPageStyle = StyleSheet.create({
  usageCardContainer: {
    height: windowHeight * 0.27,
    backgroundColor: UsageCARD,
  },
  usageContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItem: 'center',
    alignContent: 'center',
  },
  amountContainer: {
    backgroundColor: BLACK,
    borderRadius: 20,
    color: WHITE,
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  titleContainer: {color: txtColor, fontSize: 25, padding: 5},
  mainContainer: {paddingHorizontal: 10, paddingVertical: 10},
});

export default MainPageStyle;
