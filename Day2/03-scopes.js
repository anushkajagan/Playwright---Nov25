//scope
function newScope(){
if (true) 
{
    const compname = "Nefer" ;
    console.log(`to check var if block prints compname inside the block ${compname}`); 
}

 console.log(`to check var if block prints compname outside the block ${compname}`);
}

newScope()
/*if (true) {
    let compname = "Nefer" ;
    console.log(`to check let if block prints compname inside the block ${compname}`); 
}
 console.log(`to check let if block prints compname outside the block ${compname}`); //let value not accessible outside the block

 if (true) {
    const compname = "Nefer" ;
    console.log(`to check const if block prints compname inside the block ${compname}`); 
}
 console.log(`to check const if block prints compname outside the block ${compname}`);//let value not accessible outside the block
*/
/*function checkvar(){

    var compname = "Nefer" ;
    console.log(`to check var function block prints compname inside the block ${compname}`); 
    if (true) {
   // var compname = "Nefer" ;
    console.log(`to check var if block prints compname inside the block ${compname}`); 
    }
}
console.log(`to check var function block prints compname outside the block ${compname}`); 
checkvar();*/

/*function checklet(){

    let compname = "Nefer" ;
    console.log(`to check let function block prints compname inside the block ${compname}`); 
    if (true) {
    console.log(`to check let if block prints compname inside the block ${compname}`); 
    }
}
console.log(`to check let function block prints compname outside the block ${compname}`); 
checklet();*/

/*function checkconst(){

    const compname = "Nefer" ;
    console.log(`to check const function block prints compname inside the block ${compname}`); 
    if (true) {
    console.log(`to check const if block prints compname inside the block ${compname}`); 
    }
}*/
//console.log(`to check const function block prints compname outside the block ${compname}`); 
//checkconst();