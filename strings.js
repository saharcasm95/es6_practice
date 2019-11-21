(function () {
    let testString = 'w3resource';

    function rotateString() {
        let lastIndex = testString.length-1;
        let lastChar = testString[lastIndex];
        testString = lastChar + testString.substring(0, lastIndex);
    }

    function getFileExtension(file) {
        let testing = file.split('.').pop();
        console.log(testing);
    }

    function checkPrefix(prefix, testString){
        let prefixPattern = new RegExp(`^${prefix}`);
        let prefixMatch = testString.match(prefixPattern);
        return  prefixMatch ? testString : prefix+testString;
    }
    console.log(checkPrefix("py", "testString"));

})();