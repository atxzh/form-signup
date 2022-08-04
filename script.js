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

// SECTION Color Change
const toggles = Array.from(document.querySelectorAll('.tog'))

toggles.forEach((radio) => {
    radio.addEventListener('click', () => {
        radio.classList.add('select')

        // Colors Gradient Percentage
        let bg_clr = window.getComputedStyle(document.body).getPropertyValue('background-image');
        const bg_regex = new RegExp(/(\b\d{1,3})(?=%)/, 'g');

        // Image
        let img = document.querySelector('.image')
        let bg_img = window.getComputedStyle(img).getPropertyValue('background-image')

        const bgimg_regex = new RegExp(/rgb[a]?\(.+?\)|(?<=assets\/)([\w\.\_\-]+)/, 'g')

        // ANCHOR Function to Change Based on Radio

        function radioChange(bg_percentage, clr_light_full, clr_light_transp, clr_dark, bg_image, logo) {

            // Color
            document.documentElement.style.setProperty('--light-full', clr_light_full)
            document.documentElement.style.setProperty('--light-transp', clr_light_transp)
            document.documentElement.style.setProperty('--dark', clr_dark)

            // Image
            const bgimg_setup = [clr_light_full, clr_light_transp, clr_dark, bg_image]
            let cnt = 0
            let bg_img_new = bg_img.replace(bgimg_regex, () => bgimg_setup[cnt++])

            img.style.setProperty('background-image', bg_img_new)

            // Background Percentage
            let count = 0;
            let bg_clr_new = bg_clr.replace(bg_regex, () => bg_percentage[count++]);

            document.body.style.setProperty('background-image', bg_clr_new)

            // Logo
            document.querySelector('#logo').setAttribute('src', logo)

        }

        if (radio.value == 'dc') {
            // ANCHOR DC

            const bg_percentage = [0, 80, 100]
            const clr_light_full = 'var(--dc-light-full)'
            const clr_light_transp = 'var(--dc-light-transp)'
            const clr_dark = 'var(--dc-dark)'
            const bg_image = 'DC_Bg.webp'
            const logo = 'assets/DC_Logo.png'

            radioChange(bg_percentage, clr_light_full, clr_light_transp, clr_dark, bg_image, logo)

        } else if (radio.value == 'rand') {
            // ANCHOR RAND

            const bg_percentage = [0, 30, 100]
            const clr_light_full = 'var(--rand-light-full)'
            const clr_light_transp = 'var(--rand-light-transp)'
            const clr_dark = 'var(--rand-dark)'
            const bg_image = 'Rand_Bg.jpg'
            const logo = 'assets/Rand_Logo.png'

            radioChange(bg_percentage, clr_light_full, clr_light_transp, clr_dark, bg_image, logo)

        } else if (radio.value == 'marvel') {
            // ANCHOR MARVEL

            const bg_percentage = [0, 30, 50];
            const clr_light_full = 'var(--marvel-light-full)'
            const clr_light_transp = 'var(--marvel-light-transp)'
            const clr_dark = 'var(--marvel-dark)'
            const bg_image = 'Marvel_Bg.webp'
            const logo = 'assets/Marvel_Logo.png'

            radioChange(bg_percentage, clr_light_full, clr_light_transp, clr_dark, bg_image, logo)

        } else {
            return -1
        }

        toggles.filter((item) => { return item != radio }).forEach((item) => item.classList.remove('select'))

    })
})
// !SECTION