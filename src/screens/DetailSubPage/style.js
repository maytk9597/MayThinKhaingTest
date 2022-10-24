import {StyleSheet} from 'react-native';
import {detailTitleTxt, detainTxtColor} from '../../styles/colors';
import {windowHeight} from '../../styles/mixins';

const DetailSubPageStyle = StyleSheet.create({
  imgBgStyle: {
    height: windowHeight * 0.4,
    justifyContent: 'flex-end',
    padding: 20,
  },
  activityTxtStyle: {
    color: detailTitleTxt,
    fontSize: 30,
    fontWeight: '800',
    width: '70%',
  },
  numMonthStyle: {
    color: detainTxtColor,
    fontSize: 40,
    paddingBottom: 10,
    fontWeight: '600',
  },
  monthContainer: {
    borderTopColor: detainTxtColor,
    borderTopWidth: 1,
    alignSelf: 'flex-start',
  },
  monthTxtStyle: {
    color: detainTxtColor,
    fontSize: 30,
    paddingVertical: 10,
    fontWeight: '600',
  },
  eventContainer: {
    color: detainTxtColor,
    fontSize: 18,
    paddingBottom: 10,
  },
  txtContainer: {
    color: detainTxtColor,
    fontSize: 10,
    paddingBottom: 10,
  },
  locationContainer: {
    color: detainTxtColor,
    fontSize: 15,
    paddingBottom: 5,
    borderBottomColor: detainTxtColor,
    borderBottomWidth: 1,
  },
  location: {
    color: detainTxtColor,
    fontSize: 12,
    paddingBottom: 20,
    fontWeight: '800',
  },
  timeContainer: {
    color: detainTxtColor,
    fontSize: 15,
    paddingBottom: 5,
    borderBottomColor: detainTxtColor,
    borderBottomWidth: 1,
  },
  time: {
    color: detainTxtColor,
    fontSize: 12,
    paddingBottom: 20,
    fontWeight: '800',
  },
  backTxt: {
    color: detainTxtColor,
    fontSize: 15,
    paddingBottom: 5,
    borderBottomColor: detainTxtColor,
    borderBottomWidth: 1,
  },
});
export default DetailSubPageStyle;
