import { CreatePostForm } from '@/components/CreatePostForm'
import { PostList } from '@/components/PostList'
import { Topic } from '@/types'
import { Box, Container, Paper, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'

export function TopicDetailsPage({ topic }: { topic: Topic }) {
  const { title, content, backgroundImage } = topic

  return (
    <Stack flex={1} py={40} bg={backgroundImage ? 'transparent' : 'gray.2'}>
      <Box style={{ zIndex: 1 }}>
        <Container size="sm">
          <Paper withBorder radius={10} shadow="lg" p={20} mb={20}>
            <Stack mb={16} gap={6}>
              <Title fz={24} fw={600}>
                {title}
              </Title>
              {content && <Text>{content}</Text>}
            </Stack>
            <CreatePostForm topicId={topic._id} />
          </Paper>
          <PostList topicId={topic._id} />
        </Container>
      </Box>
      {backgroundImage && (
        <>
          <Box style={{ position: 'absolute', zIndex: 0, inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
          <Image src={backgroundImage} alt={title} fill style={{ objectFit: 'cover', zIndex: -1 }} />
        </>
      )}
    </Stack>
  )
}
