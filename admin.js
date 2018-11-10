function ToggleDiv() {
    var x = document.getElementById("Agregar");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function llenarTabla() {
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

    var employees = [
        "Denisse Damian",
        "Luis Gonzalez",
        "Ruben Charles",
        "July Duoley"
    ];

    var mail = [
        "Denisse@example.com",
        "Luis@example.com",
        "Ruben@example.com",
        "July@example.com"
    ];

    var i;
    var tab = document.getElementById("tabla")

    for (i=0; i<=employees.length+10; i++)
    {
        var row = tab.insertRow(i+1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML += mac[i];
        cell2.innerHTML += employees[i];
        cell3.innerHTML += mail[i];
        cell4.innerHTML += "<button class='button btn-warning'>Historial</button>";
        cell4.innerHTML += "<button class='button btn-primary'>Modificar</button>";
        cell4.innerHTML += "<button class='button btn-danger'>Eliminar</button>";

    }

}

function alta(){
    var nomina_trabajador = $('nomina').val();
    console.log(nomina_trabajador);

}
