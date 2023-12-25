using Abp.AutoMapper;
using MRJewel.Sessions.Dto;

namespace MRJewel.Web.Models.Account
{
    [AutoMapFrom(typeof(GetCurrentLoginInformationsOutput))]
    public class TenantChangeViewModel
    {
        public TenantLoginInfoDto Tenant { get; set; }
    }
}