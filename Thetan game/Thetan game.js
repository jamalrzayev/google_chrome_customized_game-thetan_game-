let player = document.getElementById("player");
let object = document.getElementById("object");

document.addEventListener("keydown", function(event) {
    jump()
});

function jump () {
    // player.classList.add("jump")
    // player.setAttribute("class", "jump")
    if (player.classList != "jump") {
        player.classList.add("jump")
    }
    setTimeout(function() {
        player.classList.remove("jump")
    }, 200)
}

let isAlive = setInterval ( function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let objectLeft = parseInt(window.getComputedStyle(object).getPropertyValue("left"));

    if (objectLeft < 40 && objectLeft > 0 && playerTop >= 150) {
        alert("GAME OVER")
    }
}, 50)