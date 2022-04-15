export const pluralize = ({
  count,
  one,
  other,
}: {
  count: number
  one: string
  other: string
}): string => (count === 1 ? one : other)
