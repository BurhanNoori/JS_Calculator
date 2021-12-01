let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let flag = false;
for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('Button text is ', buttonText);
    let val = screen.value;
    if (buttonText == 'C') {
      screenValue = "";
      screen.value = screenValue;
    }
    else if (buttonText == 'bspc') {
      screenValue = screenValue.substr(0, screenValue.length - 1);
      screen.value = screenValue;
    }
    else if (buttonText == 'sqrt') {
      screenValue = Math.sqrt(screenValue);
      screen.value = screenValue;
    }
    else if (buttonText == 'sin') {
      screen.value = Math.sin(degtoRadian(val, flag));
    }
    else if (buttonText == 'cos') {
      screen.value = Math.cos(degtoRadian(val, flag));
    }
    else if (buttonText == 'tan') {
      screen.value = Math.tan(degtoRadian(val, flag));
    }
    else if (buttonText == 'log') {
      screen.value = Math.log(screenValue);
    }
    else if (buttonText == 'e') {
      screen.value = Math.exp(screenValue);
    }
    else if (buttonText == 'deg' || buttonText == 'rad') {
      if (flag == false && buttonText == 'deg') {
        flag = true;
        e.target.innerText = 'rad';
      }
      else {
        flag = false;
        e.target.innerText = 'deg';
      }
    }
    else if (buttonText == '=') {
      screenValue = eval(screenValue);
      screen.value = screenValue;

    }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
function degtoRadian(val, flag) {
  if (flag == true) {
    return (Math.PI / 180 * val);
  }
  else {
    return (180 / Math.PI * val)
  }
}