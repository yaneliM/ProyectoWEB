var classNum = 0,
    idArray = [],
    idx = 0,
    oldClick;

var empresa = {
    nombre: "Byte",
    juego: "Nutriadventure",
    comentarios: []
};


function Persona(name, lastName, age, email) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    var array = [];
}

function Mensaje(motive, message) {
    this.motive = motive;
    this.message = message;
}

function Comentario(person, msg) {
    this.person = person;
    this.msg = msg;
}
var newElement;
var clicked;

function submit() {

    const txtName = document.getElementById('nombreTxt');

    const txtLastName = document.getElementById('apellidoTxt');

    const selectedAge = document.getElementById('ageDropDown');

    const txtEmail = document.getElementById('correoTxt');

    var nombreRadio = "radio",
        i, radios, nameId;
    var radioValue;

    for (var i = 1; i < 5; i++) {
        nameId = nombreRadio + String(i);
        radios = document.getElementById(nameId);
        if (radios.checked)
            radioValue = radios.value;
    }
    const txtMsn = document.getElementById('setComment');

    var texto = new Mensaje(radioValue, txtMsn.value);
    var user = new Persona(txtName.value, txtLastName.value, selectedAge.value, txtEmail.value);
    var comment = new Comentario(user, texto);



    if (txtName.value === "") window.alert("No hay datos");
    else {
        empresa.comentarios.push(comment);
        showComments(empresa.comentarios.length);
    }

    txtName.value = "";
    txtLastName.value = "";
    txtMsn.value = "";
    txtEmail.value = "";


}

function initDrop() {
    var dropDwn = document.getElementById('ageDropDown');
    var option;

    for (var i = 5; i <= 100; i++) {
        option = document.createElement('option');
        option.value = String(i);
        option.text = String(i);
        dropDwn.appendChild(option);
    }
}

function showComments(num) {
    var division = document.createElement('div');
    division.setAttribute('class', 'division');
    division.setAttribute('id', 'div' + idx);
    division.style.cursor = 'pointer';
    division.style.borderColor = "white";

    division.addEventListener('click', function() {
        oldClick = clicked;
        clicked = division.id;

        if (clicked == oldClick) {

            document.getElementById(clicked).style.borderColor = "white";
        } else {
            document.getElementById(clicked).style.borderColor = "#007bff7a";
            if (document.getElementById(oldClick) != null)
                document.getElementById(oldClick).style.borderColor = "white";
        }
    });

    var imagen = document.createElement('img');
    imagen.setAttribute('src', 'img/logobear-01.png');
    imagen.setAttribute('class', 'element');

    imagen.style.width = '4rem';
    imagen.style.height = '4rem';


    var duList = document.getElementById('comment');
    var newHead = document.createElement("dt");
    var newTxt = document.createElement("dd");
    var str = String(classNum);

    idArray[idx] = "div" + idx;
    idx++;

    newHead.textContent = empresa.comentarios[num - 1].person.name;
    newHead.style.fontFamily = 'Arial Black';
    newHead.style.fontSize = '20px';
    newHead.style.fontStyle = 'Normal';
    newHead.style.fontVariant = 'small-caps';

    newTxt.textContent = empresa.comentarios[num - 1].msg.message; //msg.motive
    newTxt.style.fontFamily = 'Arial, Helvetica, sans-serif';
    newTxt.style.fontSize = '16px';
    newTxt.style.fontStyle = 'Oblique';
    newTxt.style.textAlign = 'justify';


    newHead.setAttribute('class', 'lista');
    newHead.style.paddingLeft = '1rem';
    newHead.style.paddingRight = '3rem';
    newHead.appendChild(newTxt);
    division.appendChild(imagen);
    division.appendChild(newHead);

    duList.appendChild(division);

}

initDrop();

function search() {
    var k, j;
    for (j = 0; j < idx; j++) {
        if (document.getElementById('div' + j) !== null) {
            document.getElementById('div' + j).style.borderColor = 'rgb(233, 233, 233)';
            document.getElementById('div' + j).style.borderWidth = '1px';
        }
    }

    var e = document.getElementById("sortBy");
    var slctd = e.options[e.selectedIndex].value;

    for (k = 0; k < idx; k++) {
        if (empresa.comentarios[k].msg.motive === slctd)
            if (document.getElementById('div' + k) !== null) {
                document.getElementById('div' + k).style.borderColor = ' rgb(118, 160, 122)';
                document.getElementById('div' + k).style.borderWidth = '3px'

            }
    }


}

function borrar() {
    var i;
    for (i = 0; i < idx; i++) {
        if (document.getElementById(clicked) != null) {
            if (idArray[i] === clicked) document.getElementById(clicked).parentNode.removeChild(document.getElementById(clicked));
        }
    }
}