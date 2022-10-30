let taskInputDOM = document.querySelector('#task-input')
taskInputDOM.addEventListener('submit', formHandler)

let taskListDOM = document.querySelector('#task-list')
let taskTextDOM = document.querySelector('#task-text')
let taskItemDOM = document.querySelector('#task-item')


function formHandler(event) {
    event.preventDefault()
    // console.log(taskTextDOM.value)

}
function addItem() {
    let liDOM = document.createElement('li')
    liDOM.classList.add("task-item-cs")
    taskItemDOM.append(liDOM)
    liDOM.innerHTML = `${taskTextDOM.value}`
    taskTextDOM.value = ""

    liDOM.addEventListener('click', function() {
        liDOM.style.textDecoration = 'line-through'
        liDOM.style.backgroundColor = '#87BBA2'
    } )
    
    liDOM.addEventListener('dblclick', function() {
        taskItemDOM.removeChild(liDOM)
    })
}

function removeItem() {
    let liDOM = document.getElementsByClassName('task-item-cs')
    taskItemDOM.remove(liDOM)
}






