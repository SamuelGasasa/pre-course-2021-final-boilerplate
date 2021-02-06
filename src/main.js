const addButton=document.getElementById('add-button');
addButton.addEventListener('click', addToList);
const ViewSection=document.getElementById('view-section');
const input=document.getElementById('text-input');
const counterDiv=document.getElementById('counter');
const list=document.getElementById('todoList');
const sortButton=document.getElementById('sort-button');
sortButton.addEventListener('click',sortList)
// let nano=new Date();
// alert(nano.getSeconds());
let counter=0;
let arr=[];

function addToList(){
    let li=document.createElement('li');
    let textDiv=document.createElement('div');;
    let containerDiv=document.createElement('div');
    let dateDiv=document.createElement('div');
    let priorityDiv=document.createElement('div');
    containerDiv.classList.add('todo-container');
    textDiv.classList.add('todo-text');
    dateDiv.classList.add('todo-created-at');
    priorityDiv.classList.add('todo-priority');
    let inputText=input.value;
    textDiv.innerText=inputText;
    let date=new Date();
    let tarich=createDate(date);
    dateDiv.innerText=tarich;
    let prio=document.getElementById('priority-selector').value;
    priorityDiv.innerText=prio;
    ViewSection.append(containerDiv);
    containerDiv.append(priorityDiv);
    containerDiv.append(dateDiv);
    containerDiv.append(textDiv);
    input.value='';
    input.focus();
    // alert();
    counter++;
    counterDiv.innerText='TODO: '+counter;
    li.append(containerDiv);
    list.append(li);
    let obj={
      "text":inputText,
      "priority":prio,
      "date":tarich
    }
    arr.push(obj);
    localStorage.setItem('my-todo',JSON.stringify(arr));
    
}

// create SQL date format
function createDate(date) {
    let newDate;
    newDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+ date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    return newDate;
}
// taken!
function sortList(){
    let i, switching, b, shouldSwitch;
    // list = document.getElementById("id01");
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
        
        if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
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

// test
//   let newArr=[
//       {
//           "text": 'An example to-do',
//           "priority": "1",
//           "date": 1611662776177
//       },
//       {
//           "text": "A second example to-do",
//           "priority": "4",
//           "date": 1611661776177
//       }
//   ]

  
//   localStorage.setItem('local',JSON.stringify(newArr));
//   let stam=localStorage.getItem('local');
//   let js=JSON.parse(stam);
//   console.log(js);
// //   for(var i =0; i < localStorage.length; i++){
// //     console.log(localStorage.getItem(localStorage.key(i)[text]));
// //  }
//   // console.log(newArr[0].text);







// end of test