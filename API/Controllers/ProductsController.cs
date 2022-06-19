using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        public readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = contexxt;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProductss()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductss(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if(product == null) return NotFoound();

            return product;
        }
    }
}

