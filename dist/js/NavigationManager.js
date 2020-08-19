/*
 | Collapse navigation on one of two events:
 | * Click or tap hamburger.
 | * When the screen width reduces to less than MEDIUM_BREAKPOINT.

 | In the real world, the second event handler probably isn't
 | necessary. It's unlikely users would change widths like this
 | --and if they did it probably doesn't matter much.
 | However, for demoing the app's responsive capabilities
 | on a desktop browser, collapsing the navigation when
 | screen size is reduced looks good.
 |
*/

class NavigationManager {
    constructor() {
        this.MEDIUM_BREAKPOINT = 768;
        this.hamburger = document.querySelector('#hamburger');
        this.subNavContainer = document.getElementById('sub-nav-container');
        this.hamburgerButton = document.querySelector('#hamburger > button');
    }

    showNavigation() {
        this.subNavContainer.classList.remove('max-h-0');
        this.subNavContainer.classList.add('max-h-125');
        this.hamburgerButton.classList.add('is-active');
    }

    hideNavigation() {
        this.subNavContainer.classList.add('max-h-0');
        this.subNavContainer.classList.remove('max-h-125');
        this.hamburgerButton.classList.remove('is-active');
    }

    registerEvents() {
        hamburger.addEventListener('click', (e) => {
            if (! this.subNavContainer.classList.contains('max-h-125')) {
                this.showNavigation();
            }
            else {
                this.hideNavigation();
            }
        })

        window.addEventListener('resize', (e) => {
            if (window.innerWidth < this.MEDIUM_BREAKPOINT) {
                this.hideNavigation();
            }
            if (window.innerWidth >= this.MEDIUM_BREAKPOINT) {
                this.showNavigation();
            }
        });
    }
}

function registerEvents() {
    (new NavigationManager()).registerEvents()
}

export {registerEvents};