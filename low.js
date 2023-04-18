//Boolean

// const name = 'mike';
// const age = '30';

// console.log(name == 'mike')
// console.log(age > 40)

// null과 undefinde

// let user;
// console.log(user)

// let u1 = null;
// console.log(u1)

// typeof 연산자

// const name = 'mike';

// console.log(typeof 3);
// console.log(typeof 1.1);
// console.log(typeof name);
// console.log(typeof true);
// console.log(typeof 'xxx');
// console.log(typeof null); // object 는 객체형인데 객체가 아님(초기버전의 오류)
// console.log(typeof undefined);

// //합치기
// const name = 'mike';
// const a = '나는 ';
// const b = '살 입니다.';
// const c = 10; 

// console.log(a+c+b); //숫자와 문자를 더하면 문자열로 변환됨

// 프롬포트
// const name = prompt('이름을 입력하세요');
// 메세지를 보여줌(확인버튼을 누르면 닫힘)
// alert(`환영합니다 ${name}님.`)
// alert('환영합니다,' + name + '님');

// prompt 사용자에게 입력받을 수 있는 메세지 보여줌(입력받을 수 있음, 1번째는 메세지 2번째는 default)
// const name = prompt('예약일을 입력해 주세요', '2020-10-31');
// console.log(name);
// alert(`${name} 예약이 완료되었습니다`);

// confirm 사용자에게 확인 받는것
// const isAdult = confirm('당신은 성인이 맞습니까?');
// console.log(isAdult)

// 단점
// 스크립트 일시정지
// 스타일링 X

// 자동형변환
// prompt로 입력받으면 문자열로 받는다 나누기를 할경우 자동으로 숫자형으로 변환됨
// const mathScore = prompt('수학점수 몇점?');
// const engScore = prompt('영어점수 몇점?');
// const result = mathScore + engScore / 2;
// console.log(result)

//명시적형변환
//문자형으로 변환
// console.log(
//     String(3),
//     String(true),
//     String(false),
//     String(null),
//     String(undefined)
// )
// 숫자형으로 변환
// console.log(
//     Number('1234'),
//     Number('aa11123'),
//     Number(true),
//     Number(false)
// )
// ** Number(null) // 0
//    Number(undefined) // NaN
//    Number(0) // False
//    Number('0') // True
//    Number('') // false
//    Number(' ') // True

// 자료형을 Boolean형으로 변환
// console.log(
//     Boolean('1234'), //true
//     Boolean(1), // true

//     Boolean(''), //false
//     Boolean(null), //false
//     Boolean(undefined), //false
//     Boolean(NaN) //false
// )

// 증가 연산자, 감소 연산자
// let num = 10;
// let result = ++num; 1씩증가
// console.log(result);

// 일치연산자 <타입까지 비교 가능>
// let a = 1;
// let b = '1';
// console.log( a == b) .  True

// let a = 1;
// let b = '1';
// console.log( a === b) . False

//조건문
// const age = 19;

// if(age > 19) {
//     console.log('환영합니다');
// } else if (age === 19) {
//     console.log('수능 잘 치세요')
// } else {
//     console.log('안녕히 가세요')
// }
// // 위 코드는 else를 활용한 코드
// // if(age <= 19) {
// //     console.log('안녕히 가세요');
// // }

// console.log('----------------------')

//논리연산자 ||(or), &&(and), !(not)

// or는 모든값중 한가지라도 true 경우 true를 반환
// and는 모든값이 true 경우 true를 반환
// not은 ture false를 반대값으로 바꿔줌
// and가 or보다 먼저
//이름이 톰이거나 성인이면 통과
// const name = ('mike');
// const age = (30);
// // ||(or)
// // if(name === 'tom' || age > 19) {
// //     console.log('통과');
// // }
// // &&(and)
// if(name === 'mike' && age > 19) {
//     console.log('통과');
// } else { console.log('통과X');}

// const age = prompt('나이가?');
// const isAdult = age > 19;
// if(!isAdult ){
//   console.log('돌아가..');
// } else{
//   console.log('환영합니다');
// }
// console.log('--------------------');

// 남자이고 , 이름이 mike 이거나 성인이면 통과
// const gender = 'F';
// const name = 'mike';
// const isAdult = true;
// // 첫번째 코드는 '통과'
// // 이유 : gender와 name이 우선순위로 평가되고 isAdult가 나중에 or로 평가되서
// if(gender === 'M' && name === 'mike' || isAdult){
//     console.log('통과');
// } else {
//     console.log('돌아가');
// }

// // 두번째 코드 우리가 원하는 결과를 얻으려면
// // 성별먼저 판단한 후 이름과 성인인지 판단
// if (gender === 'M' && (name === 'mike' || isAdult)){
//     console.log('통과');
// } else {
//     console.log('돌아가');
// }

//반복문 loop(for)
// for 문은 ;으로 구분되면 3부분으로 나눌 수 있음
// for(let i = 0 <초기값>; i < 10<조건>;, i++<코드실행 후 작업>)
// 정리 : i 가 10보다 작으므로 +1 해주고 반복

// 1 부터 10까지 로그
// for(let i = 0; i <10; i ++){
//     console.log(i);
// }

// // while
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
//     console.log('다시')
// }
// 정확한 횟수가 정해저 있다면 for 그렇지 않다면 while을 추천
// do while은 사용 빈도 낮음
// do.... while
// let i = 0 ;
// do {
//     //코드실행
//     i++;
// } while (i<10)

// break : 멈추고 빠져나옴
// continue : 멈추고 다음반복으로 진행

// while(true){
//     let answer = confirm('계속할까요?');
//     if(!answer) {
//         break;
//     }
// } <확인을 누른다면 무한반복>

// continue <짝수만>
// for(let i = 0; i < 10; i ++){
//     if(i%2){
//         continue;
//     }
//     console.log(i)
// }

// switch(if else로 작성 가능)
// 여러가지 케이스일경우 간결하게 작성가능

// switch(평가){
//     case A :
//         A일때 코드
//     case B:
//         B일때 코드
// }

// 사고싶은 과일 물어보고 가격 알려주기
// const 사과 = 100;
// const 바나나 = 200;
// const 키위 = 300;
// const 멜론 = 500;
// const 수박 = 500;

// const wish = prompt('가격을 확인하고 싶은 과일을 입력하세요');
// switch(wish) {
//     case '사과' : 
//     console.log(사과 + '원 입니다');
//     break;
//     case '바나나' : 
//     console.log(바나나 + '원 입니다');
//     break;
//     case '키위' : 
//     console.log(키위 + '원 입니다');
//     break;
//     case '멜론' : 
//     console.log(멜론 + '원 입니다');
//     break;
//     case '수박' : 
//     console.log(수박 + '원 입니다');
//     break;
//     // 만약 같은 가격의 과일이 온다면??
//     // case '수박' :
//     // case '멜론' :
//     // console.log('500원 입니다')
//     default : // <없는 과일을 입력했을경우>
//     console.log('그런과일은 없습니다')
//}


// 사고싶은 과일 물어보고 가격 알려주기
// const 사과 = 100;
// const 바나나 = 200;
// const 키위 = 300;
// const 멜론 = 500;
// const 수박 = 500;

// const wish = prompt('가격을 확인하고 싶은 과일을 입력하세요');
// switch(wish) {
//     case '사과' : 
//     console.log(사과 + '원 입니다');
//     conosle.log(`${사과} 원 입니다.`)
//     break;
//     case '바나나' : 
//     console.log(바나나 + '원 입니다');
//     break;
//     case '키위' : 
//     console.log(키위 + '원 입니다');
//     break;
//     case '멜론' : 
//     console.log(멜론 + '원 입니다');
//     break;
//     case '수박' : 
//     console.log(수박 + '원 입니다');
//     break;
//     // 만약 같은 가격의 과일이 온다면??
//     // case '수박' :
//     // case '멜론' :
//     // console.log('500원 입니다')
//     default : // <없는 과일을 입력했을경우>
//     console.log('그런과일은 없습니다')
//}


//함수(function)
// function showError(){
//     alert ('에러가 발생했습니다. 다시 시도해주세요');
// }
// showError()

// function sayhello(name){
//     const msg = `hello, ${name}`;
//     console.log(msg);
// }

// sayhello('mike')
// sayhello('jun')

// function sayhello(name){
//     let msg = 'hellow';
//     if (name){
//         msg += `, ${name}`;
//     }
//     console.log(msg);
// }
// sayhello('Mike');
// sayhello('kim');

// let msg = 'hellow'; // 전역변수 (global varable)
// console.log('함수호출전');
// console.log(msg);

// function sayhello(name){

//     if (name){
//         msg += `, ${name}`;
//     }
//     console.log('함수내부');
//     // 지역변수 (local varable)
//     console.log(msg);
// }

// sayhello('Mike');
// console.log('함수 호출 후');
// console.log(msg);

// 전역변수 지역변수 
// let mag = 'welcome';
// console.log(mag)

// function sayhello(name){
//     let msg = 'hello'
//     console.log(msg + ' ' + name);
// }
// sayhello('mike');
// console.log(mag)

// let name = 'Mike';

// function say(name){
//     console.log(name)
// }

// say();
// say('jane');

// or를 활용
// function sayhello(name){
//     let newname = name || 'friend';
//     let mag = `hello, ${newname}`;
//     console.log(mag)
// }

// sayhello()
// sayhello('jane')

//default value

// function sayhello(name = 'friend'){ //name이 없을때 friend
//     let mag = `hello, ${name}`;
//     console.log(mag)
// }

// sayhello()
// sayhello('jane')

//retrun 으로 값 반환
// function add(num1, num2){
//     return num1 + num2;
// }

// const result = add(2,3);
// console.log(result)

// function showError(){
    //  alert('에러가발생했습니다.');
    //  return;
    //  alert('이코드는 절때 실행되지 않습니다')
    // }
    // const result = showError();
    // console.log(result);
//}

//함수 선언문 vs 함수 표현식
// 함수 표현식보다는 선언문이 더 자유로움
// 함수 선언문 : 어디서든 호출 가능, 
// 자바스크립트는 코드 실행 전 모든함수 선언해둠
// 호이스팅 : 선언된 함수의 모임, 함수가 가장위로 올라가서 가장먼저 선언됨
// sayhello();
// function sayhello(){
//     console.log('hello');
// }

// 함수표현식 : 코드에 도달하면 생성
// let sayhello = function(){
//     console.log('hello');
// }
// sayhello();

// 화살표 함수
// let add = function(num1, num2){
//     return num1 + num2;
// }
// // function 생략 가능
// let add = (num1, num2) => {
//     return num1 + num2
// }
// // 리턴문에 괄호 중괄호로 바꾸기 가능
// let add = (num1, num2) => (
//     num1 + num2
// )

// //리턴문이 한줄일경우 괄호 생략가능
// let add = (num1, num2) =>  num1 + num2

// // 인수가 한개여도 생략가능
// let sayhello = name => `hello, ${name}`;

//인수가 없거나 여러개일경우 일반괄호 사용불가

// showError();

// function showError(){
//     console.log('error')
// }

// let showError = () => console.log('error');
// showError();

//화살표 함수 실습

// const sayhello = function (name) {
//     const msg = `hello, ${name}`;
//     console.log(msg);
// };
// sayhello('mike')

// const sayhello = (name) => {
//     const msg = `hello, ${name}`;
//     console.log(msg);
// };
// sayhello('mike')

// const add = function(num1, num2) {
//     const result = num1 + num2;
//     return result;
// }

// const add = (num1, num2) => num1 + num2;

// object(객체)

// const superman = {
//     name : 'clark',
//     age : 33,
// }

// //접근
// superman.name; //'clark'  . 접근
// superman[age]; //33 대괄호 접근

// //추가
// superman.gender = 'male'; //.으로 추가
// superman['hairColor'] = 'black'; //대괄호 추가

// //삭제
// delete superman.hairColor;

// // object - 단축프로퍼티

// const name = 'clark';
// const age = 33

// const superman = {
//     name,  // name : name 같음
//     age, // age : age 와 같음
//     gnder : 'male'
// }
// // 프로퍼티 존재 확인
// //존재하지 않은 프로퍼티 undefined 가 나옴
// superman.birthDay; // undefined
// 'birthDay' in superman; //false
// 'age' in superman; // true

// for .. in 반복문
// for(let key in superman){
//     console.log(key)
//     console.log(superman[key])
// } //출력 name clark age 33 객체 순회하면서 값얻어오기

// Object 실습

// const superman = {
//     name : 'minsu',
//     age : 33,
// }

// console.log(superman.name)
// console.log(superman['age'])
// console.log(superman)

// superman.hairColor = 'black';
// superman['hobby'] = 'game'
// console.log(superman)

// delete superman.age;
// console.log(superman)

// 이름과 나이를 받아서 객체를 반환하는 함수
//본문
// function makeObject(name, age){
//     return{
//         name : name,
//         age : age,
//         hobby : 'game'
//     }
// }
// 축약
// function makeObject(name, age){
//     return{
//         name,
//         age,
//         hobby : 'game'
//     }
// }

// const mike = makeObject('Mike',33);
// console.log(mike);

// console.log('age' in mike);
// console.log('birthDay' in mike);

// console.log(`나이를 입력하였나요? ${'age' in mike}`);

// 객체 in

// function isAdult(user){
//     if(user.age < 20){ //나이가 입력되지 않았다면
//         return false;
//     }
//         return true
// }

// const mike = {
//     name : 'mike',
//     age : 30,
// };

// const jun = {
//     name : 'jun'
// };

// console.log(isAdult(mike))
// console.log(isAdult(jun)) // 나이를 입력하지 않았지만 true가 나옴!
// // 수정
// function isAdult(user){
//     if(!('age' in user) || // user에 age가 없거나
//      user.age < 20){ // 20살 미만이면
//         return false;
//     }
//         return true
// }

// for in 실습

// const mike = {
//     name : 'mike',
//     age : 30,
// };

// for(x in mike){
//     console.log(mike[x]) //value 값 순환
// }

// method : 객체프로퍼티로 할당 된 함수
// const superman = {
//     name : 'minho',
//     age : 30,
//     fly : function(){ //fly method
//         console.log('날아갑니다')
//     }
// }

// superman.fly(); //fly method

// // 단축 구문

// const superman = {
//     name : 'minho',
//     age : 30,
//     fly(){ //fly method //function 삭제
//         console.log('날아갑니다')
//     }
// }

// superman.fly(); //fly method

// this
// const user = {
//     name : 'mike',
//     sayhello : function(){
//         // console.log(`hello, I'm ${user.name}`); //오류
//         console.log(`hello, I'm ${this.name}`); //user.sayHello(); this로 바꿔주기
//     }
// }



// let boy = {
//     name : 'mike',
//     sayHello : () => {
//         console.log(`hello, I'm ${this.name}`);
//     },
// }

// let girl = {
//     name : 'jane',
//     sayHello : function(){
//         console.log(`hello, I'm ${this.name}`);
//     },
// }

// boy.sayHello();
// girl.sayHello();

// let boy = {
//     name : 'mike',
//     showname : function() {
//         console.log(boy.name)
//     }
// };

// let man = boy; //man 과 boy 두가지로 접근

// boy = null;

// man.showname(); // error

/// 수정
// let boy = {
//     name : 'mike',
//     showname : function() {
//         console.log(this.name) //객체명을 this로 접근하는게 좋음
//     }
// };

// let man = boy; //man 과 boy 두가지로 접근

// boy = null;

// man.showname();


// let boy = {
//     name : 'mike',
//     showname : function() {
//         console.log(this) //객체명을 this로 접근하는게 좋음
//     }
// };

// let man = boy; //man 과 boy 두가지로 접근

// boy = null;

// man.showname();

//화살표 함수로 수정


// let boy = {
//     name : 'mike',
//     showname : () => {
//         console.log(this); //화살표 함수로 this로 접근하면 boy가 아닌 전역객체(윈도우) 출력
//     }
// };

// boy.showname();

// Array(배열)
// 순서가 있는 리스트

// let days = ['mon','thu','wed']
// days.push('thu') //뒤에추가
// days.unshift('sun') // 앞에추가
// console.log(days); //배열확인
// console.log(days.length) // 배열길이확인

//for 접근
// for(let index=0; index<days.length; index++){
//     console.log(days[index]); 
// }

// //for of 접근
// for (let day of days) {
//     console.log(day);
// }