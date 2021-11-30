document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__name a').forEach(function(tabsBtnName) {
        tabsBtnName.addEventListener('click', function(event) {
            const target = event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.target
            const name = event.currentTarget.dataset.name
            document.querySelector(`[data-target="${target}"]`).querySelectorAll('.catalog__about').forEach(function(tabsNameContent) {
                tabsNameContent.classList.remove('catalog__about-active')
            })
            document.querySelector(`[data-target="${target}"]`).querySelector(`[data-about="${name}"]`).classList.add('catalog__about-active')
        })
    })
})    
