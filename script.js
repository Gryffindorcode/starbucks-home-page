// variables

const btn = document.getElementById('btn-menu');
const nav = document.getElementById('menu');

// functions

function navToggle() {
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

// EventListener

btn.addEventListener('click', navToggle);