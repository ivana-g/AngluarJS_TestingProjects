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
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string ReadFile()
    {
        String fileUrl = "https://marketinvoice.looker.com/looks/XN9ChdBFx4KMSBTMPzQK6P6k6p9FJGWv.txt";

        WebClient client = new WebClient();
        Stream data = client.OpenRead(fileUrl);

        StreamReader reader = new StreamReader(data);
        //string s = reader.ReadToEnd();
        string result = "[ ";

        try
        {
            string line = reader.ReadLine();
            string[] headers = new string[]{}, row  = new string[]{};
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
                   
                    /**
                     *  beutify the string representation. Right now it looks like this: 
                     * "[ {\"TradeID\": \"19594\", \"AdvanceDate\": \"2015-11-11\", \"ExpectedPaymentDate\": \"2015-12-09\", 
                     * \"SettlementDate\": \"\"\"\", \"PaymentState\": \"Awaiting Repayment\", \"PriceGrade\": \"2\", \"Currency\": \"GBP\", 
                     * \"FaceValue\": \"8970\", \"Advance\": \"7624\", \"AdvancePercent\": \"85.0000\", \"DiscountPercent\": \"0.6300\", 
                     * \"DiscountOnAdvanceorFaceValue\": \"Advance\", \"OutstandingPrincipal\": \"7624\", \"FaceValueGBP\": \"8970\", 
                     * \"AdvanceGBP\": \"7624\", \"OutstandingPrincipalGBP\": \"7624\", \"AnnualisedGrossYieldPercent\": \"7.8275\", 
                     * \"InArrears\": \"No\", \"InArrearsonDate\": \"\"\"\", \"CrystallisedLoss\": \"\"\"\", 
                     * \"CrystallisedLossDate\": \"\"\"\", }, "
                     */

                    result += '"' + headers[i] + '"' + ':' + " " + '"' + row[i] + '"' +',' + " ";
                }
                result += "}, ";

                line = reader.ReadLine();
            }
            result = result.Remove(result.Length - 1);
            result += "]";
        }
        catch (Exception ex)
        {
            result = null;
        }

        JavaScriptSerializer serializer = new JavaScriptSerializer();

        return serializer.Serialize(result);
    }
}