using POOProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POOProject.Services
{
    public class SistemaCadastroService : ISistemaCadastroService
    {
        private List<Smartphone> smartphones;

        public SistemaCadastroService()
        {
            smartphones = new List<Smartphone>();
        }

        public List<Smartphone> CadastrarSmartphones(Smartphone smartphone)
        {
            var ulimoSmartphone = smartphones.FirstOrDefault();

            //Verifica se há um smartphone cadastrado e se houver recupera o ultimoID e acrescenta mais um, se não inicia com 1.
            smartphone.ID = ulimoSmartphone != null ? ulimoSmartphone.ID++ : 1;
            

            smartphones.Add(smartphone);

            return smartphones;
        }

        public List<Smartphone> ListarSmartphones()
        {
            return smartphones;
        }
    }
}
