type ValidateFieldsParams = {
  rating: number
  comment: string
}

export const validateFields = ({ rating, comment }: ValidateFieldsParams) => {
  return rating > 0 && comment.trim() !== ''
}
