'use client'

import { Box, Container, Stack } from '@mantine/core'
import { TopicList } from '@/components/topics/TopicList'

export function HomePage() {
  return (
    <Stack flex={1} py={40} bg={'gray.2'}>
      <Box>
        <Container size='md'>
          <TopicList />
        </Container>
      </Box>
    </Stack>
  )
}

