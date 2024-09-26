'use client'

import { useGetPostsQuery } from '@/hooks/useGetPostsQuery'
import { z } from 'zod'
import { useForm } from '@mantine/form'
import { zodResolver } from 'mantine-form-zod-resolver'
import { Stack, Button, Flex, Textarea } from '@mantine/core'

const schema = z.object({
  content: z
    .string()
    .min(1, { message: 'Nội dung chia sẻ không được để trống' }),
})

type FormData = z.infer<typeof schema>

export function CreatePostForm({ topicId }: { topicId: string }) {
  const { refetch } = useGetPostsQuery({ topicId })

  const form = useForm<FormData>({
    mode: 'uncontrolled',
    initialValues: {
      content: '',
    },
    validate: zodResolver(schema),
  })

  const handleSubmit = async ({ content }: FormData) => {
    await fetch(`/api/topics/${topicId}/posts`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    })

    form.reset()
    refetch()
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap={12}>
        <Textarea
          label="Chia sẻ của bạn"
          description="Thông tin được đăng dưới trạng thái ẩn danh"
          autosize
          minRows={2}
          styles={{ input: { fontSize: '1rem' } }}
          key={form.key('content')}
          {...form.getInputProps('content')}
        />
        <Flex justify="end">
          <Button type="submit">Gởi</Button>
        </Flex>
      </Stack>
    </form>
  )
}
