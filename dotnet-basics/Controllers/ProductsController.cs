using Microsoft.AspNetCore.Mvc;

namespace dotnet_basics.Controllers;
    public class ProductsController : Controller
    {
 // localhost:5102/products
        public ActionResult Index()
        {
            return View(); // Views/Products/Index.cshtml
        }

 // localhost:5102/products/list
        public ActionResult List()
    {
        return View(); // Views/Products/List.cshtml
    }


 // localhost:5102/products/details
  public ActionResult Details()
    {
        return View(); // Views/Products/Details.cshtml
    }

    }


 