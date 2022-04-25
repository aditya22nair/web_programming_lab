let num1 = prompt("enter the number");
let num2="";
for(let i=1;i<=num1;i++){
    let temp = i*i;
    let res = temp.toString();

    num2+= `(${i},${res}) \n`;
}

alert(num2)