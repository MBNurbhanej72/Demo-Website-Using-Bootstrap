document.addEventListener("DOMContentLoaded", function () {
	let bookNowButton = document.getElementById("bookNow");

	bookNowButton.addEventListener("click", function () {
		// Toggle between blue and red color when clicked
		if (this.classList.contains("blue-clr")) {
			this.classList.remove("blue-clr");
		} else {
			this.classList.add("blue-clr");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	let bookNowButton = document.getElementById("bookNow1");

	bookNowButton.addEventListener("click", function () {
		// Toggle between blue and red color when clicked
		if (this.classList.contains("blue-clr")) {
			this.classList.remove("blue-clr");
		} else {
			this.classList.add("blue-clr");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	let bookNowButton = document.getElementById("bookNow2");

	bookNowButton.addEventListener("click", function () {
		// Toggle between blue and red color when clicked
		if (this.classList.contains("blue-clr")) {
			this.classList.remove("blue-clr");
		} else {
			this.classList.add("blue-clr");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	let bookNowButton = document.getElementById("bookNow3");

	bookNowButton.addEventListener("click", function () {
		// Toggle between blue and red color when clicked
		if (this.classList.contains("blue-clr")) {
			this.classList.remove("blue-clr");
		} else {
			this.classList.add("blue-clr");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	let bookNowButton = document.getElementById("bookNow4");

	bookNowButton.addEventListener("click", function () {
		// Toggle between blue and red color when clicked
		if (this.classList.contains("blue-clr")) {
			this.classList.remove("blue-clr");
		} else {
			this.classList.add("blue-clr");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	let bookNowButton = document.getElementById("bookNow5");

	bookNowButton.addEventListener("click", function () {
		// Toggle between blue and red color when clicked
		if (this.classList.contains("blue-clr")) {
			this.classList.remove("blue-clr");
		} else {
			this.classList.add("blue-clr");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	let cards = document.querySelectorAll(".click");
	cards.forEach(function (card) {
		card.addEventListener("click", function () {
			// Find the parent card container
			let cardContainer = this.closest(".card-flip");
			// Toggle the 'flip' class to rotate the card
			cardContainer.classList.toggle("flip");
		});
	});
});

document.getElementById("confetti1").addEventListener("click", () => {
	confetti();
});
document.getElementById("confetti2").addEventListener("click", () => {
	confetti();
});
document.getElementById("confetti3").addEventListener("click", () => {
	confetti();
});

document.addEventListener("DOMContentLoaded", function () {
	let logo = document.getElementById("logo");
	let banner1 = document.getElementById("banner1");
	let banner2 = document.getElementById("banner2");
	let carouselIndicators = document.querySelectorAll(
		"#carouselExampleCaptions .carousel-indicators button"
	);
	let banner1Visible = true;

	logo.addEventListener("click", function (evt) {
		evt.preventDefault();
		// Toggle visibility of banners
		if (banner1Visible) {
			banner1.style.display = "none";
			banner2.style.display = "block";
			// Set the second indicator button as active
			carouselIndicators[1].click();
			banner1Visible = false;
		} else {
			banner1.style.display = "block";
			banner2.style.display = "none";
			// Set the first indicator button as active
			carouselIndicators[0].click();
			banner1Visible = true;
		}
	});
});
