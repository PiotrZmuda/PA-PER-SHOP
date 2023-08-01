const access_token = localStorage.getItem("access_token"); // mamy go w Application
const BASE_URL = "https://ds-elp2-be.herokuapp.com/";

const userContent = document.getElementById("userContent");
const innerContemt = document.getElementById("innerContent");
const logoutButton = document.querySelector(".logout");

if (!access_token) {
  userContent.innerHTML = `<h3>Coś poszło nie tak.</h3>
    <p>Taki użytkownik nie istnieje, lub wystąpił błąd podczas logowania. Spróboj poniewnie później</p>
    <a href="login.html">Wróć do strony logowania</a>`;
} else {
  getUser();
}

async function getUser() {
  try {
    const response = await fetch(`${BASE_URL}profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    }); // profile ze swegger
    const result = await response.json();
    result.forEach((item) => {
        innerContemt.innerHTML += `<li>${item.firstName}, ${item.lastName}</li>`
    })
    console.log(result) // obj któy chcemy wyświetlić na fronice
  } catch (error) {
    console.log(error);
  }
}

logoutButton.addEventListener("click", () => {
    logout()
})

function logout(){
    localStorage.removeItem("access_token")
    localStorage.removeItem("remember_user")
    window.location.href = "./login.html"
}

const remember = Number(localStorage.getItem("remember_user"))
const rememberFlag = Boolean(remember)

window.addEventListener("beforeunload", function(){
  if(rememberFlag){
    return
  }else{
    this.localStorage.removeItem("access_token")
    this.localStorage.removeItem("remember_uset")
  }
})
