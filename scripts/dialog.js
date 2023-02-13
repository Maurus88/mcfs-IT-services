function showDialog(title, message, imageSrc) {
    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
      <img src="${imageSrc}" alt="${title}">
      <h1>${title}</h1>
      <p>${message}</p>
      <button>Close</button>
    `;
    document.body.appendChild(dialog);
    dialog.showModal();
    dialog.querySelector('button').addEventListener('click', () => {
      dialog.close();
    });
    dialog.addEventListener('cancel', () => {
      dialog.close();
    });
  }