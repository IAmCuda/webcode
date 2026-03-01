using Microsoft.AspNetCore.Mvc;

namespace dotnet_basics.Controllers;
 
    public class CourseController:Controller
    {
         //localhoost:5102/course
         //localhoost:5102/course/index
         public ActionResult Index()
    {
        return View();  // Views/Course/Index.cshtml
    }


         //localhoost:5102/course/details
  public ActionResult Details()
    {
        return View(); // Views/Course/Details.cshtml
    }


         //localhoost:5102/course/list
    public ActionResult List()
    {
        return View(); // Views/Course/List.cshtml
    }

    }
 
