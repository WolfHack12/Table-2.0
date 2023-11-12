import {table, AddColButton, AddRowButton, DeleteColButton, DeleteRowButton} from "./ButtonsPositioner.js";
table.addEventListener('mouseover',function(event){
    DeleteColButton.style.visibility = "visible"
    DeleteRowButton.style.visibility = "visible"
})
table.addEventListener('mouseout', function(event){
    let relatedTarget = event.relatedTarget.closest('button');
    let y = event.clientY;
    let x = event.clientX;
    if(relatedTarget == DeleteColButton || relatedTarget == DeleteRowButton
        ||relatedTarget == AddColButton ||relatedTarget == AddRowButton ) return;
    if((y < parseInt(DeleteColButton.style.top ) + 105 && x > parseInt(DeleteColButton.style.left) 
    && x < parseInt(DeleteColButton.style.left)+100) || (x < parseInt(DeleteRowButton.style.left)+105 
    && y > parseInt(DeleteRowButton.style.top) && y < parseInt(DeleteRowButton.style.top)+100)){
        return;
    }
    else{ 
    DeleteColButton.style.visibility = "hidden";
    }
    if((y < parseInt(DeleteColButton.style.top ) + 105 && x > parseInt(DeleteColButton.style.left) 
    && x < parseInt(DeleteColButton.style.left)+100) || (x < parseInt(DeleteRowButton.style.left)+105 
    && y > parseInt(DeleteRowButton.style.top) && y < parseInt(DeleteRowButton.style.top)+100)){
        return;
    }
    else{
    DeleteRowButton.style.visibility = "hidden";
    }
})
DeleteColButton.addEventListener('mouseleave', function(event){
    let y = event.clientY;
    let x = event.clientX;
    let target = event.target;

    if(y < parseInt(DeleteColButton.style.top) + 105 && x > parseInt(DeleteColButton.style.left) && x < parseInt(DeleteColButton.style.left)+100) return;
    if(target == AddRowButton || target == AddColButton || target == DeleteRowButton) return;
    if(target != table) {
        DeleteColButton.style.visibility = 'hidden'
        DeleteRowButton.style.visibility = 'hidden'
    }
})
DeleteRowButton.addEventListener('mouseleave', function(event){
    let y = event.clientY;
    let x = event.clientX;
    let target = event.target;
    if(x < parseInt(DeleteRowButton.style.left)+105 && y > parseInt(DeleteRowButton.style.top) && y < parseInt(DeleteRowButton.style.top)+100) return;
    if(target == AddRowButton || target == AddColButton || target == DeleteColButton) return;
    if(target != table) {
        DeleteColButton.style.visibility = 'hidden'
        DeleteRowButton.style.visibility = 'hidden'
    }
})
AddColButton.addEventListener('mouseover', function(event){
    DeleteColButton.style.visibility = "visible"
    DeleteRowButton.style.visibility = "visible"
})
AddRowButton.addEventListener('mouseover', function(event){
    DeleteColButton.style.visibility = "visible"
    DeleteRowButton.style.visibility = "visible"
})