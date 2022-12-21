const gallery = document.getElementById("gallery")
let galleryWidth = gallery.scrollWidth

window.addEventListener("load", () => {
  self.setInterval(() => {
  	gallery.scrollTo(gallery.scrollLeft+1, 0);
		
		// the number should be dynamic
		if (gallery.scrollLeft == 1450) {
			gallery.scrollTo(0,0)
		}
  }, 10);
})