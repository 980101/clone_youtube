const moreBtn = document.querySelector('.infoAndUpnext .info .titleAndButton .moreBtn');
const title = document.querySelector('.infoAndUpnext .info .titleAndButton .title');

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});