import { useGetCommentsQuery } from '@/hooks/useGetCommentsQuery'
import { Loader, Stack, Text } from '@mantine/core'
import { CommentItem } from './CommentItem'

export function CommentList({
  entity,
  entityType,
}: {
  entity: string
  entityType: string
}) {
  const { data: comments, isLoading } = useGetCommentsQuery(entity, entityType)

  if (isLoading) {
    return <Loader />
  }

  if (!comments || !comments.length) {
    return <Text>Chưa có bình luận nào</Text>
  }

  return (
    <Stack>
      {comments?.map((comment) => (
        <CommentItem
          key={comment._id}
          id={comment._id}
          content={comment.content}
          createdAt={comment.createdAt}
        />
      ))}
    </Stack>
  )
}
