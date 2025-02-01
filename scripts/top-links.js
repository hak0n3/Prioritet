const country = document.querySelector('.country-house');
const commercial = document.querySelector('.commercial-space');

const countryList = document.querySelector('.country-house__container');
const commercialList = document.querySelector('.commercial-space__container');

country.addEventListener('mouseover', function() {
	countryList.classList.add('show');
});

country.addEventListener('mouseout', function() {
	countryList.classList.remove('show');
});

commercial.addEventListener('mouseover', function() {
	commercialList.classList.add('show');
});

commercial.addEventListener('mouseout', function() {
	commercialList.classList.remove('show');
});