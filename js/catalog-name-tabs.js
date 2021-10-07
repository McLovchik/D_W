document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__name').forEach(function(tabsBtnName) {
        tabsBtnName.addEventListener('click', function(event) {
            const name = event.currentTarget.dataset.name
            document.querySelectorAll('.catalog__about').forEach(function(tabsNameContent) {
                tabsNameContent.classList.remove('catalog__about-active')
            })
            document.querySelector(`[data-about="${name}"]`).classList.add('catalog__about-active')
        })
    })
})    
