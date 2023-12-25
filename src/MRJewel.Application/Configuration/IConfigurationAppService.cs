using System.Threading.Tasks;
using Abp.Application.Services;
using MRJewel.Configuration.Dto;

namespace MRJewel.Configuration
{
    public interface IConfigurationAppService: IApplicationService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}