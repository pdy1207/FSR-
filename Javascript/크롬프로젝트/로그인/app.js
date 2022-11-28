const loginForm = document.querySelector(".login-form ");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//일반적으로 string만 포함된 변수는 대문자로 표기함.
//반복되는것은 변수로 담는게 좋다.

function onLoginSubmit(event) {
  event.preventDefault();
  //새로고침하는것을 막아주고
  const username = loginInput.value;
  // input의 입력값을 변수로 담아
  localStorage.setItem(USERNAME_KEY, username);
  // 로컬스토리지 DB값 저장하기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //form을 css 통하여, 숨기고
  //   greeting.innerText = "Hello " + username; //greeting 이라는 h1에 담는다.
  //허나 이 방법이 마음에 안든다면 `` 사용하자
  paintGreetings();
  //class hidden을 삭제한다.
}

function paintGreetings(username) {
  greeting.innerText = `Hello  ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreetings(savedUsername);
}
