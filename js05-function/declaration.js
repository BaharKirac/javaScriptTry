function printHello(){
    alert ("Hello World")
}
printHello()

function printParametre(message, name = "Cohort 14") {
    console.log(message, name);
}
printParametre("Hello", "FS14")
printParametre("salut", "FS15")
printParametre("Hallo")
printParametre("Hi")

function calculate (namr, yob) {
    // const age = 2024 - yob  
    const age = new Date().getFullYear() - yob
    console.log('${name} is ${age} years old');
}
console.log(new Date().getFullYear());

calculate("Ali", 1989)
calculate("Ismet", 1995)
calculate("Mehmet", 2010)