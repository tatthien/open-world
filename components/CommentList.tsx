import { useGetCommentsQuery } from '@/hooks/useGetCommentsQuery'
import { Flex, Paper, Skeleton, Stack, Text } from '@mantine/core'
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
    return (
      <Stack gap={16}>
        {[...new Array(8)].map((_, index) => (
          <Paper key={index} withBorder radius={10} shadow="sm" p={16} h="100%">
            <Flex gap={10}>
              <Skeleton circle w={40} h={40} style={{ flexShrink: 0 }} />
              <Stack gap={10} style={{ flex: 1 }}>
                <Flex gap={8}>
                  <Skeleton height={10} w={80} mb={4} />
                  <Skeleton height={10} w={100} />
                </Flex>
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
