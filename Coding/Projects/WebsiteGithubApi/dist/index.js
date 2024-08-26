"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// HTML ELEMENTS
const getUserName = document.querySelector("#user");
const formSubmit = document.querySelector("#form");
// const formSubmit : HTMLFormElement | Null = document.querySelector('#form'); // SAME AS ABOVE
const cardsContainer = document.querySelector("#card-container");
// FUNCTION TO DISPLAY USER INFORMATION
const showUserUI = (singleUser) => {
    const { login, avatar_url, location, url } = singleUser;
    cardsContainer.insertAdjacentHTML("beforeend", `
        <div class="col d-flex justify-content-center mb-4">
            <div class="card" style="width: 16rem;">
                <img src="${avatar_url}" class="card-img-top" alt="${login}">
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize fw-bold">${login}</h5>
                    <a href="${url}" class="btn btn-primary fw-bold">Github</a>
                </div>
            </div>
        </div>
      `);
};
// REUSABLE FETCHER FUNCTION (Here T in <T> is equal to <UserData[]>)
// (const customDataFetcher<T>: This declares a generic function. The <T> syntax indicates that customDataFetcher is a generic function, allowing you to specify the type of data it returns when you call it.)
function customDataFetcher(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, options);
        if (!response.ok) {
            throw new Error(`Network response is not ok: ${response.statusText}`);
        }
        const data = yield response.json();
        return data;
    });
}
// FUNCTION TO FETCH DATA FROM API
function fetchUsersData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usersData = yield customDataFetcher(url, {}); // GENERIC TYPE => Tells output will be array of objs
            usersData.map((singleUser) => {
                showUserUI(singleUser);
            });
        }
        catch (error) {
            console.error("Error fetching users data:", error);
        }
    });
}
// SEARCH FUNCTIONALITY
formSubmit.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    try {
        const userInputText = getUserName.value;
        const users = yield customDataFetcher("https://api.github.com/users", {});
        const matchingUsers = yield users.filter((user) => {
            return user.login.toLowerCase().includes(userInputText);
        });
        console.log(matchingUsers);
        if (matchingUsers.length === 0) {
            cardsContainer.insertAdjacentHTML("beforeend", `
                  <div class="d-flex justify-content-center align-items-center">
                      <h2> No matching user found!</h2>
                  </div>
                `);
        }
        else {
            cardsContainer.innerHTML = "";
            for (const user of matchingUsers) {
                showUserUI(user);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}));
// CALLING FUNCTION TO FETCH DATA BY DEFAULT
fetchUsersData("https://api.github.com/users");
