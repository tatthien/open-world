import { humanizeTime } from '@/utils/humanizeTime'
import { Paper, Flex, Stack, Text } from '@mantine/core'
import Avatar from 'boring-avatars'

export function CommentItem({
  id,
  content,
  createdAt,
}: {
  id: string
  content: string
  createdAt: string
}) {
  return (
    <Paper withBorder radius={10} shadow="sm" p={16} h="100%">
      <Flex gap={10}>
        <Avatar
          name={id}
          variant="beam"
          size={40}
          style={{ flexShrink: 0 }}
          colors={['#5b1d99', '#0074b4', '#00b34c', '#ffd41f', '#fc6e3d']}
        />
        <Stack gap={10}>
          <Stack gap={0}>
            <Text c="dark.7" fz="sm" fw={500}>
              Ẩn danh
            </Text>
            <Text fz="sm" c="gray.8">
              {humanizeTime(createdAt)}
            </Text>
          </Stack>
          <Text c="dark.7" style={{ whiteSpace: 'pre-wrap' }}>
            {content}
          </Text>
        </Stack>
      </Flex>
    </Paper>
  )
}
