let bg_clr = window.getComputedStyle(document.body).getPropertyValue('background-image');
const bg_regex = new RegExp(/(\b\d{1,3})(?=%)/, 'g');
let count = 0;

const bg_percentage = [0, 80, 100]

let bg_clr_new = bg_clr.replace(bg_regex, () => bg_percentage[count++]);

console.log(bg_clr, bg_clr_new)

// ---------------------
// ---------------------

let img = document.querySelector('.image')
let bg_img = window.getComputedStyle(img).getPropertyValue('background-image')

const bgimg_regex = new RegExp(/(?<=assets\/)([\w\.\_\-]+)/)

const bg_image = 'Rand_Bg.jpg'

let bg_img_new = bg_img.replace(bgimg_regex, bg_image)
console.log(bg_img_new)

img.style.setProperty('background-image', bg_img_new)
