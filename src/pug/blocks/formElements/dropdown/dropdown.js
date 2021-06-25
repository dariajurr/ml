const openDropdown = () => {
    const dropdownList = document.querySelector(".dropdown__list"); 
    const dropdownBtn = document.querySelector('.dropdown__btn');
    document.body.addEventListener("click", (event) => {        
        const target = event.target;          
        event.preventDefault();
        if (target.matches('.dropdown__btn')) {
            dropdownBtn.classList.toggle('dropdown__open');
            dropdownList.classList.toggle('dropdown__close');
        }  else if (!dropdownList.matches('.dropdown__close')&&!target.closest(".dropdown__list")) {
            dropdownBtn.classList.remove('dropdown__open');
            dropdownList.classList.add('dropdown__close');
        }
    });               
}

openDropdown();