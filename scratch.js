// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = []
arr[0]=1
arr[1]=14
arr[2]=18
arr[3]=10
arr[4]='world'
arr[5]='úk'
arr[6]=19
arr[7]='énter'
arr[8]=100
arr[9]=true
console.log(arr)

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books ={title: 'HarryPotter', pageCount: 350, genre: 'fantasy' }
console.log(books)

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let books2 ={
    title: 'HarryPotter',
    pageCount: 350,
    genre: 'fantasy',
    authors:[ {name:'rowling', age:46},{name: 'sofi', age:25}]}

console.log(books2.authors)


// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let userArray = [
    {
        name: 'anton',
        username: 'qweghj',
        password: 178
    },
    {
        name: 'oly',
        username: 'tghjh',
        password: 1298
    },
    {
        name: 'artem',
        username: 'fjgjkhkm',
        password: 1230
    },
    {
        name: 'oleq', 
        username: 'ertyhj',
        password: 1234
    },
    {
        name: 'misha',
        username: 'tohjkm',
        password: 12345
    },
    {
        name: 'katy',
        username: 'klom',
        password: 1236
    },
    {
        name: 'koly',
        username: 'klhkjtom',
        password: 1237
    },
    {
        name: 'pasha',
        username: 'tomhjg',
        password: 1238
    },
    {
        name: 'ira',
        username: 'tombgjbj',
        password: 1239
    },
    {
        name: 'masha',
        username: 'tom',
        password: 1231
    },
]
console.log(userArray[0].password)
console.log(userArray[1].password)
console.log(userArray[2].password)
console.log(userArray[3].password)
console.log(userArray[4].password)
console.log(userArray[5].password)
