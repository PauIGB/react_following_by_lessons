const express = require('express');
//socket нужен для поддержания постоянной связи с сервером
//непрерывного получения обновлений, например новых сообщений
//socket.io-client - нужен чтобы все это работало в реакте
const socketIO = require('socket.io');
//http открывает и сразу закрывает связь с сервером, используется для авторизации в чате
//http встроенный модуль node, отдельно устанавливать не надо
const http = require('http');
//библиотека express
const app = express();
//прикрепляем приложение, созданное на экспрессе к серверу
const server = http.createServer(app);
//добавляем к созданному серверу сокеты
const io = socketIO(server);

//назначаем порт для сервера и задаем call-back функцию для оповещения
server.listen(3000, () => {
    console.log('Server has been started');
});

//работа с сокетами
//метод on для назначения обработчика событий

//подписка на событие
//при connection мы получаем socket (socket - отдельный подключивышийся клиент)
//событие срабатывает, когда к серверу кто-то подключается
//наименование мы придумываем сами, например 'message'
io.on('connection', (socket) => {
//при подключении каждый раз записывать socket id в базу
//пропущен шаг обработки сообщения и занесения его в базу данных
    socket.on('message', (message) => {
        //после получения сообщения нужно передать его всем подключенным клиентам
        //вызываем событие, boradcast - означет всем клиентам, кроме отправителя
        socket.broadcast.emit('message', message);
        //отправка сообщения отправителю
        socket.emit('message', message);   
        //у каждого сокета есть автоматически сгенерированный идентификатор
        //если нужно отправить сообщение конкретном сокету, но записываем    
        //socket.in(<указываем нужный id>).emit(...)

        //получить id
        //socket.id
    });
});

//при отключении пользователя, можно удалять его socket id из базы, но необзятельно
io.on('disconnection', (socket) => {
    //удалить id из базы
})

//генерируем событие
// io.emit

//человке авторизовывается на сервере
//затем его сокет получает идентификатор
//нужно сопоставить id сокета и конкретного пользователя в базе
//когда зарегистрированный пользователь подключается - нужно положить 
//в базу его socket id и при необходимости отправлять этому пользователю сообщения
//после авторизации пользователя оправляем без использования socket, с помощью
// ajax ему историю сообщений // напишем на след. занятии
//каждый раз, когда клиент подключается у него создается новый сокет
//при подключении нужно записывать в базу авторизованному пользователю socket id

//дз сделать так, чтобы начали ходить сообщения


//ПОЛЯ ОБЪЕКТА MESSAGE
//в mongo.db, который будет использоваться на следующем уроке, id передается в виде string

//это не объект, а просто модель интерфейса(структура данных)
// Message:
// {
//     id: string;
//     dilogId: string;
//     timestamp: Date;
//     text: string;
//     author: User; // кто написал
// }
// Dialog:
// {
//     id: string; // сочетание id пользователя 1 и пользователя 2
//     users: [User];
// }
// User:
// {
//     id: string;
//     username: string;
//     fullName: string;
//     password: string;
//     socketId: string;
// }

//запуск в консоле: node server/