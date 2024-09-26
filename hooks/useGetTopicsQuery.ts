import { Topic } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useGetTopicsQuery = () => {
  return useQuery({
    queryKey: ['topics'],
    queryFn: async (): Promise<Topic[]> => {
      const res = await fetch('/api/topics')
      const json = await res.json()
      return json.data
    },
  })
}
