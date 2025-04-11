const m = '9';
const time = new Date().toLocaleTimeString();
pd = m.padStart(2, '0');
tm = time.padStart(2, '0');
console.log(` ${pd}`)
console.log(` ${tm}`)