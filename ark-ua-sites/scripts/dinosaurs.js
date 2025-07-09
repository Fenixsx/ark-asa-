
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dinoList = document.getElementById("dino-list");

async function loadDinos() {
  const querySnapshot = await getDocs(collection(db, "dinosaurs"));
  dinoList.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p>`;
    dinoList.appendChild(div);
  });
}

loadDinos();
