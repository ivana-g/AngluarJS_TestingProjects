var DataVisual = DataVisual || {};

$(document).ready(function() {
    var $d = DataVisual;
    alert("data visual file");
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
    var data = marketInvoice.getData();
    var html = "<div>";
    for (var i = 0; i < 100 /*data.length*/; i++) {
        html += "<div>" + data[i]['TradeID'] + "</div>";
    }
    html += "</div>"
    $("#update").html(html);

    /*
    var element = document.getElementById("myChart");
    var ctx = element.getContext("2d");
    var mylinechart = new Chart(ctx).Line(data);
    */

});
