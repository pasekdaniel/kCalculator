const result = document.getElementById('result');

const btn = document.getElementById('btn');

const sedentary = document.getElementById('sedentary');
const lightlyactive = document.getElementById('lightlyactive');
const moderatelyactive = document.getElementById('moderatelyactive');
const veryactive = document.getElementById('veryactive');
const extraactive = document.getElementById('extraactive');
let af;

const male = document.getElementById('male');
const female = document.getElementById('female');
let sexValue;


btn.onclick = function kcal() {
    if(sedentary.selected) {
        af = 1.2;
    } else if(lightlyactive.selected) {
        af = 1.375;
    } else if(moderatelyactive.selected) {
        af = 1.55;
    } else if(veryactive.selected) {
        af = 1.725;
    } else if(extraactive.selected) {
        af = 1.9;
    }

    if(male.checked) {
        sexValue = 5
    } else if(female.checked) {
        sexValue = -161;
    }
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    let tdee = ( 10 * weight + 6.25 * height - 5 * age + sexValue ) * af;
    if(Object.is(tdee, NaN) || age == "" || weight == "" || height == "") {
        result.innerHTML = "<h2>😱 Error! Please check your inputs. 😱</h2>";  
    } else {
    result.innerHTML = "<h2>Your TDEE is " + Math.floor(tdee) + ".</h2>";
    }
}