import dayjs from "dayjs";

export function formatDate(d: string | Date, template = 'DD/MM/YYYY HH:mm') {
  return dayjs(d).format(template)
}
