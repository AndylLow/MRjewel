using System.Data.Entity;
using System.Reflection;
using Abp.Modules;
using MRJewel.EntityFramework;

namespace MRJewel.Migrator
{
    [DependsOn(typeof(MRJewelDataModule))]
    public class MRJewelMigratorModule : AbpModule
    {
        public override void PreInitialize()
        {
            Database.SetInitializer<MRJewelDbContext>(null);

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}