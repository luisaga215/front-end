//ADMIN.HTML
    //Variable lista de empleados activos
    var head = [
        "Dispositivo",
        "Nombre",
        "Correo",
        ''
    ]
    var mac = [
        "3D:2A:8F:00:4D",
        "3A:3E:54:C4:8B",
        "7C:29:1A:CC:2E",
        "5C:29:1E:6C:2F"
    ];

    var nombre = [
        "Denisse Damian",
        "Luis Gonzalez",
        "Ruben Charles",
        "July Dooley"
    ];

    var nomina = [
        "T011111111",
        "T022222222",
        "T033333333",
        "T044444444"
    ];

    var perfil = [
        "Administrador",
        "Supervisor",
        "Seguridad",
        "Trabajador"
    ];

    function ToggleSup() {

        var agregarSup = document.getElementById("AgregarSupervisor");
        var agregarSeg = document.getElementById("AgregarSeguridad");
        var agregarAdmin = document.getElementById("AgregarAdministrador");
        var agregarTra = document.getElementById("AgregarTrabajador");

        if (agregarSup.style.display == "none") {
            agregarSup.style.display = "block";
            agregarSeg.style.display = "none";
            agregarAdmin.style.display = "none";
            agregarTra.style.display = "none";
        } else {
            agregarSup.style.display = "none";
        }
    }

    function ToggleSeg() {

        var agregarSup = document.getElementById("AgregarSupervisor");
        var agregarSeg = document.getElementById("AgregarSeguridad");
        var agregarAdmin = document.getElementById("AgregarAdministrador");
        var agregarTra = document.getElementById("AgregarTrabajador");

        if (agregarSeg.style.display == "none") {
            agregarSeg.style.display = "block";
            agregarSup.style.display = "none";
            agregarAdmin.style.display = "none";
            agregarTra.style.display = "none";
        } else {
            agregarSeg.style.display = "none";
        }
    }

    function ToggleTra() {

        var agregarSup = document.getElementById("AgregarSupervisor");
        var agregarSeg = document.getElementById("AgregarSeguridad");
        var agregarAdmin = document.getElementById("AgregarAdministrador");
        var agregarTra = document.getElementById("AgregarTrabajador");

        if (agregarTra.style.display == "none") {
            agregarTra.style.display = "block";
            agregarSup.style.display = "none";
            agregarAdmin.style.display = "none";
            agregarSeg.style.display = "none";
        } else {
            agregarTra.style.display = "none";
        }
    }

    function ToggleAdmin() {

        var agregarSup = document.getElementById("AgregarSupervisor");
        var agregarSeg = document.getElementById("AgregarSeguridad");
        var agregarAdmin = document.getElementById("AgregarAdministrador");
        var agregarTra = document.getElementById("AgregarTrabajador");

        if (agregarAdmin.style.display == "none") {
            agregarAdmin.style.display = "block";
            agregarSup.style.display = "none";
            agregarSeg.style.display = "none";
            agregarTra.style.display = "none";
        } else {
            agregarAdmin.style.display = "none";
        }
    }

function ToggleDiv() {
    var agregar = document.getElementById("Agregar");

    if (agregar.style.display == "none") {
        agregar.style.display = "block";
    } else {
        agregar.style.display = "none";
    }
}

function llenarTabla() {

    var i;
    var tab = document.getElementById("tabla");

    for (i=0; i<=nombre.length-1; i++)
    {
        var row = tab.insertRow(i+1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML += mac[i];
        cell2.innerHTML += nombre[i];
        cell3.innerHTML += nomina[i];
        cell4.innerHTML += perfil[i];
        cell5.innerHTML += "<button class='button btn-warning'>Historial</button>";
        cell5.innerHTML += "<button class='button btn-primary'>Modificar</button>";
        cell5.innerHTML += "<button class='button btn-danger' id='eliminarUsuario'>Eliminar</button>";

    }

}

function altaSup(){

    // Hay que cambiarle el nombre del ID, porque al agregar las formas tuve que cambiar los ID's.
    // Tambien no se que opinen de hacer diferentes funciones dependiendo de el usuario que se esté dando de alta.

    nomina += $('#nominaSup').val();
    nombre += $('#nombreSup').val();
    mac += $('#macSup').val();
    // var password_trabajador = $('#passwordTra').val();
    // var grupos_id_grupos = $('#grupoSup').val();

    /*
    employees.push(nombre_trabajador);
    nomina.push(nomina_trabajador);
    mac.push(mac_trabajador);
    */

    console.log(nombre.toString());
    console.log(nomina.toString());
    console.log(mac.toString());

    // location.reload();
}

//SUPERVISOR.HTML
//Variable lista de empleados activos
var employees = [
        'Luis Glz',
        'Ruben',
        'Denisse',
        'Rodrigo',
        'Alex',
        'Nestor',
        'Missael',
        'Fernanda',
        'Luis C.',
        'Luis Hdz',
        'Vania',
        'JuanPi',
        'Diego',
        'Christofer'
    ];
var pointsX = [
        20,
        120,
        110,
        105,
        165,
        75,
        120,
        40,
        30,
        250,
        130,
        360,
        300,
        200
    ];

var pointsY = [
        125,
        120,
        110,
        105,
        300,
        190,
        300,
        240,
        210,
        270,
        200,
        100,
        150,
        168
    ];

var counterA = 1;
var activePoint;

//Generar lista de empleados activos
function generateList() {
    //Generar lista
    var ul = document.createElement('ul');
    ul.setAttribute('id', "myUL");
    document.getElementById("div_activos").appendChild(ul);

    //Funcion para agregar empleados activos a la lista
    employees.forEach(function (employees) {
        var a = document.createElement('a');
        a.setAttribute('href', "#");
        a.setAttribute('id', counterA);
        counterA++;
        var li = document.createElement('li');
        li.setAttribute('class', "the_li");
        ul.appendChild(li);
        li.appendChild(a);
        a.innerHTML += employees;
    });

    //Funcion para cambiar el color del content en la lista al hacer click, almacena el numero donde se hizo click para cambiar la imagen en mapa
    $("ul a").click(function () {
        $("ul a").removeClass('active');
        $(this).addClass('active');
        activePoint = $(this).attr('id');
    });

};

//Obtener valores originales de la imagen
var image = new Image();
var origWidth;
var origHeight;
    image.src = "./assets/mapa_interior.jpg";
    image.onload = function () {
        origWidth = image.naturalWidth;
        origHeight = image.naturalHeight;
    }


//Generar puntos en el mapa
function generatePoints() {
    var i;
    var canvs = document.getElementById("supCanva");
    var ctx = canvs.getContext("2d");
    var markImg = new Image();
    var markImg2 = new Image();
    markImg.src = "./assets/marker_red.png";
    markImg2.src = "./assets/marker_green.png";

    for (i = 1; i <= employees.length; i++) {
        if (i == activePoint) {
            ctx.drawImage(markImg2, newPointsX[i - 1], newPointsY[i - 1], 20, 20);
        }
        if (i != activePoint) {
            ctx.drawImage(markImg, newPointsX[i - 1], newPointsY[i - 1], 20, 20);
        }
    }

}
setInterval(generatePoints, 500);


//Barra de busqueda
function filterList() {
    var input, filter, ul2, li2, i2, a2;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul2 = document.getElementById("myUL");
    li2 = ul2.getElementsByClassName("the_li");
    for (i = 0; i < li2.length; i++) {
        a2 = li2[i].getElementsByTagName("a")[0];
        if (a2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li2[i].style.display = "";
        } else {
            li2[i].style.display = "none";
        }
    }
}

//Generar imagen background y canva del mismo tamaño
var cWidth;
var cHeight;
var newPointsX = pointsX.slice();
var newPointsY = pointsY.slice();

function resizeCanvas() {

    var canvs = document.getElementById("supCanva");
    cWidth = $(".div_mapas").width();
    cHeight = $(".div_mapas").height();

    canvs.width = cWidth;
    canvs.height = cHeight;
    //Get image
    $(".mapa_supervisor").attr('width', cWidth);
    $(".mapa_supervisor").attr('height', cHeight);
    var i;
    //Modificar arreglo de puntos segun el tamaño de la imagen
    if(origWidth != null){
        console.log(cWidth, origWidth);
    for (i = 0; i < employees.length; i++) {
        newPointsX[i] = (cWidth * pointsX[i]) / origWidth;
        newPointsY[i] = (cHeight * pointsY[i]) /origHeight;
    }
    }

}
