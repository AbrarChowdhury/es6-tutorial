const { kill } = require("nodemon/lib/monitor/run")

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


    // var a = 2
    // {
    //     var a = 3
    //     {
    //         console.log(a)
    //     }
    // }

    // console.log(a)


    // accessible even before its declared
    // console.log(a)
    // var a = 2

    // console.log(b)
    // var b = 2
    
    

    // const declarations
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
    // console.log(...arr2)
    // console.log([...arr,"a"])

    // //gather
    // function foo (x, y, a, ...z){
    //     console.log(z)
    // }
    // foo(1,2,3,4,5,"a")


// Default Parameter Values
    // function foo(x,y){
    //     x = x || 1
    //     y = y || 5
    //     console.log(x+y)
    // }
    // foo(0,3)

    //  what if you want to pass in 0
    // function foo(x,y){
    //     x = (x !== undefined) ? x:1
    //     y = (y !== undefined) ? y:5

    //     console.log(x+y)
    // }

    // foo( undefined,4)
    
    
    //what if you need to pass in undefined
    // function foo(x,y,z){
    //     x = (0 in arguments) ? x:1
    //     y = (1 in arguments) ? y:5
    //     console.log(x+y)
    // }
    // foo(undefined, 5)

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

    // let tmp = getObj(), namea = tmp.name, house=tmp.house
    // console.log(namea+" belongs to the "+ house + " house")

    //The ES6 way
    // let [a, b, c] = getArr()
    // console.log( a, b, c)

    // let { name, ...rest } = getObj() 
    // console.log(name+" belongs to the "+ rest.house + " house")
  
    
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

    // function foo (obj){
    //     let {x,y}=obj
    //     console.log(x,y)
    // }

    // const obj = {y: 2, x:4}
    // foo( obj )
    // foo( { y: 54} )
    // foo( {} )

    // and like you have already guessed default values are also applicable here

    
// Object literal Extensions
    // let x=1, y=5,
    // obj = {
    //     x,
    //     y,
    //     name:"mehedi"
    // }
    // let x=1, y=5,
    // obj = { x, y }

    // console.log(obj.x, obj.y, obj)
    // let obj ={
    //     x: function (){
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
    //         this.x()
    //     },
    // }

    // obj.x()
    

// Template Literals
    // let name = "Ron"
    // let greeting = "Hello " + name + "!"
    // let greeting = `Hello ${name}`
    // let greeting = `Hello ${name.toUpperCase()}hibye`
    
    // console.log(greeting)


// Arrow Functions

    // const f1 = () => 12;
    // const f2 = x => x * 2
    // const f3 = (x,y) => {
    //     let z = x * 2 + y
    //     y++
    //     x*=3
    //     return (x + y + z)/2
    // }
    // console.log(f1())

    // console.log(f2(5))
    
    // console.log(f3(1,10))

    // let a = [1,2,3,4,5]
    //mapping without a=>funcs
    // a =  a.map( e => e * 2)
    // console.log(a)
    // do we need to use it everywhere now?
    // readability is inversely proportional to the length of the function

    //not just a shorter syntaxt
    
    //this 
        // const obj ={
        //     f1(){
        //         console.log(this)
        //     },
        // }

        // function f2(){
        //     console.log(this)
        // }

    // const controller = {
    //     makeRequest: function (){
    //         let self = this
    //         btn.addEventListerner("click", function(){
    //             self.makeRequest()
    //         }, false)
    //     }
    // }
    // const controller = {
    //     makeRequest: function (){
    //         btn.addEventListerner("click", ()=>{
    //             this.makeRequest()
    //         }, false)
    //     }
    // }
    // .bind(this)


// For..of Loops

    // let a = ["a","b","c","d","e"]
    // a = "Hello world"
    // for( let i in a){
    //     console.log(i)
    // }
    // for( let val of a){
    //     console.log(val)
    // }


// Regular Expresssions

// Number Literal Extenstions

// Unicode

// Symbols

//




















console.log("\n \n \n \n \n \n")