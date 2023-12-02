document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bio-link').addEventListener('click', function(event) {
        event.preventDefault();
        var homeContent = document.querySelector('.homepage');
        var bioContent = document.querySelector('.bio');
        homeContent.style.display = 'none';
        bioContent.style.display = 'block';
    });
    document.getElementsByClassName('title').addEventListener('click', function(event) {

    })
});
