import { Post } from "@/types"
import { useQuery } from "@tanstack/react-query"

export const useGetPostsQuery = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const res = await fetch('/api/shares')
      const json = await res.json()
      return json.data
    }
  })
}
