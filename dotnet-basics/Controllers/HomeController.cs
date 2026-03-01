using Microsoft.AspNetCore.Mvc;

namespace dotnet_basics.Controllers;

public class HomeController:Controller
{
    //localhoost:5102
    //localhoost:5102/home
    //localhoost:5102/home/index
public ActionResult Index()
    {
        return View(); // Views/Home/Index.cshtml
    }


    //localhoost:5102/home/about

    public ActionResult About()
    {
        return View(); // Views/Home/About.cshtml
    }

    //localhoost:5102/home/contact

    public ActionResult Contact()
    {
        return  View(); // Views/Home/Contact.cshtml
    }
}