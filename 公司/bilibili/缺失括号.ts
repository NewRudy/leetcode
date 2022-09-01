// ac 60
let str = ')';

search(str);
function search(str: string) {
  let map: Map<string, string> = new Map();
  map.set('(', '),');
  map.set('[', '],');
  map.set('{', '},');
  map.set(')', '(,');
  map.set(']', '[,');
  map.set('}', '{,');
  let stack: string[] = [], top = -1, stackIndex: number[] = [], index;    // stackIndex 存储值
  for (let i = 0; i < str.length; i++) {
    if (top === -1 || str[i] === '[' || str[i] === '(' || str[i] === '{') {
      stack[++top] = str[i];
      stackIndex[top] = i;
    } else {
      if (str[i] === ')') {
        if (stack[top] === '(') {
          top--;
        } else {
          console.log(map.get(top > -1 ? stack[top] : ')'), i + 1);
          return;
        }
      } else if (str[i] === ']') {
        if (stack[top] === '[') {
          top--;
        } else {
          console.log(map.get(top > -1 ? stack[top] : ']'), i + 1);
          return;
        }
      } else if (str[i] === '}') {
        if (stack[top] === '{') {
          top--;
        } else {
          console.log(map.get(top > -1 ? stack[top] : '}'), i + 1);
          return;
        }
      }
    }
  }
  if (top != -1) {
    index = stackIndex[top] + 1;
    if (stack[top] === '(' || stack[top] === '[' || stack[top] === '{') {
      index++;
    }
    console.log(map.get(stack[top]), index);
  }
}
