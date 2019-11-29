(function () {

    function reverseArray(arr){
        return arr.reverse();
    }

    function getKthGreatestElement(k, arr){
        return arr.sort()[k-1];
    }

    function getOccurrences(){

    }



    let response = getOccurrences(2, [500,200,333,444,444]);
    console.log(response)

})();

