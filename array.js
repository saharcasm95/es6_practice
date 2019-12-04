(function () {

    function reverseArray(arr){
        return arr.reverse();
    }

    function getKthGreatestElement(k, arr){
        return arr.sort()[k-1];
    }

    function getOccurrences(arr){
        arr.sort();
        let result = [];
        let i = 0;
        while(i < arr.length) {
            result.push({
                element: arr[i],
                numberOfOccurrences: 1
            });
            let nextElement = i + 1;
            if(nextElement === arr.length) break;
            for(let j = nextElement; j < arr.length; j++){
                if(arr[i] === arr[j]) {
                    result[result.length-1].numberOfOccurrences += 1;
                }
                else {
                    i = j;
                    break;
                }
            }
        }
        return result;
    }


    function sortStringsByLength(arr){
        return arr.sort((a, b) => a.length - b.length);
    }

    function sortInDescendingOrder(arr){
        return arr.sort((a, b) => b - a);
    }


    function applyMathPowOnArray(power){
        return function (power, items) {
            return items.map((num) => Math.pow(num, power));
        }.bind(this, power)
    }
    function getSum(arr){
        return arr.reduce((total, num) => total + num);
    }

    function swapItemsByPositions(position1, position2, arr){
        if(arr[position1] === arr[position2]) return arr;

        let temp = arr[position1];
        arr[position1] = arr[position2];
        arr[position2] = temp;

        return arr;
    }

    function swapItems(item1, item2, arr){
        let position1 = null;
        let position2 = null;
        for(let i = 0; i < arr.length; i++){
            if(position1 && position2) break;
            if(item1 === arr[i] && position1 === null){
                position1 = i;
                console.log(position1);
            }
            if(item2 === arr[i] && position2 === null){
                position2 = i;
            }
        }
        if(position1 === null || position2 === null) return "One of the items not found.";
        return swapItemsByPositions(position1, position2, arr)
    }

    function swapHalves(arr){
        let newArray =  arr.splice(arr.length / 2, arr.length - 1);
        newArray.push(...arr);
        return newArray;
    }


    let getCubes = applyMathPowOnArray(3);
    let getSquares = applyMathPowOnArray(2);

    let response = swapHalves([1,1,2,3,6,7,8]);
    console.log(response)
})();

