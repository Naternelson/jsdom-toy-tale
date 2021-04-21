let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
    
  });
  fetchToys()
});

function fetchToys(){
  return fetch("http://localhost:3000/toys").then(r => r.json()).then((toys) =>{
    return cards = toys.map((toy) => createCard(toy))
  }).then((cards) => {
    const container = document.getElementById("toy-collection")
    for(c of cards){container.append(c)}
  })
}

function createCard(toy){
  const card = addElement("div", null, "card")
  const nameTag = addElement("h2", card)
  const img = addElement("img", card, "toy-avatar")
  const numOfLikes = addElement("p", card)
  const likeBtn = addElement("button", card, "like-btn")
  
  nameTag.innerText = toy.name 
  img.src = toy.image
  numOfLikes.innerText = `${toy.likes} likes`
  likeBtn.innerText = "Like"
  return card
}

function addElement(elType, parent= null, className=""){
  const el = document.createElement(elType)
  el.className = className
  if (parent) {parent.append(el)}
  return el
}