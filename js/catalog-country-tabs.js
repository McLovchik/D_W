document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__btn-country').forEach(function(tabsBtnCountry) {
        tabsBtnCountry.addEventListener('click', function(event) {
            const country = event.currentTarget.dataset.country
            document.querySelectorAll('.catalog__content').forEach(function(tabsCountryContent) {
                tabsCountryContent.classList.remove('catalog__content-active')
            })
            document.querySelectorAll('.catalog__btn-country').forEach(el => {
                el.classList.remove("catalog__btn-country-offset-active");
            })
            document.querySelector(`[data-target="${country}"]`).classList.add('catalog__content-active')

            this.classList.add("catalog__btn-country-offset-active")
        })
    })
})
