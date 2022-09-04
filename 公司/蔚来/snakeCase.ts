snakeCase('Foo Bar');
function snakeCase(str: string): string {
  if (!str || str === '') {
    return '';
  }
  // str.trim();
  let tempStr: string[] = [], index: number[] = [], flag: boolean, temp = '';
  for (let i = 0; i < str.length;) {
    flag = false;
    while (!isDigit(str[i])) {
      flag = true;
      i++;
    }
    if (flag && temp != '') {
      tempStr.push(snakeCaseTemp(temp));
      temp = '';
    } else {
      temp += str[i];
    }
  }
  if (tempStr[0]) {
    tempStr[0] = tempStr[0][0].toLocaleLowerCase() + tempStr[0].slice(1,);
  }
  return tempStr.join('');
}
function isDigit(str: string): boolean {
  let temp = str[0].charCodeAt(0);
  if (temp >= 'a'.charCodeAt(0) && temp <= 'z'.charCodeAt(0) || temp >= 'A'.charCodeAt(0) || temp <= 'Z'.charCodeAt(0)) {
    return true;
  }
  return false;
}
function snakeCaseTemp(temp: string): string {
  if (!temp || temp === '') {
    return ''
  }
  let res = temp[0].toUpperCase();
  for (let i = 1; i < temp.length; i++) {
    res += temp[i].toLocaleLowerCase();
  }
  return res;
}
