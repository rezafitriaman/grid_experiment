function desktopOrMobile(x) {
    if (x.matches) { // If media query matches
     	//do nothing
    } else {
        smoothscroll();
        animateSection();
        onScrollActive();
    }
}

var x = window.matchMedia("(max-width: 768px)")
desktopOrMobile(x) // Call listener function at run time
x.addListener(desktopOrMobile) // Attach listener function on state changes

function smoothscroll() {
	//select target
	var navTarget = document.getElementById('secondNav').getElementsByTagName('a');

	//loop through the secondnavigation
	for (var i = 0; i < navTarget.length; i++) {
		//on click
		navTarget[i].addEventListener("click", function (e) {
			e.preventDefault()

			var elmTarget = this.getAttribute('href').split('#')[1];
			//scroll to the id target
			document.getElementById(elmTarget).scrollIntoView({ block: 'center', behavior: 'smooth' });
		});
	}
};

function animateSection() {
	var section_A = document.getElementsByClassName('section-a')[0];
	var section_B = document.getElementsByClassName('section-b')[0];
	var section_C = document.getElementsByClassName('section-c')[0];
	var section_D = document.getElementsByClassName('section-d')[0];

	var title = document.getElementsByClassName('title');
	var img = document.getElementsByClassName('img-box');
	var d_right = document.getElementsByClassName('d-right');
	var d_left = document.getElementsByClassName('d-left');
	var buttonOn_C = document.getElementsByClassName('section-c')[0].getElementsByClassName('btn')[0];
	var wh = window.innerHeight;
	var controller = new ScrollMagic.Controller();

	var move_Sec_A = function() {
		TweenLite.fromTo(img[0], 0.5, {opacity: 0, y: 400, ease: Power1.easeIn}, {opacity: 1, y: 0});

		TweenLite.fromTo(title[0], 0.5, {opacity: 0, y: 0}, {opacity: 1, ease: Power2.easeIn, delay: 0.5});

		TweenLite.fromTo(d_left[0], 0.5, {opacity: 0, x: -300}, {opacity: 1, x: 0, ease: Power2.easeIn});
    }

	var move_Sec_B = function() {
		TweenLite.fromTo(img[1], 0.5, {opacity: 0, y: 400, ease: Power1.easeIn}, {opacity: 1, y: 0});

		TweenLite.fromTo(title[1], 0.5, {opacity: 0, y: 0}, {opacity: 1, ease: Power2.easeIn, delay: 0.5});

		TweenLite.fromTo(d_right[0], 0.5, {opacity: 0, x: 300}, {opacity: 1, x: 0, ease: Power2.easeIn});
    }

    var move_Sec_C = function() {
		TweenLite.fromTo(img[2], 0.5, {opacity: 0, y: 400, ease: Power1.easeIn}, {opacity: 1, y: 0});

		TweenLite.fromTo(title[2], 0.5, {opacity: 0, y: 0}, {opacity: 1, ease: Power2.easeIn, delay: 0.5});

		TweenLite.fromTo(d_left[1], 0.5, {opacity: 0, x: -300}, {opacity: 1, x: 0, ease: Power2.easeIn});

		TweenLite.fromTo(buttonOn_C, 0.5, {opacity: 0, x: 0}, {opacity: 1, delay: 0.5, ease: Power2.easeIn});
    }

    var move_Sec_D = function() {
		TweenLite.fromTo(img[3], 0.5, {opacity: 0, y: 400, ease: Power1.easeIn}, {opacity: 1, y: 0});

		TweenLite.fromTo(title[3], 0.5, {opacity: 0, y: 0}, {opacity: 1, ease: Power2.easeIn, delay: 0.5});

		TweenLite.fromTo(d_right[1], 0.5, {opacity: 0, x: 300}, {opacity: 1, x: 0, ease: Power2.easeIn});
    }

    new ScrollMagic.Scene({
		offset: wh*0.2,
		triggerElement: section_A

    })
	.setTween(move_Sec_A)
	.reverse(false)
    .addTo(controller); // assign the scene to the controller

	new ScrollMagic.Scene({
		offset: wh*0.2,
		triggerElement: section_B

    })
	.setTween(move_Sec_B)
	.reverse(false)
    .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
		offset: wh*0.2,
		triggerElement: section_C

    })
	.setTween(move_Sec_C)
	.reverse(false)
    .addTo(controller); // assign the scene to the controller

    new ScrollMagic.Scene({
		offset: wh*0.2,
		triggerElement: section_D

    })
	.setTween(move_Sec_D)
	.reverse(false)
    .addTo(controller); // assign the scene to the controller
};

function onScrollActive() {
	var navTarget = document.getElementById('secondNav').getElementsByTagName('a');

	var section_A = document.getElementsByClassName('section-a')[0];
	var section_B = document.getElementsByClassName('section-b')[0];
	var section_C = document.getElementsByClassName('section-c')[0];
	var section_D = document.getElementsByClassName('section-d')[0];

	var controller = new ScrollMagic.Controller();
	var wh = window.innerHeight;

	var help_center = document.getElementById('secondNav').getElementsByTagName('a')[0];
	var e_learning = document.getElementById('secondNav').getElementsByTagName('a')[1];
	var training_certification = document.getElementById('secondNav').getElementsByTagName('a')[2];
	var client_support = document.getElementById('secondNav').getElementsByTagName('a')[3];

    new ScrollMagic.Scene({ triggerElement: section_A, offset: wh*0.5 })
        .on('start', function () {

        	for (var i = 0; i < navTarget.length; i++) {
        		navTarget[i].classList.remove('active')
        	}
        	if(!help_center.classList.contains('active')) {
        		help_center.classList.add('active')
        	}else {
        		help_center.classList.remove('active')
        	}
            
        })
        .addIndicators()
        .addTo(controller);

    //section B and C Need 2 start triggers. on scroll down and on scroll up add class active
    //start section_B
    new ScrollMagic.Scene({ triggerElement: section_B, offset: wh*0.326 })
        .on('start', function () {

        	for (var i = 0; i < navTarget.length; i++) {
        		navTarget[i].classList.remove('active')
        	}
        	if(!e_learning.classList.contains('active')) {
        		e_learning.classList.add('active')
        	}else {
        		e_learning.classList.remove('active')
        	}
            
        })
        .addIndicators()
        .addTo(controller);

     new ScrollMagic.Scene({ triggerElement: section_B, offset: wh*0.6 })
        	.on('start', function () {
        	console.log('end')
        	for (var i = 0; i < navTarget.length; i++) {
        		navTarget[i].classList.remove('active')
        	}
        	if(!e_learning.classList.contains('active')) {
        		e_learning.classList.add('active')
        	}else {
        		e_learning.classList.remove('active')
        	}
            
        })
        .addIndicators()
        .addTo(controller);
    //end section_B

    //start section_C
    new ScrollMagic.Scene({ triggerElement: section_C, offset: wh*0.32 })
        .on('start', function () {

        	for (var i = 0; i < navTarget.length; i++) {
        		navTarget[i].classList.remove('active')
        	}
        	if(!training_certification.classList.contains('active')) {
        		training_certification.classList.add('active')
        	}else {
        		training_certification.classList.remove('active')
        	}
            
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: section_C, offset: wh*0.6 })
        .on('start', function () {

        	for (var i = 0; i < navTarget.length; i++) {
        		navTarget[i].classList.remove('active')
        	}
        	if(!training_certification.classList.contains('active')) {
        		training_certification.classList.add('active')
        	}else {
        		training_certification.classList.remove('active')
        	}
            
        })
        .addIndicators()
        .addTo(controller);
    //end section_C

    new ScrollMagic.Scene({ triggerElement: section_D, offset: wh*0.321})
        .on('start', function () {

        	for (var i = 0; i < navTarget.length; i++) {
        		navTarget[i].classList.remove('active')
        	}

        	if(!client_support.classList.contains('active')) {
        		client_support.classList.add('active')
        	}else {
        		client_support.classList.remove('active')
        	}
            
        })
        .addIndicators()
        .addTo(controller);
};