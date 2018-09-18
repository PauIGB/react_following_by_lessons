//function Main(name, age) {
//    this.name = name
//    this.age = age
//}
//
//Main.prototype.getInfo = function() {
//    console.log(this)
//}
//
//let ivan = new Main('ivan', 20)
////console.log(ivan)
//
//function Employee(name, age, salary) {
//    Main.apply(this, arguments)
//    let asdf = salary
//    function getSalary() {
//        return asdf
//    }
//}
//
//Employee.prototype = Object.create(Main.prototype)
//
//ivan = new Employee('ivan', 20, 20000)
//ivan.getInfo()
//ivan.getSalary()
class Human {
    constructor(name, age, dob ) {

        this.name = name
        this.age = age
        this.dob = dob
    }
    displayInfo() {
//        this = new Human()
//        console.log(this.[arguments])
    }    
}

class Employee extends Human {    
    constructor(name, age, dob, salary, dept) {
        super(name, age, dob)
        this.salary = salary
        this.dept = dept
    } 
//    displayInfo() {
//        
//    }
    
}
class Manager extends Employee {
    constructor(salary, dept) {
        super(salary, dept)
        this.developersList = []
    }
    addDeveloper(firstName) {developers.filter((item) => {
        if (item.name === firstName) {
            item.manager = this.name
            this.developersList.push(item)            
        }
        
    })}
    removeDeveloper(firstName) {this.developersList.filter((item, index) => {
        if (item.name === firstName) {
            item.manager = 'not connected to manager'
            this.developersList.splice(index, 1)                
        }           
    })}     
    
}
class Developer extends Employee {    
    constructor(name, age, dob, salary, dept, manager) {
        super(name, age, dob, salary, dept)
        this.manager = manager
    }
    changeManager(firstName) {
        if(this.manager !== firstName) {
            if(this.manager !== undefined) {
                getPersonByName(this.manager, managers).removeDeveloper(this.name)
            }
            getPersonByName(firstName, managers).addDeveloper(this.name)
        }
    }   
}

//let ivan = new Human ('ivan', 20, '10/10.10')


ivan = new Employee('Brian', 49, '05.01.1969', 20000, 'A')
//ivan = new Human(arguments)
ivan.displayInfo()
//console.log(ivan)
let humans = [
    new Human ('Brian', 49, '05.01.1969', 20000, 'A'),
    new Human ('Jeordie', 47, '20.06.1971', 20000, 'A'),
    new Human ('Timothy', 49, '25.06.1969', 20000, 'Ex'),
    new Human ('Stephen', 54, '06.05.1954', 20000, 'Ex'),
    new Human ('Kenneth', 51, '28.09.1966', 20000, 'Ex'),
    new Human ('Tyler', 53, '05.06.1965', 100000, 'A'),
    new Human ('Trent', 53, '17.05.1965', 100000, 'Ex')    
]

humans = new Employee(20000, 'A')

console.log(humans[0].salary)

const developers = [
    new Developer('Brian', 49, '05.01.1969', 20000, 'A'),
    new Developer('Jeordie', 47, '20.06.1971', 20000, 'A'),
    new Developer('Timothy', 49, '25.06.1969', 20000, 'Ex'),
    new Developer('Stephen', 54, '06.05.1954', 20000, 'Ex'),
    new Developer('Kenneth', 51, '28.09.1966', 20000, 'Ex')
]

const managers = [
    new Manager('Tyler', 53, '05.06.1965', 100000, 'A'),
    new Manager('Trent', 53, '17.05.1965', 100000, 'Ex')
]

//const tyler = new Manager('Tyler', 53, '05.06.1965', 100000, 'A')

//tyler.addDeveloper('Brian')
//tyler.addDeveloper('Jeordie')
//tyler.removeDeveloper('Brian')
//console.log(tyler)
//getPersonByName('Trent', managers).addDeveloper('Jeordie')
//getPersonByName('Jeordie', developers).changeManager('Tyler')
//console.log(getPersonByName('Tyler', managers))
//getPersonByName('Jeordie', developers).changeManager('Tyler')
//console.log(getPersonByName('Tyler', managers))
//getPersonByName('Jeordie', developers).displayInfo()
//console.log(getPersonByName('Tyler', managers))
//console.log(getPersonByName('Trent', managers))



//var peter = new Developer('Peter', 23, '01.01.1995', 20000, 'A', alex)
//console.log(peter)
//
//var alex = new Developer('Alex', 23, '01.01.2000', 100000, 'A', [peter])
//console.log(alex)

//function getPersonByName (firstName, classification) {
//    classification.fiter((item, index) => {Array.isArray(firstName) ? firstName.forEach((item) => {
//        const items = []
//        items.push(item)
//    )  : firstName === item.name }    
//}
//function getPersonByName (firstName, arrayName) {
//    return arrayName.filter(item => item.name === firstName)//фильтр возвращает массив
//}



//функции поулчения объекта класса по имени
//function getPersonByName (firstName, arrayName) {
//    return arrayName.filter(item => item.name === firstName)//фильтр возвращает массив
//}
//function getPersonByName (firstName, arrayName) { // возвращает без массива
//    let person
//    arrayName.forEach((item,index) => {
//        if(item.name === firstName) {
//        person = arrayName[index]}
//    })
//    return person;
//}
function getPersonByName (firstName, arrayName) {
    return arrayName.filter((item,index) => item.name === firstName)[0]
}
//console.log(getPersonByName('Brian', developers))
//console.log(getPersonByName('Trent', managers))


