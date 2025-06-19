export type Review = {
  id: string
  rating: number
  comment: string | null
  updatedAt: Date
  user?: {
    name: string | null
    id: string
    image: string | null
  }
  technology?: {
    name: string
  }
}
