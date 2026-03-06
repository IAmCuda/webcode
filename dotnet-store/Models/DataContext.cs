using System.Net.Http.Headers;
using Microsoft.EntityFrameworkCore;

namespace  dotnet_store.Models;

public class DataContext : DbContext
{
    public DbSet<Product> Products { get; set; }
}

// Migrations
// Connection string