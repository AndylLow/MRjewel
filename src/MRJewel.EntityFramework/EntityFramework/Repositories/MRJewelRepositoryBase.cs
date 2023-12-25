using Abp.Domain.Entities;
using Abp.EntityFramework;
using Abp.EntityFramework.Repositories;

namespace MRJewel.EntityFramework.Repositories
{
    public abstract class MRJewelRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<MRJewelDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected MRJewelRepositoryBase(IDbContextProvider<MRJewelDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //add common methods for all repositories
    }

    public abstract class MRJewelRepositoryBase<TEntity> : MRJewelRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {
        protected MRJewelRepositoryBase(IDbContextProvider<MRJewelDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //do not add any method here, add to the class above (since this inherits it)
    }
}
