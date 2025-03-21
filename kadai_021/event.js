const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  
  const childList = document.getElementById('text');
  setTimeout( () => {
  childList.textContent = 'ボタンがクリックされました'
  },2000);

});