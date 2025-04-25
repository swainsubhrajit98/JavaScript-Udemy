console.log("Hello Wolrd");
// 1. Remove Duplicates from an Array
const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

const uniqueArr = arr.filter((num, index) => arr.indexOf(num) === index);
console.log(uniqueArr);
// Q1: Write a function to fetch user data from an API using async/await.
async function fetchRandomUser() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];
    console.log(user);

    //   const userHtml = `
    //     <img src="${user.picture.large}" alt="User Picture" />
    //     <h3>${user.name.first} ${user.name.last}</h3>
    //     <p><strong>Email:</strong> ${user.email}</p>
    //     <p><strong>Gender:</strong> ${user.gender}</p>
    //     <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    //   `;

    //   document.getElementById('userContainer').innerHTML = userHtml;
  } catch (error) {
    //   document.getElementById('userContainer').innerHTML = `<p>Error loading user.</p>`;
    console.error("Error:", error);
  }
}

// Fetch initial user
fetchRandomUser();
//   Q4: Demonstrate a callback function usage.
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
