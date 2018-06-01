export function capitalize (str = '') {
    return typeof str !== 'string'
      ? ''
      : str[0].toUpperCase() + str.slice(1)
  }


// export const convertUnixTimeToDate = (unixTime) => {
//         const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//         const date = new Date(unixTime * 1000); //converting to milliseconds
//         const day = date.get    
//     return
// }