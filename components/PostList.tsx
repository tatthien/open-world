import { useGetPostsQuery } from '@/hooks/useGetPostsQuery'
import { Text, Grid, Stack, Paper, Skeleton, Flex } from '@mantine/core'
import { PostItem } from './PostItem'

export function PostList() {
  const { data: posts, isLoading } = useGetPostsQuery()
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
    return <Text>Chưa có chia sẻ nào</Text>
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
