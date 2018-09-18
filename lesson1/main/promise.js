//рабочий вариант
Promise.all(Array(10).fill(0).map((item, index) => fetch(`https://jsonplaceholder.typicode.com/users/${index+1}`).then(response => response.json())))
                .then((users) => console.log(users))

//рабочий вариант
    const arr = []
    for(let i = 1; i <= 10; i++)
    arr.push(fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
            .then(response => response.json()))
                  
    Promise.all(arr)
        .then(data => console.log(data))

//рабочий вариант    
const arr = []
    for(let i = 1; i <= 10; i++)
    arr[i-1] = (fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
            .then(response => response.json()))
                  
    Promise.all(arr)
        .then(data => console.log(data))

//черновики


//function arrayCreate() {
//    let promise = new Promise(function(resolve, reject) { 
//        const arr =[]
//            for(let i = 1; i <= 10; i++)        fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
//            .then(response => response.json())
//            .then((data) => arr.push(data)) 
//        resolve(arr)
//     })
//    return promise
//}   
//
//arrayCreate()
//    .then((arr) => console.log(arr))


    const arr = []
    for(let i = 1; i <= 10; i++)
    arr.push(fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
            .then(response => response.json()))
                  
    Promise.all(arr)
        .then((data) => console.log(data))

// const arr = []
// arr.length = 10
//Array(10).fill(0).map((item, index) => fetch(`https://jsonplaceholder.typicode.com/users/${index+1}`).then(response => response.json())))
//                .then(users => console.log(users))


//
//    const promise =new Promise ((resolve, reject) => {
//        const arr = []
//        for(let i = 1; i <= 10; i++)
//        arr.push(fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
//                .then(response => response.json()))
//        resolve(arr)
//    })
//
//promise
//    .then(
//        new Promise((resolve("resolved"), reject) => {data => console.log(data)} )
//        
//    )
//    .then(
//    newData => console.log(newData)
//)