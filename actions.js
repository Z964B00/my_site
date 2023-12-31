document.addEventListener('DOMContentLoaded', function() {
    event.preventDefault();
    var homeContent = document.querySelector('#homepage');
    var bioContent = document.querySelector('#bio');
    var projContent = document.querySelector('#projects');
    var docContent = document.querySelector('#documentation');
    var contactInfo = document.querySelector('#contact-info');
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
    document.getElementById('contact-link').addEventListener('click', function(event) {
        if (contactInfo.style.visibility === 'visible') {
            contactInfo.style.visibility = 'hidden';
        } else {
            contactInfo.style.visibility = 'visible';
        }
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
            document.getElementById('fact-placeholder-1').style.display = 'block';
            document.getElementById('site-fact-one').style.display = 'none';
            document.getElementById('site-fact-two').style.display = 'none';
            document.getElementById('site-fact-three').style.display = 'none';
            document.getElementById('site-fact').value = 'placeholder';
            document.getElementById('fact-placeholder-2').style.display = 'block';
            document.getElementById('personal-fact-one').style.display = 'none';
            document.getElementById('personal-fact-two').style.display = 'none';
            document.getElementById('personal-fact-three').style.display = 'none';
            document.getElementById('education-description').style.display = 'none';
            document.getElementById('experience-description').style.display = 'none';
            document.getElementById('skills-description').style.display = 'none';
            document.getElementById('fe-dev-description').style.display = 'none';
            document.getElementById('python-description').style.display = 'none';
            document.getElementById('gpts-description').style.display = 'none';
            menuItems.forEach(el => {
                el.classList.remove('active');
                let unselectedDoc = el.querySelector('.unselected');
                let selectedDoc = el.querySelector('.selected');
                unselectedDoc.style.display = 'block';
                selectedDoc.style.display = 'none';
            });
        });
    });

    document.getElementById('site-fact').addEventListener('change', function() {
        var selectedFact = this.value;
        var factPlaceholder = document.getElementById('fact-placeholder-1');
        document.getElementById('fact-placeholder-1').style.display = 'none';
        document.getElementById('site-fact-one').style.display = 'none';
        document.getElementById('site-fact-two').style.display = 'none';
        document.getElementById('site-fact-three').style.display = 'none';
        switch (selectedFact) {
            case 'placeholder':
                document.getElementById('fact-placeholder-1').style.display = 'block';
                break;
            case 'bio-fact':
                document.getElementById('site-fact-one').style.display = 'block';
                break;
            case 'projects-fact':
                document.getElementById('site-fact-two').style.display = 'block';
                break;
            case 'documentation-fact':
                document.getElementById('site-fact-three').style.display = 'block';
                break;
            default:
                factPlaceholder.style.display = 'block';
        }
    });

    document.querySelector('.site-facts input[type="reset"]').addEventListener('click', function(event) {
        document.getElementById('fact-placeholder-1').style.display = 'block';
        document.getElementById('site-fact-one').style.display = 'none';
        document.getElementById('site-fact-two').style.display = 'none';
        document.getElementById('site-fact-three').style.display = 'none';
        document.getElementById('site-fact').value = 'placeholder';
    }); 
    
    document.querySelector('.personal-facts input[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('fact-placeholder-2').style.display = 'none';
        document.getElementById('personal-fact-one').style.display = 'none';
        document.getElementById('personal-fact-two').style.display = 'none';
        document.getElementById('personal-fact-three').style.display = 'none';
        const factIds = ['personal-fact-one', 'personal-fact-two', 'personal-fact-three'];
        const randomFactId = factIds[Math.floor(Math.random() * factIds.length)];
        document.getElementById(randomFactId).style.display = 'block';
    });

    document.querySelector('.personal-facts input[type="reset"]').addEventListener('click', function(event) {
        document.getElementById('fact-placeholder-2').style.display = 'block';
        document.getElementById('personal-fact-one').style.display = 'none';
        document.getElementById('personal-fact-two').style.display = 'none';
        document.getElementById('personal-fact-three').style.display = 'none';
    });

    document.getElementById('education-description').style.display = 'none';
    document.getElementById('education').addEventListener('click', function(event) {
        const edDesc = document.querySelector('#education-description');
        if (edDesc.style.display === 'none') {
            edDesc.style.display = 'block';
        } else {
            edDesc.style.display = 'none';
        }
    })

    document.getElementById('experience-description').style.display = 'none';
    document.getElementById('experience').addEventListener('click', function(event) {
        const expDesc = document.querySelector('#experience-description');
        if (expDesc.style.display === 'none') {
            expDesc.style.display = 'block';
        } else {
            expDesc.style.display = 'none';
        }
    })

    document.getElementById('skills-description').style.display = 'none';
    document.getElementById('skills').addEventListener('click', function(event) {
        const skillsDesc = document.querySelector('#skills-description');
        if (skillsDesc.style.display === 'none') {
            skillsDesc.style.display = 'block';
        } else {
            skillsDesc.style.display = 'none';
        }
    })

    document.getElementById('fe-dev-description').style.display = 'none';
    document.getElementById('fe-dev').addEventListener('click', function(event) {
        const fedevDesc = document.querySelector('#fe-dev-description');
        if (fedevDesc.style.display === 'none') {
            fedevDesc.style.display = 'block';
        } else {
            fedevDesc.style.display = 'none';
        }
    })

    document.getElementById('python-description').style.display = 'none';
    document.getElementById('python').addEventListener('click', function(event) {
        const pythonDesc = document.querySelector('#python-description');
        if (pythonDesc.style.display === 'none') {
            pythonDesc.style.display = 'block';
        } else {
            pythonDesc.style.display = 'none';
        }
    })

    document.getElementById('gpts-description').style.display = 'none';
    document.getElementById('gpts').addEventListener('click', function(event) {
        const gptsDesc = document.querySelector('#gpts-description');
        if (gptsDesc.style.display === 'none') {
            gptsDesc.style.display = 'block';
        } else {
            gptsDesc.style.display = 'none';
        }
    })

    if (window.matchMedia("(max-width: 768px)").matches) {
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const contactLink = document.getElementById('contact-link');
        const contactInfo = document.getElementById('contact-info');
    
        contactLink.addEventListener('click', function() {
            if (contactInfo.style.display === 'block') {
                // Hide contact info and remove overlay
                contactInfo.style.display = 'none';
                document.body.removeChild(overlay);
                contactLink.classList.remove('sidebar-clicked');
            } else {
                // Show contact info and add overlay
                document.body.appendChild(overlay);
                contactInfo.style.display = 'block';
                contactLink.classList.add('sidebar-clicked');
            }
        });
    
        overlay.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
     
});
