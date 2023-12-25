using System.Threading.Tasks;
using Abp.Application.Services;
using MRJewel.Authorization.Accounts.Dto;

namespace MRJewel.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
