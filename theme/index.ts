import { Button, Container, createTheme, rem, Textarea, TextInput } from '@mantine/core'
import { Inter } from 'next/font/google'
import { colors } from './colors'

import '@mantine/core/styles.css'

import inputStyles from './input.module.css'

const inter = Inter({ subsets: ['latin'] })

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(640),
  md: rem(768),
  lg: rem(1024),
  xl: rem(1280),
  xxl: rem(1536),
}

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  primaryColor: 'red',
  primaryShade: 5,
  black: 'dark',
  defaultRadius: 8,
  colors,
  components: {
    Button: Button.extend({
      defaultProps: {},
    }),
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    TextInput: TextInput.extend({
      classNames: {
        description: inputStyles.description,
        input: inputStyles.input,
      }
    }),
    Textarea: Textarea.extend({
      classNames: {
        description: inputStyles.description,
        input: inputStyles.input,
      }
    })
  },
})
