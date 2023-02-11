/*//1. llamar variables del html
const title = document.querySelector('.main-title');
//Consultar por su id.
const username = document.getElementById('nota1, nota2');
const btnGreatting = document.getElementById('btn-submit');

//2. Alicar evento al botón.
btnGreatting.addEventListener('click');

function Greatting() {
 let name = Number.value;
 title.textContent = `calcilo de notas${name}`;
 title.style.color = "green";
//  title.style.textShadow = "-5px -5px 0 #ffffff";
 title.style = "text-shadow: -5px -5px 0 #ffffff";
}
*/
const calculo = document.querySelector(".main-title");
const resultado = document.querySelector(".resultado")
const v1 = document.getElementById("nota1");
const v2 = document.getElementById("nota2");
 const v3 = document.getElementById("nota3");
 const button = document.getElementById("button");


 button.addEventListener("click", calcular);
 function calcular(){
    let nota1 = v1.value;
    let nota2 = v2.value;
    let nota3 = v3.value;
    let operacion = nota1 * 0.3 + nota2 * 0.3 + nota3 * 0.4;
    // calculo.textContent = `calculo de notas ${operacion}`;

     resultado.textContent =`el resultado de su nota es : ${operacion}`
 }





    





