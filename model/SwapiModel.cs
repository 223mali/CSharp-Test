using System;
namespace TodoApi.Models

{
    public class SwapiModel
    {
        public string name { get; set; }
        public string birth_year { get; set; }
        public string gender { get; set; }
        public string height { get; set; }
        public string mass { get; set; }
        public string hair_color { get; set; }
        public string skin_color { get; set; }
        public string eye_color { get; set; }
        public string homeworld { get; set; }
        public string[] films { get; set; }
        public string[] species { get; set; }
        public string[] vehicles { get; set; }
        public string[] starships { get; set; }
        public string created { get; set; }
        public string date { get; set; }
        public string url { get; set; }
    }

    public class SwapiResponseModel
    {
        public int count { get; set; }
        public string next { get; set; }
        public string previous { get; set; }
        public SwapiModel[] results { get; set; }

    }

    public class SwapiReturnModel
    {
        public string name { get; set; }
        public string birth_year { get; set; }
        public string gender { get; set; }

        public SwapiReturnModel(string name, string birth_year, string gender)
        {
            this.name = name;
            this.birth_year = birth_year;
            this.gender = gender;
        }
    }


}