using System.Web.Mvc;
using Abp.Web.Mvc.Authorization;

namespace MRJewel.Web.Controllers
{
    [AbpMvcAuthorize]
    public class HomeController : MRJewelControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}