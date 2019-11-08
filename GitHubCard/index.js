/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/aanderson9313');

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['IslaMcn', 'Heart8reak', 'munal92', 'aniiGar', 'JrodDvlpr'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
const  cardCreator = (user) =>  {
  // create new elements
  const newCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLoc = document.createElement('p');
  const userProf = document.createElement('p');
  const userAdd = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  // html tree
newCard.appendChild(userImg);
newCard.appendChild(cardInfo);
cardInfo.appendChild(usersName);
cardInfo.appendChild(userName);
cardInfo.appendChild(userLoc);
cardInfo.appendChild(userProf)
cardInfo.appendChild(userFollowers);
cardInfo.appendChild(userFollowing);
cardInfo.appendChild(userBio);
userProf.appendChild(userAdd);

// set classlist
newCard.classList.add('card');
cardInfo.classList.add('card-info');
usersName.classList.add('name');
userName.classList.add('username');
// content
userImg.src = user.avatar_url;
usersName.textContent = `${user.name}`;
userName.textContent = `${user.login}`;
userLoc.textContent = `${user.location}`;
userFollowers.textContent = `${user.followers}`;
userFollowing.textContent = `${user.following}`;
userBio.textContent = `${user.bio}`;
userProf.textContent = "Profile: ";
userAdd.textContent = `${user.html_url}`;

return newCard
};
const cards = document.querySelector('.cards');
  axios
  .get('https://api.github.com/users/aanderson9313')
    .then(response => {
      const myCard = cardCreator(response.data);
      cards.appendChild(myCard);
      console.log(response.data);
      return response.data.followers_url;
    })
    .then(followers => {
      axios
      .get(followers)
      .then(response => {
        response.data.forEach(follower => {
          axios
          .get(`https://api.github.com/users/${follower.login}`)
          .then(Follow => {
            const followerCard = cardCreator(Follow.data);
            cards.appendChild(followerCard);
          })
        })
        console.log(response);

      });
    })
    
    .catch( error => {
      console.log('the data was not returned', error);
    });

  
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
