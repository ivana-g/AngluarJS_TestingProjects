var DataVisual = DataVisual || {};
(function ($d) {

    $d.serializor = function () {
        
        /* Does not work because the return string gets too big. */
        var serialize = function (txt) {
            var contentCollection = txt.split("\n");
            var length = contentCollection.length;

            var result = "[ ";
            var headers, count;
            var firstLine = contentCollection[0];

            /** Headers **/
            if (firstLine) {
                headers = firstLine.replace(" ", "")
                    .replace("%", "Percent")
                    .replace("(", "")
                    .replace(")", "")
                    .split("\t");
                count = headers.length;
            }
            /** Values **/
            var row;
            for (var countlines = 1; countlines < length; countlines++) {
                row = contentCollection[countlines].split("\t");
                result += "{";
                for (var countvalues = 0; countvalues < count; countvalues++) {
                    result += result + " " + headers[countvalues] + ": " + '"' + row[countvalues] + '",';
                }
                result += "}, \n";
            }
            result += "]";
            return result;
        };

        var parseDataToJSON = function (text) {
            var contentCollection = text.split("\n");
            var length = contentCollection.length;

            var result = [];
            var headers, obj, count;
            var firstLine = contentCollection[0];

            /** Headers **/
            if (firstLine) {
                headers = firstLine.split("\t");
                count = headers.length;
            }
            /** Values **/
            var row;
            for (var countlines = 1; countlines < length; countlines++) {
                row = contentCollection[countlines].split("\t");
                obj = {};
                for (var countvalues = 0; countvalues < count; countvalues++) {
                    var key = replaceAll(headers[countvalues], " ", "")
                        .replace("%", "Percent")
                        .replace("(", "")
                        .replace(")", "");
                    obj[key] = row[countvalues];
                }
                result.push(obj);
            }

            return result;
        };

        function replaceAll(str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace);
        }

        return {
            serialize: serialize,
            parseDataToJSON: parseDataToJSON
        };
    };
} (DataVisual));

