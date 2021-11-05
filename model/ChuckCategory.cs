using TodoApi.Models;
using System;
using System.Collections.Generic;
namespace TodoApi.Models
{
    public class ChuckCategory
    {
        public string name { get; set; }
        public ChuckCategory(string name)
        {
            this.name = name;
        }

    }

    public class ChuckJoke
    {
        public string[] categories { get; set; }
        public string created_at { get; set; }
        public string icon_url { get; set; }
        public string id { get; set; }
        public string updated_at { get; set; }
        public string url { get; set; }
        public string value { get; set; }


    }

    public class ChuckSearch
    {
        public int total { get; set; }
        public ChuckJoke[] result { get; set; }
    }


    public class ChuckSearchResponse
    {

        public List<ChuckJoke> chuckResult { get; set; }
        public List<SwapiReturnModel> swapiResults { get; set; }

        public ChuckSearchResponse(List<ChuckJoke> chuckResult, List<SwapiReturnModel> swapiResult)
        {
            this.chuckResult = chuckResult;
            this.swapiResults = swapiResult;
        }
    }




}