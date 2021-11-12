let num1 = +prompt('son kiriting')
while (isNaN(num1) || num1 == 0) {
    num1 = +prompt('notori kiritvosiz togri kiriting')
};
let num2 = +prompt(num1 + ' Sonining darajasinini kiriting ')
while (isNaN(num2) || num2 == 0) {
    num2 = +prompt(num1 + ' darajasi 0 yoki harflaga teng bomidi brat qoyaqolin endi')
};
let natija = 1

for (let i = 1; i <= num2; i++) {
    natija = natija * num1
}
alert(num1 + " sonining " + num2 + " darajasi " + ' .   Javob   ' + natija)