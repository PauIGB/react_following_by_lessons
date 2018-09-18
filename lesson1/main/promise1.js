function getData(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('get', url)
        xhr.onload = function() {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response)
                resolve(json)
            } else {
                reject(xhr.statusText)
            }
        }
        xhr.onerror = function(error) {
            reject(error)
        }
        xhr.send()
        
    })
}
          
function addToArr (user) {
    arr.push(user)
}
const arr =[]

function go () {

for(let i = 1; i <= 10; i++) {
    getData(`https://jsonplaceholder.typicode.com/users/${i}`)
        .then(user => addToArr(user))
    }
    console.log(arr)
}

go()