allTodos = []
// addelement = []
function eCom(){
    let input1 = todo.value
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    console.log(input1,date,time);
   if (input1 == '') {
    showError.style.display = 'block'
   
   }else{
    showError.style.display = 'none'
    showError2.style.display = 'none'
    boxes.style.visibility = 'visible'
    
    let todoObj = {
        todo: input1,
        date,
        time,
    }
    // console.log(todoObj);
    allTodos.push(todoObj)
    todo.value = ' '
    // console.log(alltodos);
    displayTodo()

   }  
}
function deletecomFirst() {
    allTodos.shift()
    displayTodo()
    console.log(allTodos);
}
function deletecomlast() {
    allTodos.pop()
    displayTodo()
    
}

function deleteall(){
    allTodos.splice(0,allTodos.length)
    displayTodo()

}
function deleteAny(){
    let deleteAnyItem = Number(prompt("which number"))
    console.log(deleteAnyItem);
    if(deleteAnyItem > allTodos.length){
        alert ("maximum number exceeded")
    }else{
        allTodos.splice(deleteAnyItem-1,1)
        displayTodo()
    }
}
function addstart(){
  let addelement =  prompt("write the element")
  let date = new Date().toLocaleDateString()
  let time = new Date().toLocaleTimeString()
   
   if(addelement == ''){
    alert("add element")
   }else{
   let todoObj = {
        todo:addelement ,
        date,
        time,
    }
    allTodos.unshift(todoObj)
    displayTodo()
   }
}
function displayTodo(){
    show.innerHTML = ''
    for (let i = 0; i < allTodos.length; i++) {
        let showedTodo = allTodos[i].todo
        let showedDate = allTodos[i].date
        let showedTime = allTodos[i].time
        
        show.innerHTML += `
        <div class="mt-lg-5 col-lg-6 col-11 mt-3 container mx-auto shadow p-3">
            <div>${i+1}</div>
         <h3>${showedTodo}</h3>
            <small>${showedDate}, ${showedTime}</small>
        </div>
        `
    }

   }
