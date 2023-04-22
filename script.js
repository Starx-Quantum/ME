setTimeout(() => {
	for (let i = 0; i < Math.round(innerHeight / Math.PI); i++) {
		let size = Math.random() / 2;
		let x = Math.round(Math.random() * 100);
		let y = Math.round(Math.random() * 100);
		let s = document.createElement("s");
		s.style.width = size + "vmin";
		s.style.height = size + "vmin";
		s.style.left = x + "%";
		s.style.top = y + "%";
		star.prepend(s);
	}
}, 3000);

setTimeout(() => {
	cat.classList.add("animCat");
	mac.style.opacity = 0;
}, 12000);
setTimeout(() => {
	me.classList.add("animMe");
}, 18000);

function prlx(event) {
	this.querySelectorAll(".prlx").forEach((layer) => {
		let speed = layer.getAttribute("data-speed");
		layer.style.transform = "translateX(" + (event.pageX * speed) / 1000 + "px)";
		bridge.style.filter =
			"drop-shadow(" + event.pageX / 1000 + "vmin 0 0 #281f7f)";
	});
}

document.addEventListener("mousemove", prlx);
