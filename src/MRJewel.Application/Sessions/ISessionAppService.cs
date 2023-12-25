using System.Threading.Tasks;
using Abp.Application.Services;
using MRJewel.Sessions.Dto;

namespace MRJewel.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
