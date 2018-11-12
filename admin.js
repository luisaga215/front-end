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

        for (i = 0; i <= nombre.length - 1; i++) {
            // Propiedades del Boton para Eliminar
            var btnDel = document.createElement('button');
            btnDel.className = "button btn-danger";
            btnDel.onclick = (function () {
                deleterow(this)
            });
            btnDel.innerHTML = "Eliminar";

            // Propiedades del Boton para Modificar
            var btnMod = document.createElement('button');
            btnMod.className = "button btn-primary";
            btnMod.onclick = (function () {
                deleterow(this)
            });
            btnMod.innerHTML = "Modificar";

            // Propiedades del Boton para Historial
            var btnHist = document.createElement('button');
            btnHist.className = "button btn-warning";
            btnHist.onclick = (function () {
                deleterow(this)
            });
            btnHist.innerHTML = "Historial";

            // Se crea el renglon en la tabla
            var row = tab.insertRow(i + 1);

            // Se crean 5 celdas en el mismo renglon
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            // Se llenan las celdas con la información del arreglo y los botones
            cell1.innerHTML += mac[i];
            cell2.innerHTML += nombre[i];
            cell3.innerHTML += nomina[i];
            cell4.innerHTML += perfil[i];
            cell5.appendChild(btnHist);
            cell5.appendChild(btnMod);
            cell5.appendChild(btnDel);
        }
    }

    function deleterow(btn) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row); // kill myself
    }

    function altaSup() {

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
