export function getFirstLetter(name?: string | null) {
  if (!name) return ''

  return name.trim().charAt(0).toUpperCase()
}

export function getFirstName(fullName?: string | null) {
  if (!fullName) return ''

  return fullName.trim().split(' ')[0]
}
