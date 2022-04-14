var languages = [
    'JavaScript',
    'PHP',
    'C#'

];

var languages2 = [
    'Ninh',
    'Duong'
]

// console.log(languages.pop()); // xóa phần tử ở cuối và trả vầ phần tử đã xóa

// console.log(languages.push('ninh', 'xuhao'));//thêm một phần tử ở cuối mảng
 
// console.log(languages.shift());// xóa phần tử ở đầu màng và trả về phần tử đã xóa

// console.log(languages.unshift('duong', 'mit')); // thêm phần tử ở đầu mảng

// languages.splice(1, 1, 'Ninh', 'Dương');



// console.log(languages2.concat(languages));

// console.log(languages);

// console.log(languages.slice(3));

function getLastElement(array) {
    return array.slice(-1).toString();
}

var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
