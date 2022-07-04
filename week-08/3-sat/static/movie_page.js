const allMovieLinks = document.querySelectorAll('a')
for (const movieLink of allMovieLinks) {
    movieLink.addEventListener('click', function () {
        fetch('')
    })
}