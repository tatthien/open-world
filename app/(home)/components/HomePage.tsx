'use client'

import {
  Box,
  Container,
  Paper,
  Stack,
  Title,
} from '@mantine/core'
import { PostList } from '@/components/PostList'
import { CreatePostForm } from '@/components/CreatePostForm'


export function HomePage() {
  return (
    <Stack flex={1} py={40} bg={'gray.2'}>
      <Box>
        <Container size='sm'>
          <Paper withBorder radius={10} shadow='sm' p={20} mb={20}>
            <Title fz={24} fw={600} mb={16}>Tên chủ đề</Title>
            <CreatePostForm />
          </Paper>
          <PostList />
        </Container>
      </Box>
    </Stack>
  )
}


