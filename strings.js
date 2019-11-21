(function () {
    let testString = 'w3resource';

    function rotateString() {
        let lastIndex = testString.length-1;
        let lastChar = testString[lastIndex];
        testString = lastChar + testString.substring(0, lastIndex);
    }

    rotateString();

})();