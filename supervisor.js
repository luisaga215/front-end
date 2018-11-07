$(document).ready(function () {
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

    var ul = document.createElement('ul');
    ul.setAttribute('id', "myUL");
    document.getElementById("div_activos").appendChild(ul);
    //Funcion para agregar empleados activos a la lista
    employees.forEach(function (employees) {
        var a = document.createElement('a');
        a.setAttribute('href', "#");
        var li = document.createElement('li');
        li.setAttribute('class', "the_li");
        ul.appendChild(li);
        li.appendChild(a);
        a.innerHTML += employees;
    });

});
