const inputBox = document.getElementById('taskinput');
const button = document.getElementById('addtask');
const list = document.getElementById('tasklist');

button.addEventListener('click', ()=>{
    if(inputBox.value != ""){
    var li = document.createElement('li');
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    inputBox.value = "";}
    else{
        alert("It is empty try again");
    }

})
list.addEventListener('click',()=>{
    if(list.style.textDecorationLine === "line-through"){
        list.style.textDecorationLine = "none";
    }
    else{
        list.style.textDecorationLine = "line-through";
    }
});