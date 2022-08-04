let bg_clr = window.getComputedStyle(document.body).getPropertyValue('background-image');
const bg_regex = new RegExp(/(\b\d{1,3})(?=%)/, 'g');
let count = 0;

const bg_percentage = [0, 80, 100]

let bg_clr_new = bg_clr.replace(bg_regex, () => bg_percentage[count++]);

console.log(bg_clr, bg_clr_new)