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
        "July Dooley"
    ];

    var mail = [
        "Denisse@example.com",
        "Luis@example.com",
        "Ruben@example.com",
        "July@example.com"
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
    var tab = document.getElementById("tabla")

    for (i=0; i<=employees.length-1; i++)
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

/* function alta(){

    // Hay que cambiarle el nombre del ID, porque al agregar las formas tuve que cambiar los ID's.
    // Tambien no se que opinen de hacer diferentes funciones dependiendo de el usuario que se esté dando de alta.

    var nombre_trabajador = $('#nombre').val();
    var nomina_trabajador = $('#nomina').val();
    var mac_trabajador = $('#mac').val();
    var grupos_id_grupos = $('#inputGroupSelect01').val();

    console.log(nombre_trabajador);
    console.log(nomina_trabajador);
    console.log(mac_trabajador);
    console.log(grupos_id_grupos);
} */
