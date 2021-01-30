const button=document.getElementById('add-button');
button.addEventListener('click', Add);
const ViewSection=document.getElementById('view-section');
const input=document.getElementById('text-input');
// let nano=new Date();
// alert(nano.getDate());
function Add(){
    let containerDiv=document.createElement('div');
    containerDiv.classList.add('todo-container');
    let textDiv=document.createElement('dive');
    textDiv.classList.add('todo-text');
    let dateDiv=document.createElement('div');
    dateDiv.classList.add('todo-created-at');
    let priorityDiv=document.createElement('div');
    priorityDiv.classList.add('todo-priority');
    let inputText=input.value;
    textDiv.innerText=inputText;
    let date=new Date();
    dateDiv.innerText=createDate(date);
    priorityDiv.innerText=document.getElementById('priority-selector').value;
    ViewSection.append(containerDiv);
    containerDiv.append(textDiv);
    containerDiv.append(dateDiv);
    containerDiv.append(priorityDiv);
    input.value='';
    input.focus();
    // alert();
}


function createDate(date) {
    let newDate;
    newDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    return newDate;
}
