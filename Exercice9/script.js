function checkAge(age) {
    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 18 && age < 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}

console.log(checkAge(18));

export default checkAge;
