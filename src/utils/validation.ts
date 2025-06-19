export const validateFields = ({
  rating,
  comment,
}: { rating: number; comment: string }) => {
  return rating > 0 && comment.trim() !== ''
}
