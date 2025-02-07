
const apiURL = "https://api.rootnet.in/covid19-in/stats/history";
const fetchButton = document.getElementById("fetchButton");
const dateInput = document.getElementById("dateInput");
const cardContainer = document.getElementById("cardContainer");

fetchButton.addEventListener("click", function () {
    const selectedDate = dateInput.value;
    if (!selectedDate) return;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const dayData = data.data.find(item => item.day === selectedDate);
            if (dayData) {
                const statesData = dayData.regional;
                displayStateData(statesData);
            } else {
                cardContainer.innerHTML = `<p>No data available for the selected date.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

function displayStateData(states) {
    cardContainer.innerHTML = ""; // Clear previous data

    states.forEach(state => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${state.loc}</h3>
            <p>Confirmed: ${state.totalConfirmed}</p>
            <p>Recovered: ${state.discharged}</p>
            <p>Deaths: ${state.deaths}</p>
        `;
        cardContainer.appendChild(card);
    });
}