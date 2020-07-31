'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.

//  javascript는 동기적이다. 즉 코드 순서대로 실행된다.
//  호이스팅 이후에 코드 블럭을 실행한다.
//  hoisting : var, function declaration 선언들을 코드 맨위로 끌어올린다.

// 비동기는 코드가 언제 실행될지 예측이 불가능하다.

console.log('1');
setTimeout(() => {
    console.log('2');

}, 1000);
console.log('3');


// 콜백은 항상 비동기일때 사용 되는 것은 아니다.

// Synchronous callback    즉각적으로 동기적으로

function printImmediately(print){ //호이스팅에 의해 함수선언이 맨위로 올라간다.
    print();
} 

printImmediately(()=> console.log('hello'));
// Asynchronous callback    언제 실행될지 모르는

function printWithDelay(print,timeout){
     setTimeout(print,timeout);
     };
 printWithDelay(() => console.log('async callback'),2000);


// Callback Hell example

class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(() => {
            if(
                (id ==='ellie' && password === 'dream') ||
                (id ==='coder' && password === 'academy')
            ){
                    onSuccess(id);
                  } else{
                    onError(new Error('not found'));
                }
        }, 2000);
    }
    getRoles(user,onSuccess, onError){
        setTimeout(() => {
            if(user ==='ellie'){
                onSuccess({name: 'ellie', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {console.log(error)} 
            )
    },
    error =>{console.log(error)})
