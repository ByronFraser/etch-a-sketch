const main = document.getElementById('main');
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
let etchColumns = [];

    for (let i = 0; i < 16; i++){
        const etchRow = document.createElement('div');
        main.appendChild(etchRow);
        etchRow.style.display = 'flex';

        for (let j = 0; j < 16; j++){
            const etchColumn = document.createElement('div');
            etchRow.appendChild(etchColumn);
            etchColumn.style.width = '16px';
            etchColumn.style.height = '16px';
            etchColumn.style.backgroundColor = 'rgb(215, 220, 228)';

            etchColumns.push(etchColumn);

            etchColumn.addEventListener('mouseenter', function(){
                etchColumn.style.backgroundColor = 'black';
            });
            etchColumn.addEventListener('mouseleave', function(){
                etchColumn.style.backgroundColor = '';
            });
        }
    }
    function cleanBoard(){
        for (let i = 0; i < etchColumns.length; i++) {
            
            etchColumns[i].style.backgroundColor = 'rgb(215, 220, 228)';
        }
    }
    
