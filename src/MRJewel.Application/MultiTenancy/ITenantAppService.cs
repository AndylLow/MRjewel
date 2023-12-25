using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MRJewel.MultiTenancy.Dto;

namespace MRJewel.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
