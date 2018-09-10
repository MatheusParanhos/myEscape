import { Dimensions } from 'react-native'
export const deviceHeight = Dimensions.get('window').height
export const deviceWidth = Dimensions.get('window').width

export const colors = {
  primary: 'tomato',
  primaryHappy: '#4CAF50',
  secondary: '#ff583a',
  secondaryHappy: '#009688',
  error: '#F44336',
  darkGray: '#333338',
  gray:'gray',
  lightGray: '#afafaf',
  white:'white',
  gold: '#ff583a'
}

export const spacing = {
  unit: 8
}
var base = 16;

export const fontSize = {
  mega: base * 3,
  large: base * 2.5,
  big: base * 1.5,
  header: 18,
  primary: base,
  smaller: 14
}
export const fontWeight ={
  primary: '500',
  header: '600',
}

export const fontFamiliy ={
  primary: 'ProximaNova-Regular',
  primaryBold:'ProximaNova-Bold',
  type:'SweetMovementsPersonalUse' 

}