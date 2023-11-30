let firstname = 'arman'
let lastname = 'hurian'

// console.log('Hi my name is :' + firstname + lastname);

let myObj = {

    name : 'Ali',
    age : 25,
    objectFunc : function(){
        console.log('my name is ' +  this.name + ' and my age is ' + this.age );
    }
    
}

// console.log(myObj);

myObj.objectFunc()

const fetchData = ()=>{
    const promise = new Promise((resolve,reject) => {

        setTimeout(()=>{
            
            resolve('i am fullStack Developer') 

        },1500)

    })
    return promise
}

setTimeout(() => {

 console.log('i am front end developer');   

 fetchData().then((result) => {

    console.log(result);

 })

},2000)