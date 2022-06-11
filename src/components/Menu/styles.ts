import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary100,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu:{
    color: theme.colors.secondary100,
    margin: 10
  },
  icon: {
    width: 24,
    height: 18
  }
});