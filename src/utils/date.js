export default function timestampToDayMonthYear(timestamp) {
  if (!timestamp) return { day: 0, month: '', year: 0 }

  const date = new Date(timestamp * 1000)
  const formatter = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
  const parts = formatter.formatToParts(date)

  return parts.reduce((acc, part) => {
    if (part.type === 'day') acc.day = part.value
    else if (part.type === 'month') acc.month = part.value
    else if (part.type === 'year') acc.year = part.value
    return acc
  }, { day: 0, month: '', year: 0 })
}
