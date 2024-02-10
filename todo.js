let todoList = [{todoItem:'books', dueDate: '03/02/2024'},{todoItem:'pens', dueDate: '03/02/2024'}];
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let Item = inputElement.value;
    let Date = dateElement.value;

    todoList.push({todoItem:Item, dueDate:Date});

    inputElement.value='';
    dateElement.value='';

    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml='';
    for (let i=0; i<todoList.length; i++) {
        // displayElement.innerText +="\n" + todoList[i];
        let item = todoList[i].todoItem;
        let date = todoList[i].dueDate;

        // let {item, date} = todoList[i];
        newHtml += `
        
            <span>${item}</span>
            <span>${date}</span>
            <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems();"> Delete </button>
        
        `;
    }
    containerElement.innerHTML = newHtml;
}