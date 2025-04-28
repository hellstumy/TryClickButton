let btn = document.getElementById("btn")
let title = document.getElementById("title")
let win = document.getElementById("win")
let tryis = document.getElementById("tryis")
const list = ['Nice try', 'Again', 'Soooo close', 'Again', 'Try Again']



let count = 0

btn.addEventListener('mouseover', ()=>{
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const randomX = Math.floor(Math.random() * (windowWidth - btn.offsetWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - btn.offsetHeight));
  count++

  btn.style.left = `${randomX}px`
  btn.style.bottom = `${randomY}px`

  const randomIndex = Math.floor(Math.random() * list.length);
  const randomWord = list[randomIndex];
  btn.textContent = `${randomWord}`
  
})
btn.addEventListener("click", ()=>{
  tryis.style.display = "block"
  document.getElementById("tryis").textContent = `${count} attempts`
  win.style.display = "block"
  btn.textContent = "YOU WIIIN!!!!"
})