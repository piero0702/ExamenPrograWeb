function calcularFarenheit(){
    const dato = documet.getElementById("elemento").innerHTML;
    let valorFarenheit = (parseInt(dato) - 32)*5/9;
    document.getElementById("yop").innerHTML = dato;
}