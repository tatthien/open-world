import { humanizeTime } from '@/utils/humanizeTime'
import { Post } from '@/types'
import {
  Paper,
  Text,
  Flex,
  Stack,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core'
import Avatar from 'boring-avatars'
import Link from 'next/link'
import { IconMessage } from '@tabler/icons-react'

type PostItemProps = {
  item: Post
  fullContent?: boolean
}

export function PostItem({ item, fullContent = false }: PostItemProps) {
  const { _id, content, createdAt, commentCount } = item
  const theme = useMantineTheme()

  return (
    <Link
      href={`/posts/${item._id}`}
      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
    >
      <Paper withBorder radius={10} shadow="sm" p={16} h="100%">
        <Flex gap={10}>
          <Avatar
            name={_id}
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
            <Text
              c="dark.7"
              style={{ whiteSpace: 'pre-wrap' }}
              lineClamp={fullContent ? 0 : 3}
            >
              {content}
            </Text>
            <Flex align="center">
              <Flex align="center" gap={4}>
                <IconMessage size={20} color={getThemeColor('dark.3', theme)} />
                <Text color="dark.4" fw={500} size="sm" span>
                  {commentCount}
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
      </Paper>
    </Link>
  )
}
