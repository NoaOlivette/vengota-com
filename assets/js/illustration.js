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


const drawings = {
    0: {
        img: 'assets/icon_fleur.png',
        title: 'loulou',
        price: '5',
    },
    1: {
        img: 'assets/icon_symbole.png',
        title: 'pourquoi',
        price: '5',
    },
    2: {
        img: 'assets/icon_text.png',
        title: 'bibou',
        price: '5',
    },
}

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























