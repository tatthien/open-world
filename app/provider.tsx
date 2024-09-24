'use client'

import { theme } from '@/theme'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'


dayjs.extend(duration)
dayjs.extend(relativeTime)

const queryClient = new QueryClient()

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        {children}
        <Toaster position="top-right" />
      </MantineProvider>
    </QueryClientProvider>
  )
}
