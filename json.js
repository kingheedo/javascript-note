//JSON
// JavaScript Object Notation


// 1. Object to Json
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

const rabbit ={
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),

    jump: function() {
        console.log(`${this.name} can jump!`);
    },
    // jump () {
    //     console.log(`${this.name} can jump!`);
    // },
    // rabbit 객체에서 jump라는 메소드는 화살표 함수가 아닌 일반 함수로 선언해야 name에 접근이 가능해요! 
    // 객체의 메소드를 화살표 함수로 선언할 경우 this는 전역객체를 가르키기 때문에 window가 출력된대요!
};

json =JSON.stringify(rabbit);
console.log (json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
//rabbit이라는 object에 있는 프로퍼티를  배열에 집어 넣게 되면 해당하는 프로 퍼티만 json으로 변환할 수 있다.
console.log(json);
json = JSON.stringify(rabbit,(key, value) => {
    console.log(`key: ${key}, value : ${value}`);
    return key === 'name' ? "ellie" : value
})
console.log(json)
// 2.JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj =  JSON.parse(json,(key,value) => {
     console.log(`key: ${key}, value: ${value}`);
     return key === 'birthDate' ? new Date(value) : value;
})
console.log(obj);
rabbit.jump();
//rabbit이라는 object안에는 jump라는 함수가 포함되어 있다. 하지만 obj는 json을 object로 변환한 것인데.
//  이전에 json은 stringify 되었는데 이 과정에서 rabbit이라는 object의 jump라는 함수는 받지 못하게 된다. 따라서 
// json을 parse한 obj는 jump라는 함수가 없기 때문에 아래에서 obj.jump(); 를 실행하게 되면 오류가 발생하게 된다.
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());