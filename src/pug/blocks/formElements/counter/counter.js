const changeCounter = ()=> {
    const minusCount= (total)=>{       
        total.value--;
    }
    const plusCount = (total)=> {
        total.value++;
    }

    
    document.body.addEventListener('click', (event)=> {
        const target = event.target;
        if (target.matches('.counter__button')) {  
            const total = target.parentNode.children[1]; 
            if (target.matches('.counter__minus')&&(total.value>0)) { 
                minusCount(total);
              }  else  if (target.matches('.counter__plus')){
                  plusCount(total);                  
              }           
            
            
        }
    })
}

changeCounter();