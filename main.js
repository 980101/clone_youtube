'use strict'

const moreBtn = document.querySelector('.info .titleAndButton .moreBtn');
const title = document.querySelector('.info .titleAndButton .title');

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

/* responsive effect .moreBtn in .upNext */
const upNext = document.querySelector('.upNext .item');
const item_moreBtn = document.querySelector('.upNext .item .moreBtn');

upNext.addEventListener('mouseenter', ()=>{
    item_moreBtn.classList.add('active');
});

upNext.addEventListener('mouseleave', ()=>{
    item_moreBtn.classList.remove('active');
});