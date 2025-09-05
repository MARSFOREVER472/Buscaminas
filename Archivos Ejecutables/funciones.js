// FUNCIONES A DECLARAR EN ESTE APARTADO...

function paintBoard(rowNumbers, columnNumbers)
{
    let board = document.querySelector("#board");

    for (let i = 0; i < rowNumbers; i++)
    {
        for (let j = 0; j < columnNumbers; j++)
        {
            let newDiv = document.createElement("div");
            board.appendChild(newDiv);
        }
    }
}