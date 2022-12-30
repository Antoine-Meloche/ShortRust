const addBtn = document.querySelector('#add-btn');

addBtn.onclick = () => {
    info = addShortcutModal();
}

function addShortcutModal() {
    modal = document.createElement('div');
    modal.classList.add('modal');
    nameInput = document.createElement('input');
    nameInput.classList.add('new-short-name');
    nameInput.placeholder = 'Shortcut name';
    nameInput.title = 'Display name for your new shortcut';
    modal.appendChild(nameInput);
    descInput = document.createElement('textarea');
    descInput.classList.add('new-short-desc');
    descInput.placeholder = 'Description ... (optional)';
    descInput.title = 'Description for your new shortcut';
    modal.appendChild(descInput);
    submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.innerHTML = 'New Shortcut';
    modal.appendChild(submitBtn);
    closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '⤫';
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
}