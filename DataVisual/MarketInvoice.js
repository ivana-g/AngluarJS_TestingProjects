var DataVisual = DataVisual || {};

(function ($d) {

    $d.marketInvoice = function(){
        /** Cross domain ajax request with dataType="text"  
            https://github.com/Rob--W/cors-anywhere/
        */
        var _cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        function doCORSRequest(options, printResult) {
            var x = new XMLHttpRequest();
            var result = {};
            x.open(options.method, _cors_api_url + options.url, true);
            x.onload = x.onerror = function() {
              printResult(x.responseText);
            }; 
            /*x.onreadystatechange = function(){
              if (x.readyState == 4 && x.status == 200) {
                printResult(x.responseText);
              }
            };*/
            x.send();
        };

        var _URL = "https://marketinvoice.looker.com/looks/XN9ChdBFx4KMSBTMPzQK6P6k6p9FJGWv.txt";
        var rawData = function(){
           setTimeout(function(){ 
                doCORSRequest({
                    method: 'GET',
                    url: _URL,
                  }, function printResult(result) {
                        var serializorObj = $d.serializor();
                        return serializorObj.parseData(result);
                  });}, 5000);
        };

        /*var getData = function(){
            var result = {}, data = ""; 
            data = rawData();
            var serializorObj = $d.serializor();
            result = serializorObj.parseData(data);
            return result;
        }; */

        return {
            getData: rawData
        };
    };
}(DataVisual));

/* See abstraction.js file for more abstraction 
    var entry = {
        tradeId: "", 
        advanceDate: "",    
        expected: "", 
        paymentDate: "",    
        settlementDate: "", 
        paymentState: "",   
        priceGradeCurrency: "", 
        faceValue: "",  
        advanceAdvancePercent: "",  
        discountPercent: "",    
        discountOnAdvanceOrFaceValue: "",   
        outstandingPrincipal: "",   
        faceValueGBP: "",   
        advanceGBP: "", 
        outstandingPrincipalGBP: "",    
        annualisedGrossYieldPercent: "",    
        inArrears: "",  
        inArrearsOnDate: "",
        crystallisedLoss: "",
        crystallisedLossDate: ""
    };*/