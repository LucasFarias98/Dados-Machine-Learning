// MODAL FUNCTIONS
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(event) {
        if (event && event.target.id === '' && !event.target.classList.contains('modal')) return;
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => modal.classList.remove('active'));
        document.body.style.overflow = 'auto';
    }

    // TOGGLE CONTENT
    function toggleContent(modalId, type) {
        const tecnico = document.getElementById(`${modalId}-tecnico`);
        const eli12 = document.getElementById(`${modalId}-eli12`);
        const buttons = document.querySelectorAll(`#${modalId} .toggle-btn`);

        buttons.forEach(btn => btn.classList.remove('active'));

        if (type === 'tecnico') {
            tecnico.classList.add('active');
            eli12.classList.remove('active');
            buttons[0].classList.add('active');
        } else {
            eli12.classList.add('active');
            tecnico.classList.remove('active');
            buttons[1].classList.add('active');
        }
    }

    // THEME TOGGLE
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    // CLOSE MODAL ON ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // LOAD SAVED THEME
    window.addEventListener('load', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    });

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
