ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.758495, 37.601719],
        zoom: 15.5
    });
    var myPlacemark = new ymaps.Placemark([55.758495, 37.601719], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/contacts/place.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-5, -38]
    }); 
    myMap.geoObjects.add(myPlacemark) 
}