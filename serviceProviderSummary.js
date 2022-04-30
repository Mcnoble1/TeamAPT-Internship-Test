// An object containing the service providers details: names and prefixes
const serviceProviders = {
    'MTN': ['0703', '0706', '0803', '0806', '0810', 
            '0813', '0814', '0816', '0903', '0906', 
            '0913', '0916','07025','07026','0704'],

    'Airtel': ['0701','0708', '0802', '0808', '0812', 
            '0901', '0902', '0904', '0907', '0912'],

    'Globacom': ['0705', '0805', '0807', '0811', '0815', 
                '0905', '0915'],

    '9Mobile': ['0809', '0817', '0818', '0909', '0908'],
    
    'MTEL': ['0804']
}

// serviceProviderSummary function that takes in a filename as a parameter and returns a summary of the total phone numbers for each service provider. 
function serviceProviderSummary(fileName) {
    // fetching the file using the fetch api
    fetch(fileName) 
    // converting the file to text
    .then(response => response.text())
    // splitting the text into an array of numbers
    .then(text => { 
        // creating an array of all the numbers
        let phoneNumbersList = text.split('\n');
        // creating an array of all the numbers that start with each service provider's prefixes
        for( const serviceProvider in serviceProviders) {
            // filtering out the numbers that start with each service provider's prefixes
            let totalNumberOfEachProvider = phoneNumbersList.filter(number => serviceProviders[serviceProvider]
                // for four digit prefixes
                .includes(number.substring(0,4)) || serviceProviders[serviceProvider]
                // for five digit prefixes
                .includes(number.substring(0,5)));
            // printing the total of phone numbers for each service provider
            console.log(`${serviceProvider}: ${totalNumberOfEachProvider.length}`);
        }
    });	
}
// calling the function
serviceProviderSummary('PhoneNumbers.txt');
