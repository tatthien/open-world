import { PostDetailsPage } from './components/PostDetailsPage'
import { redirect } from 'next/navigation'

const fetchPost = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/shares/${id}`,
  )
  const json = await res.json()
  return json.data
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id)
  if (!post) {
    redirect('/')
  }
  return <PostDetailsPage post={post} />
}
