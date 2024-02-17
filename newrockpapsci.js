const choices = document.querySelectorAll(".rps");
const start = document.getElementById("playgame");
const ucount = document.getElementById("userCount");
const ccount = document.getElementById("compCount");
const clr = document.getElementById("btn");
let uc = 0;
let cc = 0;

function clrs() {
    uc = 0;
    cc = 0;
    ucount.textContent = uc;
    ccount.textContent = cc;
    start.textContent = "play game";
    start.style.backgroundColor = "#ff7f50";
}

function comp() {
    const arr = ['scissor', 'paper', 'rock'];
    let com = Math.floor(Math.random() * 3);
    console.log(com);
    return arr[com];
}

function showwinner(userwin, uch, cch) {
    if (userwin) {
        start.textContent = `you win ${uch} over ${cch}`;
        start.style.backgroundColor = "#1e9e35fa";
    } else {
        start.textContent = `you lose ${uch} over ${cch}`;
        start.style.backgroundColor = "#dc1515f5";
    }
}

function draw(cchoice, uchoice) {
    clrs();
    start.textContent = `game draw as ${uchoice} and ${cchoice} are same`;
    start.style.backgroundColor = "#cdde30";
}

function playgame(uchoice) {
    let userwin = true;
    let cchoice = comp();
    if (cchoice === uchoice) {
        console.log("draw game");
        draw(cchoice, uchoice);
    } else {
        if (
            (uchoice === "scissor" && cchoice === "paper") ||
            (uchoice === "paper" && cchoice === "rock") ||
            (uchoice === "rock" && cchoice === "scissor")
        ) {
            uc++;
            userwin = true;
            console.log("you win");
        } else {
            userwin = false;
            console.log("you lose");
            cc++;
        }
        showwinner(userwin, uchoice, cchoice);
    }
    ucount.textContent = uc;
    ccount.textContent = cc;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let uchoice = choice.getAttribute("id");
        playgame(uchoice);
    });
});

clr.addEventListener("click", clrs);
