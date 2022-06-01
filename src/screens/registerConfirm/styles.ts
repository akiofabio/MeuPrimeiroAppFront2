import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  label: {
    color: theme.colors.secondary85,
    fontFamily: theme.fonts.text500,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 20,
    textAlign: 'left',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginBottom: 25,
    marginTop: 5
  },
  content: {
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 35,
    alignItems: 'center'
  },
  controlsbutons: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 35,
    position:'absolute',
    bottom:20
    
  },
  controls: {
    marginTop: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5
  },
  title: {
    color: theme.colors.secondary100,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 15
  },
  linha: {
    marginTop: 15,
    marginBottom: 15
  },
  subtitle: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 30,
  },
  image:{
    marginTop: 80,
    width: '100%',
    height: 360,
  }
})