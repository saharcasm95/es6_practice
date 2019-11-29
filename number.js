(function () {

    function getLastDigit(num){
        let digits = num.toString().split("");
        let n = digits.length - 1;
        return parseInt(digits[n])
    }


    let response = getLastDigit(123234);
    console.log(response)

})();

