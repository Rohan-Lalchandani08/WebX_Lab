// Local in-memory users array (simulating a database)
let users = [];

// Show message for 15 seconds
function showMessage(text, color = 'red') {
  const messageBox = document.getElementById('message');
  messageBox.innerText = text;
  messageBox.style.color = color;
  messageBox.style.opacity = 1;

  if (messageBox.timeoutId) {
    clearTimeout(messageBox.timeoutId);
  }

  messageBox.timeoutId = setTimeout(() => {
    messageBox.innerText = '';
  }, 15000);
}

// Handle form submission (simulate async logic)
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const college = document.getElementById('college').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const addNewBtn = document.getElementById('addNewBtn');
  addNewBtn.style.display = 'none';

  if (!name) {
    showMessage('Name cannot be empty!');
    return;
  }

  if (password !== confirmPassword) {
    showMessage('Passwords do not match!');
    return;
  }

  // Simulate network fetch delay
  setTimeout(() => {
    const userExists = users.some(user => user.username === username);

    if (userExists) {
      showMessage('Username already exists!');
    } else {
      const newUser = { name, college, username, password };
      users.push(newUser);

      // Disable form fields
      document.querySelectorAll('#registerForm input, #registerForm button[type="submit"]').forEach(el => {
        el.disabled = true;
      });

      // Show success message
      setTimeout(() => {
        showMessage('✅ Successfully Registered!', 'green');
        addNewBtn.style.display = 'inline-block';
      }, 100);
    }
  }, 500);
});

// Reset form on Add New button click
document.getElementById('addNewBtn').addEventListener('click', function () {
  document.getElementById('registerForm').reset();
  document.getElementById('message').innerText = '';
  this.style.display = 'none';

  // Re-enable form fields
  document.querySelectorAll('#registerForm input, #registerForm button[type="submit"]').forEach(el => {
    el.disabled = false;
  });
});

// Auto-suggest college names
const collegeNames = ["VESIT", "DJ Sanghvi", "Sardar Patel", "KJ Somaiya", "VJTI"];
const datalist = document.getElementById('collegeList');

collegeNames.forEach(college => {
  const option = document.createElement('option');
  option.value = college;
  datalist.appendChild(option);
});
