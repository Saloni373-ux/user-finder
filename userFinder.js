let users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "amita mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
        name: "diya bansal",
        pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
        bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    },
    {
        name: "tanay rawat",
        pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
        bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
    },
    {
        name: "mohit chhabra",
        pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
        bio: "aesthetic overload 📸🕊️ | living in lowercase",
    },
];

// function showUsers(arr) {
//     arr.forEach((user) => {
//         // Create outer card div
//         const card = document.createElement("div");
//         card.classList.add("card");

//         // create image
//         const img = document.createElement("img");
//         img.classList.add("bg-img");
//         img.src = user.pic;

//         // create blurred div 
//         const blurredLayer = document.createElement("div");
//         blurredLayer.classList.add("blurred-layer");
//         blurredLayer.style.backgroundImage = `url(${user.pic})`;

//         //create content div
//         const content = document.createElement("div");
//         content.classList.add("content");


//         // create h3 and p
//         const h3 = document.createElement("h3");
//         h3.textContent = user.name;

//         const para = document.createElement("p");
//         para.textContent = user.bio;

//         //Append heading and para in content
//         content.appendChild(h3);
//         content.appendChild(para);

//         // Append img ,blurred-layer and content into card
//         card.appendChild(img);
//         card.appendChild(blurredLayer);
//         card.appendChild(content);


//         //finally , append card to the body or container
//         document.querySelector(".cards").appendChild(card);



//     });
// }

// showUsers(users);
// // saare users show krna
// //filter krna har bar input krnr pe

// let inp = document.querySelector(".inp");
// inp.addEventListener("input",()=>{
//     let newUsers = users.filter((user)=>{
//         return user.name.startsWith(inp.value);
//     });
//     document.querySelector(".cards").innerHTML = "";
//     showUsers(newUsers);
// })
// // show larana filtered users

// Optimized Code

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

// Create and display user cards
function showUsers(arr) {
    const fragment = document.createDocumentFragment();
      // If no users match, show a message
    if (arr.length === 0) {
        cardsContainer.innerHTML = `
           <p class="no-users">No users found! 😕</p> 
        `;
        return;
    }


    arr.forEach((user) => {
        // Create card
        const card = document.createElement("div");
        card.classList.add("card");

        // Create image
        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic;
        img.alt = user.name;

        // Create blurred background layer
        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url("${user.pic}")`;

        // Create content container
        const content = document.createElement("div");
        content.classList.add("content");

        // Create name and bio
        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        // Build the card
        content.append(h3, para);
        card.append(img, blurredLayer, content);

        // Add card to fragment
        fragment.appendChild(card);
    });

    // Add all cards to the page together
    cardsContainer.replaceChildren(fragment);
}

// Display all users initially
showUsers(users);

// Filter users while typing
inp.addEventListener("input", () => {
    const searchText = inp.value.trim().toLowerCase();

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchText)
    );

    showUsers(filteredUsers);
    
    
});
