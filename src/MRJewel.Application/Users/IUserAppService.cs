using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MRJewel.Roles.Dto;
using MRJewel.Users.Dto;

namespace MRJewel.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UpdateUserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();
    }
}