using BlogCRUD.Services;
using BlogCRUD.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(); // IMPORTANT
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy
                .WithOrigins("http://localhost:5173") // Vite frontend
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
// Register Service (DI)
builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddSingleton<BlogService>();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("AllowFrontend");
app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers(); // IMPORTANT

app.Run();