const btn = document.getElementById('btn');
btn.addEventListener('click',() => {
  const childList = document.getElementById('text');
  childList.textContent = 'ボタンをクリックしました';
});