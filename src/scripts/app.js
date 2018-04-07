const slider = require('./common/slider');
slider(); // инициализируем слайдер

const hamburger = require('./common/hamburger-menu');
hamburger();

const scrollBlog = require('./common/scroll-blog');
scrollBlog(); 

const aviatitle = require('./common/anmtxt');
aviatitle();

const preloader = require('./common/preloader');
preloader();

const map = require('./common/map');
map();

//parallax
const parallaxContainer = document.getElementById('parallax-content');
const layers = parallaxContainer.children;

const moveLayers = e => {
	const initialX = window.innerWidth/2 - e.pageX;
	const initialY = window.innerHeight/2 - e.pageY;

	Array.from(layers).forEach((layer, i) => {
		const divider = i / 100;
		const positionX = initialX * divider;
		const positionY = initialY * divider;
		const bottomPosition = window.innerHeight / 2 * divider;
		const image = layer.firstElementChild;

		layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
		image.style.bottom = `-${bottomPosition}px`;
	});
};

window.addEventListener('mousemove', moveLayers);



/*var http = require('http'),
	express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.end('Portfolio');
}); 
http.createServer(app).listen(3000); */







