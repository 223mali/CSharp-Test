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
    public class MultiSearchController : ControllerBase
    {
        HttpClient client = new HttpClient();
        [HttpGet("{searchTerm}")]
        // public async Task<ActionResult<TodoItem>> GetTodoItem(string searchTerm)
        public async Task<ChuckSearchResponse> GetTodoItem(string searchTerm)
        {

            HttpResponseMessage swapiResponse = await client.GetAsync(string.Format("https://swapi.dev/api/people/?search={0}", searchTerm));
            var swapiResponseJson = await swapiResponse.Content.ReadAsStringAsync();
            SwapiResponseModel swapiResponseObject = JsonConvert.DeserializeObject<SwapiResponseModel>(swapiResponseJson);


            List<SwapiReturnModel> peopleList = new List<SwapiReturnModel>();
            SwapiModel[] resultList = swapiResponseObject.results;
            Console.WriteLine("Message :{0} ", resultList.Length);
            if (resultList.Length != 0)
            {
                for (int i = 0; i < resultList.Length; i++)
                {
                    peopleList.Add(new SwapiReturnModel(resultList[i].name, resultList[i].birth_year, resultList[i].gender));
                    Console.WriteLine("Message :{0} ", resultList[i].name);
                }

            }





            HttpResponseMessage chuckResponse = await client.GetAsync(string.Format("https://api.chucknorris.io/jokes/search?query={0}", searchTerm));
            Console.WriteLine("Message :{0} ", chuckResponse.StatusCode);
            var responseJson = await chuckResponse.Content.ReadAsStringAsync();
            ;
            ChuckSearch o = JsonConvert.DeserializeObject<ChuckSearch>(responseJson);
            List<ChuckJoke> searchResultList = new List<ChuckJoke>();
            if (o.result.Length != 0)
            {
                foreach (ChuckJoke i in o.result)
                {
                    searchResultList.Add(i);
                }
            }
            return new ChuckSearchResponse(searchResultList, peopleList);
        }
    }
}