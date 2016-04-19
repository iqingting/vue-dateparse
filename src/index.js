var dateparse = {
  read (date, parseString) {
    if (typeof date !== 'object') {
      date = new Date(date)
    }

    if (date.toString() === 'Invalid Date') {
      return console.warn('Invalid Date. Check you input please.')
    }

    var dateMap = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    }

    for (var key in dateMap) {
      let value = dateMap[key]
      value = value < 10 ? `0${value}` : value
      dateMap[key] = value.toString()
    }

    var { year, month, day, hour, minutes, seconds } = dateMap

    if (typeof parseString !== 'string') {
      console.warn(`parseString need to be a String, but we get ${typeof parseString}`)
    }

    parseString = parseString
    .replace(/Y+/, ($0) => (year.substring(year.length, -$0.length)))
    .replace(/M+/, () => month)
    .replace(/d+/, () => day)
    .replace(/H+/, () => parseInt(hour) + 12)
    .replace(/h+/, () => hour)
    .replace(/m+/, () => minutes)
    .replace(/s+/, () => seconds)

    return parseString
  },
  write () {
  },
}

export default dateparse
