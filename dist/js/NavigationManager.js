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
        this.subNavContainer = document.querySelector('nav#sub-nav-container');
        this.subNavContainerInner = document.querySelector('nav#sub-nav-container>div');

        this.hamburgerButton = document.querySelector('#hamburger > button');
    }

    showNavigation() {
        this.subNavContainer.style.height = `${this.subNavContainerInner.offsetHeight}px`;
    }

    hideNavigation() {
        this.subNavContainer.style.height = 0;
    }

    registerEvents() {
        hamburger.addEventListener('click', (e) => {
            if (this.subNavContainer.offsetHeight) {
                this.hamburgerButton.classList.remove('is-active');
                this.hideNavigation();

            }
            else {
                this.hamburgerButton.classList.add('is-active');
                this.showNavigation();
            }
        })

        window.addEventListener('resize', (e) => {
            if (window.innerWidth < this.MEDIUM_BREAKPOINT) {
                this.hideNavigation();
                this.subNavContainer.classList.add('animate-1');
            }
            if (window.innerWidth >= this.MEDIUM_BREAKPOINT) {
                this.subNavContainer.style.height = '100%';
                this.subNavContainer.classList.remove('animate-1');
            }
        });
    }
}

function registerEvents() {
    (new NavigationManager()).registerEvents()
}

export {registerEvents};