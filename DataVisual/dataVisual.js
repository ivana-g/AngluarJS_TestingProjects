//(function () {
$(document).ready(function(){

    alert("data visual file");
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40, 45, 90, 55, 70, 77]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90, 70, 77, 60, 65, 105]
            }
        ]
    };

    /** Cross domain ajax with dataType="text"  
        https://github.com/Rob--W/cors-anywhere/
    */
      var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
      function doCORSRequest(options, printResult) {
        var x = new XMLHttpRequest();
        x.open(options.method, cors_api_url + options.url);
        x.onload = x.onerror = function() {
          printResult(x.responseText);
        };
        x.send(options.data);
      }

      doCORSRequest({
        method: 'GET',
        url: "https://marketinvoice.looker.com/looks/XN9ChdBFx4KMSBTMPzQK6P6k6p9FJGWv.txt"
      }, function printResult(result) {
        alert("success. lenght: " + result.lenght);
        $("#update").html(result);
      });


    /*
    var element = document.getElementById("myChart");
    var ctx = element.getContext("2d");
    var mylinechart = new Chart(ctx).Line(data);
    */

});
//}());
