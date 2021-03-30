// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
let contentP = document.getElementById('content');
console.log(contentP.innerText)

// b) отримує текст з блоку з id "rules"
let rulesDiv = document.getElementById('rules');
console.log(rulesDiv.innerText);

// c) замініть текст параграфа з id 'content' на будь-який інший
contentP.innerText = 'Certainly elsewhere my do allowance at. The address farther six hearted hundred towards husband. Are securing off occasion remember daughter replying. Held that feel his see own yet. Strangers ye to he sometimes propriety in. She right plate seven has. Bed who perceive judgment did marianne. \n'

// d) замініть текст параграфа з id 'rules' на будь-який інший
rulesDiv.innerText = 'It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman.'

// e) змініть кожному елементу колір фону на червоний
contentP.style.backgroundColor = 'red';
rulesDiv.style.backgroundColor = 'red';
let liContent = document.getElementsByTagName('li');
for (let i = 0; i < liContent.length; i++) {
    liContent[i].style.backgroundColor = 'red';
}

// f) змініть кожному елементу колір тексту на синій
contentP.style.color = 'blue';
rulesDiv.style.color = 'blue';
for (let i = 0; i < liContent.length; i++) {
    liContent[i].style.color = 'blue';
}


// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rulesDiv.classList);

// h) отримати всі елементи з класом fc_rules
let classRules = document.getElementsByClassName('fc_rules')
for (let i = 0; i < classRules.length; i++) {
    console.log(classRules[i]);;

}

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < classRules.length; i++) {
    classRules[i].style.color = 'red'

}

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомогою document.createElement.
//     Вставити цей блок на сторінку


// for (let i = 0; i < users.length; i++) {
//     let userBlock = document.createElement('div');
//     userBlock.style.backgroundColor = 'silver';
//     userBlock.style.margin = '10px';
//     userBlock.innerHTML = `
//     Hi, my name is ${users[i].name} <br>
//     I am ${users[i].age} years old <br>
//     My status is ${users[i].status} <br>
//     I live by adress: city: ${users[i].address.city}, country: ${users[i].address.country}, street: ${users[i].address.street}, house number: ${users[i].address.houseNumber}
//     `;
//
//     document.body.appendChild(userBlock)
// }

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let i = 0; i < users.length; i++) {
    let userBlock = document.createElement('div');
    userBlock.style.backgroundColor = 'silver';
    userBlock.style.margin = '10px';
    userBlock.innerHTML = `
    Hi, my name is ${users[i].name} <br>
    I am ${users[i].age} years old <br>
    My status is ${users[i].status} <br>
   `
    let adressBlock = document.createElement('div')
    adressBlock.style.backgroundColor = 'tomato';
    adressBlock.style.border = '2px dotted ';
    adressBlock.innerHTML = `
     city : ${users[i].address.city}, country: ${users[i].address.country}, street: ${users[i].address.street}, house number: ${users[i].address.houseNumber}
    `
    document.body.appendChild(userBlock);
    userBlock.appendChild(adressBlock);
}