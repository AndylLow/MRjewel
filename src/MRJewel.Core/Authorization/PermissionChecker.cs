using Abp.Authorization;
using MRJewel.Authorization.Roles;
using MRJewel.Authorization.Users;

namespace MRJewel.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {

        }
    }
}
