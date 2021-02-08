const addButton=document.getElementById('add-button');
addButton.addEventListener('click', addToList);
const ViewSection=document.getElementById('view-section');
const input=document.getElementById('text-input');
const counterDiv=document.getElementById('counter');
const list=document.getElementById('todoList');
const sortButton=document.getElementById('sort-button');
sortButton.addEventListener('click',sortList);
let counter=0;
const selectPriority= document.getElementById('priority-selector');
let arr=[];

function addToList(){
    let prio=selectPriority.value;
    let inputText=input.value;

    // alert the user if no priority select or no text written 
    if(!inputText){
      alert('please enter text');
      return ;
    }
    if(!prio){
      alert('please select priority');
      return ;
    }

    // create all the element that will be added to html and add classes to them
    let li=document.createElement('li');
    li.classList.add('panel');
    let textDiv=document.createElement('div');;
    let containerDiv=document.createElement('div');
    let dateDiv=document.createElement('div');
    let priorityDiv=document.createElement('div');
    containerDiv.classList.add('todo-container');
    textDiv.classList.add('todo-text');
    dateDiv.classList.add('todo-created-at');
    priorityDiv.classList.add('todo-priority');
    textDiv.innerText=inputText;
    let date=new Date();
    let tarich=createDate(date);
    dateDiv.innerText=tarich;
    priorityDiv.innerText=prio;
    ViewSection.append(containerDiv);
    containerDiv.append(priorityDiv);
    containerDiv.append(dateDiv);
    containerDiv.append(textDiv);
    input.value='';
    input.focus();
    counter++;
    counterDiv.innerText='TODO: '+counter;
    li.append(containerDiv);
    list.append(li);

    // saves the the todo list in object in local storage
    let obj={
      "text":inputText,
      "priority":prio,
      "date":tarich
    }
    arr.push(obj);
    localStorage.setItem('my-todo',JSON.stringify(arr));

    // adding the remove button
    const removeButton=document.createElement('span');
    removeButton.innerText='[x]';
    removeButton.classList.add('remove-button');
    li.append(removeButton);
    
    // reset the select tag
    selectPriority.value="";
}

// create SQL date format
function createDate(date) {
    let newDate;
    newDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+ date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    return newDate;
}
// taken from the the internet and add adjustment !
function sortList(){
    let i, switching, b, shouldSwitch;

    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      b = list.getElementsByClassName('todo-priority');
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        
        if (Number(b[i].innerHTML) < Number(b[i + 1].innerHTML)) {
          /* if next item is numerically
          lower than current item, mark as a switch
          and break the loop: */
          shouldSwitch = true;
        //   alert(b[i].closest('li').innerText);
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
       list.insertBefore(b[i + 1].closest('li'), b[i].closest('li'));
       switching = true;
      }
    }
}


const container=document.getElementById('view-section');
container.addEventListener('click', remove);

// remove function 
function remove(event){
    if(event.target.className !== 'remove-button'){
        return ;
    }
    let panel=event.target.closest('.panel');
    panel.remove();
    counter--;
    counterDiv.innerText='TODO: '+counter;
}

const removeAll=document.getElementById('removeAll-button');
removeAll.addEventListener('click', deleteList);
function deleteList(){
  const panels=document.querySelectorAll('.panel');
  for(let pan of panels){
    pan.remove();
  }
  counter=0;
  counterDiv.innerText='TODO: '+counter;
}