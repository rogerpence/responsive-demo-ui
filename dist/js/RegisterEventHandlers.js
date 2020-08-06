class RegisterEventHandlers {

    dataRowEvents(row, event)  {        
        const elements = row.querySelectorAll('[data-row-over-toggle]');
        [...elements].forEach((element) => {

            const baseClassName = element.getAttribute('data-row-over-toggle');    
            if (event.type == 'mouseover') {
                element.classList.remove(`${baseClassName}-dim`);
                element.classList.add(`${baseClassName}-bright`);
            }
            else if (event.type == 'mouseout') {
                element.classList.add(`${baseClassName}-dim`);
                element.classList.remove(`${baseClassName}-bright`);
            }    
        });    
    }

    register() {
        const rows = document.querySelectorAll('.data-row');
        [...rows].forEach((row) => {          
            row.addEventListener('mouseover', (e) => {
                this.dataRowEvents(row, e);
            });

            row.addEventListener('mouseout', (e) => {
                this.dataRowEvents(row, e);
            });
        });    
    };
}

function registerEventHandlers() {
    (new RegisterEventHandlers()).register();
}

export {registerEventHandlers};