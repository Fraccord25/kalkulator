const display = document.getElementById('display');
const modeLabel = document.getElementById('modeLabel');

function append(value) {
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  const text = display.innerText;
  display.innerText = text.length <= 1 ? '0' : text.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    display.innerText = result;
  } catch (err) {
    display.innerText = 'Error';
  }
}

function toggleMode() {
  const body = document.body;
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    modeLabel.textContent = 'Light';
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    modeLabel.textContent = 'Dark';
  }
}
