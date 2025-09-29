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

            // BORRAMOS EL TABLERO ACTUAL...

            while (board.firstChild)
            {
                board.firstChild.removeEventListener("contextmenu", tag);
                board.firstChild.removeEventListener("click", uncover);
                board.removeChild(board.firstChild);
            }
            
            
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

function shuffleMines()
{
    // REPARTIMOS DE FORMA ALEATORIA LAS MINAS...

    let shuffleMinesNumbers = 0;

    while (shuffleMinesNumbers < buscaminas.maxNumberMines)
    {
        // NÚMERO ALEATORIO DENTRO DEL INTERVALO [0, rowNumbers - 1]

        let row = Math.floor(Math.random() * buscaminas.rowNumbers);

        // NÚMERO ALEATORIO DENTRO DEL INTERVALO [0, columnNumbers - 1]

        let column = Math.floor(Math.random() * buscaminas.columnNumbers);

        // SI NO HAY UNA BOMBA EN ESTA POSICIÓN...

        if (buscaminas.mineFields[row][column] != "B")
        {
            // LA COLOCAMOS AQUÍ...

            buscaminas.mineFields[row][column] = "B";

            // E INCREMENTAMOS EL VALOR EN 1 A LAS MINAS ESPARCIDAS...

            shuffleMinesNumbers++;
        }
    }
}

function countMinesAroundPerGrid(row, column)
{
    let numberMinesAround = 0;

    // DE LA FILA ANTERIOR A LA POSTERIOR...

    for (let zRow = row - 1; zRow <= row + 1; zRow++)
    {
        // DE LA COLUMNA ANTERIOR A LA POSTERIOR...

        for (let zColumn = column - 1; zColumn <= column + 1; zColumn++)
        {

            // SI LA CASILLA CAE DENTRO DEL TABLERO...

            if (zRow > -1 && zRow < buscaminas.rowNumbers && zColumn > -1 && zColumn < buscaminas.columnNumbers)
            {
                // MIRAMOS SI EN ESA POSICIÓN HAY UNA BOMBA...

                if (buscaminas.mineFields[zRow][zColumn] == "B")
                {
                    // Y SUMAMOS 1 AL NÚMERO DE MINAS QUE HAY ALREDEDOR DE ESA CASILLA...

                    numberMinesAround++;
                }
            }
        }
    }

    // Y GUARDAMOS CUÁNTAS MINAS HAY EN ESA POSICIÓN...

    buscaminas.mineFields[row][column] = numberMinesAround;
}

// ESTO TENEMOS QUE HACERLO PARA CADA CASILLA DEL TABLERO EN LA QUE NO HAYA UNA BOMBA YA...

function countMines()
{
    // CONTAMOS CUÁNTAS MINAS HAY ALREDEDOR DE CADA CASILLA...

    for (let row = 0; row < buscaminas.rowNumbers; row++)
    {
        for (let column = 0; column < buscaminas.columnNumbers; column++)
        {
            // SÓLO CONTAMOS SI ES DISTINTO DE BOMBA...

            if (buscaminas.mineFields[row][column] != "B")
            {
                countMinesAroundPerGrid(row, column);
            }
        }
    }
}

function start()
{
    buscaminas.rowNumbers = 10;
    buscaminas.columnNumbers = 10;
    buscaminas.maxNumberMines = 12;
    paintBoard();
    generateEmptymineFields();
    shuffleMines();
    countMines();
}

window.onload = start;

function tag(e)
{

    if (e.type === "contextmenu")
    {
        console.log(e);
        e.stopPropagation();
        e.preventDefault();
    }

}

function uncover(e)
{

}
