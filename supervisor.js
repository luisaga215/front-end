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

//Generar puntos en el mapa
function generatePoints() {
    var i;
    var canvs = document.getElementById("supCanva");
    var ctx = canvs.getContext("2d");
    var markImg = new Image();
    var markImg2 = new Image();
    markImg.src = "./assets/marker_red.png";
    markImg2.src = "./assets/marker_green.png";

    if(newPointsX != null || newPointsY != null){
    for (i = 1; i <= employees.length; i++) {
        if (i == activePoint) {
            ctx.drawImage(markImg2, newPointsX[i - 1], newPointsY[i - 1], 20, 20);
        } else {
            ctx.drawImage(markImg, newPointsX[i - 1], newPointsY[i - 1], 20, 20);
        }
    }
    }
}
setInterval(generatePoints, 500);
