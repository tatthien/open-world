'use client'

import { useGetPostsQuery } from '@/hooks/useGetPostsQuery'
import { Text, Grid, Stack, Paper, Skeleton, Flex, getThemeColor, useMantineTheme } from '@mantine/core'
import { PostItem } from './PostItem'
import { IconMessageChatbotFilled } from '@tabler/icons-react'

export function PostList({ topicId }: { topicId: string }) {
  const { data: posts, isLoading } = useGetPostsQuery({ topicId })
  const theme = useMantineTheme()

  if (isLoading) {
    return (
      <Stack gap={16}>
        {[...new Array(8)].map((_, index) => (
          <Paper key={index} withBorder radius={10} shadow="sm" p={16} h="100%">
            <Flex gap={10}>
              <Skeleton circle w={40} h={40} style={{ flexShrink: 0 }} />
              <Stack gap={10} style={{ flex: 1 }}>
                <Stack gap={0}>
                  <Skeleton height={10} w={80} mb={4} />
                  <Skeleton height={10} w={100} />
                </Stack>
                <Skeleton height={10} width="80%" />
                <Skeleton height={10} width="90%" />
                <Skeleton height={10} width="60%" />
              </Stack>
            </Flex>
          </Paper>
        ))}
      </Stack>
    )
  }

  if (!posts || !posts.length) {
    return <Paper withBorder radius={10} shadow="sm" p={16}>
      <Stack align='center' gap={8}>
        <IconMessageChatbotFilled size={50} strokeWidth={1} color={getThemeColor('red.4', theme)} />
        <Text ta='center' c='dark.3' fz='sm'>Chưa có chia sẻ nào</Text>
      </Stack>
    </Paper>
  }

  return (
    <Grid gutter="16">
      {posts.map((post) => (
        <Grid.Col span={{ base: 12, sm: 12 }} key={post._id}>
          <PostItem item={post} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
