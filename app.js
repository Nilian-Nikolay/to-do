const createBtn = document.getElementById('create');

createBtn.addEventListener('click', function(){

    const title = document.getElementById('title').value;
    
    if (title !=='' && title !==' '){
        const list = document.getElementById('list');
        const listItem = document.createElement('li');
        listItem.className = "list-group-item";
        listItem.textContent = title;
        list.appendChild(listItem);
        document.getElementById('title').value ='';
        
        
        
        const delitBtn = document.createElement('button');
        delitBtn.className = 'btn btn-danger ms-2 float-end';
        delitBtn.textContent = "✕";
        delitBtn.onclick = function(){
            listItem.remove();
        };
        listItem.appendChild(delitBtn);


        const doneButton = document.createElement('button');
        doneButton.className = 'btn btn-primary ms-2 float-end';
        doneButton.textContent = '✓';
        doneButton.onclick = function() {
            if (listItem.style.textDecoration === 'line-through') {
                listItem.style.textDecoration = '';
                doneButton.classList.remove('btn-success'); 
            } else {
                listItem.style.textDecoration = 'line-through';
                doneButton.classList.add('btn-success'); 
            }
        };
        listItem.appendChild(doneButton);
        
        const notes = list.querySelectorAll('li');
        if (notes.length < 1) {
            list.innerHTML = `<p class="empty-msg">Записей нет</p>`;
            return;
        }


    }
});
