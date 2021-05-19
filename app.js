// importing the data from the html file

let count = document.getElementById(`counting`)

let showBox = document.getElementById(`input-box`)

let clear = document.getElementById(`clear`)

let remove = document.getElementById(`decries`)

let newCount = 0;

count.addEventListener('click',function(){
    newCount +=1;
    showBox.innerHTML = newCount;
    
})

remove.addEventListener('click',function(){
    newCount -=1;
    showBox.innerHTML = newCount;
})

clear.addEventListener('click',function(){
    newCount = 0;
    showBox.innerHTML = newCount
})








































































