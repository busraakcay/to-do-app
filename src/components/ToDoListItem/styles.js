import {StyleSheet} from 'react-native';
import {pixelRatio, width} from '../../theme/dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 12,
  },
  input: {
    width: width * 0.65,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    marginRight: 5,
  },
  deleteButton: {
    marginRight: 5,
  },
  doneButton: {},
});
