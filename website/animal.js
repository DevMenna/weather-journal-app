let baseURL = "http://api.animalinfo.org/data/?animal=";
let apiKey = "&appid=9f15e45060...";
const newAnimal = document.getElementById("animal").value;

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  const newAnimal = document.getElementById("animal").value;
  const favFact = document.getElementById("favorite").value;

  getAnimal("/animalData")
    // New Syntax!
    .then(function (data) {
      // Add data
      console.log(data);
      postData("/addAnimal", {
        animal: data.animal,
        fact: data.fact,
        fav: favFact,
      });
    })
    .then(updateUI());
}

const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("animalName").innerHTML = allData[0].animal;
    document.getElementById("animalFact").innerHTML = allData[0].facts;
    document.getElementById("animalFav").innerHTML = allData[0].fav;
  } catch (error) {
    console.log("error", error);
  }
};
