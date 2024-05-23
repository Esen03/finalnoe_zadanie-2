
const open_btn = document.querySelector('#open');
const modal = document.querySelector('#my-modal');
const close_btn = document.querySelector('#close');
const styles = modal.style;
const form = document.querySelector('#my-form');

open_btn.addEventListener('click', () => {
    styles.opacity = 1;
    styles.transitionDuration = '3s';
    
})

close_btn.addEventListener('click', () => {
    styles.opacity = 0;
    styles.transitionDuration = '1s';
})


form.addEventListener('submit', () => {
    alert('work');
})