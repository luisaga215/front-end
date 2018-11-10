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
        1,
        120,
        110,
        105,
        80,
        75,
        120,
        40,
        30,
        250,
        500,
        360,
        420,
        480
    ];
var pointsY = [
        1,
        120,
        110,
        105,
        80,
        250,
        330,
        360,
        210,
        270,
        200,
        100,
        150,
        168
    ];

//Puntos en el mapa
/*var Marker = function () {
    this.Sprite = new Image();
    this.Sprite.src = "./assets/marker_green.png";
    this.Width = 12;
    this.Height = 20;
    this.XPos = 0;
    this.YPos = 0;
}
var Markers = new Array();*/

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

function resizeCanvas() {
    var canvs = document.getElementById("supCanva");
    canvs.width = $(".div_mapas").width();
    canvs.height = $(".div_mapas").height();

    var cWidth = canvs.width;
    var cHeight = canvs.height;

    //Get image and apply same values
    $('.the_map').attr("width",cWidth);
    $('.the_map').attr("height", cHeight);
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
            ctx.drawImage(markImg2, pointsX[i-1], pointsY[i-1], 20, 20);
        }
        if (i != activePoint) {
            ctx.drawImage(markImg, pointsX[i-1], pointsY[i-1], 20, 20);
        }
    }

}
setInterval(generatePoints, 500);

