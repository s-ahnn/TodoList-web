const addButton = document.getElementById('add');
const textContainer = document.getElementById('textContainer');

addButton.addEventListener('click', () => {
    const Check = document.createElement('input');
    Check.type = 'checkbox';
    textContainer.appendChild(Check);

    const Todo = document.createElement('input');
    Todo.type = 'text';
    textContainer.appendChild(Todo);
})