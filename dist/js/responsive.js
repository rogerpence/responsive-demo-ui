class ReponsiveManager {
    constructor() {
        this.MEDIUM_BREAKPOINT = 768;
        this.hamburger = document.querySelector('#hamburger');
        this.subNavContainer = document.getElementById('sub-nav-container');
        this.hamburgerButton = document.querySelector('#hamburger > button');
    }

    showSubNav() {
        this.subNavContainer.classList.remove('max-h-0');
        this.subNavContainer.classList.add('max-h-125');
        this.hamburgerButton.classList.add('is-active');
    }

    hideSubNav() {
        this.subNavContainer.classList.add('max-h-0');
        this.subNavContainer.classList.remove('max-h-125');
        this.hamburgerButton.classList.remove('is-active');
    }

    registerEvents() {
        hamburger.addEventListener('click', (e) => {
            if (! this.subNavContainer.classList.contains('max-h-125')) {
                this.showSubNav();
            }
            else {
                this.hideSubNav();
            }
        })

        window.addEventListener('resize', (e) => {
            if (window.innerWidth < this.MEDIUM_BREAKPOINT) {
                this.hideSubNav();
            }
            if (window.innerWidth >= this.MEDIUM_BREAKPOINT) {
                this.showSubNav();
            }
        });
    }
}

function registerEvents() {
    (new ReponsiveManager()).registerEvents()
}

export {registerEvents};