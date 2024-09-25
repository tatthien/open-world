import { Paper, Stack, Title } from '@mantine/core'
import { CommentList } from './CommentList'
import { CreateCommentForm } from './CreateCommentForm'

export function CommentSection({
  entity,
  entityType,
}: {
  entity: string
  entityType: string
}) {
  return (
    <Stack>
      <Title order={3} fw={600}>
        Bình luận
      </Title>
      <Paper withBorder radius={10} shadow="sm" p={20} mb={20}>
        <CreateCommentForm entity={entity} entityType={entityType} />
      </Paper>
      <CommentList entity={entity} entityType={entityType} />
    </Stack>
  )
}
