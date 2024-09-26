import { useGetTopicsQuery } from "@/hooks/useGetTopicsQuery"
import { TopicItem } from "./TopicItem"
import { Grid } from "@mantine/core"

export function TopicList() {
  const { data, isLoading } = useGetTopicsQuery()

  if (isLoading) {
    return 'Loading topics...'
  }

  if (!data || !data.length) {
    return 'Chưa có chủ đề nào'
  }

  return (
    <Grid gutter="16">
      {data.map((topic) => (
        <Grid.Col span={{ base: 12, sm: 6 }} key={topic._id}>
          <TopicItem item={topic} />
        </Grid.Col>
      ))}
    </Grid>
  )
}


