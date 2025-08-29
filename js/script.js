const curatedNumbers = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,11,22,33,44,55,66,77,88,99,100,101,111,144,222,333,444,555,777,888,999,1010,1212,1111,19000000
];

const btn = document.getElementById('revealBtn');
const out = document.getElementById('energyNumber');
const lastTime = document.getElementById('lastTime');

function pickRandom() {
  const idx = Math.floor(Math.random() * curatedNumbers.length);
  return curatedNumbers[idx];
}

function formatNumber(n){
  // Removes commas for 4-digit numbers
  return n >= 1000 && n < 10000 ? n.toString() : n.toLocaleString();
}

function animateNumber(el) {
  el.style.transition = 'transform .35s cubic-bezier(.2,.8,.2,1), opacity .35s ease';
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px) scale(.98)';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
    });
  });
}

function reveal() {
  const n = pickRandom();
  out.textContent = formatNumber(n);
  animateNumber(out);
  const t = new Date();
  lastTime.textContent = 'Picked ' + t.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

btn.addEventListener('click', reveal);
btn.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); reveal(); }
});
