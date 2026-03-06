namespace dotnet_store.Models;
public class Product
{
public int Id { get; set; }
public string ProductName { get; set; } = null!;
public double Price { get; set; }
public bool IsActive { get; set; }

}

// product1, product2