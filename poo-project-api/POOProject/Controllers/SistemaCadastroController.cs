using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using POOProject.Models;
using POOProject.Services;

namespace POOProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SistemaCadastroController : ControllerBase
    {
        private static ISistemaCadastroService _sistemaCadastroService; 

        public SistemaCadastroController(ISistemaCadastroService sistemaCadastroService)
        {
            _sistemaCadastroService = sistemaCadastroService;
        }


        [HttpGet]
        [Route("ListarSmartphones")]
        public List<Smartphone> ListarSmartphones()
        {
            return _sistemaCadastroService.ListarSmartphones();
        }

        [HttpPost]
        [Route("CadastrarSmartphones")]
        public List<Smartphone> CadastrarSmartphones([FromBody]Smartphone smartphone)
        {
            return _sistemaCadastroService.CadastrarSmartphones(smartphone);
        }
    }
}
