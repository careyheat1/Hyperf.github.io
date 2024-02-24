document.addEventListener('DOMContentLoaded', function () {
    // Get the notepad body element
    var notepadBody = document.getElementById('notepad-body');

    // Load saved notes from localStorage
    if (localStorage.getItem('notes')) {
        notepadBody.innerHTML = localStorage.getItem('notes');
    }

    // Save notes to localStorage whenever content changes
    notepadBody.addEventListener('input', function () {
        localStorage.setItem('notes', this.innerHTML);
    });
});