export const prepareDate = (data: { date: string; count: number }[]) => {
  const temp: Record<string, Record<string, number>> = {}

  data.forEach(({ date, count }) => {
    const [year, month, day] = date.split('-')

    const dayString = Number(day).toString()

    if (!temp[`${year}-${month}`]) temp[`${year}-${month}`] = {}

    temp[`${year}-${month}`][dayString] = count
  })

  return temp
}
