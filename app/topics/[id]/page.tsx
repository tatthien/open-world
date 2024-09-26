import { redirect } from "next/navigation";
import { TopicDetailsPage } from "./components/TopicDetailsPage";

const fetchTopic = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/topics/${id}`,
  )
  const json = await res.json()
  return json.data
}

export default async function Page({ params }: { params: { id: string } }) {
  const topic = await fetchTopic(params.id)
  if (!topic) {
    redirect('/')
  }

  return (
    <TopicDetailsPage topic={topic} />
  )
}
