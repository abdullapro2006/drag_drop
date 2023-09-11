const cards = document.querySelectorAll('.card');
const boxes = document.querySelectorAll('.box');

let draggedCard = null;

cards.forEach(card=>{
    card.addEventListener("dragstart",()=>{
        draggedCard = card;
    })

    card.addEventListener("dragend",()=>{
        draggedCard = null;
    })
})


boxes.forEach(box=>{
    box.addEventListener("dragover",e=>{
        e.preventDefault();
    })

    box.addEventListener("dragstart",()=>{
        box.classList.add("hovered");
    })

    box.addEventListener("dragleave",()=>{
        box.classList.remove("hovered");
    })

    box.addEventListener("drop",()=>{
        if(draggedCard){
            box.appendChild(draggedCard);

        }
    })
})


