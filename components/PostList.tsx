import { useGetPostsQuery } from "@/hooks/useGetPostsQuery"
import { Loader, Text, Grid } from "@mantine/core"
import { PostItem } from "./PostItem"

export function PostList() {
  const { data: posts, isLoading } = useGetPostsQuery()
  if (isLoading) {
    return <Loader />
  }

  if (!posts || !posts.length) {
    return <Text>Chưa có chia sẻ nào</Text>
  }

  return (
    <Grid gutter="16">
      {
        posts.map((post) => (
          <Grid.Col span={{ base: 12, sm: 12 }} key={post.id}>
            <PostItem item={post} />
          </Grid.Col>
        ))
      }
    </Grid>
  )
}
