#r "System.Configuration"
#r "System.Data"
#r "Newtonsoft.Json"
using System;
using System.Net;
using System.Configuration;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Text;
using Newtonsoft.Json;
public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{
   log.Info("C# HTTP trigger function processed a request.");
var str = ConfigurationManager.ConnectionStrings["sqldb_connection"].ConnectionString;
using (SqlConnection conn = new SqlConnection(str))
   {
       conn.Open();
var text = "SELECT Top 1 Type, Confidence from dbo.IoTData Order by DateCreated DESC";
       EventData ret = new EventData();
using (SqlCommand cmd = new SqlCommand(text, conn))
       {
           SqlDataReader reader = await cmd.ExecuteReaderAsync();
try
           {
while (reader.Read())
               {
                   log.Info(String.Format("{0}, {1}",
                       reader[0], reader[1]));
                   ret.Type = (string)reader[0];
                   ret.Confidence = (int)reader[1];
               }
           }
finally
           {
// Always call Close when done reading.
               reader.Close();
           }
var json = JsonConvert.SerializeObject(ret, Formatting.Indented);
return new HttpResponseMessage(HttpStatusCode.OK) 
           {
               Content = new StringContent(json, Encoding.UTF8, "application/json")
           };        
       }
   }
}
public class EventData
{
public String Type { get; set; }
public int Confidence { get; set; }
}