var DataVisual = DataVisual || {};

$(document).ready(function () {
    var $d = DataVisual;
    /*
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
    */
    var marketInvoice = $d.marketInvoice();
    var URL = "https://marketinvoice.looker.com/looks/XN9ChdBFx4KMSBTMPzQK6P6k6p9FJGWv.txt";
    
    var printResult = function (result) {
        var serializorObj = $d.serializor();
        var output = serializorObj.parseDataToJSON(result)

        var html;
        for (var i = 0; i <  output.length; i++) {
            html += "<div>" + JSON.stringify(output[i]) + "</div>";
        }
        $("#update").html(html);
    }
    
    marketInvoice.getData({
        method: 'GET',
        url: URL,
    }, printResult);
    
    
    
    /*
    var element = document.getElementById("myChart");
    var ctx = element.getContext("2d");
    var mylinechart = new Chart(ctx).Line(data);
    */

});
