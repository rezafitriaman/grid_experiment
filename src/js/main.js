(function() {
	//select target
	var navTarget = document.getElementById('secondNav').getElementsByTagName('a');
	var idTarget = document.getElementsByClassName('title');

	//loop through the secondnavigation
	for (var i = 0; i < navTarget.length; i++) {
		//on click
		navTarget[i].addEventListener("click", function (e) {
			e.preventDefault()
			//this is the grandparent of a
			var links = this.closest('.wrapper').getElementsByTagName('a');
			//loop through the links and delete active if contain it
			for (var i = 0; i < links.length; i++) {
				
				if(links[i].classList.contains('active')) {
					links[i].classList.remove('active')
				}
			}
			//then add active on the target click
			this.classList.add('active');
			//get the attr href then place it on get elementBy
			var elmTarget = this.getAttribute('href').split('#')[1];
			//scroll to the id target
			document.getElementById(elmTarget).scrollIntoView({ 
			  	behavior: 'smooth' 
			});
		});
	}
})();
