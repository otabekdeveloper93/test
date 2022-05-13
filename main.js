const input = document.getElementById('text');
const add = document.getElementById('add'),
blank = document.getElementById('blank');
const btnAll = document.querySelector('#btn-all');
const modalWindow = document.querySelector('.modal');
const modalBtn = document.querySelector('.btn-modal')
const closeModal = document.querySelector('#close-x')
add.addEventListener('click', addList);

function addList(e){
    e.preventDefault();
    let itemValue = input.value;
    if(itemValue.length == 0 || itemValue == " "){
        alert("Iltimos ma'lumotni to'gri kiriting! ")
    }else if(itemValue == +itemValue){
        alert("siz raqam kiritdingiz!")
    }else{
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
    }
}
modalBtn.addEventListener('click', ()=>{
    modalWindow.classList.add('d-block')

})
closeModal.addEventListener('click', ()=>{
    modalWindow.classList.remove('d-block')
})