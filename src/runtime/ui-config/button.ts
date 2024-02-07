import type {IButtonColors} from "../utils/general";

export const buttonSpaceX = 'px-5'
export const buttonSpaceY = 'py-3'
export const buttonSpaceAll = buttonSpaceX + ' ' + buttonSpaceY
export const buttonFilled = {
    primary: 'bg-flux-primary text-flux-onPrimary',
    secondary: 'bg-flux-secondary text-flux-onSecondary',
    tertiary: 'bg-flux-tertiary text-flux-onTertiary',
    error: 'bg-flux-error text-flux-onError',
    warning: 'bg-flux-warning text-flux-onWarning',
    info: 'bg-flux-info text-flux-onInfo',
    success: 'bg-flux-success text-flux-onSuccess',
    black: 'bg-flux-onBackground text-flux-background',
    white: 'bg-flux-background text-flux-onBackground',
} as IButtonColors

export const buttonTonal = {
    primary: 'bg-flux-primaryContainer text-flux-primary',
    secondary: 'bg-flux-secondaryContainer text-flux-secondary',
    tertiary: 'bg-flux-tertiaryContainer text-flux-tertiary',
    error: 'bg-flux-errorContainer text-flux-error',
    warning: 'bg-flux-warningContainer text-flux-warning',
    info: 'bg-flux-infoContainer text-flux-info',
    success: 'bg-flux-successContainer text-flux-success',
    black: 'bg-flux-onBackground text-flux-background',
    white: 'bg-flux-background text-flux-onBackground',
} as IButtonColors

export const buttonOutlineBase = 'border border-flux-outline'
export const buttonText = {
    primary: 'text-flux-primary',
    secondary: 'text-flux-secondary',
    tertiary: 'text-flux-tertiary',
    error: 'text-flux-error',
    warning: 'text-flux-warning',
    info: 'text-flux-info',
    success: 'text-flux-success',
    black: 'text-flux-background',
    white: 'text-flux-onBackground',
} as IButtonColors
