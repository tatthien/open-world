'use client'

import { Post } from '@/types'
import { Box, Stack, Container, Button, Paper, Text, Flex } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import Avatar from 'boring-avatars'
import { humanizeTime } from '@/utils/humanizeTime'
import { nanoid } from 'nanoid'
import { CommentSection } from '@/components/CommentSection'

export function PostDetailsPage({ post }: { post: Post }) {
  const router = useRouter()
  const { createdAt, content } = post

  return (
    <Stack flex={1} py={40} bg={'gray.2'}>
      <Box>
        <Container size="sm">
          <Button
            variant="transparent"
            color="dark"
            fw={500}
            leftSection={<IconArrowLeft size={18} />}
            mb={18}
            onClick={() => router.back()}
          >
            Quay lại
          </Button>
          <Paper withBorder radius={10} shadow="sm" p={20} h="100%" mb={28}>
            <Flex gap={14} mb={16}>
              <Avatar
                name={nanoid()}
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
              </Stack>
            </Flex>
            <Text c="dark.7" style={{ whiteSpace: 'pre-wrap' }}>
              {content}
            </Text>
          </Paper>
          <CommentSection entity={post._id} entityType="Post" />
        </Container>
      </Box>
    </Stack>
  )
}
