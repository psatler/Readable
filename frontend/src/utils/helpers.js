import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export function capitalize (str = '') {
    return typeof str !== 'string'
      ? ''
      : str[0].toUpperCase() + str.slice(1)
  }


export const showTime = (unixTime) => {
        TimeAgo.locale(en);
        const timeAgo = new TimeAgo('en-US');
        return timeAgo.format(unixTime);
}