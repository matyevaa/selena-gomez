
	/*video*/
	var video = document.getElementById("video1");
	var theToggle = document.getElementById('toggle');

	function myFunction() {
		if (video.paused)
	    	video.play();
	 
	  	else
	    	video.pause();
	    
	}

	/*manu toggle*/
	function hasClass(elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}

	function addClass(elem, className) {
	    if (!hasClass(elem, className)) {
	    	elem.className += ' ' + className;
	    }
	}

	function removeClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
		if (hasClass(elem, className)) {
	        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
	            newClass = newClass.replace(' ' + className + ' ', ' ');
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    }
	}

	function toggleClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
	    if (hasClass(elem, className)) {
	        while (newClass.indexOf(" " + className + " ") >= 0 ) {
	            newClass = newClass.replace( " " + className + " " , " " );
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    } else {
	        elem.className += ' ' + className;
	    }
	}

	theToggle.onclick = function() {
	   toggleClass(this, 'on');
	   return false;
	}


	/*carousel about page*/
 
 	var slideIndex = 0;
  	var slides = document.getElementsByClassName("mySlides");
  	var dots = document.getElementsByClassName("dot");

	showSlides();

	function showSlides() {    
	    var i;    
	    for (i = 0; i < slides.length; i++)
	        slides[i].style.display = "none"; 
	    slideIndex++;
	    if (slideIndex> slides.length) 
	    	slideIndex = 1;
	    slides[slideIndex-1].style.display = "block"; 
	    setTimeout(showSlides, 5000); // Change image every 5 seconds
	}

	function currentSlide(no) {
	    var i;    
	    for (i = 0; i < slides.length; i++)
	        slides[i].style.display = "none"; 
	    slideIndex = no;
	    slides[no-1].style.display = "block";
	}

	function plusSlides(n) {
	  var newslideIndex = slideIndex + n;
	  if(newslideIndex < 4 && newslideIndex > 0)
	     currentSlide(newslideIndex);
	}
