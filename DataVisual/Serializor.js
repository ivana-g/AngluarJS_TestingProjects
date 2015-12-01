var DataVisual = DataVisual || {};
(function ($d) {

    alert("serializor");
    $d.serializor = function(){

        var serialize = function (txt) {
            var contentCollection = txt.split("\n");
            var length = contentCollection.length;

            var result = "[ ";
            var headers;
            var firstLine = contentCollection[0];

            /** Headers **/
            if(firstLine){
                headers = firstLine.replace(" ", "")
                                   .replace("%", "Percent")
                                   .replace("(", "")
                                   .replace(")", "")
                                   .split("\t");
                count = headers.length;
            }
            /** Values **/
            var row; 
            for(var countlines = 1; countlines < length; countlines++){
                row = contentCollection[countlines].split("\t");
                result += "{";
                for(var countvalues = 0; countvalues < count; countvalues++){
                    result += result + " " + headers[countvalues] + ": " + '"' + row[countvalues] + '",';  
                }
                result += "}, \n";
            }
            result += "]";

            return result;
        };

        var parseData = function (text) {
            var contentCollection = text.split("\n");
            var length = contentCollection.length;

            var result = [];
            var headers, obj;
            var firstLine = contentCollection[0];

            /** Headers **/
            if(firstLine){
                headers = firstLine.replace(" ", "")
                                   .replace("%", "Percent")
                                   .replace("(", "")
                                   .replace(")", "")
                                   .split("\t");
                count = headers.length;
            }
            /** Values **/
            var row; 
            for(var countlines = 1; countlines < length; countlines++){
                row = contentCollection[countlines].split("\t");
                obj = {};
                for(var countvalues = 0; countvalues < count; countvalues++){
                    obj[headers[countvalues]] = row[countvalues];
                }
                result.push(obj);
            }

            return result;
        };

        return {
            serialize: serialize,
            parseData: parseData
        };
    };
}(DataVisual));

