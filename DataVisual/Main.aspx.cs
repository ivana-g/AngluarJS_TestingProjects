using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Main : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string result = ReadFile();

        string s = "";
    }

    [WebMethod]
   // [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string ReadFile()
    {
        String fileUrl = "http://marketinvoice.looker.com/looks/XN9ChdBFx4KMSBTMPzQK6P6k6p9FJGWv.txt";

        WebClient client = new WebClient();
        Stream data = client.OpenRead(fileUrl);

        StreamReader reader = new StreamReader(data);
        string text = reader.ReadToEnd();
        string[] contentCollection = text.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries);
        int length = contentCollection.Length;
        string result = "[ ";

        /** Headers **/
        string[] headers = new string[] { };
        int count = 0;
        string firstLine = contentCollection[0];
        if (firstLine != null)
        {
            headers = firstLine.Replace(" ", "").Replace("%", "Percent").Replace("(", "").Replace(")", "").Split('\t');
            count = headers.Length;
        }
        /** Values **/
        string[] row = new string[] { };
        for (int countLines = 1; countLines < length; countLines++)
        {
            row = contentCollection[countLines].Split('\t');
            result += "{";
            for (int countValues = 0; countValues < count; countValues++)
            {
                result += String.Format("{0}: \"{1}\", ", headers[countValues], row[countValues]);
            }
            result += "}, ";
        }

        result = result.Replace(@"\", "");
        result = result.Remove(result.Length - 1);
        result += "]";

        return result;
    }
}


/** Read text file line by line.
 * [WebMethod]
   // [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string ReadFile()
    {
        String fileUrl = "http://marketinvoice.looker.com/looks/XN9ChdBFx4KMSBTMPzQK6P6k6p9FJGWv.txt";

        WebClient client = new WebClient();
        Stream data = client.OpenRead(fileUrl);

        StreamReader reader = new StreamReader(data);
        //string s = reader.ReadToEnd();
        string result = "[ ";

        //try
        //{
            string line = reader.ReadLine();
            string[] headers = new string[] { }, row = new string[] { };
            int count = 0;
            if (line != null)
            {
                headers = line.Replace(" ", "").Replace("%", "Percent").Replace("(", "").Replace(")", "").Split('\t');
                count = headers.Length;

                line = reader.ReadLine();
            }

            while (line != null)
            {
                row = line.Split('\t');

                result += "{";
                for (int i = 0; i < count; i++)
                {
                    result += String.Format("{0}: \"{1}\", ", headers[i], row[i]);
                }
                result += "}, ";

                line = reader.ReadLine();
            }
            result = result.Replace(@"\", "");
            result = result.Remove(result.Length - 1);
            result += "]";
        //}
        //catch (Exception ex)
        //{
        //    result = null;
        //}

        //JavaScriptSerializer serializer = new JavaScriptSerializer();
        //string jsonResult = serializer.Serialize(result);

        return result;
    }
 * 
*/