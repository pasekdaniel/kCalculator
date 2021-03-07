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


const units = document.getElementById('units');

if (units.checked) {
    document.getElementById('weight').placeholder = "lb";
    document.getElementById('height').placeholder = "ft";
} else {
    document.getElementById('weight').placeholder = "kg";
    document.getElementById('height').placeholder = "cm";
}
units.addEventListener('change', function() {
    if (units.checked) {
        document.getElementById('weight').placeholder = "lb";
        document.getElementById('height').placeholder = "ft";
    } else {
        document.getElementById('weight').placeholder = "kg";
        document.getElementById('height').placeholder = "cm";
    }
});

btn.onclick = function kcal() {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
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
    let tdee;
    if(units.checked) {
        var weightConverted = weight / 2.2046;
        var heightConverted = height * 30.48;
        tdee = ( 10 * weightConverted + 6.25 * heightConverted - 5 * age + sexValue ) * af;
    } else {
        tdee = ( 10 * weight + 6.25 * height - 5 * age + sexValue ) * af;
    }

    var tdeeKJ = tdee * 4.184;

    if(Object.is(tdee, NaN) || age == "" || weight == "" || height == "" || tdee < 0) {
        if(units.checked && height.includes("'")) {
            let ft = (height)[0];
            let inch = (height)[2];
            let newHeight = (1 * ft + 1 * inch/12);

            newHeightConverted = newHeight * 30.48;
            tdee = ( 10 * weightConverted + 6.25 * newHeightConverted - 5 * age + sexValue ) * af;
            tdeeKJ = tdee * 4.184;
            result.innerHTML = "<h2>Your TDEE is " + Math.floor(tdee) + " kcal / " + Math.floor(tdeeKJ) + "kJ.</h2>";
        } else {
            result.innerHTML = "<h2>😱 Error! Please check your inputs. 😱</h2>";  
        }

    } else {
    result.innerHTML = "<h2>Your TDEE is " + Math.floor(tdee) + " kcal / " + Math.floor(tdeeKJ) + "kJ.</h2>";
    }
}