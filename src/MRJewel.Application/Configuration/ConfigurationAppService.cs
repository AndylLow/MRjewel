using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using MRJewel.Configuration.Dto;

namespace MRJewel.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : MRJewelAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
