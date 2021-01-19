//contsainer-div
const itemSelect=document.querySelector('.item-select');

//option div
const op=document.querySelector('.item-option');

//div to display selected value
const itemValue=document.querySelector('.item-value .select');

//options
const opt=Array.from(document.querySelectorAll('.item-option .select'));


//function to toggle elements
const toggleValue=()=>{


    itemSelect.classList.toggle('selected');
    
    op.classList.toggle('selected');

    opt.forEach(item=>{
        item.classList.toggle('selected')
    });

    itemValue.classList.toggle('selected');

}


//calling the function with the click event
itemSelect.addEventListener('click',()=>{
    
    toggleValue();
});



//options to be selected
opt.forEach(item=>{

    item.addEventListener('click',()=>{
        itemValue.innerHTML=item.textContent;

        toggleValue();

    });
})