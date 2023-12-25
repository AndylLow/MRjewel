using MRJewel.EntityFramework;
using EntityFramework.DynamicFilters;

namespace MRJewel.Migrations.SeedData
{
    public class InitialHostDbBuilder
    {
        private readonly MRJewelDbContext _context;

        public InitialHostDbBuilder(MRJewelDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            _context.DisableAllFilters();

            new DefaultEditionsCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new HostRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();
        }
    }
}
