//symbol declaration 
const mySym=  Symbol("Key1")

// declaration of obj in literal manner

const jsUser = {
    name : "LSV",
    [mySym] : 'Sai',//[] used to use the key as a symbol instead by default it will be taken as a string
    age  : 20,
}

Object.freeze(jsUser)

jsUser.age=21 // does not work because of the freeze func used which locks the value

//console.log(jsUser)

// obj with constructors

const user = {}

user.name="Loki"
user.id=" 007"

// const obj {      // obj can be declared in another obj
//     const obj1 {  

//     }
// }

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",2:"b"}

//const obj3=Object.assign(obj1,obj2) // assign ( target , source) values from source are put in target so use {}

//const obj3=Object.assign( {},obj1,obj2) // {} is an empty obj

const obj3= { ... obj1, ...obj2} // ... is the spread func which merges objs, arrays etc

// console.log(obj3)

const {name:n} = jsUser // destructuring - short forms

console.log(n)