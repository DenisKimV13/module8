const i = 0;
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
