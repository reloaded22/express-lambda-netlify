const btn_1 = document.getElementById("btn_1");
const output_1 = document.getElementById("output_1");
const form_btn_2 = document.getElementById("form_btn_2");
const btn_2 = document.getElementById("btn_2");
const output_2 = document.getElementById("output_2");

btn_1.addEventListener("click", ()=>{
    console.log("Button 1 was clicked");
    output_1.innerHTML = "Hard-coded text"
})

btn_2.addEventListener("click", (event)=>{
    console.log("Button 2 was clicked")
    //event.preventDefault();
})