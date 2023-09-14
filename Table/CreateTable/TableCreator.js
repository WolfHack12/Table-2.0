let table = document.createElement('table');
let rows = 2;
let cells = 2;
for(let i = 0; i < rows; i++){
    table.insertRow();
    for(let j = 0; j < cells; j++){
        table.rows[i].insertCell();
    }
}
document.body.appendChild(table)
