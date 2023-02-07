console.log('welcome to TIc tac toe')
let music = new Audio('Gaming Zone.mp3')
let win = new Audio('Win Tone.mp3')
let music2 = new Audio('audioturn.mp3')
let gameover = false;
let turn = "X";

const changeturn = () => {
    return turn == "X" ? "0" : "X";
}

const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 4, 6],
        [0, 4, 8],
        [2, 5, 8]
    ]
    wins.forEach(e => {
        if (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText != '') {
            document.querySelector('.infotext').innerHTML = boxtexts[e[0]].innerText + " won";
            gameover = true;
            document.querySelector('.imgwin').getElementsByTagName('img')[0].style.width="56px";
        }
    })
}
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            music2.play();
            checkwin();
            if(!gameover){
                document.getElementsByClassName('infotext')[0].innerHTML = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn="X"
    gameover=false;
    document.getElementsByClassName('infotext')[0].innerHTML = "Turn for " + "X";
    document.querySelector('.imgwin').getElementsByTagName('img')[0].style.width="0px";
    
    
})
