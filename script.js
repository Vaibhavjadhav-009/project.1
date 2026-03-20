var clutter = " ";

for(let i = 1 ; i <= 70 ; i++){
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#xy").innerHTML = clutter;