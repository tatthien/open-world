import { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useGetPostQuery(id: string) {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: async (): Promise<Post> => {
      const res = await fetch(`/api/shares/${id}`)
      const json = await res.json()
      return json.data
    }
  })
}
