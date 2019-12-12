using POOProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POOProject.Services
{
    public interface ISistemaCadastroService
    {
        List<Smartphone> ListarSmartphones();
        List<Smartphone> CadastrarSmartphones(Smartphone smartphone);
    }
}
