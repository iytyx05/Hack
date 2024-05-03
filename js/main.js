let API = "http://localhost:3000/users"
let btn1 = document.querySelector("#btn-login")
let btn2 = document.querySelector("#btn-register")
let win = document.querySelector(".login-block")
let win2 = document.querySelector(".register-block")
let saveBtn = document.querySelector("#saveBtn")
let inp1 = document.querySelector("#inp1")
let inp2 = document.querySelector("#inp2")
let inpName = document.querySelector("#inpName")
let inpEmail = document.querySelector("#inpEmail")
let inpNumber = document.querySelector("#inpNumber")
let inpPassword = document.querySelector("#inpPassword")
let saveReg = document.querySelector("#saveRegister")

btn1.addEventListener("click", (e) => {
    win.style.display = "block"  
})

saveBtn.addEventListener("click", () => {
    if(!inp1.value.trim() || !inp2.value.trim()) {
        alert("Пожалуйста, заполните все поля");
        return;
    }
    let newObj = {
        email: inp1.value,
        password: inp2.value,
    }
    createFunc(newObj)
    win.style.display = "none";
})

function createFunc (todos) {
    fetch(API, {
        method: "POST",
        headers: {
        "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify(todos),
    }).then(() => readTodos())
}

function readTodos() {
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
      });
  }
  readTodos();

btn2.addEventListener("click", () => {
    win2.style.display = "block"
})

saveReg.addEventListener("click", () => {
    if(!inpEmail.value.trim() || !inpName.value.trim() || !inpNumber.value.trim() || !inpPassword.value.trim()) {
        alert("Пожалуйста, заполните все поля");
        return;
    }
    let newObj = {
        name: inpName.value,
        email: inpEmail.value,
        password: inpPassword.value,
        number: inpNumber.value,
    }
    createFunc(newObj)
})