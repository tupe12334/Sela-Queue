using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Queue_server.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Queue_server.Controllers
{
    [ApiController]
    [Route("form")]
    public class FormController : Controller
    {
        // GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}
        [HttpGet]
        public List<string> Get()
        {
            var rng = new Random();
            var arr = new List<string>() { "dsaf", "dsaf" };
            return arr;
        }

        [HttpPost]
        public Client Add([FromBody] string credentials)
        {

            var content = credentials;
            return null;
        }
    }
}
