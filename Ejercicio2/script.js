function calcularFarenheit(){
    const dato = documet.getElementById("elemento").value;
    let valorFarenheit = (parseInt(dato) - 32)*5/9;
    document.getElementById("yop").innerHTML = valorFarenheit
}