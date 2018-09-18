//class Point {
//    constructor(x, y) {
//        this.x = x;
//        this.y = y;
//    }
//    toString() {
//        return `(${this.x}, ${this.y})`
//    }
//}
//
//class ColorPoint extends Point {
//    constructor(x, y, color) {
//        super(x, y);
//        this.color = color;
//    }
//    toString() {
//        return `${super.toString()} in ${this.color}` 
//    }
//}
//
//let cp = new ColorPoint(25, 8, 'green')
//console.log(cp.toString())
//console.log(cp instanceof ColorPoint)
//console.log(cp instanceof Point)
//
//var p = new Point(25, 8)
//console.log(p.toString())
//console.log(typeof Point)
//
//const MyClass = class Me {
//    getClassName() {
//        return Me.name
//    }
//}
//let inst = new MyClass()
//console.log(inst.getClassName())

//class Foo {
//    constructor(prop) {
//        this.prop = prop
//    }
//    static staticMethod() {
//        return 'classy'
//    }
//    prototypeMethod() {
//        return 'prototypical'
//    }
//}
//let foo = new Foo(123)
//console.log(foo)
//console.log(Foo.staticMethod())

class MyClass {
    get prop() {
        return 'getter'
    }
    set prop(value) {
        console.log(`setter: ${value}`)
    }
}
let inst = new MyClass()
inst.prop = 123;
console.log(inst)
console.log(inst.prop)