//1-masala
    let number = 123

    let yuz = Math.floor(number / 100);
    let onlik = Math.floor((number % 100) / 10);
    let birlik = number % 10;

    let hammasiHarXil = (yuz !== onlik) && (yuz !== birlik) && (onlik !== birlik);

    console.log(hammasiHarXil);

    //2-masala
    let son = 348;

    let yuzlik = Math.floor(son / 100);
    let o_nlik = Math.floor((son % 100) / 10);
    let bir_lik = son % 10;

    let yigindi = yuzlik + o_nlik + bir_lik;

    console.log("Raqamlar yig'indisi: ", yigindi);
     //3-masala
    let num = 123;
    let yuzlikRaqam = Math.floor(num / 100);
    let birlikRaqam = num % 10;

    let isPalindrome = yuzlikRaqam === birlikRaqam;
    console.log("Rostmi? ", isPalindrome);

    //4-masala
    const kun = 3; 

switch (kun) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    case 4:
        console.log("Payshanba");
        break;
    case 5:
        console.log("Juma");
        break;
    case 6:
        console.log("Shanba");
        break;
    case 7:
        console.log("Yakshanba");
        break;
    default:
        console.log("Noto‘g‘ri kun raqami!");
}

//5-masala
let a = 7;
let b = 3;
let c = 5;
let orta;

if ((a > b && a < c) || (a < b && a > c)) {
    orta = a;
}
else if ((b > a && b < c) || (b < a && b > c)) {
    orta = b;
}
else {
    orta = c;
}
console.log("O'rtacha son: ", orta);

//6-masala

    
    
    

    
    