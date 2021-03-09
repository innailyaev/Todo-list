const form = document.querySelector("#form");
const input = document.querySelector("#inputText");
const todo = document.querySelector("#todo");

class Crud{
    static count=0;
    constructor(){
        this.toDoList=[];
    }

    createTask(newTodo){
        this.toDoList.push({
            text:newTodo,
            id:Crud.count++,
            completed: false,  
        })      
    }

    getLastTask(){
        return this.getList()[this.getList().length-1];
    }

    readTask(taskNum){
        return this.getList()[taskNum].text;
    }

    updateTask(taskNum,newText){
        this.getList()[taskNum].text=newText;
    }

    deleteTask(taskNum){
        this.getList().splice(taskNum, 1);
        Crud.count--;
    }

    readAll(){
        let arr=this.getList().forEach((t)=>{
            return t.text;
        })
        return arr;
    }

    deleteAll(){
        this.getList().splice(0, this.getList().length);
    }

    checkTask(taskNum,bol){
        this.getList()[taskNum].completed=bol;
        console.log(this.getList()[taskNum].completed);
    }

    getList(){
        return this.toDoList;
    }

    print(id){
        this.getList().forEach((t)=>{
            console.log(t.text);
        })
    }
}

let task=new Crud;

function addTodo() {
    const newTodo = input.value;
    if (!newTodo)return;
    
    task.createTask(newTodo);
}

form.addEventListener("submit",  (e)=> {
    e.preventDefault();
    addTodo(); 
    const text = document.createElement("p");
    const button = document.createElement("button");
    const checkbox = document.createElement("input");
    const item = document.createElement("li");
    item.setAttribute('id', task.getLastTask().id);
    text.setAttribute('class', task.getLastTask().id);
    text.innerText = task.getLastTask().text;
    button.innerText = "X";
    checkbox.type = "checkbox";  
    input.value = null;
    task.print(0);
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todo.appendChild(item);
    
    

    // button
    button.addEventListener("click",  ()=> {
        let taskId=item.getAttribute('id');
        console.log(taskId);
        console.log(task.count);

        task.deleteTask(taskId);
        task.print();
        document.getElementById(taskId).remove();
    })
    
    //checkbox
    checkbox.addEventListener("click", function (e) {
        let boolean=e.target.checked;
        let taskId=item.getAttribute('id');
        document.getElementById(taskId);
        task.checkTask(taskId,boolean);
        if(task.getList()[taskId].completed==true){
            item.childNodes[1].classList.add('line');
        }
        else{
            item.childNodes[1].classList.remove('line');
        }
    })
});










//   task.createTask('buy milk');
// task.createTask('buy water');
// task.readAll();
// task.deleteTask(0);
// task.deleteAll();
// task.updateTask(0,'buy chocolate')
// task.readAll();
