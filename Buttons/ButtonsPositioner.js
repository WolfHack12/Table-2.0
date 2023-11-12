var AddRowButton = document.getElementById("plus1");
var AddColButton = document.getElementById("plus2");
var DeleteColButton = document.getElementById("minus1");
var DeleteRowButton = document.getElementById("minus2");
var table = document.querySelector("table");
export {table, AddColButton, AddRowButton, DeleteColButton, DeleteRowButton}
defaultPosPluses();
defaultPosMinuses();
function defaultPosPluses(){
    let firstCellLastedRow= table.rows[table.rows.length - 1].cells[0];
    let lastCell = table.rows[0].cells[table.rows[0].cells.length - 1];
    let coords1 = firstCellLastedRow.getBoundingClientRect();
    let coords2 = lastCell.getBoundingClientRect();
    AddRowButton.style.top = (coords1.top + firstCellLastedRow.clientHeight + 5) + "px";
    AddRowButton.style.left = coords1.left + "px";
    AddColButton.style.top = coords2.top + "px";
    AddColButton.style.left = (coords2.left + lastCell.clientWidth + 5) + "px";
}
function defaultPosMinuses(){
    let firstCell = table.rows[0].cells[0];
    let coords = firstCell.getBoundingClientRect();
    DeleteColButton.style.top = (coords.top - firstCell.clientHeight - 5) + "px";
    DeleteColButton.style.left = coords.left + "px";
    DeleteRowButton.style.top = coords.top + "px";
    DeleteRowButton.style.left = (coords.left - firstCell.clientHeight) - 5 + "px";
    
}

AddRowButton.addEventListener('click', function(){
    addRow();
    defaultPosMinuses();
    defaultPosPluses();
});
AddColButton.addEventListener('click', function(){
    addColumn();
    defaultPosMinuses();
    defaultPosPluses();
});

DeleteColButton.addEventListener('click', function(){
    defaultPosMinuses();
    defaultPosPluses();
});
DeleteRowButton.addEventListener('click', function(){
    deleteRow();
    defaultPosMinuses();
    defaultPosPluses();
});
table.addEventListener("mouseover", function(event){
    let td = event.target.closest('td');
    if(!td) return;
    function moveMinus1(td){
        let coords = td.getBoundingClientRect();
        DeleteColButton.style.left = coords.left  + "px";
    }
    function moveMinus2(td){
        let coords = td.getBoundingClientRect();
        DeleteRowButton.style.top = coords.top + "px";
        
    }
    
    moveMinus1(td);
    moveMinus2(td);
});