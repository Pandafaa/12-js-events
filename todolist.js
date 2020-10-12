const root = document.getElementById('root');
const header =document.getElementById('header');
const button =document.createElement('button');
button.append(document.createTextNode('Add item'));
button.classList.add('addItem');
const input = document.createElement('input');
const list = document.createElement('ol');
header.append(button,input);
button.onclick=addItemToList;


function addItemToList(event) {
    const toDo = document.createElement('li');
    const toDoName =document.createElement('p');
    toDoName.append(document.createTextNode(input.value)) ;
if(toDoName.textContent==''){

    return;
}
    toDoName.classList.add('text');
    const close = document.createElement("button");
   close.append(document.createTextNode('Done'));
close.addEventListener('click',removeTodo);
    close.classList.add("close");
   toDo.append(toDoName);
   toDo.append(close);
   list.append(toDo);
    root.append(list);
   input.value='';
}
function removeTodo(event) {
    event.target.parentElement.remove();

}
