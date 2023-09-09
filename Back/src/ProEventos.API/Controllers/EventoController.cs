using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        

        public IEnumerable<Evento> _evento = new Evento[] {
           
             new Evento() {

                EventoId = 1,
                Tema = "Angular e .NET5",
                Local = "Fortaleza",
                QtdPessoas = 250,
                Lote = "1ª Lote",
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/mm/yyyy"),
                ImagemUrl = "foto.jpg"
            },
             new Evento() {

                EventoId = 2,
                Tema = "Curso de Laravel",
                Local = "Fortaleza",
                QtdPessoas = 400,
                Lote = "1ª Lote",
                DataEvento = DateTime.Now.AddDays(20).ToString("dd/mm/yyyy"),
                ImagemUrl = "foto1.jpg"
            },
             new Evento() {

                EventoId = 3,
                Tema = "Curso de PHP Slim Framework",
                Local = "Fortaleza",
                QtdPessoas = 322,
                Lote = "1ª Lote",
                DataEvento = DateTime.Now.AddDays(22).ToString("dd/mm/yyyy"),
                ImagemUrl = "foto2.jpg"
            },            
           };

        public EventoController()
        {
            
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
           return _evento;
        }   

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
           return _evento.Where(evento => evento.EventoId == id);
        }   

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";

        }   

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put com id = {id}";

        }   

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Delete com id = {id}";

        }   

    }
}
