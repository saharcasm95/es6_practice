(function () {
    function printScreenContent(){
        window.print();
    }
    function getRandomNumber(){
        return Math.random()
    }
    function getWebsiteUrl(){
        console.log(window.location.href);
        return window.location.href;
    }
    function createVariable(global, varName){
        global[varName] = "";
    }


})();

