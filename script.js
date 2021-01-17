const allItems = document.querySelectorAll('.items');
const chevron = document.querySelectorAll('.icone-titre')
const enfants = document.querySelectorAll('.items a');

allItems.forEach(item => {

    item.addEventListener('click', () => {

        item.classList.toggle('active')


        for(i = 0; i < chevron.length; i++) {

            if(chevron[i].getAttribute('data-anim') === item.getAttribute('data-anim')){

                chevron[i].classList.toggle('icones-active');

            }

        }

    })

})

enfants.forEach(enfant => {
    enfant.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})