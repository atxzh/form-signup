// SECTION Text Inputs

const text_inputs = document.querySelectorAll('.text')
const elements = [...text_inputs]

elements.forEach((element, index) => {

    element.addEventListener('input', (event) => {

        const input = event.target
        const label = input.nextElementSibling

        if (input.value.length !== 0) {
            input.classList.add('not-empty')
            label.classList.add('not-empty')
        } else {
            input.classList.remove('not-empty')
            label.classList.remove('not-empty')
        }
    });

});


const html_events = ['blur', 'input']
elements.slice(2, elements.length).forEach((element, index) => {

    html_events.forEach((e) => {
        element.addEventListener(e, (event) => {

            const input = event.target
            const label = input.nextElementSibling

            const validation = input.validity

            if (validation.valuemissing || validation.typeMismatch || validation.tooLong || validation.tooShort) {
                input.classList.add('invalid')
                label.classList.add('invalid')
            } else {
                input.classList.remove('invalid')
                label.classList.remove('invalid')
            }
        });
    });

});

['input'].forEach((e) => {
    elements[5].addEventListener(e, () => {

        if (elements[4].value !== elements[5].value) {
            elements[5].classList.add('invalid')
            elements[5].nextElementSibling.classList.add('invalid')

            elements[5].setCustomValidity('Passwords do not Match')
        } else {
            elements[5].classList.remove('invalid')
            elements[5].nextElementSibling.classList.remove('invalid')
            elements[5].setCustomValidity('')
        }

        elements[5].reportValidity();
    });
});

// !SECTION

const toggles = Array.from(document.querySelectorAll('.tog'))

toggles.forEach((radio) => {
    radio.addEventListener('click', () => {
        radio.classList.add('select')

        let bg_clr = window.getComputedStyle(document.body).getPropertyValue('background-image');
        const bg_regex = new RegExp(/(\b\d{1,3})(?=%)/, 'g');
        let count = 0;

        // ANCHOR DC
        if (radio.value == 'dc') {

            const bg_percentage = [0, 80, 100]

            let bg_clr_new = bg_clr.replace(bg_regex, () => bg_percentage[count++]);

            document.body.style.setProperty('background-image', bg_clr_new)

        }

        // ANCHOR RAND
        else if (radio.value == 'rand') {

            const bg_percentage = [0, 30, 100]

            let bg_clr_new = bg_clr.replace(bg_regex, () => bg_percentage[count++]);

            document.body.style.setProperty('background-image', bg_clr_new)

        }

        // ANCHOR MARVEL
        else if (radio.value == 'marvel') {

            const bg_percentage = [0, 30, 50];

            let bg_clr_new = bg_clr.replace(bg_regex, () => bg_percentage[count++]);

            document.body.style.setProperty('background-image', bg_clr_new)

        } else {
            return -1
        }

        toggles.filter((item) => { return item != radio }).forEach((item) => item.classList.remove('select'))
    })
})