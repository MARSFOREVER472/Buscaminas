// FUNCIONES A DECLARAR EN ESTE APARTADO...

// FUNCIÓN PARA ILUSTRAR EL TABLERO DEL JUEGO...

function paintBoard(rowNumbers, columnNumbers)
{
    let board = document.querySelector("#board");

    const buscaminas = 
    {
        maxNumberMines : 30,
        numberMinesFounded : 0,
        rowNumbers: 15,
        columnNumbers: 15,
        mineFields: []
    };

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

            /*

            while (board.firstChild)
            {
                // board.firstChild.removeEventListener("contextmenu", tag);
                // board.firstChild.removeEventListener("click", uncover);
                // board.removeChild(board.firstChild);
            }
            
            */
        }
    }
}

function generateEmptymineField()
{
    // GENERAMOS EL CAMPO DE MINAS EN EL OBJETO "buscaminas"...

    buscaminas.mineFields = new Array(buscaminas.rowNumbers);

    for (let row = 0; row < buscaminas.rowNumbers; row++)
    {
        buscaminas.mineFields[row] = new Array(buscaminas.columnNumbers);
    }
}

function tag(e)
{

}

function uncover(e)
{

}
