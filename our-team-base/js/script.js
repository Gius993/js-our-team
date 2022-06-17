// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// definisco l'array per le card
// ``$

const arrayCard = [
	{
		foto : 'img/wayne-barnett-founder-ceo.jpg',
		name : 'Wayne Barnett',
		title : 'Founder & CEO'
	},
	{
		foto : 'img/angela-caroll-chief-editor.jpg',
		name : 'Angela Caroll',
		title : 'Chief editor'
	},
	{
		foto : 'img/walter-gordon-office-manager.jpg',
		name : 'Walter Gordon',
		title : 'Office Manager'
	},
	{
		foto : 'img/angela-lopez-social-media-manager.jpg',
		name : 'Angela Lopez',
		title : 'Social Media Manager'
	},
	{
		foto : 'img/scott-estrada-developer.jpg',
		name : 'Scott Estrada',
		title : 'Developer'
	},
	{
		foto : 'img/barbara-ramos-graphic-designer.jpg',
		name : 'Barbara Ramos',
		title : 'Graphic Designer'
	},
];

// creo il ciclo per stampare in html

const memberContainer = document.querySelector('.team-container');

//per ogni object in array stampo una card

for(let i = 0; i < arrayCard.length; i++) {
	const cardStamp = arrayCard[i];
	//console.log(cardStamp);

	//creo la struttura da stampare in html
	const cardTeam = `
		<div class="team-card">
			<div class="card-image">
		 		 <img
				  src=" ${cardStamp.foto}"
				  alt="foto"
	 			 />
		</div>
		<div class="card-text">
	 	 	<h3>${cardStamp.name}</h3>
	 		 <p>${cardStamp.title}</p>
		</div>
		</div>`;
		console.log(cardTeam);
		//stampa
		memberContainer.innerHTML += cardTeam;
}




