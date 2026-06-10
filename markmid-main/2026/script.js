const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(box => {
  // Load saved state
  const saved = localStorage.getItem(box.id);
  if (saved === 'true') {
    box.checked = true;
  }

  // Save on change
  box.addEventListener('change', () => {
    localStorage.setItem(box.id, box.checked);
  });
});
