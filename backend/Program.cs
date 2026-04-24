using BlogCRUD.Services;
using BlogCRUD.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(); // IMPORTANT
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register Service (DI)
builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddSingleton<BlogService>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers(); // IMPORTANT

app.Run();