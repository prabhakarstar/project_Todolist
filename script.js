var list1 = document.getElementById("todo");
var btn1 = document.getElementById("enter");
var list2 = document.getElementById("newlist");

btn1.addEventListener('click',function(){
    if(list1.value == ""){
        alert("your todo list is empty !");
    }
    else{
    input_value = list1.value;
    let newelement = document.createElement('li');
    newelement.innerHTML = `${input_value} <i class="fa fa-close"></i> `;
    list2.appendChild(newelement);
    list1.value = "";
    newelement.addEventListener('click',function(){
        this.classList.toggle('ok');
    })
    newelement.querySelector('i').addEventListener('click',function(){
        newelement.remove();
    })
    }
  
})




















