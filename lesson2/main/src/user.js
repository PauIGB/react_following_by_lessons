// export class Human { //дает возможность использовать данный класс в index.js
import './user.css'    
export default class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return `Hi, ${this.firstName} ${this.lastName}`
    }
}
// export class Alien { 
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     sayHi() {
//         return `WhsWW, ${this.firstName} ${this.lastName}`
//     }
// }