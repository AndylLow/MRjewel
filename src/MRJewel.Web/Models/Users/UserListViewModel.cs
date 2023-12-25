using System.Collections.Generic;
using MRJewel.Roles.Dto;
using MRJewel.Users.Dto;

namespace MRJewel.Web.Models.Users
{
    public class UserListViewModel
    {
        public IReadOnlyList<UserDto> Users { get; set; }

        public IReadOnlyList<RoleDto> Roles { get; set; }
    }
}