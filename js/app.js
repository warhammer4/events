/**
 * 
 * ES6
 * 
 * var
 * 
 * let
 * const
 * 
 * 
 * 
 * functions 
 * 
 * Declarative function
 * function functionName() {
 * do stuff
 * }
 * Arrow function
 * const funcName =(args)=> {
 * do stuff
 * }
 * 
 * 
 * ternaries
 * 
 * if(condition) {
 * do 
 * }else {
 * do something else
 * }
 * 
 * 
 * 
 * condition ? do stuff : do something else
 */

// const foo =()=>{
//     let count = 6;
//     console.log(count);
// } 
// foo();

// let baz = 9;

// if (baz == 8){
//     console.log(baz);
// }else{
//     console.log('This is not right');
// }


// baz == 8 ? console.log(baz) : null ;


let data = {};

const subscribeUser = ()=> {
    
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const year = dob.slice(0, 4);
    
    
    const month = dob.slice(5, 7);
    const date = dob.slice(8);
    // const year = document.getElementById('dob').value.slice(0, 4)
    
    const planType = document.querySelector('input[name=planType]:checked').value;
    
    data.firsName = fName;
    data.lastName = lName;
    data.email = email;
    data.month = month;
    data.year = year;
    data.date = date;
    data.planType = planType;
    
    console.log(data);
    
}


// const submitBtn = document.getElementById('sumbitBtn');

// const terms = document.getElementById('terms');

// if (terms.checked) {
    
// }else { 
const  alertUser =()=> alert ('Please agree to terms and conditions')
    

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const terms = document.getElementById('terms');

    terms.checked ? subscribeUser() : alertUser();
})


