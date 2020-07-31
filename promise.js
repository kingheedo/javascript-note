'use strict';

// Promise is a JavaScript object  for asynchronous operation. 
// state: pending -> fulfilled or rejected
// Producer vs Consumer


// 1. Producer
//  Promise 만들기
// when new Promise if created, the executor runs  automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie'); 성공적
        reject(new Error('no network')); //실패일때
    }, 2000);
});

// 2.Consumer: then, catch, finally 를 이용해서 값을 받을 수 있다.

promise.then((value) =>{ //값이 정상적으로 수행되면  (promise가 return)
    console.log(value);
})
.catch(error =>{
    console.log(error);
})
.finally(()=> {// 어떤 기능을 마지막에 구현하고자 할때 resolve, reject에 상관없이 출력
    console.log('finally');
})

// 3. Promise chaining
const fetchNumber = new Promise((resolve, result) =>{
    setTimeout(() =>
        resolve(1),1000);
    });
    fetchNumber
    .then(num => num * 2 )
    .then(num => num * 3 )
    //다른 서버에 보내서 다른 숫자로 변환된 값을 받아 올 것이다.
    .then(num => {
        return new Promise((resolve,reject)=> {
            setTimeout(() => resolve(num - 1), 1000);
        });
        // then 은 값을 바로 전달 받을수도 있고 또 다른 비동기인 Promise를  전달하게 된다.
})
.then(num => console.log(num));

// 4. Error Handling

const getHen = () =>
     new Promise((resolve,reject) => {
         setTimeout(()=> resolve('닭'), 1000);
     });
const getEgg = hen =>
    new Promise((resolve,reject) => {
    setTimeout(()=> resolve(`${hen} => 계란`), 1000);
});
const cook = egg =>
    new Promise((resolve,reject) => {
    setTimeout(()=> resolve('${egg} => 계란후라이'), 1000);
});

getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
.then(getEgg)
.then(cook)
.then(console.log);