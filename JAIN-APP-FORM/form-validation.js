import { sayHello } from "./firebase-functions.js";

document.getElementById("send_info").addEventListener("click", sayHello);