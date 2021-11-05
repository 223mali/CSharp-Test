using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using TodoApi.Models;
using Newtonsoft.Json;

namespace TodoApi.Controllers
{
    [Route("api/chuck/categories")]
    [ApiController]
    public class ChuckController : ControllerBase
    {
        HttpClient client = new HttpClient();
        [HttpGet]
        public async Task<List<ChuckCategory>> Get()
        {
            try
            {

                HttpResponseMessage response = await client.GetAsync("https://api.chucknorris.io/jokes/categories");
                response.EnsureSuccessStatusCode();
                Console.WriteLine("Message :{0} ", response.Content.ToString());
                var responseJson = await response.Content.ReadAsStringAsync();
                ;
                List<string> o = JsonConvert.DeserializeObject<List<string>>(responseJson);
                List<ChuckCategory> categoryList = new List<ChuckCategory>();
                foreach (string i in o)
                {
                    categoryList.Add(new ChuckCategory(i));
                }
                return categoryList;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("Message :{0} ", e.Message);
                throw new Exception($"Something went wrong. Please try again later");
            }
        }
    }
}