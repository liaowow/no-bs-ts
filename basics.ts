let userName: string = 'Annie';
let hasLoggedIn: boolean = true;

userName += 'user';

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ');
const myValues: Array<number> = [1];

interface Person {
  first: string;
  last: string;
}

const myPerson: {
  first: string;
  last: string;
} = {
  first: 'John',
  last: 'Doe',
}

const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
}

ids[30] = 'c'

if (ids[30] === 'd') {
}

for (let i = 0 ; i < 10; i++) {
  console.log(i);
}

[1,2,3].forEach(v => console.log(v));