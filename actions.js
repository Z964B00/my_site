document.addEventListener('DOMContentLoaded', function() {
    event.preventDefault();
    var homeContent = document.querySelector('#homepage');
    var bioContent = document.querySelector('#bio');
    var projContent = document.querySelector('#projects');
    var docContent = document.querySelector('#documentation');
    document.getElementById('title').addEventListener('click', function(event) {
        homeContent.style.display = 'block';
        bioContent.style.display = 'none';
        projContent.style.display = 'none';
        docContent.style.display = 'none';
    });
    document.getElementById('bio-link').addEventListener('click', function(event) {
        homeContent.style.display = 'none';
        bioContent.style.display = 'block';
        projContent.style.display = 'none';
        docContent.style.display = 'none';
    });
    document.getElementById('projects-link').addEventListener('click', function(event) {
        homeContent.style.display = 'none';
        bioContent.style.display = 'none'
        projContent.style.display = 'block';
        docContent.style.display = 'none';
    });
    document.getElementById('documentation-link').addEventListener('click', function(event) {
        homeContent.style.display = 'none';
        bioContent.style.display = 'none'
        projContent.style.display = 'none';
        docContent.style.display = 'block';
    });
    const menuItems = document.querySelectorAll('.doc-top-block-menu li');
    menuItems.forEach(function(item) {
        item.addEventListener('mouseenter', function(event) {
            let unselectedDoc = item.querySelector('.unselected');
            let selectedDoc = item.querySelector('.selected');

            unselectedDoc.style.display = 'none';
            selectedDoc.style.display = 'block';
        });

        item.addEventListener('mouseleave', function(event) {
            let unselectedDoc = item.querySelector('.unselected');
            let selectedDoc = item.querySelector('.selected');

            unselectedDoc.style.display = 'block';
            selectedDoc.style.display = 'none';
        });
    })
    const sidebarElements = document.querySelectorAll('.sidebar-clickable');
    sidebarElements.forEach(function(element) {
        element.addEventListener('click', function() {
            elements.forEach(function(el) {
                el.classList.remove('sidebar-clicked');
            });
            this.classList.add('sidebar-clicked');
        });
    });
    const titleElement = document.querySelector('#title');
    titleElement.addEventListener('click', function() {
        elements.forEach(function(el) {
            el.classList.remove('sidebar-clicked');
        });
    })
    const docElements = document.querySelectorAll('.doc-item-clickable');
    docElements.forEach(function(element) {
        element.addEventListener('click', function() {
            elements.forEach(function(el) {
                el.classList.remove('doc-item-clicked');
            });
            this.classList.add('doc-item-clicked');
        });
    });
});
