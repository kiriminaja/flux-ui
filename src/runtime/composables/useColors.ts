import type { IButtonColorOption, IButtonHierarchy } from '../utils/general'
import {
  buttonFilled,
  buttonOutlineBase,
  buttonSpaceAll,
  buttonSpaceY,
  buttonTonal,
  buttonText
} from '../ui-config/button'

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
