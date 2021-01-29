const button=document.getElementById('add-button');
button.addEventListener('click', Add);
const ViewSection=document.getElementById('view-section');
const input=document.getElementById('text-input');

function Add(){
    let containerDiv=document.createElement('div');
    let textDiv=document.createElement('dive');
    let dateDiv=document.createElement('div');
    let priorityDiv=document.createElement('div');
    let inputText=input.value;
    textDiv.innerText=inputText;
    let date=new Date();
    dateDiv.innerText=date;
    priorityDiv.innerText=document.getElementById('priority-selector').value;
    ViewSection.append(containerDiv);
    containerDiv.append(textDiv);
    containerDiv.append(dateDiv);
    containerDiv.append(priorityDiv);
    // alert();
}