const input = document.getElementById('text');
const add = document.getElementById('add'),
blank = document.getElementById('blank');

add.addEventListener('click', addList);

function addList(e){
    e.preventDefault();
    if(input.value.length == 0 || input.value.length == " "){
        alert("Iltimos ma'lumotni to'gri kiriting! ")
    }
    let itemValue = input.value;
    let listGroup = document.createElement("li");
    listGroup.className = "list-group-btn";
    listGroup.appendChild(document.createTextNode(itemValue));
    blank.appendChild(listGroup);
    let btnTrash = document.createElement('i');
    btnTrash.className = "bx bxs-trash";
    listGroup.appendChild(btnTrash);

    listGroup.addEventListener('click', () =>{
        listGroup.classList.toggle('completed');
        btnTrash.style.color = '#f00';
        let check = document.createElement('i');
        check.className = 'bx bx-check';
        listGroup.appendChild(check);
    });

    btnTrash.addEventListener('click', () =>{
        listGroup.remove(btnTrash);
    });

    // let btnAll = document.querySelector('#all'),
    //     btnComplete =document.querySelector("#compl"),
    //     btnInComplete = document.querySelector("#incompl");
    //     let listChilds = blank.childNodes;
    // btnAll.addEventListener('click', filterList)

    // function filterList(e){
    //     let listremove = [];

            
    // }



}


// search filter

 