import { z } from 'zod'
import { useForm } from '@mantine/form'
import { zodResolver } from 'mantine-form-zod-resolver'
import { Stack, Button, Flex, Textarea } from '@mantine/core'
import { useGetCommentsQuery } from '@/hooks/useGetCommentsQuery'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const schema = z.object({
  content: z
    .string()
    .min(1, { message: 'Nội dung chia sẻ không được để trống' }),
})

type FormData = z.infer<typeof schema>

export function CreateCommentForm({
  entity,
  entityType,
}: {
  entity: string
  entityType: string
}) {
  const { refetch } = useGetCommentsQuery(entity, entityType)

  const form = useForm<FormData>({
    mode: 'uncontrolled',
    initialValues: {
      content: '',
    },
    validate: zodResolver(schema),
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ content }: FormData) => {
      const res = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content, entity, entityType }),
      })
      const status = res.status
      const json = await res.json()
      if (status !== 200 && status !== 201) {
        throw new Error(json.message)
      }
    },
  })

  const handleSubmit = async ({ content }: FormData) => {
    try {
      await mutateAsync({ content })
      form.reset()
      refetch()
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong')
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap={12}>
        <Textarea
          label="Chia sẻ của bạn"
          description="Thông tin được đăng dưới trạng thái ẩn danh"
          autosize
          minRows={2}
          key={form.key('content')}
          {...form.getInputProps('content')}
        />
        <Flex justify="end">
          <Button type="submit" loading={isPending}>
            Bình luận
          </Button>
        </Flex>
      </Stack>
    </form>
  )
}
