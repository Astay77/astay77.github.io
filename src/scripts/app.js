const slider = require('./common/slider');
slider(); // инициализируем слайдер

const hamburger = require('./common/hamburger-menu');
hamburger();

const scrollBlog = require('./common/scroll-blog');
scrollBlog(); 

const aviatitle = require('./common/anmtxt');


/*var initMapObj = require('./common/map'); 
initMapObj.initMap(); 

var initMapObj = require('./common/map'); 
initMapObj.initMap();

const map = require('./common/map');
map();*/

//parallax
const parallaxContainer = document.getElementById('parallax-content');
const layers = parallaxContainer.children;

const moveLayers = e => {
	const initialX = window.innerWidth / 2 e.pageX;
	const initialY = window.innerHeight / 2 e.pageY;

	Array.from(layers).forEach(layer, i) => {
		const divider = i / 100;
		const positionX = initialX * divider;
		const positionY = initialY * divider;
		const bottomPosition = window.innerHeight / 2 * divider;
		const image = layer.firstElementChild;

		layer.style.transform = `translate(${initialX}px, ${initialY}px)`;
		image.style.bottom = `-${bottomPosition}px`;
	};
}

window.addEventListener('mousemove', moveLayers);






