const vstupniPoleFiltrTabulky = document.getElementById('filtr-mesto');
const tabulkaSdaty = document.getElementById('telo-tabulky');
vstupniPoleFiltrTabulky.addEventListener('keyup', function(event) {
    const filtrText = event.target.value.toLowerCase();
    const vsechnyRadkyTabulky = tabulkaSdaty.getElementsByTagName('tr');
    let i = 0;
    while (i < vsechnyRadkyTabulky.length) {
        const bunkaMestoVradku = vsechnyRadkyTabulky[i].getElementsByTagName('td')[1];
        if (bunkaMestoVradku) {
            const nazevMesta = bunkaMestoVradku.textContent.toLowerCase();
            let zobrazitRadek = false;
            if (nazevMesta.includes(filtrText)) {
                zobrazitRadek = true;
            } else {
                zobrazitRadek = false;
            }
            if (zobrazitRadek) {
                vsechnyRadkyTabulky[i].style.display = '';
            } else {
                vsechnyRadkyTabulky[i].style.display = 'none';
            }
        }
        i++;
    }
});

const poleProFiltrVyberu = document.getElementById('filtr-vyber');
const vyberMestaSelectElement = document.getElementById('vyber-mesto');
const puvodniMestaPole = Array.from(vyberMestaSelectElement.options);
poleProFiltrVyberu.addEventListener('keyup', (e) => {
    const hledanySlovo = e.target.value.toLowerCase();
    vyberMestaSelectElement.innerHTML = '';
    let j = 0;
    while (j < puvodniMestaPole.length) {
        const moznost = puvodniMestaPole[j];
        const textMoznosti = moznost.text.toLowerCase();
        if (textMoznosti.includes(hledanySlovo)) {
            const novaMoznost = document.createElement('option');
            novaMoznost.value = moznost.value;
            novaMoznost.text = moznost.text;
            vyberMestaSelectElement.appendChild(novaMoznost);
        }
        j++;
    }
    if (hledanySlovo === '') {
        for (let k = 0; k < puvodniMestaPole.length; k++) {
            const puvodni = puvodniMestaPole[k];
            const obnovenaMoznost = document.createElement('option');
            obnovenaMoznost.value = puvodni.value;
            obnovenaMoznost.text = puvodni.text;
            vyberMestaSelectElement.appendChild(obnovenaMoznost);
        }
    }
});

const formularVyberElement = document.getElementById('formular-vyber');
const vystupDiv = document.getElementById('vystup-formular');
formularVyberElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const vybraneMestoUzivatelem = vyberMestaSelectElement.value;
    console.log('Uživatel si vybral: ' + vybraneMestoUzivatelem);
    vystupDiv.textContent = 'A vybral jsi: ' + vybraneMestoUzivatelem + '!';
});

const odkazyMenuNav = document.querySelectorAll('.menu-hlavni a');
for (let l = 0; l < odkazyMenuNav.length; l++) {
    const odkaz = odkazyMenuNav[l];
    odkaz.addEventListener('click', function(e) {
        e.preventDefault();
        const ciloveMistoHref = this.getAttribute('href');
        const elementCil = document.querySelector(ciloveMistoHref);
        if (elementCil) {
            elementCil.scrollIntoView({ behavior: 'smooth' });
        }
    });
}