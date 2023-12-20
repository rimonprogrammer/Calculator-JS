let display = document.getElementById("display")
let btn = document.querySelectorAll(".btn button");

for(let i = 0; i<btn.length; i++){
    let button = btn[i]

    button.addEventListener("click",(e)=>{
        let btnValue = e.target.innerText;

        if(btnValue == "="){
            display.value = eval(display.value)
        }
        else if(btnValue == "C"){
            display.value = " "
        }
        else{
            display.value = display.value + btnValue;
        }
    })
}


























// let display = document.getElementById("display")
// let btn = document.querySelectorAll(".btn button");

// for(let i=0; i<btn.length; i++){
//     let button = btn[i]

//     button.addEventListener("click",(e)=>{
//        const text = e.target.innerText;

//        if(text === "="){
//             display.value = eval(display.value)
//        }
//        else if(text === "C"){
//             display.value = " ";
//        }
//        else{
//         display.value = display.value + text;
//        }
//     })
// }