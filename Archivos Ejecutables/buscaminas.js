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
            board.appendChild(newDiv);
        }
    }
}
