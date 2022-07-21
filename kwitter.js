var firebaseConfig = {
  apiKey: "AIzaSyD5D47fXoWKhkVvPlW9HWMz3jH-FcgRvbg",
  authDomain: "kwitter-1b59f.firebaseapp.com",
  databaseURL: "https://kwitter-1b59f-default-rtdb.firebaseio.com",
  projectId: "kwitter-1b59f",
  storageBucket: "kwitter-1b59f.appspot.com",
  messagingSenderId: "573747663179",
  appId: "1:573747663179:web:a5f3afb5ded90dc41098ce",
  measurementId: "G-MK5T9GEJQB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ADD YOUR FIREBASE LINKS

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }