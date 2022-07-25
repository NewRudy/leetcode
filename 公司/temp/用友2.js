/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串
 * @return string字符串
 */
getDayforWeek('2018-1-01')
function getDayforWeek(str) {
  // write code here
  let year, month, day;
  [year, month, day] = str.split('-');
  let days = getDays(+year, +month, +day);
  let week = getWeek(+(year.slice(0, -2)), +(year.slice(-2, )), +month, +day);
  console.log(days + '(' + week + ')');
}

function getDays(year, month, day) {
  const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 不是闰年的每月的天数
  let res = 0;
  for (let i = 0; i < month - 1; i++) {
    res += monthDay[i];
  }
  res += day;
  if(isRunYear(year) && month > 2) {
    res += 1;
  }
  return res;
}

function isRunYear(year) {
  if ((year >= 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
}
function getWeek(century, year, month, day) {
  let temp = year + Math.floor(year / 4) + Math.floor(century / 4) - 2 * century + Math.floor((26 * (month + 1)) / 10) + day - 1
  while (temp < 0) {
    temp += 7;
  }
  let res;
  switch (temp % 7) {
    case 0:
      res = 'Sunday';
      break;
    case 1:
      res = 'Monday';
      break;
    case 2:
      res = 'Tuesday';
      break;
    case 3:
      res = 'Wednesday';
      break;
    case 4:
      res = 'Thursday';
      break;
    case 5:
      res = 'Friday';
      break;
    case 6:
      res = 'Saturday';
      break;
    default:
      break;
  }
  return res;
}

module.exports = {
  getDayforWeek: getDayforWeek,
}
