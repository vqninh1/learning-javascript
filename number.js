console.log('Xuhaochaycanh');

var age = 21;
var PI = 3.14;

var result = 20 / 1;

var myString = age.toString();

console.log(PI.toFixed(2));

function isNumber(value) {
    if(isNaN(value) == true){
        return false;
    }else{
        return typeof value === 'number';
    }
}

console.log(isNumber(NaN));

