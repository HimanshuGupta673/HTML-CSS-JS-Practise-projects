// let audio=new Audio('sound.mp3');
// let a=document.querySelector('.car');
// a.addEventListener('click',()=>{
//     audio.play();
// })
// audio.play();

var audio=document.createElement('audio')
audio.setAttribute('src','sound.mp3')
audio.loop=true;
audio.play();