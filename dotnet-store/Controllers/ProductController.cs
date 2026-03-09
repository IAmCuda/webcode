using System.IO.Compression;
using dotnet_store.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_store.Controllers;

public class ProductController:Controller
{
    // Dependecy Injection => DI
    private readonly DataContext _context;
    public ProductController(DataContext context)
    {
        _context = context;
    }


    public ActionResult Index()
    {
        return View();
    }

    
    public ActionResult List(string url, string q)
    {
        var query = _context.Products.Where(i => i.IsActive);  // Queryable

        if(!string.IsNullOrEmpty(url))
        {
            //filtering
            query = query.Where(i => i.Category.Url == url);
        }

           if(!string.IsNullOrEmpty(q))
        {
            //filtering
              query = query.Where(i => i.ProductName.ToLower().Contains(q.ToLower()));

              ViewData["q"]=q;
        }

        return View(query.ToList());
    }

    public ActionResult Details (int id)
    {
        var product = _context.Products.Find(id);
        
        if(product == null)
        {
            return RedirectToAction("Index","Home");
        }

        ViewData["SimilarProducts"] = _context.Products
                                                   .Where(i => i.IsActive && i.CategoryId == product.CategoryId && i.Id != id)
                                                   .Take(4)
                                                   .ToList();
 


        return View(product);
    }
}