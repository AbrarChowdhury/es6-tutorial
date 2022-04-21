// "\x1b[35m" magenta
console.log("\n \n \n \n \n \n")


//  Block-Scoped Declarations
    
    // var a =2
    // function IIFE(){
    //     var a = 3
    //     console.log(a)
    // }
    // IIFE()
    // console.log(a)

    // (unsurprisingly) block scoping. This means all we need is a pair of { .. } to create a scope


    // let a = 2
    // {
    //     let a = 3
    //     {
    //         console.log(a)
    //     }
    // }

    // console.log(a)


    // accessible even before its declared
    // console.log(a)
    // var a = 2

    // console.log(b)
    // let b = 2

    // The const declarations
    //   const a = 2
    //   a = 4
    // const person = {
    //     name:"abrar"
    // }
    // person.name="sajid"
    // console.log(person)


//  Spread /  Rest
    // const arr = [ 1,2,4]
    // const arr2 = [ "a", "b", "c"]
    // console.log(...arr)
    // console.log(["a",...arr])

    // //gather
    // function foo (x, y, ...z){
    //     console.log(x,y,z)
    // }
    // foo(1,2,3,4,5)


// Default Parameter Values
    // function foo(x,y){
    //     x = x || 1
    //     y = y || 5
    //     console.log(x+y)
    // }

    //  what if you want to pass in 0
    // function foo(x,y){
    //     x = (x !== undefined) ? x:1
    //     y = (y !== undefined) ? y:5
    //     console.log(x+y)
    // }
    // foo( undefined, 1 )
    
    
    //what if you need to pass in undefined
    // function foo(x,y){
    //     x = (0 in arguments) ? x:1
    //     y = (1 in arguments) ? y:5
    //     console.log(x+y)
    // }

    //turns out you cannot omit arguments in the middle or at the beginning of the arguments list
    

    // but with ES6 you got this
    // function foo( x=1, y=5){
    //     console.log(x+y)
    // }  

    // foo()
    // foo(5,6)
    // foo(5)
    // foo(undefined,10)
    // foo()


// Destructuring
    //the problem
    // const getArr = ()=>[1,2,3]
    // const getObj = ()=>{ 
    //     return {name:"Harry", house:"Gryffindor"} 
    // }

    // let tmp = getArr(), a=tmp[0], b=tmp[1], c=tmp[2]
    // console.log( a, b, c)

    // let tmp = getObj(), name = tmp.name, house=tmp.house
    // console.log(name+" belongs to the "+ house + " house")

    //The ES6 way
    // let [a, b, c] = getArr()
    // console.log( a, b, c)

    // let { name, house } = getObj() 
    // console.log(name+" belongs to the "+ house + " house")
    
    //what if you want use name the variables differently

    // let { name: firstName, house } = getObj() 
    // console.log(firstName+" belongs to the "+ house + " house")

    //Not just declarations
    // let a, b, c, user, house
    // [a,b,c] = getArr()
    // console.log(a,b,c)

    // ( {user, house} = getObj() )
    // console.log(user, house)
    // this was supposed to work but didn't maybe becasue of nodejs

    // Default value assignment
    // let { name="Voldermort", house="Slytherin" } = getObj()
    // console.log(name+" belongs to the "+ house + " house")

    //Nested Destructuring is also an option

    //Destructuring Parameters
    // function foo ([ x, y ]){
    //     console.log( x, y )
    // }
    // foo([1,2])
    // foo([1])
    // foo([])

    // function foo ({x,y}){
    //     console.log(x,y)
    // }
    // foo( {y: 2, x:4} )
    // foo( { y: 54} )
    // foo( {} )

    // and like you have already guessed default values are also applicable here

    
// Object literal Extensions
    // let x=1, y=5,
    // obj = {
    //     x:x,
    //     y:y
    // }
    // let x=1, y=5,
    // obj = { x, y }

    // console.log(obj.x, obj.y)
    // let obj ={
    //     x: function(){
    //         //does something
    //     }
    // }
    
    // let obj ={
    //     x: function something(){
    //         //does something
    //         // when you have named function as such and you want to run a recursively its a good idea not go with the consise methods
    //         // I don't yet find it fully conclusive though
    //     }
    // }

    // let obj = {
    //     x(){
    //         console.log("hello")
    //     },
    // }
    

// Template Literals
    // let name = "Ron"
    // let greeting = "Hello " + name + "!"
    // let greeting = `Hello ${name}`
    // let greeting = `Hello ${name.toUpperCase()}`
    // console.log(greeting)


// Arrow Functions
    //not just shorter syntaxt

// For..of Loops

// Regular Expresssions

// Number Literal Extenstions

// Unicode

// Symbols

//




















console.log("\n \n \n \n \n \n")