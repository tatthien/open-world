import dayjs from 'dayjs'

export function humanizeTime(time: string | Date) {
  const unit = 'second'
  const now = new Date()
  const diff = dayjs(time).diff(now, unit)
  const duration = dayjs.duration(diff, unit)
  return duration.locale('vi').humanize(true)
}
