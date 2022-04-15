export const pluralize = ({
  count,
  one,
  other,
}: {
  count: number
  one: string
  other: string
}): string => (count === 1 ? one : other)

export const sortDate = (a: string, b: string) => {
  a = a.split('-').join('')
  b = b.split('-').join('')

  return a.localeCompare(b)
}
