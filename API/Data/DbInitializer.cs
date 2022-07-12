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
                    Price = 125,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Adidas",
                    Type = "Puma",
                    QuantityInStock = 100
                },
                new Product{
                    Name = "Mbathje Nike Nr.42",
                    Description = "Mbathje Nike Modeli i ri",
                    Price = 65,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "Puma",
                    QuantityInStock = 70
                },
                new Product{
                    Name = "Mbathje PUMA Nr.42",
                    Description = "Mbathje PUMA Modeli i ri",
                    Price = 79,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "PUMA",
                    Type = "Puma",
                    QuantityInStock = 85
                },
                new Product{
                    Name = "Mbathje Reebok Nr.42",
                    Description = "Mbathje Reebok Modeli i ri",
                    Price = 115,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Reebok",
                    Type = "Puma",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Mbathje Reebok Nr.42",
                    Description = "Mbathje Reebok Modeli i ri",
                    Price = 125,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Reebok",
                    Type = "Puma",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Kepuce Louis Nr.41",
                    Description = "Kepuce Louis",
                    Price = 189,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Louis Vuitton",
                    Type = "Shoes",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Kepuce Louis Nr.40",
                    Description = "Mbathje Reebok Modeli i ri",
                    Price = 135,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Louis Vuitton",
                    Type = "Shoes",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Kepuce Louis Nr.39",
                    Description = "Kepuce Louis",
                    Price = 134,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Louis Vuitton",
                    Type = "Shoes",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Maice",
                    Description = "Maice e madhesise M",
                    Price = 124,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "Nike Air",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Trenerka",
                    Description = "Trenerka te madhesise 39",
                    Price = 129,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "Trenerka",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Mbathje Nike",
                    Description = "Mbathje Nike AirMax Nr.42",
                    Price = 149,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "AirMax",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Mbathje Nike",
                    Description = "Mbathje Nike AirMax Nr.40",
                    Price = 124,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "AirMax",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Mbathje Nike",
                    Description = "Mbathje Nike AirMax Nr.41",
                    Price = 99,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "AirMax",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Mbathje Adidas",
                    Description = "Mbathje Adidas Nr.43 Modeli i ri",
                    Price = 159,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Adidas",
                    Type = "Adidas",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Kapele LTB",
                    Description = "Kapele LTB ne dispozicion me 3 ngjyra",
                    Price = 29,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "LTB",
                    Type = "Kapele",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Maice Adidas",
                    Description = "Maice Adidas te madhsive te ndryshme me 3 ngjyra ne dispozicion",
                    Price = 64,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "Maice",
                    QuantityInStock = 120
                },
                new Product{
                    Name = "Maice Nike",
                    Description = "Maice Nike te madhsive te ndryshme",
                    Price = 59,
                    PictureUrl = "/images/products/adidas-boost.png",
                    Brand = "Nike",
                    Type = "Maice",
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