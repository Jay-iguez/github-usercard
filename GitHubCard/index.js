import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [
  `Jay-iguez`,
  'octocat',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

followersArray.forEach(element => {
  changingCards(element)
})

function changingCards(user) { 

axios.get(`https://api.github.com/users/${user}`)
.then(result => {
  console.log(result.data)
  const card = createCard(result.data)
 document.querySelector(".cards").appendChild(card)
})
.catch(error => {
  console.error(error)
})
}



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



function createCard(cardObject) {
const cardContainer = document.createElement("div")
const cardImage = document.createElement("img")
const cardInfo = document.createElement("div")
const cardHeading = document.createElement("h3")
const cardUserName = document.createElement("p")
const cardLocation = document.createElement("p")
const cardProfile = document.createElement("p")
const cardAddress = document.createElement("a")
const cardFollowers = document.createElement("p")
const cardFollowing = document.createElement("p")
const cardBio = document.createElement("p")
//
cardContainer.classList.add("card")
cardImage.src = cardObject.avatar_url
cardInfo.classList.add("card-info")
cardHeading.classList.add("name")
cardHeading.textContent = cardObject.name
cardLocation.textContent = `Location: ${cardObject.location}`
cardProfile.textContent = "Profile: "
cardAddress.href = cardObject.html_url
cardAddress.textContent = cardObject.html_url
cardFollowers.textContent = `Followers ${cardObject.followers}`
cardFollowing.textContent = `Following ${cardObject.Following}`
cardBio.textContent = `Bio: ${cardObject.bio}`
//
cardContainer.append(cardImage, cardInfo)
cardInfo.append(cardHeading, cardUserName, cardLocation, cardProfile, cardFollowers, cardFollowing, cardBio)
cardProfile.append(cardAddress)
//
return cardContainer
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
