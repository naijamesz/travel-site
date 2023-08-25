import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}

/* Lesson example code below this line */

// สร้างคลาส์ Adult ที่รับคุณสมบัติมาจาก Person ทั้งหมด
// class Adult extends Person {
//   payTaxes() {
//     console.log(this.name + ' now owes zero taxes.');
//   }
// }

// สร้างตัวแปรเรียกใช้ฟังก์ชั่น Person มารับค่าจาก let john ที่จะ console.log เป็น 'Hello, my name is John Doe and my favorite color is blue.'
// let john = new Person('John Doe', 'red');
// john.greet();
// สร้างตัวแปลเรียกใช้ฟังก์ชั่น greet มารับค่าจาก let jane ที่จะ console.log เป็น 'Hello, my name is Jane Smith and my favorite color is green.'
// let jane = new Adult('Jane Smith', 'orange');
// jane.greet();
// jane.payTaxes();

// Example.1 function person('blank','blank') :blank=paramenter in function
// function person() {
//   console.log('Hello, myname is ' + blank + ' and my favorite color is ' + blank + '.');
// }
// --------person ('blank1', 'blank2')-------
// person('James Doe', 'red');
// person('Jack Ryan', 'red');

// Example add argument parameter name and favColor in function person
// function person(name, favColor) {
//   console.log('Hello, myname is ' + blank + ' and my favorite color is ' + blank + '.');
// }

// สร้างตัวแปรjamesName โดยใช้ค่าชนิด string:'James Doe'กำหนดค่าในตัวแปร
// let jamesName = 'James Doe';
// let jamesFavColor = 'red';

// สร้างอ๊อบเจ็คแทนแบบข้างบน
// var james = {
//   name: 'James Doe',
//   favoriteColor: 'red',
//   greet: function () {
//     console.log('Oh hello!!');
//   },
// };

// james.greet();

// เรียกใช้ฟังก์ชั่นแบบแรก person ('parameter1', 'parameter2')
// person('James Doe', 'red');
// person('Jack Ryan', 'red');

// เรียกใช้ฟังก์ชั่น person ประกอบอ๊อบเจ็ค
// person(james.name, james.favoriteColor);
// person('Jack Ryan', 'red');
