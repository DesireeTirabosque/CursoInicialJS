window.onload = iniciar;
//codigo a ejecutar una vez que se cargo tod La pagina
//correctamente
function iniciar(){
    var btnCalcular= document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click",   clickBtnCalcular);



}

function clickBtnCalcular(){
    var txtPeso= document.getElementById("txtPeso");
    var peso = txtPeso.value;
   

    var txtAltura= document.getElementById("txtAltura");
    var altura = txtAltura.value;
    
    var imc = peso / (altura * altura);
    alert("Su IMC es: " + Math.round(imc));
}