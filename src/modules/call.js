const btn = document.querySelector('.item-3-1');
const btn1 = document.querySelector('.item-3-2');
const btn2 = document.querySelector('.show-more1');
const readMore = () => {
    let btn = document.querySelector('.show-more');
    let container_right = document.querySelector('.container_right');

    if(container_right.style.display === 'none'){
        container_right.style.display = 'inline';
    }
    else{
        container_right.style.display = 'none';
    }
};

const readMore1 = () => {
    let btn1 = document.querySelector('.show-more');
    let container_right = document.querySelector('.container_right');

    if(container_right.style.display === 'inline'){
        container_right.style.display = 'none';
    }
};

btn.addEventListener('click', readMore);
btn1.addEventListener('click', readMore);
btn2.addEventListener('click', readMore1);