using System.Linq;
using MRJewel.EntityFramework;
using MRJewel.MultiTenancy;

namespace MRJewel.Migrations.SeedData
{
    public class DefaultTenantCreator
    {
        private readonly MRJewelDbContext _context;

        public DefaultTenantCreator(MRJewelDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateUserAndRoles();
        }

        private void CreateUserAndRoles()
        {
            //Default tenant

            var defaultTenant = _context.Tenants.FirstOrDefault(t => t.TenancyName == Tenant.DefaultTenantName);
            if (defaultTenant == null)
            {
                _context.Tenants.Add(new Tenant {TenancyName = Tenant.DefaultTenantName, Name = Tenant.DefaultTenantName});
                _context.SaveChanges();
            }
        }
    }
}
