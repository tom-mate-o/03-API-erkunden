async function getData(persons) {
    const fetchingData = await fetch(`https://randomuser.me/api/?results=${persons}`);
    const data = await fetchingData.json();
    console.log("getData ok");
    return data.results;
}

async function generateCards() {
    const users = await getData(15);
    console.log("generateCards ok");
    createCard (users);
}

function createCard (users) {
    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");
        // Container in der Karte
        const container = document.createElement("div");
        container.classList.add("container");
        //img Element
        const img = user.picture.medium;
        const imgElement = document.createElement("img");
        imgElement.src = img;
        card.appendChild(imgElement);
        
        // Name Element
        const fullName = user.name.first + " " + user.name.last;
        const nameElement = document.createElement("h4");
        nameElement.innerText = fullName;
       
        // Location Element
        const location = user.location.city + ", " + user.location.country;
        const locationElement = document.createElement("p");
        locationElement.innerText = location;
        
        // Email Element
        const email = user.email;
        const emailElement = document.createElement("p");
        emailElement.innerText = email;
        

        // Elemente in den Container
        
        container.appendChild(nameElement);
        container.appendChild(locationElement);
        container.appendChild(emailElement);

        // Container in die Karte
        card.appendChild(container);

        // Karte in den App Container
        document.getElementById("app").appendChild(card); // fügt die karte in den container ein
    });
}



// createCard(list);
getData(15);
generateCards();