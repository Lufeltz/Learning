using Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
  public class DataContext : DbContext
  {

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    { }

    public DbSet<Person> Person { get; set; }
  }
}