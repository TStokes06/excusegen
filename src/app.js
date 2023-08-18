import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let pronoun = ["A", "The", "My"];
  let subject = [
    "man",
    "woman",
    "boy",
    "girl",
    "dog",
    "cat",
    "T-rex",
    "politician",
    "cop",
    "baby"
  ];
  let action = [
    "took my",
    "stole my",
    "destroyed my",
    "threw my",
    "yelled at my",
    "bit my",
    "ate my",
    "broke into my"
  ];
  let possession = [
    "dad",
    "mom",
    "brother",
    "sister",
    "dog",
    "cat",
    "bird",
    "house",
    "car",
    "bike",
    "homework",
    "room"
  ];
  let where = [
    "on the street",
    "in my house",
    "playground",
    "in my driveway",
    "in the park"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndex] +
    " " +
    possession[possesionIndex] +
    " " +
    where[whereIndex]
  );
};
