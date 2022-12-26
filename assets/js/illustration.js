
const drawings = {
    0: {
        img: 'assets/illustrations/Animaux/chat.png',
        title: 'chat',
        price: '2',
    },
    1: {
        img: 'assets/illustrations/Animaux/cheval.png',
        title: 'cheval',
        price: '2',
    },
    2: {
        img: 'assets/illustrations/Animaux/dauphin.png',
        title: 'chat',
        price: '2',
    },
    3: {
        img: 'assets/illustrations/Animaux/girafe.png',
        title: 'girafe',
        price: '2',
    },
    4: {
        img: 'assets/illustrations/Animaux/hibou.png',
        title: 'hibou',
        price: '2',
    },
    5: {
        img: 'assets/illustrations/Animaux/lion.png',
        title: 'lion',
        price: '2',
    },
    6: {
        img: 'assets/illustrations/Animaux/oiseau.png',
        title: 'oiseau',
        price: '2',
    },
    7: {
        img: 'assets/illustrations/Animaux/perroquet.png',
        title: 'perroquet',
        price: '2',
    },
    8: {
        img: 'assets/illustrations/Animaux/puma.png',
        title: 'puma',
        price: '2',
    },
    9: {
        img: 'assets/illustrations/Animaux/serpent.png',
        title: 'serpent',
        price: '2',
    },
    10: {
        img: 'assets/illustrations/Animaux/tortue.png',
        title: 'tortue',
        price: '2',
    },
    11: {
        img: 'assets/illustrations/Fleurs/fleur1.png',
        title: 'fleur1',
        price: '2',
    },
    12: {
        img: 'assets/illustrations/Fleurs/fleur2.png',
        title: 'fleur2',
        price: '2',
    },
    13: {
        img: 'assets/illustrations/Fleurs/rose.png',
        title: 'rose',
        price: '2',
    },
    14: {
        img: 'assets/illustrations/Fleurs/trefle.png',
        title: 'trefle',
        price: '2',
    },
    15: {
        img: 'assets/illustrations/Formes/coeur.png',
        title: 'coeur',
        price: '2',
    },
    16: {
        img: 'assets/illustrations/Formes/diamant.png',
        title: 'diamant',
        price: '2',
    },
    16: {
        img: 'assets/illustrations/Formes/forme1.png',
        title: 'forme1',
        price: '2',
    },
    17: {
        img: 'assets/illustrations/Formes/forme2.png',
        title: 'forme2',
        price: '2',
    },
    18: {
        img: 'assets/illustrations/Formes/forme3.png',
        title: 'forme3',
        price: '2',
    },
    19: {
        img: 'assets/illustrations/Formes/forme4.png',
        title: 'forme4',
        price: '2',
    },
}






const formulaire = document.getElementById('formulaire'),
      formulaireImage = document.getElementById('formulaire-image'),
      formulaireClose = document.getElementById('formulaire-close'),
      formulaireIllustration = document.getElementById('formulaire-illustration'),
      formulaireEmail = document.getElementById('formulaire-email')
      formulaireButton = document.getElementById('formulaire-button')

let image

function chooseIllustration(illustration, imageSrc) {
    formulaireImage.src = imageSrc
    image = imageSrc
    formulaireIllustration.value = illustration
    formulaire.style.visibility = "visible"
    
    console.log(illustration);
}


formulaireClose.addEventListener('click', () => {
    formulaireImage.src = ""
    formulaire.style.visibility = "hidden"
})

formulaireButton.addEventListener('click', () => {
    alert("Merci pour votre commande! N'oubliez pas de consulter vos mails pour le devis.")
    formulaireImage.src = ""
    formulaire.style.visibility = "hidden"

    let templateParams = {
        mail: formulaireEmail.value,
        drawing: image   
    };

    console.log(templateParams);
     
    emailjs.send('service_nb02qyh', 'template_viqyk2d', templateParams, 'dTysEWyKf3423Ml93')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
})


/*===== TEMPLATE =====*/


const template_container = document.getElementById('template-container')

for (const [key, value] of Object.entries(drawings)) {
    console.log(key, value);
    template_container.innerHTML += add_drawing(value.img, value.title, value.price)
}

function add_drawing(img, title, price) {

return (`
<a href="#choose" class="card__image" onclick="chooseIllustration('${title}', '${img}')">
<div class="image">
    <img src="${img}" alt="">
</div>
<h1>${title}</h1>
<h3>${price}€</h3>
</a>
`)
}

/*===== SEARCH =====*/


function onSearch() {
    const searching = document.getElementById('search-input').value
    
    template_container.innerHTML = ""

    let i = 0
    for (const [key, value] of Object.entries(drawings)) {
        console.log(key, value);
        if (value.title.includes(searching)) {
            console.log("passed");
            i++;
            template_container.innerHTML += add_drawing(value.img, value.title, value.price)
        }
    }

    if (i == 0)
        template_container.innerHTML = `
        <h1 class="color__first">Aucun résultat pour votre recherche</h1>
        `
}























