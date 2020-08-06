class HighlightRowButtons {    

    makeElementBright(element, baseClassName)  {
        element.classList.remove(`${baseClassName}-1-dim`);
        element.classList.add(`${baseClassName}-1-bright`);
    }

    makeElementDim(element, baseClassName) {
        element.classList.remove(`${baseClassName}-1-bright`);
        element.classList.add(`${baseClassName}-1-dim`);
    }

    registerEvents() {
        const elements = document.querySelectorAll('[data-row-over-toggle]');
        [...elements].forEach((element) => {
    
            let baseClassName = element.getAttribute('data-row-over-toggle');    
            console.log(baseClassName);

            element.addEventListener('mouseover', (e) => {
                this.makeElementBright(element, baseClassName);
            });

            element.addEventListener('mouseout', (e) => {
                this.makeElementDim(element, baseClassName);
            });
        });
    }    
}

function registerEvents() {
    (new HighlightRowButtons()).registerEvents();
}

export {registerEvents};

