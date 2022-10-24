import {StyleSheet} from 'react-native';
import {BLACkwithOpacity, detailTitleTxt} from '../../styles/colors';
import {windowHeight, windowWidth} from '../../styles/mixins';

const SubPageStyle = StyleSheet.create({
  imgBackground: {
    height: windowHeight * 0.4,
    width: windowWidth,
    resizeMode: 'contain',
  },
  mainContainer: {
    height: '100%',
    width: '30%',
    backgroundColor: BLACkwithOpacity,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  monthNumContainer: {
    color: detailTitleTxt,
    fontSize: 40,
    fontWeight: 'bold',
  },
  monthContainer: {
    color: detailTitleTxt,
    fontSize: 25,
    marginVertical: 10,
  },
  pressContainer: {
    marginTop: 15,
    padding: 3,
    backgroundColor: 'grey',
    borderRadius: 6,
  },
});
export default SubPageStyle;
