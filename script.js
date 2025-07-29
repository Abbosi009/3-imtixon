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
let oy = 2;
let fasl;
switch (oy) 
{
    case 1: // Qish
        console.log("Qish fasli");
        break;
    case 2: // Bahor
        console.log("Bahor fasli");
        break;
    case 3: // Yoz
        console.log("Yoz fasli");
        break;
    case 4: // Kuz
        console.log("Kuz fasli");
        break;
    default:
        console.log("Noto'g'ri oy raqami!");
}
//7-masala
let A = 2;
let B = 5;

for (let i = A; i <= B; i++) {
    let qator ="";
    for (let j = 1; j <= i; j++) {
        qator += i + " ";
    }
    console.log(qator);
}
//8-masala
let N = 2;
let M = 5;
let sum = 0;
for (let i = N; i <= M; i++) {
    for (let j = 1; j <= i; j++) {
        sum += i;
    }
}
console.log("Yig'indi: ", sum);
//9-masala
 let N1 = 17;
let M1 = 5;
let count = 0;
while (N1 >= M1) {
    N1 -= M1;
    count++;
}
console.log("Bo'linma soni: ", count);

//10-masala
let o = 5;
let p = 20;
let summ = 0;

console.log("Juft sonlar:");

for (let i = o; i <= p; i++) {
  if (i % 2 == 0) {
    console.log(i);
    sum += i;
  }
}

console.log("Juft sonlar yig'indisi: " + summ);


    
    
    

    
    