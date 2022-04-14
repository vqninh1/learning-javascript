 /**
  * Khai bao bien
 * Khai bao alt+f4
  */
 /* 
     Noi dung comment
 */
 // Khai bao bien
 // var fullName = 'Vuong Quang Ninh';
 // var age = 21;  // Khai bao tuoi

 // Goi ham thong bao


// // // // // alert(fullName);
// // // // // alert(age);

// // // // // var fullName = 'Vuong Quang Ninh'

// // // // //  console.log(fullName)

// // // // // confirm('Xac nhan ban du tuoi!')

// // // // // prompt('Xac nhan ban du tuoi!')

// // // // // setTimeout(function() {
// // // // //     alert('Thong bao')
// // // // // }, 10000)

// // // // // setInterval(function() {
// // // // //     console.log('Day la log' + Math.random())
// // // // // }, 2000)

// // // // //  var a = 1 + 2
// // // // //  console.log(a)

// // // // // var fullName = "Vuong Quang Ninh "

// // // // // var a = 1;
// // // // // var b = 2;

// // // // // if (a < b) {
// // // // //     alert('Dung')
// // // // // }else {
// // // // //     alert('Sai')
// // // // // }

// // // // // var a = 1
// // // // // var b = 2

// // // // // if(a > 0 && b > 0) {
// // // // //     alert('a va b lon hon khong ')
// // // // // }

// // // // var a = 1
// // // // var b = 2
// // // // var c = a % b;
// // // // console.log(c)

// // // /**
// // //  * Toan tu gan
// // //  */

// // // // var a = 1

// // // // a **= 2 

// // // // console.log(a);

// // // var a = 10

// // // console.log(a++)
// // // console.log(a)

// // // console.log(a--)
// // // console.log(a)

// // // console.log(++a)
// // // console.log(--a)

// // // var number = 6

// // // var output = ++number *2 - number-- * 2;
// // // console.log(output)

// // /**
// //  * Toan tu chuoi
// //  */

// // var name = 'Vuong'
// // var lastName = 'Ninh'

// // name += ' Ninh'

// // // console.log(name)

// /**
//  * Toan tu so sanh
//  */

// var  a = 'AB'
// var b = 'AA'
// if (a == b){
//     console.log('Dieu kien dung!')
// }else{
//     console.log('Dieu kien sai!')
// }

/**
 * Boolean
 */
// var a = 1 
// var b = 2


// var isSuccess = a > b;

// console.log(isSuccess)

/**
 * If- else
 */

// var fullName = 'Vuong Ninh'

// if (fullName ){
//     console.log('Dieu kien dung')
// }else{
//     console.log('Dieu kien sai')
// }

//Number type
var a = 1
var b = 2
var c = 3

console.log(typeof a)

//String type
var fullName = 'Vuong  Ninh'
console.log(typeof fullName)
// if(!(a < 0)){
//     console.log('Dieu kien dung')
// }

//Boolean
var isSuccess = true
console.log(typeof isSuccess)
//Undefined type
var Ninh;

//Null
var isNull = null //nothing
console.log(typeof isNull)

//Symbol
var id = Symbol('id') //unique
var id2 = Symbol('id') //unique
console.log(typeof id)
//Function
var myFunction = function() {
    alert('Hiiii. Xin chao cac ban!')
}
console.log(typeof myFunction)
//Object types

var myObject = {
    name: 'Vuong Ninh',
    age: '21',
    address: 'Ha Noi',
    myFunction : function(){

    }
}

console.log('myObject', typeof myObject)

var myArray = [
    'JavaScript',
    'PHP',
    'Ruby'
]

console.log(typeof myArray)

var thisFunction = function() {
    
}

/**
 * === 
 * !==
 */

var a = 1;
var b = '1';

console.log(a !== b);

//Hiểu hơn về câu lệnh điều kiện
//và phép so sánh

var a = 1; 
var b = 2;
// var result = a < b;

// var result = a < b && a > 0;

// console.log(result)

var result = null || NaN || NaN || 0;

console.log(result)

if(result){
    console.log('DIEU KIEN DUNG');
}else{
    console.log('DIEU KIEN SAI');
}

function showDialog() {
    alert('Hi minh la xuhao ne`');
}

// call
// showDialog();

// console.log(showDialog());

function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

writeLog('Log 1' , 'log2', 'log3',1,2,3,4);

console.log(1, 2, 3, 4, 5, 6, 7, 8);

// var isConfirm = confirm('Message?');

// console.log(isConfirm);

function Cong(a , b){
    return a.toString() + b.toString();
}

var result = Cong(2, 8);

console.log(result);

function showMessage() {
   
    console.log('Declaraion function');
    
}

showMessage();

var showMessage2 = function() {
    console.log('Expression function');

}

showMessage2();

