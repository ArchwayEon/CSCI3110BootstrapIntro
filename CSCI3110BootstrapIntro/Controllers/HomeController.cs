using CSCI3110BootstrapIntro.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CSCI3110BootstrapIntro.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult GridExample()
    {
        return View();
    }

    public IActionResult StackedForm()
    {
        return View();
    }

    public IActionResult Buttons()
    {
        return View();
    }

    public IActionResult HorizontalForm()
    {
        return View();
    }

    public IActionResult ModalFormP1()
    {
        return View();
    }

    public IActionResult ModalFormP1JS()
    {
        return View();
    }

    public IActionResult ModalFormP2()
    {
        return View();
    }

    public IActionResult ModalFormP3()
    {
        return View();
    }

    public IActionResult ModalFormP4()
    {
        return View();
    }

    public IActionResult ModalFormP4Submit()
    {
        return View();
    }

    [HttpPost]
    public IActionResult CreatePet(Pet pet)
    {
        if (ModelState.IsValid)
        {
            // Save the pet data here
            return Json("success");
        }
        return Json("fail");
    }

    public IActionResult ToolTipsDemo()
    {
        return View();
    }

    public IActionResult PopoverDemo()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}