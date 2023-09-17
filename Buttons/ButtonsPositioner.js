var buttonPlus1 = document.getElementById("plus1");
var buttonPlus2 = document.getElementById("plus2");
var table = document.querySelector("table");
function startPosPluses(){
    let firstCell = table.rows[table.rows.length - 1].cells[0];
    let lastCell = table.rows[0].cells[table.rows[0].cells.length - 1];
    let coords1 = firstCell.getBoundingClientRect();
    let coords2 = lastCell.getBoundingClientRect();
    buttonPlus1.style.top = (coords1.top + firstCell.clientWidth + 5) + "px";
    buttonPlus1.style.left = coords1.left + "px";
    buttonPlus2.style.top = coords2.top + "px";
    buttonPlus2.style.left = (coords2.left + lastCell.clientWidth + 5) + "px";
}
window.onload = startPosPluses();