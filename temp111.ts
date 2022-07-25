// 返回最长子串
export function maxLengthBetweenEqualCharacters(s: string): number {
    // write code here
  const map: Map<string, number> = new Map();
  let max: number =  -1;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      max = Math.max(max, i - map.get(s[i]) - 1);
    } else {
      map.set(s[i], i);
    }
  }
  return max;
}

// maxLengthBetweenEqualCharacters("dd");

// 顺序输出从 1 到 n 位数的所有整数
function printNumbers(n: number): number[] {
  const str: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], temp: string[] = [''];
  const res: number[] = [];
  for(let i = 1; i <= n; i++) {
    printNumbersRecall(str, res, temp, i);
  }
  return res;
}

function printNumbersRecall(str: string[], res: number[], temp: string[], i: number) {
  if(i === 0) {
    res.push(+temp[0]);
    return;
  }
  let tempStr: string;
  for(let j = 0; j < 10; j++) {
    if(temp[0] === '' && j === 0) {
      continue;
    }
    tempStr = temp[0];
    temp[0] += str[j];
    printNumbersRecall(str, res, temp, i - 1);
    temp[0] = tempStr;
  }
}
// printNumbers(3);

interface Todo {
  title: string;
  description: string;
  compeleted: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'compeleted'>;
type temp = 1 extends number ? true: false;
type temp1 = keyof TodoPreview;
let a: temp = true;
let b: temp1 = 'title';

const  statusMap = {
  200: '操作成功',
  404: 'no file',
  500: '操作失败',
  10001: '操作失败'
}

console.log(statusMap[200]);

type status = keyof typeof statusMap;
let status1: status = 200;

interface Food {
  vegetables: string;
  weight: number;
}
let dinner: Food = {
  vegetables: 'noodles',
  weight: 20
}

interface Person {
  name: string;
  readonly age ?: number;
  [propName: string]: any,
}
let wutian: Person = {
  name: 'wutian',
  age: 25,
  gender: 'male'
}

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if(typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if(typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(e: Element, event: EventNames) {
  // do something
}
handleEvent(document.getElementById('hello'), 'click');

let tom: [number, string] = [1, 'test'];
tom.push('test2');

enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
console.log(Days[0] === "Sun");

interface barking {
  alert(): void;
}
interface light extends barking {
  lightOn(): void;
}
class Animals {
};
class Cat extends Animals implements light {
  constructor(parameters) {
    super();
  }
  alert(): void {
    console.log('Meow');
  }
  lightOn(): void {
    console.log('car light on.')
  }
}
class Dog implements light {
  alert(): void {
    console.log('woof')
  }
  lightOn(): void {
    console.log('dog light on.')
  }
}

class Point {
  static origin = new Point(0, 0);
  static distanceToOrigin(x: number, y: number): number {
    return Math.sqrt(x * x + y * y);
  }
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
interface Point3D extends Point {
  z: number;
}
let tempPoint: Point3D = { x: 1, y: 2, z: 3 };

function getArray<T = string>(len: number, value: T): Array<T> {
  return new Array(len).fill(value);
}
let tempArr: string[] = getArray(5, 'test');
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
swap([1, '1']);
interface LengthWise {
  length: number;
}
// 泛型约束，只允许传入包含 length 属性的变量
function printLength<T extends LengthWise>(data: T): void {
  console.log(data.length);
}
function copyFields<T extends U, U>(target: T, source: U): void{
  for (let i in source) {
    target[i] = (source as T)[i];
  }
}

