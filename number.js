(function () {

    function getLastDigit(num){
        let digits = num.toString().split("");
        let n = digits.length - 1;
        return parseInt(digits[n])
    }
    function areDigitsSame(num){
        let nString = num.toString();
        let pattern = new RegExp(/^(\d)\1*$/);
        return !!nString.match(pattern);
    }


    let response = areDigitsSame(777);
    console.log(response)

})();/

