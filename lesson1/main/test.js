const arr = []
arr.length = 10
Promise.all(arr.map((item, index) => item = fetch(`https://jsonplaceholder.typicode.com/users/${index++}`))
Promise.all(console.log(arr))

//const arr = []
//fetch('https://jsonplaceholder.typicode.com/users/1').then(function(response) {
//  if(response.ok) {
//    return response.json();
//  }
//  throw new Error('Network response was not ok.');
//}).then(function(myJson) { 
//  var name = myJson; 
//  arr.push(myJson); 
//}).catch(function(error) {
//  console.log('There has been a problem with your fetch operation: ' + error.message);
//});

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



//
//function get(callback) {    
//    callback()
//    console.log(arr)
//}
//get(request)

//
//function func() {
//  console.log( arr );
//}
//
//setTimeout(func, 1000);

//const person = fetch(`https://jsonplaceholder.typicode.com/users/1`)
//      .then(response => response.json())
//    .then(data => data)
//function request(callback) {
//    const arr = []
//    for(let i = 1; i <= 10; i++)
//    fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
//      .then(response => response.json())
//      .then(data => arr.push(data))
//    callback(arr)
//}
//
//
//request((arr) => console.log(arr))
//const xhr  = new XMLHttpRequest(),
//      method = 'get',
//      url = 'https://jsonplaceholder.typicode.com/users/'
//xhr.open(method, url, true)
//xhr.onreadystatechange = function() {
//    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 ) {
//        console.log(xhr.responseText)
//    }
//}
//xhr.send()