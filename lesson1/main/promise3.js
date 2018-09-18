function applyForVisa(documents) {
    console.log('Обработка заявления...')
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
        Math.random() > 0 ? resolve({}) : reject('В визе отказано: нехватка документов')
    }, 2000)
    })
    return promise    
    
}

function getVisa(visa) {
    visa => console.info('Виза получена')
    return new Promise(function(resolve, reject) {
        resolve(visa)
    })
}
function bookHotel(visa) {
    console.log(visa)
    console.log('Бронируем отель')
//    return new Promise(function(resolve, reject) {
////        reject('нет мест')
//        resolve({})
//       })
    return Promise.resolve(visa)
//    return Promise.reject('')
 
}

function buyTickets(booking) {
    console.log('Покупаем билет')
    console.log('Бронь', booking)
}

applyForVisa({})
.then(getVisa)
.then(bookHotel)
.then(buyTickets)
.catch(error => console.error(error))
.then(() => console.log('Я еще тут'))


//
//function func() {
//  console.log( arr );
//}
//
//setTimeout(func, 1000);

//let promise = applyForVisa()
//
//promise.then(bookHotel, cancellVacation)//promise.then(resolve, reject)
//
//applyForVisa()

//function applyForVisa(documents, resolve, reject) {
//    console.log('Обработка заявления...')
//    setTimeout(function(){
//        Math.random() > 0.5 ? resolve({}) : reject('В визе отказано: нехватка документов')
//    }, 2000)
//    
//}
//function bookHotel() {
//    
//}
//
//function buyTickets() {
//    
//}
//applyForVisa({}, function(visa) {
//    console.info('Виза получена')
//    bookHotel(visa, function(reservation) {
//        buyTickets(reservation, function() {
//            
//        }, function(error) {
//            console.error(error)
//        })
//        
//    }), function(error) {
//        console.log(error)
//    }
//},
//function(reason) {
//    console.error(reason)
//})