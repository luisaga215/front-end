$(document).ready(function () {

    var employees = [
        'Luis',
        'Ruben',
        'Denisse',
        'Luis',
        'Ruben',
        'Denisse',
        'Luis',
        'Ruben',
        'Denisse',
        'Luis',
        'Ruben',
        'Denisse',
        'Luis',
        'Ruben',
        'Denisse',
        'Luis',
        'Ruben',
        'Denisse',
        'Luis',
        'Ruben',
        'Denisse'
    ];

    var ul = document.createElement('ul');

    document.getElementById("div_activos").appendChild(ul);

    employees.forEach(function (employees) {
        var a = document.createElement('a');
        a.setAttribute('href', "#");
        var li = document.createElement('li');
        ul.appendChild(li);
        li.appendChild(a);
        a.innerHTML += employees;
    });
});
