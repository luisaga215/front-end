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
        var span = document.createElement('span');
        span.setAttribute('class', "li_span");
        var li = document.createElement('li');
        ul.appendChild(li);
        li.appendChild(span);
        span.innerHTML += employees;
    });
});
