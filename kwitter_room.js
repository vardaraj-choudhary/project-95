const firebaseConfig = {
      apiKey: "AIzaSyBpMlrfRt1qfWPks3o9kteXyaiXBhcgG4M",
      authDomain: "project-93-97-3ad6b.firebaseapp.com",
      projectId: "project-93-97-3ad6b",
      storageBucket: "project-93-97-3ad6b.appspot.com",
      messagingSenderId: "414061408778",
      appId: "1:414061408778:web:9856a34bcbab6d966ba5f3"
    };
    
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}