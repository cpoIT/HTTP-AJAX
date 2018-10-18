let bigBang = 0;

const bigBangTimer = timeMachine => {
  return new Promise((resolve, reject) => { 
  setTimeout(() => {
    resolve(bigBang += timeMachine);
    }, timeMachine);
  })
}

const parseTime = ms => {
  return new Promise((resolve, reject) => { 
    const timeString = ms / 1000;
    ms < 100 
    ? resolve(`${timeString} seconds have passed`)
    : reject(`ms too low`);
  })
}

console.log('before call', bigBang) // before call 0
bigBangTimer(500)
  .then(parseTime)
  .then(response => console.log(response))
  .catch(error => console.log(error));
console.log('after call', bigBang)  // after call 0

// let bigBang = 0;

// const bigBangTimer = timeMachine => {
//   return new Promise((resolve, reject) => { 
//   setTimeout(() => {
//     bigBang += timeMachine;
//       return bigBang < 1000 ? reject(bigBang): resolve(bigBang);
//     }, timeMachine);
//   })
// }
// console.log('before call', bigBang)
// bigBangTimer(1500)
//     .then(response => console.log('Resolved in', bigBang / 1000, 'second(s)'))
//     .catch(error => console.log('Error (aka bigBang):', error));
// console.log('after call', bigBang)