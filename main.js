let num1=22;
let num2="22";
/*if (num1===num2)
{
    alert ("Los numeros son iguales!");
}
else 
{
    alert ("Los numeros son distintos!");
}
*/
//and &&
//or  ||
//not !
let edad = Number (prompt ("Ingrese su edad!"));
/*if (edad>=18)
{
    alert ("Felicitaciones fue aceptado!");
}
else
{
    alert ("Usted debe ser mayor a 18 años!");
}
*/
if (edad<18 && edad > 0)
{
     alert ("Usted debe ser mayor a 18 años!");
}
else if (edad>=18 && edad<99)
{
    alert ("Felicitaciones fue aceptado!");
}
else
{
    alert ("Me estas boludeando");
}