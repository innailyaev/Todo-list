const form = document.querySelector("#form");
const input = document.querySelector("#inputText");
let todo = document.querySelector("#todo");

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
        if(Crud.count<0)
            Crud.count=0;
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
    // const text = document.createElement("p");
    // const buttonRemove = document.createElement("button");
    // const buttonEdit = document.createElement("button");
    // const checkbox = document.createElement("input");
    // const item = document.createElement("li");
    let item=`<li id=${task.getLastTask().id}>
                <input type='checkbox' class='checkbox'> 
                <button class='edit'>X</button>
                <p class=${task.getLastTask().id}>${task.getLastTask().text}<p>
                <button class='buttonRemove'>Edit</button>
                </li>`
    // item.setAttribute('id', task.getLastTask().id);
    // text.setAttribute('class', task.getLastTask().id);
    let buttonRemove=document.querySelector('.buttonRemove');
    let checkbox=document.querySelector('.checkbox');
    // text.innerText = task.getLastTask().text;
    // buttonRemove.innerText = "X";
    // buttonEdit.innerHTML='Edit'
    // checkbox.type = "checkbox";  
    input.value = null;
    // item.appendChild(checkbox);
    // item.appendChild(buttonEdit);
    // item.appendChild(text);
    // item.appendChild(buttonRemove);
    todo+=item;
    
    

    // button
    buttonRemove.addEventListener("click",  ()=> {
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
            item.childNodes[2].classList.add('line');
        }
        else{
            item.childNodes[2].classList.remove('line');
        }
    })
});

// module.exports=Crud;









// task.createTask('buy milk');
// task.createTask('buy water');
// task.readAll();
// task.deleteTask(0);
// task.deleteAll();
// task.updateTask(0,'buy chocolate')
// task.readAll();
