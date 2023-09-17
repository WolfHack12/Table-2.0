function AddRows(){
    let str = document.createElement('tr');
    for(let i = 1; i<=table.rows[0].cells.length;i++){
        let td = document.createElement('td');
        str.appendChild(td);
    };
   table.firstChild.appendChild(str);
}