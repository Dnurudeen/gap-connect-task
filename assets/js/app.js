const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}




/* CLIENT SECTION */
$(document).ready(function() {
	setSlider();
	$(window).resize(function() {
		setSlider();
	});
});

function setSlider() {
	var outerRightOffset = $('.js-mainWrap').width();
	var innerRightOffset = ($('.js-imgList').find('li').length * $('.js-imgList').find('li').outerWidth()) + (($('.js-imgList').find('li').length - 1) * 10);
	var counterRight = 1, counterLeft = 0, totalItemLeft = 0;
	
	$('.js-slide-right').addClass('hide');
	$('.js-slide-left').addClass('hide');
	$('.js-imgList').css('left', 0);
	
	if(innerRightOffset > outerRightOffset) {
		totalItemLeft = Math.ceil(Math.ceil(innerRightOffset - outerRightOffset) / 130);
		$('.js-slide-right').removeClass('hide');
	}
	
	$('.js-slide-right').on('click', function () {
		if(counterRight <= totalItemLeft) {
			$('.js-slide-left').removeClass('hide');
			$('.js-imgList').css('left', -(counterRight * 130)+'px');
			
			counterRight == totalItemLeft && $('.js-slide-right').addClass('hide'); 
			
			counterRight++;
			counterLeft = counterLeft ? counterLeft - 1 : counterLeft;
		}	
	});
	
	$('.js-slide-left').on('click', function () {
		if( counterRight > 1) {
			$('.js-slide-right').removeClass('hide');
			$('.js-imgList').css('left', (Math.ceil($('.js-imgList').css('left').split("px")[0]) + 130)+'px');
			counterLeft++;
			counterRight = counterRight - 1;
			counterRight == 1 && $('.js-slide-left').addClass('hide');
		}	
	});
}




/* ANIMATION PART */
$(window).scroll(function() {
	$(".animation .anm_mod").each(function() {
	 const position = $(this).offset().top;
	 const scroll = $(window).scrollTop();
	 const windowHeight = $(window).height();
	 if (scroll > position - windowHeight) {
	  $(this).addClass("active");
	 }
	 if (scroll < 20) {
	  $(this).removeClass("active");
	 }
	});
   });
   
   $(function () {
    $('a[href^="#"]').click(function () {
        const speed = 800; // Animation speed in milliseconds
        const paddingTop = 100; // Scroll padding in pixels (e.g., height of fixed header)
        const href = $(this).attr("href");
        const target = $(href === "#" || href === "" ? "html" : href);
        
        if (target.length) {
            const position = target.offset().top - paddingTop; // Adjust scroll position
            $("html, body").animate({ scrollTop: position }, speed, "swing");
        }

        return false;
    });
});

   




   /* GOOGLE MAP */
   function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.1380659, lng: -106.6572985},
        zoom: 12,
        mapTypeControl: false,
        disableDefaultUI: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });
}



/* CONTACT FORM VALIDATION */
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    let isValid = true;

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long";
        isValid = false;
    }

    // Validate email
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    }

    // If valid, show success message, otherwise, show an error
    if (isValid) {
        Swal.fire({
            icon: "success",
            title: "Form Submitted Successfully",
            text: "Thank you for your submission!",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Form Submission Failed",
            text: "Please correct the highlighted errors and try again.",
        });
    }
});





/* BACK TO TOP BUTTON */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





const gallery = document.getElementById("slider");
const left = document.getElementsByClassName("left2")[0];
left.classList.add("disabled");
const right = document.getElementsByClassName("right2")[0];
const images = 10;
const imagesUrl = "https://picsum.photos/seed/{seed}/500/350";
var selected = 0;

function init() {
  for (var i = 0; i < images; i++) {
    var imageWrapper = document.createElement("div");
    imageWrapper.id = `image_${i}`;
    imageWrapper.classList.add("wrapper");
    if (i === selected) {
      imageWrapper.classList.add("selected");
    }
    var image = document.createElement("img");
    image.src = imagesUrl.replace(
      "{seed}",
      i + 1 + Math.floor(Math.random() * 100)
    );
    imageWrapper.appendChild(image);
    var mirrored = image.cloneNode();
    mirrored.classList.add("flipped");
    imageWrapper.appendChild(mirrored);
    gallery.appendChild(imageWrapper);
  }
}

init();

right.onclick = function () {
  selected++;
  if (selected > images - 1) {
    selected = images - 1;
  }
  handleSelection();
};

left.onclick = function () {
  selected--;
  if (selected < 0) {
    selected = 0;
  }
  handleSelection();
};

function handleSelection() {
  var images = document.getElementsByClassName("wrapper");
  if (selected === images.length - 1) {
    right.classList.add("disabled");
  } else {
    right.classList.remove("disabled");
  }
  if (selected === 0) {
    left.classList.add("disabled");
  } else {
    left.classList.remove("disabled");
  }
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (img.id === `image_${selected}`) {
      img.classList.add("selected");
    } else {
      img.classList.remove("selected");
    }
  }
}
