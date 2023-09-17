let createTable = document.createElement('table');
let rows = 2;
let cells = 2;
for(let i = 0; i < rows; i++){
    createTable.insertRow();
    for(let j = 0; j < cells; j++){
        createTable.rows[i].insertCell();
    }
}
createTable.id = "table";
document.body.appendChild(createTable)
