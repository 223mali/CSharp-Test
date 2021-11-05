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
    [Route("api/[controller]")]
    [ApiController]
    public class SwapiController : ControllerBase
    {

        HttpClient client = new HttpClient();
        [HttpGet]
        public async Task<IList<SwapiReturnModel>> Get()
        {
            try
            {

                HttpResponseMessage response = await client.GetAsync("https://swapi.dev/api/people");
                response.EnsureSuccessStatusCode();
                var responseJson = await response.Content.ReadAsStringAsync();
                ;
                SwapiResponseModel o = JsonConvert.DeserializeObject<SwapiResponseModel>(responseJson);
                Console.WriteLine("Message :{0} ", o.results);
                List<SwapiReturnModel> peopleList = new List<SwapiReturnModel>();
                SwapiModel[] resultList = o.results;
                for (int i = 0; i < resultList.Length; i++)
                {
                    peopleList.Add(new SwapiReturnModel(resultList[i].name, resultList[i].birth_year, resultList[i].gender));
                    Console.WriteLine("Message :{0} ", resultList[i].name);
                }
                return peopleList;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("Message :{0} ", e.Message);
                throw new Exception($"Something went wrong. Please try again later");
            }
        }

    }
}