const output = document.querySelector(".text");
const vals = document.querySelectorAll(".val");
const clearBtn = document.querySelector(".AC");
const deleteBtn = document.querySelector(".DEL");
const equaBtn = document.querySelector(".equal");

vals.forEach(val =>{
    val.addEventListener("click", ()=>{
        output.value += val.value;
    })
});

clearBtn.addEventListener("click", ()=>{
    output.value = "";
});

deleteBtn.addEventListener("click", ()=>{
    output.value = output.value.slice(0, -1);
});

equaBtn.addEventListener("click", ()=>{
    output.value = eval(output.value)
});