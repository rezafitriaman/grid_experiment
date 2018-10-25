(function() {
	//select target
	var navTarget = document.getElementById('secondNav').getElementsByTagName('a');

	//loop through the secondnavigation
	for (var i = 0; i < navTarget.length; i++) {
		//on click
		navTarget[i].addEventListener("click", function (e) {
			e.preventDefault()
			//this is the grandparent of a
			/*var links = this.closest('.wrapper').getElementsByTagName('a');*/

			//loop through the links and delete active if contain it
			/*for (var i = 0; i < links.length; i++) {
				
				if(links[i].classList.contains('active')) {
					links[i].classList.remove('active')
				}
			}*/
			//then add active on the target click
			/*this.classList.add('active');*/
			//get the attr href then place it on get elementBy
			var elmTarget = this.getAttribute('href').split('#')[1];
			//scroll to the id target
			document.getElementById(elmTarget).scrollIntoView({ block: 'center', behavior: 'smooth' });
		});
	}
})();

(function() {
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
})();

(function() {
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
	
	/*new ScrollMagic.Scene({
		offset: wh*0.2,
		triggerElement: section_A

    })
	.setClassToggle(help_center, 'active')
    .addTo(controller); 

	new ScrollMagic.Scene({
		offset: wh*0.2,
		triggerElement: section_B

    })
	.setClassToggle(e_learning, 'active')
    .addTo(controller); 

	new ScrollMagic.Scene({
		offset: wh*0.2,
		triggerElement: section_C

    })
	.setClassToggle(training_certification, 'active')
    .addTo(controller); 

	new ScrollMagic.Scene({
		offset: wh*0.2,
		triggerElement: section_D

    })
	.setClassToggle(client_support, 'active')
    .addTo(controller);*/


   /* new ScrollMagic.Scene().on('start', function () {console.log("passed trigger");})
    .addTo(ctrl);*/

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

    new ScrollMagic.Scene({ triggerElement: section_B, offset: wh*0.3 })
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

    new ScrollMagic.Scene({ triggerElement: section_C, offset: wh*0.3 })
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

    new ScrollMagic.Scene({ triggerElement: section_D, offset: wh*0.3 })
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

})();