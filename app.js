import {  onAuthStateChanged,  signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { auth,db} from './config.js'
// add data to firestore database
import { collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user.uid);
      
    } else {
      window.location = 'login.html'
    }
  });


  const logoutBtn = document.querySelector("#logoutBtn")


  logoutBtn.addEventListener('click', ()=>{
    
signOut(auth).then(() => {
  window.location = 'login.html'
  
}).catch((error) => {
  console.log(error);
  
});

  })

  //add data to firestore database task started 

  const form  = document.querySelector("#form")
  const title  = document.querySelector("#title")
  const description  = document.querySelector("#description")

  form.addEventListener('submit', async(event)=>{
    event.preventDefault();


    try {
        const docRef = await addDoc(collection(db, "posts"), {
         title:title.value,
         description:description.value,
         uid:auth.currentUser.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
      
    
  })
  
   //add data to firestore database task started 


   //get  data from firestore database task started 
   const card = document.querySelector("#card")

  async function getDataFromFirestore() {
    let arr = []
    const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
//   console.log(doc.data());
arr.push(doc.data())
console.log(arr);
arr.map((item)=>{
    card.innerHTML += `<li>'Title: ' ${item.title}</li> 
    <li>'description: '${item.description}</li>`
})


});
   }

   getDataFromFirestore();