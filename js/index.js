//for (let i = 100; i > 1; i = i - 2) {
//  document.write(i + '<br>');  
//}

//let i = 1;
//while (i <= 100) {
//  document.write(i + '<br>'); 
//  i++;
//}

//let num = parseInt(prompt('Please enter a namber'));
//while(isNan(num)){
//    num = parseInt(prompt('Please enter an integer number'));
//}

//let num;
//do {
//    num = parseInt(prompt('Please enter an integer number'));
//} while(isNan(num))

let productNames = ['Tesla X', 'BMW x6', 'Toyota LC200', 'MB GLE', 'Ford Edge', 'Chevrolet Tahoe'];
prn (productNames.length);
productNames.push('Fiat 500');
prn (productNames.length);
//prn(productNames[0]);
//prn(productNames[1]);
//prn(productNames[2]);
//prn(productNames[3]);
//prn(productNames[4]);
//prn(productNames[5]);
//prn(productNames[6]);

//for (let i = 0; i < productNames.length; i++) {
//    let currProduct = productNames[i];
//    if (productNames[i][0] === 'T') {
//    prn (productNames[i]);
//    }
//}

productNames[100] = 'Zaz Lanos';

//for (let i = 0; i < productNames.length; i++) {
//    if (productNames[i] !== undefined) {
//    prn(productNames[i]);
//}
//}

productNames.forEach(prn);


function prn(val) {
    document.write(val + '<br>');
}



