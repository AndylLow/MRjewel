using Abp.Web.Mvc.Views;

namespace MRJewel.Web.Views
{
    public abstract class MRJewelWebViewPageBase : MRJewelWebViewPageBase<dynamic>
    {

    }

    public abstract class MRJewelWebViewPageBase<TModel> : AbpWebViewPage<TModel>
    {
        protected MRJewelWebViewPageBase()
        {
            LocalizationSourceName = MRJewelConsts.LocalizationSourceName;
        }
    }
}