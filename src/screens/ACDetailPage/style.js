import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../styles/colors';
import {windowHeight, windowWidth} from '../../styles/mixins';

const ACDetailPageStyle = StyleSheet.create({
  backBtnContainer: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  btnContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 30,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  tempContainer: select => ({
    backgroundColor: select == 'temperature' ? BLACK : WHITE,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    width: '50%',
  }),
  staticsContainer: select => ({
    backgroundColor: select == 'temperature' ? WHITE : BLACK,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    width: '50%',
    alignSelf: 'flex-start',
  }),
  txtStyle: select => ({
    color: select == 'temperature' ? WHITE : BLACK,
    fontSize: 16,
    textAlign: 'center',
  }),
  staticTxtStyle: select => ({
    color: select == 'temperature' ? BLACK : WHITE,
    fontSize: 16,
    textAlign: 'center',
  }),
  sliderContainer: {
    height: windowHeight * 0.45,
    padding: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 30,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default ACDetailPageStyle;
