const openDropdown = () => {
    const dropdownList = document.querySelector(".dropdown__list"); 
    document.body.addEventListener("click", (event) => {        
        const target = event.target;        
        event.preventDefault();
        if (target.closest(".dropdown")&&dropdownList.matches('.dropdown__close')) {            
            dropdownList.classList.remove('dropdown__close');
        } else if (!dropdownList.matches('.dropdown__close')&&!target.closest(".dropdown__list")) {
            dropdownList.classList.add('dropdown__close');
        }
    });               
}

openDropdown();