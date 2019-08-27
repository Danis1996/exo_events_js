//1) cliquer sur le footer => "clique" en console.
//1-bis) clic numéro x
var footer = document.querySelector('footer');
clics = 0;
footer.addEventListener("click", function(){ 
	clics ++	
	console.log(`clique numero` + ` "` +clics+ `"`)
	}
)

//2)si quelqu'un clique sur le bouton hamburger, l'élément HTML portant l'Id navbarHeader perde sa classe collapse
    var hamburgerMenuButton = document.querySelector('.navbar-toggler');
	var io = document.getElementById('navbarHeader')
    var onButtonClick = function() {
        io.classList.toggle('collapse') ;
    };
hamburgerMenuButton.addEventListener("click", onButtonClick);

//3) si on clique sur le bouton "Edit" le texte de la card va se mettre en rouge 
    var editButton = document.querySelector('.btn-outline-secondary');
    var onEditButtonClick = function() {
    	var firstCardText = document.querySelector('.card-text')
       	firstCardText.style.color = "red";
    };
    editButton.addEventListener("click", onEditButtonClick);

//4)si on clique sur le bouton "Edit" le texte de la card 2 va se mettre en vert et reversible si on reclique
    var editButton2 = document.getElementsByClassName("btn-outline-secondary")[1];
    var cardText2 = document.getElementsByClassName("card-text")[1];
    var onEditButtonClick2 = function() {
    	if (cardText2.style.color == "green"){
       	cardText2.style.color = '';}
    	else {
       cardText2.style.color = "green";}
    };
    editButton2.addEventListener("click", onEditButtonClick2);

// 5) si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît
	var navbar = document.querySelector('header');	
	allBotstrap = document.querySelector('link')
	var doubleClickButton = function() {
		allBotstrap.href = '';
		imageLink = document.getElementsByClassName('card-img-top')
		for(let i=0; i<= imageLink.length - 1; i++){
			imageLink[i].src= '';
		}
	}
	navbar.addEventListener("dblclick", doubleClickButton)

//6)si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire.
	var detector = 0
	let btn = document.getElementsByClassName('btn');
	for(let i=2; i<= btn.length - 1; i=i+2){
		btn[i].onmouseover = function(){
			detector ++
		for(let n=0; n < 6; n++){
			let cardTexta = document.getElementsByClassName("card-text")[n];
				cardTexta.classList.toggle('collapse');	
				cardImage = document.getElementsByClassName("card-img-top")[n];
				if (detector%2 == 0){
					cardImage.style.height = "100%"
					cardImage.style.width = "100%"
				}
				else {
					cardImage.style.height = "20%"
					cardImage.style.width = "20%"
				}
			}
		}
	}

//7) si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) 
	//va passer en premier (en haut à gauche). 
	//On va pouvoir faire tourner les cards !
	let grayArrow = document.getElementsByClassName('my-2')[1];
	let card= document.getElementsByClassName("row")[1];
	var grayArrowButton = function() {
		card.insertBefore(card.lastChild, card.childNodes[0])
		console.log("io ary")
	}
	grayArrow.addEventListener("click", grayArrowButton)

//8) reciproque du 7)
	let blueArrow = document.getElementsByClassName('my-2')[0];
	var blueArrowButton = function() {
		blueArrow.href = "#"
		card.insertBefore(card.firstChild, card.lastChild.nextSibling)
		console.log("io le ray")
	}
	blueArrow.addEventListener("click", blueArrowButton)

//9)
	logo = document.querySelector("strong")
	content = logo.textContent
	
	cardText2.addEventListener("onselect", function(){ console.log("Mety") })