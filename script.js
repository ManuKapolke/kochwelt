/*-------------------------------------
Recipe Data (Objects)
--------------------------------------*/
let salad = {
    "headline": "Griechischer Bauernsalat",
    "image": "img/salad.jpg",
    "workingTime": 15,
    "bakingTime": "",
    "totalTime": 15,
    "difficulty": "simpel",
    "date": "28.09.2020",
    "mengen": [0.25, 0.5, 125, 0.5, 50, 0.25, "", 0.25, 31.25, ""],
    "weights": ["", "", "g", "", "g", "Glas", "", "", "ml", ""],
    "names": ["Salatgurke(n)", "Paprikaschote(n), rot und grün", "Tomaten", "Zwiebel(n)", "Schafskäse", "Oliven, schwarz", "Salz und Pfeffer", "Zitrone(n)", "Olivenöl", "Oregano"],
    "description": "Gurke waschen und ungeschält in dünne Scheiben oder stücke schneiden. Paprika waschen, entkernen und in dünne Streifen schneiden. Tomaten waschen und achteln. Zwiebeln schälen und in feine Ringe schneiden. Schafskäse würfeln und mit Oregano bestreuen. Oliven abgießen und mit Gurke, Paprika, Tomaten, Zwiebeln und Schafskäse in eine Schüssel geben. Olivenöl, Zitronensaft, Salz und Pfeffer zu einer Sauce verrühren und über den Salat gießen. Umrühren",
    "creatorImage": "img/profile.png",
    "creatorName": "Junus Ergin"
}

let bigMacRoll = {
    "headline": "Low-carb Big Mac Rolle",
    "image": "img/familienkostbild_1015_low-carb-big-mac-rolle.jpg",
    "workingTime": 35,
    "bakingTime": 20,
    "totalTime": 55,
    "difficulty": "simpel",
    "date": "04.02.2023",
    "mengen": [125, 50, 1.5, 1, 0.5, 1, 125, "", 1.5, 1.5],
    "weights": ["g", "g", "", "TL", "TL", "EL", "g", "", "", ""],
    "names": ["Margerquark", "Käse(gerieben)", "Eie(r)", "Ketchup", "Senf", "Naturjoghurt", "Hackfleisch", "Salz und Pfeffer", "Schmelzkäse (Scheiben)", "Gewürzgurke(n)", "Salat", "Tomaten"],
    "description": "Magerquark, Reibekäse und Eier zu einer dickflüssigen Masse verrühren und auf einem mit Backpapier ausgelegten Backblech verteilen. Bei 180°C Ober-/Unterhitze im heißen Backofen ca. 20 Minuten backen. Den Teig auskühlen lassen. <br><br> Die Zutaten für die Sauce verrühren. <br><br> Das Hackfleisch in einer Pfanne mit Salz und Pfeffer krümelig anbraten. Die Gurken in Scheiben schneiden und zum Hackfleisch geben. 2/3 der Sauce auf dem gebackenen Teig verteilen. Das noch warme Hackfleisch darüber verteilen und den Toastkäse über dem Hackfleisch schmelzen lassen. <br><br> Anschließend Salat und evtl. Tomaten darauf legen und die restliche Sauce darauf verteilen. Den Teig mithilfe des Backpapiers einrollen, so dass die Big Mac Rolle aussieht wie eine Biskuitrolle. <br><br> Wichtig ist, nicht zu viel auf dem Teig zu verteilen, da die Rolle sonst zu dick wird und die Füllung an beiden Enden hervorquillt.",
    "creatorImage": "img/marceldölle.jpg",
    "creatorName": "Marcel Dölle"
}

let pizzaBuns = {
    "headline": "Pizzaschnecken mit Oliven",
    "image": "img/zarouri-hicham-J07LwIkW-cw-unsplash.jpg",
    "workingTime": 40,
    "bakingTime": 30,
    "totalTime": 70,
    "difficulty": "medium",
    "date": "05.02.2023",
    "mengen": [120, 8, 0.3, 0.5, 66, 9, 60, 0.5, 0.2, 0.5, 30, 30, 3, 0.3],
    "weights": ["g", "g", "TL", "Prise(n)", "ml", "ml", "g", "", "", "", "g", "g", "ml", "TL"],
    "names": ["Mehl (und etwas mehr zum Bemehlen)", "Hefe", "Salz", "Zucker", "Wasser", "Olivenöl", "Oliven, grün und schwarz", "Zwiebeln", "Paprika, rot", "Tomaten", "Gouda", "Tomatenmark", "Öl", "Pizzagewürz"],
    "description": "Mehl, Hefe, Salz, Zucker, Wasser und Olivenöl in eine Schüssel geben und zu einem glatten Teig kneten. Teig auf ein bemehltes Backpapier geben und rechteckig ausrollen (ca. 30 x 40 cm, ggf. Teig teilen und mehrere Backpapiere verwenden). <br><br> Zwiebeln, Oliven, Paprika, Tomaten und Gouda jeweils in kleine Stückchen schneiden und anschließend mit Tomatenmark, Öl und Pizzagewürz vermischen. Mischung gleichmäßig auf dem Teig verteilen. <br><br> Teig mithilfe des Backpapiers von der Längsseite her zu einer Rolle aufrollen, in Scheiben à ca. 3 cm schneiden, flach auf ein mit dem Backpapier belegtes Backblech legen und abgedeckt 20 Minuten gehen lassen (ggf. mehrere Backbleche verwenden). In dieser Zeit Backofen auf 180°C (Ober-/Unterhitze) vorheizen. Pizzaschnecken 30 Minuten backen und warm oder kalt servieren. (Eine Portion entspricht ca. 4 Schnecken.)",
    "creatorImage": "img/manukapolke.jpg",
    "creatorName": "Manu Kapolke"
}

let bruschettaPotatoes = {
    "headline": "Bruschetta-Kartoffeln",
    "image": "img/bruschetta-kartoffeln.jpg",
    "workingTime": 30,
    "bakingTime": 12,
    "totalTime": 42,
    "difficulty": "medium",
    "date": "13.02.2023",
    "mengen": [150, 80, 6, 1, 1, 9, 1, 0.5, 1.5, 20],
    "weights": ["g", "g", "g", "Prise(n)", "Prise(n)", "ml", "Stück", "Zehe(n)", "EL", "g"],
    "names": ["Kartoffeln (festkochend)", "Cocktailtomaten", "Grüne Oliven", "Salz", "Pfeffer", "Olivenöl", "Lauchzwiebeln", "Knoblauch", "Oregano", "Mozarella"],
    "description": "Kartoffeln gründlich waschen und in Wasser ca. 25 Minuten sehr bissfest kochen. Kartoffeln abgießen, unter kaltem Wasser kurz abschrecken und längs halbieren. <br><br> Tomaten waschen, putzen, vierteln und entkernen. Fruchtfleisch in kleine Würfel schneiden. Oliven abtropfen lassen und in Scheiben schneiden. Lauchzwiebeln putzen und waschen. Hellen und dunklen Teil getrennt in Ringe schneiden. Knoblauch schälen und fein hacken. <br><br> Kartoffelhälften auf ein gefettetes Backblech legen. Mit Tomaten, Oliven, Knoblauch und hellen Lauchzwiebelringen bestreuen. Mit Salz, Oregano und Pfeffer würzen. Mozzarella abtropfen lassen. Gouda und Mozzarella raspeln und über die Kartoffelhälften streuen. <br><br> Kartoffeln im vorgeheizten Backofen (E-Herd: 200 °C/ Umluft: 175 °C/ Gas: Stufe 3) auf oberer Schiene 15-20 Minuten goldbraun backen. Kartoffeln herausnehmen, mit grünen Lauchzwiebelringen bestreuen und sofort servieren.",
    "creatorImage": "img/sebastianoswald.jpg",
    "creatorName": "Sebastian Oswald"
}


/*-------------------------------------
Create Recipe-Site
--------------------------------------*/
function addAll(recipe) {
    addHeadline(recipe);
    addImage(recipe);
    addKeypoints(recipe);
    addTable(recipe);
    addDescription(recipe);
    addCreator(recipe);
}


function addHeadline(recipe) {
    document.getElementById('headline').innerHTML = recipe.headline;
}


function addImage(recipe) {
    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('recipe-image').alt = recipe.headline;
}


function addKeypoints(recipe) {
    addUpperKeypoint('clock-regular.svg', `${recipe.totalTime} Min.`);
    addUpperKeypoint('brain-solid.svg', recipe.difficulty);
    addUpperKeypoint('clock-regular.svg', recipe.date);

    addLowerKeypoint(`Arbeitszeit ca. ${recipe.workingTime} Minuten`);
    addLowerKeypoint(`Backzeit ca. ${recipe.bakingTime} Minuten`);
    addLowerKeypoint(`Gesamtzeit ca. ${recipe.totalTime} Minuten`);
}


function addUpperKeypoint(icon, content) {
    let upperKeypoints = document.getElementsByClassName('recipe-keypoints-container')[0];
    let keypoint = document.createElement('div');
    keypoint.classList.add('recipe-keypoints');
    keypoint.innerHTML = `<img src="img/icons/${icon}"> ${content}`;
    upperKeypoints.appendChild(keypoint);
}

function addLowerKeypoint(content) {
    let lowerKeypoints = document.getElementsByClassName('recipe-keypoints-container')[1];
    let keypoint = document.createElement('div');
    keypoint.classList.add('recipe-keypoints');
    keypoint.innerHTML = `<img src="img/icons/clock-regular.svg"><span> ${content}</span>`;
    lowerKeypoints.appendChild(keypoint);
}


function addTable(recipe) {
    let input = document.getElementById('input-portions');
    let portion = +input.value;

    validate('input-portions');

    if (input.checkValidity()) {

        let content = document.getElementById('table');
        content.innerHTML = '';

        for (let i = 0; i < recipe.mengen.length; i++) {
            const menge = recipe.mengen[i] == "" ? "" : formatNumber(recipe.mengen[i] * (portion));
            const name = recipe.names[i];
            const weight = recipe.weights[i];
            content.innerHTML += `        
            <tr>
                <td>${menge} ${weight}</td>
                <td>${name}</td>
            </tr>                      
            `;
        }
    }
}


function addDescription(recipe) {
    document.getElementById('description').innerHTML = recipe.description;
}


function addCreator(recipe) {
    document.getElementById('profile').innerHTML = `
        <img src="${recipe.creatorImage}" alt="Profilbild">
        <span>${recipe.creatorName}</span>
    `;
}


function validate(inputID) {
    const input = document.getElementById(inputID);
    const validityState = input.validity;

    if (validityState.valueMissing || validityState.rangeUnderflow || validityState.rangeOverflow) {
        input.setCustomValidity(`Bitte einen Wert zwischen ${input.min} und ${input.max} eingeben`);
    } else {
        input.setCustomValidity('');
    }

    input.reportValidity();
}


function formatNumber(num, digits = 1) {
    let formatted = num.toFixed(digits);
    if (formatted.endsWith(`.${"0".repeat(digits)}`)) {
        formatted = formatted.slice(0, -(digits + 1));
    }
    return formatted;
}




/*-------------------------------------
Trigger Button Click on Enter
--------------------------------------*/
if ((window.location.pathname == '/salad.html') || (window.location.pathname == '/bruschettapotatoes.html') || (window.location.pathname == '/bigmacroll.html') || (window.location.pathname == '/pizzabuns.html')) {
    triggerButtonOnEnter('input-portions', 'portions-btn');
}


function triggerButtonOnEnter(inputID, buttonID) {
    // Get the input field
    let input = document.getElementById(inputID);
    // Execute a function when the user presses a key on the keyboard
    input.addEventListener('keypress', function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === 'Enter') {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById(buttonID).click();
        }
    });
}


/*-------------------------------------
Include HTML Templates (header/footer)
--------------------------------------*/
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


