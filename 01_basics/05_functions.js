function add (n,m) { //n,m are parameters
    return n+m
}

const res= add(2,17) // n,m are arguments
// console.log(res)

function show(...n) { //... is rest opr any num of parameters can be given here
    return n
}

// console.log(show(3,4,5))

addOne(2) // pre accessing can be done because it is not declared

function addOne(num) {
    console.log(num+1)
}

//addTwo(2) // error occurs due to pre acessing and declaration

const ans=function addTwo(num) {
    console.log(num+2)
}

