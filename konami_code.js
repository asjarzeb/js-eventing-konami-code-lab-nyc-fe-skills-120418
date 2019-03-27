const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

function init() {
  // Write your JavaScript code inside the init() function
  function onKeyDown(event) {
    console.log(event.keyCode)
    
    if (event.keycode === code[tracker])
    tracker++
    
    }
  }
  
  document.addEventListener('keydown', onKeyDown)

if (event.keyCode) === code[tracker]) {
  
// tracker = tracker + 1
// if tracker === 9 -> then message

} else {
  // tracker = 0 
}
}
init()