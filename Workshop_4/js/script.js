//tehtävä 1
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});


// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");
});

const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

// teksti vaihtaminen painikkeella
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Tiikerit ovat suurimpia kissaeläimiä.";
});

//tehtävä 2

const animalContent = document.querySelector("#animalContent");

const heading = document.createElement("h3");
heading.textContent = "Päivän eläin";
heading.classList.add("animal-heading");

const paragraph = document.createElement("p");
paragraph.textContent = "Pandat syövät lähes pelkästään bambua.";

const image = document.createElement("img");
image.src = "images/panda.png";
image.alt = "Panda";

animalContent.append(heading, paragraph, image);


const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});

showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
});


//tehtävä 3

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

const animals = {
    elephant: {
        name: "Elefantti",
        image: "images/elephant.png",
        description: "Elefantit ovat maailman suurimpia maaeläimiä."
    },
    tiger: {
        name: "Tiikeri",
        image: "images/tiger.png",
        description: "Tiikerit ovat suurimpia kissaeläimiä."
    },
    penguin: {
        name: "Pingviini",
        image: "images/penguin.png",
        description: "Pingviinit ovat lentokyvyttömiä merilintuja."
    },
    panda: {
        name: "Panda",
        image: "images/panda.png",
        description: "Pandat syövät lähes pelkästään bambua."
    }
};


function updateAnimal(key) {
    const animal = animals[key];

    animalName.textContent = animal.name;
    animalImage.src = animal.image;
    animalImage.alt = animal.name;
    animalDescription.textContent = animal.description;
}

animalSelect.addEventListener("change", function () {
    updateAnimal(animalSelect.value);
});


animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});


// Tehtävä 4
const animalForm = document.querySelector("#animalForm");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = document.querySelector("#observationAnimal").value.trim();
    const location = document.querySelector("#observationLocation").value.trim();
    const date = document.querySelector("#observationDate").value;

    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät.");
        return;
    }

    const row = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animal;

    const locationCell = document.createElement("td");
    locationCell.textContent = location;

    const dateCell = document.createElement("td");
    dateCell.textContent = date;


    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista";

    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    deleteCell.append(deleteButton);

    row.append(animalCell, locationCell, dateCell, deleteCell);
    observationTableBody.append(row);

    animalForm.reset();
});


// Poistopainikkeet alkuperäisille riveille (Orava, Jänis)
const existingRows = observationTableBody.querySelectorAll("tr");

existingRows.forEach(function (row) {
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista";

    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    deleteCell.append(deleteButton);
    row.append(deleteCell);
});