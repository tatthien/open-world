import { Post } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useGetPostsQuery = ({ topicId }: { topicId: string }) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const res = await fetch(`/api/topics/${topicId}/posts`)
      const json = await res.json()
      return json.data
    },
  })
}
