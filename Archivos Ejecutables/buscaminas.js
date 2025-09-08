// FUNCIONES A DECLARAR EN ESTE APARTADO...

// FUNCIÓN PARA ILUSTRAR EL TABLERO DEL JUEGO...

function paintBoard(rowNumbers, columnNumbers)
{
    let board = document.querySelector("#board");

    document.querySelector("html").style.setProperty("--row-num", rowNumbers);
    document.querySelector("html").style.setProperty("--col-num", columnNumbers);

    for (let i = 0; i < rowNumbers; i++)
    {
        for (let j = 0; j < columnNumbers; j++)
        {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "i", + i + "_j" + j);
            newDiv.dataset.row = i;
            newDiv.dataset.column = j;
            newDiv.addEventListener("contextmenu", tag); // EVENTO CON EL BOTÓN DERECHO DEL RATÓN.
            newDiv.addEventListener("click", uncover); // EVENTO CON EL BOTÓN IZQUIERDO DEL RATÓN.
            board.appendChild(newDiv);
        }
    }
}
