var buttonPlus1 = document.getElementById("plus1");
var buttonPlus2 = document.getElementById("plus2");
var buttonMinus1 = document.getElementById("minus1");
var buttonMinus2 = document.getElementById("minus2");
var table = document.querySelector("table");
function defaultPosPluses(){
    let firstCellLastedRow= table.rows[table.rows.length - 1].cells[0];
    let lastCell = table.rows[0].cells[table.rows[0].cells.length - 1];
    let coords1 = firstCellLastedRow.getBoundingClientRect();
    let coords2 = lastCell.getBoundingClientRect();
    buttonPlus1.style.top = (coords1.top + firstCellLastedRow.clientHeight + 5) + "px";
    buttonPlus1.style.left = coords1.left + "px";
    buttonPlus2.style.top = coords2.top + "px";
    buttonPlus2.style.left = (coords2.left + lastCell.clientWidth + 5) + "px";
}
function defaultPosMinuses(){
    let firstCell = table.rows[0].cells[0];
    let coords = firstCell.getBoundingClientRect();
    buttonMinus1.style.top = (coords.top - firstCell.clientHeight - 5) + "px";
    buttonMinus1.style.left = coords.left + "px";
    buttonMinus2.style.top = coords.top + "px";
    buttonMinus2.style.left = (coords.left - firstCell.clientHeight) - 5 + "px";
    
}

buttonPlus1.addEventListener('click', function(){
    defaultPosMinuses();
    defaultPosPluses();
});
buttonPlus2.addEventListener('click', function(){
    defaultPosMinuses();
    defaultPosPluses();
});

buttonMinus1.addEventListener('click', function(){
    defaultPosMinuses();
    defaultPosPluses();
});
buttonMinus2.addEventListener('click', function(){
    defaultPosMinuses();
    defaultPosPluses();
});
defaultPosPluses();
defaultPosMinuses();

table.addEventListener("mouseover", function(event){
    let td = event.target.closest('td');
    if(!td) return;
    moveMinus1(td);
    moveMinus2(td);
})
function moveMinus1(td){
    let coords = td.getBoundingClientRect();
    buttonMinus1.style.left = coords.left  + "px";
}
function moveMinus2(td){
    let coords = td.getBoundingClientRect();
    buttonMinus2.style.top = coords.top + "px";
    
}
