export interface IButtonColors {
    primary: string,
    secondary: string,
    tertiary: string,
    error: string,
    info: string,
    warning: string,
    success: string,
    black: string,
    white: string
}

export type IButtonHierarchy = 'filled' | 'tonal' | 'text' | 'outlined'
export type IButtonColorOption = 'primary' | 'secondary' | 'tertiary' | 'error' | 'info' | 'warning' | 'success' | 'black' | 'white'

export type IChipsSize = 'normal' | 'large' // ToDo: Implement
