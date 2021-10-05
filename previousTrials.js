//client side

/*const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

postData("/add", { movie: "Harry Potter", score: 5 });
postData("/add", { movie: "blended", score: 2 });*/

//*************************************** */

//server side

///****************** */

//movie example
// app.post("/add", (req, res) => {
//   console.log(req.body);
//   data.push(req.body);
// });

//end of movie example

//animal example
/* const fakeData = {
  animal: "lion",
  fact: "lions are fucking annoying",
};

app.get("/fakeAnimalData", (req, res) => {
  res.send(fakeData);
});

const animalData = [];

app.get("/all", () => {
  res.send(animalData);
  console.log(animalData);
});

app.post("/addAnimal", (req, res) => {
  console.log(req.body);
  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav,
  };

  animalData.push(newEntry);
  res.send(animalData);
  console.log(animalData);
}); */
