document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const calorieIntake = bmr * activity;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Doporučený denní příjem: <span>${Math.round(calorieIntake)}</span> kalorií.`;
});