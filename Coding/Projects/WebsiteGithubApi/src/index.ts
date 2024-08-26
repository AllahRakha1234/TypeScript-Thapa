// HTML ELEMENTS
const getUserName = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
// const formSubmit : HTMLFormElement | Null = document.querySelector('#form'); // SAME AS ABOVE
const cardsContainer = document.querySelector(
  "#card-container"
) as HTMLDivElement;

// DEFINING CONTRACT OF AN OBJECT
interface UserData {
  id: number;
  login: string; // For UserName
  avatar_url: string;
  location: string;
  url: string;
}

// FUNCTION TO DISPLAY USER INFORMATION
const showUserUI = (singleUser: UserData) => {
    const { login, avatar_url, location, url } = singleUser;
    cardsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="col d-flex justify-content-center mb-4">
            <div class="card" style="width: 16rem;">
                <img src="${avatar_url}" class="card-img-top" alt="${login}">
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize fw-bold">${login}</h5>
                    <a href="${url}" class="btn btn-primary fw-bold">Github</a>
                </div>
            </div>
        </div>
      `
    );
  };
  

// REUSABLE FETCHER FUNCTION (Here T in <T> is equal to <UserData[]>)
// (const customDataFetcher<T>: This declares a generic function. The <T> syntax indicates that customDataFetcher is a generic function, allowing you to specify the type of data it returns when you call it.)
async function customDataFetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Network response is not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

// FUNCTION TO FETCH DATA FROM API
async function fetchUsersData(url: string) {
  try {
    const usersData = await customDataFetcher<UserData[]>(url, {}); // GENERIC TYPE => Tells output will be array of objs
    usersData.map((singleUser) => {
      showUserUI(singleUser);
    });
  } catch (error) {
    console.error("Error fetching users data:", error);
  }
}

// SEARCH FUNCTIONALITY
formSubmit.addEventListener("submit", async (e)=>{
    e.preventDefault()

    try {
        const userInputText = getUserName.value;
        const users = await customDataFetcher<UserData[]>("https://api.github.com/users", {});
        const matchingUsers = await users.filter((user)=>{
            return user.login.toLowerCase().includes(userInputText)
        })
            console.log(matchingUsers)
        if(matchingUsers.length === 0){
            cardsContainer.insertAdjacentHTML(
                "beforeend",
                `
                  <div class="d-flex justify-content-center align-items-center">
                      <h2> No matching user found!</h2>
                  </div>
                `
            )
        }
        else {
            cardsContainer.innerHTML = "";
            for(const user of matchingUsers){
                showUserUI(user)
            }
        }
        
    } catch (error) {
        console.log(error)
    }


})

// CALLING FUNCTION TO FETCH DATA BY DEFAULT
fetchUsersData("https://api.github.com/users");
