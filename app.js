//let num1 = parseFloat(prompt("Ingrese el número 1"));
//let num2 = parseFloat(prompt("Ingrese el número 2"));

//let suma = num1 + num2;

//alert("La suma es: " + suma);

let nombre = "jorge"

let edad = parseInt(prompt("Ingrese su edad: "))
if(edad < 18){
    alert("Es menor de edad.")
}else if(edad == 18){
    alert("Acabó de cumplir la mayoría de edad")
}

else{
    alert("Es mayor de edad")
}

let vector = []

for(let i = 0; i<5;i++){
    vector[i] = i
    console.log(i)
}

console.log(vector)

let num = 1

while(num < 10){
    document.write(3*num + " ")
    num = num + 1
}