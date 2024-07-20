document.addEventListener('DOMContentLoaded', () => {
    const movieInput = document.getElementById('movie-input');
    const movieList = document.getElementById('movie-list');

    movieInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && movieInput.value.trim() !== '') {
            addMovie(movieInput.value.trim());
            movieInput.value = '';
        }
    });

    function addMovie(movieName) {
        const li = document.createElement('li');
        const movieNameSpan = document.createElement('span');
        movieNameSpan.textContent = movieName;

        const statusButton = document.createElement('button');
        statusButton.textContent = 'To Watch';
        statusButton.classList.add('to-watch');
        statusButton.addEventListener('click', () => {
            if (statusButton.textContent === 'To Watch') {
                statusButton.textContent = 'Watched';
                statusButton.classList.remove('to-watch');
                statusButton.classList.add('watched');
            } else {
                statusButton.textContent = 'To Watch';
                statusButton.classList.remove('watched');
                statusButton.classList.add('to-watch');
            }
        });

        li.appendChild(movieNameSpan);
        li.appendChild(statusButton);
        movieList.appendChild(li);
    }
});
