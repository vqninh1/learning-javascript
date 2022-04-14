var fullName = 'Vuong Ninh';

console.log(fullName.length);

var firstName = 'Ninh';
var lastName = 'Vuong';

console.log(`Toi la: ${firstName} ${lastName}`);

var myString = 'Vuong Quang Ninh 2001 Ninh';

console.log(myString.length);

console.log(myString.search('Ninh'));

console.log(myString.slice(-4, -2));

console.log(myString.replace(/Ninh/g, 'Duong'))

console.log(myString.toUpperCase());

console.log(myString.toLowerCase());

console.log(myString.trim().length);

var languages = 'Javascript';

console.log(languages.split(''));

const myString2 = 'Ninh Vuong';

console.log(typeof myString2[1]);

var million = 1e6; // tương tự: 1000000

// hoặc

var billion = 2e9; // tương tự: 2000000000 (hai tỏi à nhầm hai tỉ)

console.log(billion);

Number.isFinite(2 / 0);
Number.parseFloat('237.22');

