const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

function init() {
  console.log(hi)
  // Write your JavaScript code inside the init() function
  function onKeyDown(event) {
    
    if (event.keycode === code[tracker]) {
    tracker++
    } else {
      tracker = 0 
  }
  
  if (tracker === 10) {
    alert('Nice Job')
  }
  
}
  document.addEventListener('keydown', onKeyDown)

}

init()