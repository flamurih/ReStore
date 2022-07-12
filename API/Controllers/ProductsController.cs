using API.Data;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
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
<<<<<<< HEAD
        public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery]ProductParams productParams)
=======
        public async Task<ActionResult<List<Product>>> GetProductss()
>>>>>>> 1e11d2fa0cfe5f367f748903d93e5820519f4497
        {
            var query = _context.Products
                .Sort(productParams.OrderBy)
                .Search(productParams.SearchTerm)
                .Filter(productParams.Brands, productParams.Types)
                .AsQueryable();            

            var products = await PagedList<Product>.ToPagedList(query, 
                productParams.pageNumber,productParams.PageSize);
            
            Response.AddPaginationHeader(products.MetaData);

            return products;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductss(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if(product == null) return NotFoound();

            return product;
        }

        [HttpGet("filters")]
        public async Task<IActionResult> GetFilters()
        {
            var brands = await _context.Products.Select(p => p.Brand).Distinct().ToListAsync();
            var types = await _context.Products.Select(p => p.Type).Distinct().ToListAsync();

            return Ok(new {brands, types});
        }
    }
}

