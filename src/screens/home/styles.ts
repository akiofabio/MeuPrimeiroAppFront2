import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  input: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 20,
    textAlign: 'left',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 10
  },
  content: {
    marginTop: 35,
    width: '100%',
    paddingHorizontal: 35
  },
  controlsbutons: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 35
  },
  controls: {
    marginTop: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: theme.colors.text,
    textAlign: 'left',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    marginStart: 20,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 15
  },
  imageShoppingCart: {
    marginEnd: 30
  },
  imageBaner: {
    width: '100%',
  },
  linha: {
    marginTop: 15,
    marginBottom: 15
  },
  subtitle: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 25,
    textAlign: 'left',
  },
  text: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center',
  },
  controlsProduto:{
    marginBottom:20
  },
  imageProduto:{
    marginBottom:5
  },
  produtoView:{
    marginTop: 15,
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal:20,
    width:150
  }
});