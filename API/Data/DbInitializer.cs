using API.Entities;
namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context){
            if(context.Products.Any()) return;

            var products = new List<Product>{
                new Product{
                    Name = "Mbathje Adidas Nr.42",
                    Description = "Mbathje Adidas Modeli i ri",
                    Price = 135,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Adidas",
                    Type = "Puma",
                    QuantityInStock = 100
                },
                new Product{
                    Name = "Mbathje Nike Nr.42",
                    Description = "Mbathje Nike Modeli i ri",
                    Price = 135,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "Puma",
                    QuantityInStock = 70
                },
                new Product{
                    Name = "Mbathje PUMA Nr.42",
                    Description = "Mbathje PUMA Modeli i ri",
                    Price = 135,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "PUMA",
                    Type = "Puma",
                    QuantityInStock = 85
                },
                new Product{
                    Name = "Mbathje Reebok Nr.42",
                    Description = "Mbathje Reebok Modeli i ri",
                    Price = 135,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Reebok",
                    Type = "Puma",
                    QuantityInStock = 120
                },
            };

            foreach (var product in products){
                context.Products.Add(product);
            }

            context.SaveChanges();
        }

    }
}