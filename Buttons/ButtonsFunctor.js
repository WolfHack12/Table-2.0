function addRow(){
    let str = document.createElement('tr');
    for(let i = 1; i<=table.rows[0].cells.length;i++){
        let td = document.createElement('td');
        str.appendChild(td);
    };
   table.firstChild.appendChild(str);
}
function addColumn(){
    for(let i = 0; i < table.rows.length; i++){
        table.rows[i].insertCell(-1);
    }
}
function deleteRow(){
    table.deleteRow(0);
}