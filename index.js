const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "/xvzuUx5gG+fVZk0z4MOxw==m7H7PpVCApz7XB6e";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

async function getJoke() {
  jokeEl.innerText = "Updating..";
  const response = await fetch(apiURL, options);
  const data = await response.json();
  jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);
