import {StyleSheet} from 'react-native';
import { pixelRatio } from '../../theme/dimensions';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginTop: 0.6 * pixelRatio,
  },
  enterTaskContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    margin: 12,
    borderBottomWidth:1,
    borderBottomColor: '#ccc',
  }
});
