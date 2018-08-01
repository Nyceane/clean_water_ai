#r "System.Configuration"
#r "System.Data"

using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Threading.Tasks;

public static async Task Run(string myIoTHubMessage, TraceWriter log)
{
    var map = myIoTHubMessage.Split('&').Select(x => x.Split('=')).ToDictionary(x => x[0], x => x[1]);

    String Type = map["Type"];
    String Confidence = map["Confidence"];

    var str = ConfigurationManager.ConnectionStrings["sqldb_connection"].ConnectionString;
    using (SqlConnection conn = new SqlConnection(str))
    {
        conn.Open();
        var text = "INSERT INTO dbo.IoTData (Type, Confidence) VALUES ('" + Type + "', " + Confidence + ");";

        using (SqlCommand cmd = new SqlCommand(text, conn))
        {
            // Execute the command and log the # rows affected.
            var rows = await cmd.ExecuteNonQueryAsync();
            log.Info($"{rows} rows were updated");
        }
    }

    log.Info($"C# IoT Hub trigger function processed a message: {myIoTHubMessage}");
}