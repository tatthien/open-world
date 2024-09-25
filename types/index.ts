export type Post = {
  _id: string
  content: string
  createdAt: string
  status: 'published' | 'draft' | 'archived'
}

export type Comment = {
  _id: string
  content: string
  createdAt: string
}
