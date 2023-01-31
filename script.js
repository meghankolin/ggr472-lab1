function clicked() {
    console.log("You clicked me")
}

//This is for the happy button I made
var button = document.getElementById("happy-btn");

button.addEventListener("click", function(){
    alert("The button hopes you have a great day :)")
})