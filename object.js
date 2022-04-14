var emailKey = 'email';

var myInfo = {
    name: 'Quang Ninh',
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey]: 'vqninh1@gmail.com',
    getName: function() {
        return this.name;
    },
    getAge: function name(params) {
        
    }
}

// myInfo.email = 'vqninh@gmail.com';

// delete myInfo.age;

//Function --> Phương thức / method
//Other --> Thuộc tính / property


var myKey = 'address';

console.log( myInfo.getName());

//Function --> Phương thức / method
//Other --> Thuộc tính / property

//Object constructor

var User = function(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }

}

var author = new User('Ninh', 'Vương', 'Avatar');
var user = new User('Dương', 'Lê', 'Avatar');

author.title = 'Anh co yeu em khong';
user.comment = 'Co muon ve nha voi em khong';

console.log(author.getName());
console.log(user.getName());

function QuangNinh(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    this.getNameAge = function () {
        return `${this.name} ${this.age}`;
    }
    
}

var ninh = new QuangNinh('Dương', 21, 'Hà Nội');

console.log(ninh.getNameAge());

