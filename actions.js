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

    const initialDocTopBlockText = document.querySelector('.doc-top-block-text').innerHTML;
        document.getElementById('doc-home').addEventListener('click', function() {
            document.querySelector('.doc-top-block-text').innerHTML = initialDocTopBlockText;
            menuItems.forEach(el => {
                el.classList.remove('active');
                let unselectedDoc = el.querySelector('.unselected');
                let selectedDoc = el.querySelector('.selected');
                unselectedDoc.style.display = 'block';
                selectedDoc.style.display = 'none';
        });
    });

    const menuItems = document.querySelectorAll('.doc-top-block-menu li');
    menuItems.forEach(function(item) {
        item.addEventListener('mouseenter', function(event) {
            if (!this.classList.contains('active')) {
                let unselectedDoc = item.querySelector('.unselected');
                let selectedDoc = item.querySelector('.selected');

                unselectedDoc.style.display = 'none';
                selectedDoc.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', function(event) {
            if (!this.classList.contains('active')) {
                let unselectedDoc = item.querySelector('.unselected');
                let selectedDoc = item.querySelector('.selected');

                unselectedDoc.style.display = 'block';
                selectedDoc.style.display = 'none';
            }
        });

        item.addEventListener('click', function(event) {
            menuItems.forEach(el => {
                let unselected = el.querySelector('.unselected');
                let selected = el.querySelector('.selected');

                unselected.style.display = 'block';
                selected.style.display = 'none';

                el.classList.remove('active');
            });

            let unselectedDoc = this.querySelector('.unselected');
            let selectedDoc = this.querySelector('.selected');

            unselectedDoc.style.display = 'none';
            selectedDoc.style.display = 'block';

            this.classList.add('active');
        });
    });

    const sidebarElements = document.querySelectorAll('.sidebar-clickable');
    sidebarElements.forEach(function(element) {
        element.addEventListener('click', function() {
            sidebarElements.forEach(function(el) {
                el.classList.remove('sidebar-clicked');
            });
            this.classList.add('sidebar-clicked');
        });
    });

    const titleElement = document.querySelector('#title');
    titleElement.addEventListener('click', function() {
        sidebarElements.forEach(function(el) {
            el.classList.remove('sidebar-clicked');
        });
    });

    document.querySelectorAll('.doc-menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const docToLoad = this.getAttribute('data-doc');
            fetch(docToLoad)
                .then(response => response.text())
                .then(data => {
                    document.querySelector('.doc-top-block-text').innerHTML = data;
                })
                .catch(error => console.error('Error loading the document:', error));
        });
    });

    const sidebarMenuItems = document.querySelectorAll('.sidebar li');
    sidebarMenuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            document.querySelector('.doc-top-block-text').innerHTML = initialDocTopBlockText;
            menuItems.forEach(el => {
                el.classList.remove('active');
                let unselectedDoc = el.querySelector('.unselected');
                let selectedDoc = el.querySelector('.selected');
                unselectedDoc.style.display = 'block';
                selectedDoc.style.display = 'none';
            });
        });
    });
});
