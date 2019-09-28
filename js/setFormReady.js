function initDropDownValues(){
    var dropDwn = document.getElementById('ageDropDown');
    var option;

    for(var i=5;i<=100;i++){
        option = document.createElement('option');
        option.value = String(i);
        option.text = String(i);
        dropDwn.appendChild(option);
    }
}
initDropDownValues();
function getData(){
    var nombre = document.getElementById('nombreTxt');
    var apellido = document.getElementById('apellidoTxt');
    var correo = document.getElementById('correoTxt');
    var dropDwn = document.getElementById('ageDropDown');
    var comment = document.getElementById('setComment');
    var nombreRadio = "radio",i,radios,nameId;

    for(var i=1;i<5;i++){
        nameId = nombreRadio + String(i);
        radios = document.getElementById(nameId);
        if(radios.checked)
            console.log(i);
    }
    


    console.log(nombre.value);
    console.log(apellido.value);
    console.log(correo.value);
    console.log(comment.value);
    console.log(dropDwn.value);
}






