import { Button, createTheme } from '@mantine/core'
import { Inter } from 'next/font/google'
import { colors } from './colors'

const inter = Inter({ subsets: ['latin'] })

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  primaryColor: 'red',
  primaryShade: 5,
  black: 'dark',
  defaultRadius: 8,
  colors,
  components: {
    Button: Button.extend({
      defaultProps: {
      },
    }),
  },
})
