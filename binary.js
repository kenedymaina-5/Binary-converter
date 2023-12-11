function convertToBinary() {
    const textInput = document.getElementById('textInput').value;
    const binaryOutput = document.getElementById('binaryOutput');
  
    if (textInput.trim() === '') {
      binaryOutput.innerText = 'Please enter some text.';
      return;
    }
  
    let binaryResult = '';
    for (let i = 0; i < textInput.length; i++) {
      const charCode = textInput.charCodeAt(i);
      const binaryRepresentation = charCode.toString(2).padStart(8, '0');
      binaryResult += binaryRepresentation + ' ';
    }
  
    binaryOutput.innerText = `Binary representation: ${binaryResult}`;
  
    // Add dark mode styles
    updateDarkModeStyles();
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    updateDarkModeStyles();
}

function updateDarkModeStyles() {
    const body = document.body;
    const binaryOutput = document.getElementById('binaryOutput');
  
    if (body.classList.contains('dark-mode')) {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
        binaryOutput.style.backgroundColor = '#333';
        binaryOutput.style.color = '#fff';
    } else {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#000';
        binaryOutput.style.backgroundColor = '#fff';
        binaryOutput.style.color = '#000';
    }
}

// Add additional features here

// Function to clear the text input and binary output
function clearInput() {
    const textInput = document.getElementById('textInput');
    const binaryOutput = document.getElementById('binaryOutput');
  
    textInput.value = '';
    binaryOutput.innerText = '';
}

// Function to copy the binary output to the clipboard
function copyToClipboard() {
    const binaryOutput = document.getElementById('binaryOutput');
  
    binaryOutput.select();
    document.execCommand('copy');
}
