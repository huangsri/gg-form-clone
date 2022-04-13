import React from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'

import theme from './theme'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = (props: Props) => {
  const { children } = props

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}

export * from './createEmotionCache'
export { default } from './theme'
