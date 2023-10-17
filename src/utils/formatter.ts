import moment from 'moment'

export function relativeDateFormatter(data: string) {
  return moment(data).fromNow()
}
