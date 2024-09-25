import { Comment } from '@/types'
import { useQuery } from '@tanstack/react-query'

export function useGetCommentsQuery(entity: string, entityType: string) {
  return useQuery({
    queryKey: ['comments', entity, entityType],
    queryFn: async (): Promise<Comment[]> => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/comments?entity=${entity}&entityType=${entityType}`,
      )
      const json = await res.json()
      return json.data
    },
  })
}
