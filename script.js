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
	console.log(navbar)
	
	allBotstrap = document.querySelector('link')
	var doubleClickButton = function() {
		console.log(allBotstrap)
		console.log("TONGA AAAA")
		allBotstrap.href = '';
		imageLink = document.getElementsByClassName('card-img-top')
		for(let i=0; i<= imageLink.length - 1; i++){
			imageLink[i].src= '';
		}
	}
	navbar.addEventListener("dblclick", doubleClickButton)

//6)si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire.
	var btn = document.getElementsByClassName('btn');
	for(let i=2; i<= btn.length - 1; i=i+2){
		console.log(btn[i])
		btn[i].onclick = function(){
			for(let n=0; n<= btn.length - 1; n++){
			 var cardTexta = document.getElementsByClassName("card-text")[n];
			 	cardTexta.textContent = "";
			}
		}
	}
