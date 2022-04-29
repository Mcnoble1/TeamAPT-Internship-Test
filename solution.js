// Attached below is a text file which contains 1 million phone numbers.

// You are to build a java application that generates a summary report with the total number of phone numbers for each service provider. The correctness and speed of your application should be your priority. You can print your result to the console.

// Also:
// Find below the prefixes for the service providers; This will help in determining the provider of each phone number:
//  MTN: 0703,0706,0803,0806,0810,0813,0814,0816,0903,0906,0913,0916,07025,07026,0704
// Airtel: 0701,0708,0802,0808,0812,0901,0902,0904,0907,0912
// Globacom: 0705,0805,0807,0811,0815,0905,0915
// 9Mobile: 0809,0817,0818,0909,0908
// MTEL: 0804
 

// We will expect your feedback in 72 hours.

const mtn = ['0703', '0706', '0803', '0806', '0810', 
            '0813', '0814', '0816', '0903', '0906', 
            '0913', '0916','07025','07026','0704'];
const airtel = ['0701','0708', '0802', '0808', '0812', 
                '0901', '0902', '0904', '0907', '0912'];
const globacom = ['0705', '0805', '0807', '0811', '0815', 
                    '0905', '0915'];
const nineMobile = ['0809', '0817', '0818', '0909', '0908'];
const mtel = ['0804'];



 fetch('PhoneNumbers.txt')
.then(response => response.text())
.then(text => console.log(`mtn: ${text.split('\n').filter(number => number.startsWith('0703') || number.startsWith('0706') || number.startsWith('0803') || number.startsWith('0806') || number.startsWith('0810') || number.startsWith('0813') || number.startsWith('0814') || number.startsWith('0816') || number.startsWith('0903') || number.startsWith('0906') || number.startsWith('0913') || number.startsWith('0916') || number.startsWith('07025') || number.startsWith('07026') || number.startsWith('0704')).length}`));	

fetch('PhoneNumbers.txt')
.then(response => response.text())
.then(text => console.log(`airtel: ${text.split('\n').filter(number => number.startsWith('0701') || number.startsWith('0708') || number.startsWith('0802') || number.startsWith('0808') || number.startsWith('0812') || number.startsWith('0901') || number.startsWith('0902') || number.startsWith('0904') || number.startsWith('0907') || number.startsWith('0912')).length}`));

fetch('PhoneNumbers.txt')
.then(response => response.text())
.then(text => console.log(`globacom: ${text.split('\n').filter(number => number.startsWith('0705') || number.startsWith('0805') || number.startsWith('0807') || number.startsWith('0811') || number.startsWith('0815') || number.startsWith('0905') || number.startsWith('0915')).length}`));

fetch('PhoneNumbers.txt')
.then(response => response.text())
.then(text => console.log(`ninemobile: ${text.split('\n').filter(number => number.startsWith('0809') || number.startsWith('0817') || number.startsWith('0818') || number.startsWith('0909') || number.startsWith('0908')).length}`));

fetch('PhoneNumbers.txt')
.then(response => response.text())
.then(text => console.log(`mtel: ${text.split('\n').filter(number => number.startsWith('0804')).length}`));

// fetch('PhoneNumbers.txt')
// .then(response => response.text())
// .then(text => console.log(text.split('\n').filter(number => number.startsWith(mtel.forEach(element => 'element'))).length));
