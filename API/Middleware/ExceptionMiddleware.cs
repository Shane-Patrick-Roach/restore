using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API.Middleware
{
  public class ExceptionMiddleware
  {
    public RequestDelegate Next { get; }
    public ILogger<ExceptionMiddleware> Logger { get; set; }
    public IHostEnvironment Env { get; }

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
    {
      Env = env;
      Logger = logger;
      Next = next;

    }

    public async Task InvokeAsync(HttpContext context)
    {
      try
      {
        await Next(context);
      }
      catch (Exception ex)
      {
        Logger.LogError(ex, ex.Message);
        context.Response.ContentType = "application.json";
        context.Response.StatusCode = 500;

        var response = new ProblemDetails
        {
          Status = 500,
          Detail = Env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
          Title = ex.Message
        };

        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

        var json = JsonSerializer.Serialize(response, options);

        await context.Response.WriteAsync(json);



      }
    }

  }
}
