// file for common functions that are used across all project

export const formatLocalDate = date => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
  
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
  
    return [day, month, year].join('.');
  }

export const capitalize = arr => {
  const x = arr.map(item => {
    return item.charAt(0).toUpperCase() + item.slice(1)
  }).join(', ')
  return x
}
