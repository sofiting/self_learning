var titulo = document.getElementsByTagName("header")[0];
titulo.id = 'my_id_test';
titulo.style.color = "white";
titulo.style.backgroundColor = "black";

var tarea = ["cita médico", "prepara cena", "vistar hermana","hablar con abogado"];
var todoList = document.querySelector('#todo_list');

tarea.forEach(function (t) {
    var tarea = t;
    addElement(tarea);
});

setTimeout(function () {
    var items = document.querySelectorAll('#todo_list li');
    items.forEach(function (item) {
        if (item.textContent == "hablar con abogado") {
               todoList.removeChild(item);
        }
    });
 
}, 2000);

var addTask = document.querySelector('#addTask');
addTask.addEventListener('click', function () {
    var tarea = document.querySelector('#todoTile').value;
    addElement(tarea);
});


function addElement(tarea) {
    var li = document.createElement("li");
    li.textContent = tarea;
    todoList.appendChild(li);
}

