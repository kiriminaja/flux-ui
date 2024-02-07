import {
  buttonFilled,
  buttonOutlineBase,
  buttonSpaceAll,
  buttonSpaceY,
  buttonTonal,
  buttonText,
  type IButtonColorOption,
  type IButtonHierarchy
} from '../flux-config/button'

export const useButtonColor = (color: IButtonColorOption, hierarchy: IButtonHierarchy) => {
  switch (hierarchy) {
    case 'filled':
      return buttonFilled[color] + ' ' + buttonSpaceAll
    case 'tonal':
      return buttonTonal[color] + ' ' + buttonSpaceAll
    case 'text':
      return buttonText[color] + ' ' + buttonSpaceY
    case 'outlined':
      return buttonText[color] + ' ' + buttonSpaceAll + ' ' + buttonOutlineBase
  }
}
