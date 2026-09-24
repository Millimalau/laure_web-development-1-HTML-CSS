// Etsi painikkeet
const firstButton = document.getElementById("firstButton"); // "Paina minua"
const secondButton = document.getElementById("secondButton"); // "Näytä eläintaulukko"

firstButton.addEventListener("click", function() {
    alert("Painoit minua!");
});

secondButton.onclick = function() {
    showTable();
};

// eläintaulukko
function showTable() {
    const animals = [
        { animal: "Tiikeri", habitat: "Metsä", diet: "Liha" },
        { animal: "Norsu", habitat: "Savanni", diet: "Kasvit" },
        { animal: "Pingviini", habitat: "Etelämanner", diet: "Liha" }
    ];

    let tableHTML = `
        <table border="1" cellpadding="5" cellspacing="0">
            <thead>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ruokavalio</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 0; i < animals.length; i++) {
        const { animal, habitat, diet } = animals[i];
        tableHTML += `
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
        `;
    }

    tableHTML += `
            </tbody>
        </table>
    `;

    document.querySelector("#tableContainer").innerHTML = tableHTML;
}

// Harjoitus 2: Kuuntelijat ja DOM

const heading1 = document.querySelector("h2");
const heading2 = document.querySelector("#heading2");

heading2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

heading1.addEventListener("click", function() {
    heading1.innerHTML = "Bye bye mouse!";
    heading1.style.color = "red";
});


// Harjoitus 3

const feedback = document.querySelector("#feedback");
const statusE = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function () {
    statusE.textContent = "Kirjoitat palautetta...";
    feedback.style.backgroundColor = "#fffbe6";
});

feedback.addEventListener("blur", function () {
    statusE.textContent = "";
    feedback.style.backgroundColor = "";
});

feedback.addEventListener("input", function () {
    charcount.textContent = `${feedback.value.length}/200`;
    preview.textContent = feedback.value || "(Esikatselu tulee tähän)";
});

// harjoitus 4

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Estä lomakkeen oletustoiminto

    const text = feedback.value.trim();
    if (text.length < 10 || text.length > 200) {
        statusE.textContent = "Virhe: palautteen pituus pitää olla 10-200 merkkiä.";
        statusE.style.color = "red";
        return;
    }

    feedback.value = "";
    charcount.textContent = "0/200";
    preview.textContent = "(Esikatselu tulee tähän)";
    statusE.textContent = "Palautteesi on lähetetty!";
    statusE.style.color = "green";
});

// Harjoitus 5

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function (event) {
    console.log(event);

    keyinfo.innerHTML = `Näppäin: ${event.key} <br> Koodi: ${event.code}`;

    keybox.textContent = event.key;
    keybox.style.fontSize = "4em";

});

//Bonusharjoitus 
//1. Avaa kivistö kartalla
const kivistoBtn = document.querySelector("#kivistoBtn");

kivistoBtn.addEventListener("click", function () {
    window.open("https://www.google.com/maps?q=Kivistö,Vantaa", "_blank");
});

//2. käyttäjän sijainti kartalla

const locationBtn = document.querySelector("#sijaintiBtn");
const locationStatus = document.querySelector("#locationStatus");

locationBtn.addEventListener("click", function () {
    if (!navigator.geolocation) {
        locationStatus.textContent = "Selaimesi ei tue sijaintitietoja.";
        return;
    }

    locationStatus.textContent = "Haetaan sijaintia...";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log("Latitude:", lat);
            console.log("Longitude:", lon);

            const url = `https://www.google.com/maps?q=${lat},${lon}`;
            window.location.href = url;
        },
        (error) => {
            locationStatus.textContent = "Sijaintia ei voitu hakea: " + error.message;
            console.log("Sijaintia ei voitu hakea:", error.message);
        }
    );
});