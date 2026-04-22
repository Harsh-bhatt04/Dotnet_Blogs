using BlogCRUD.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(); // IMPORTANT
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register Service (DI)
builder.Services.AddScoped<BlogService>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers(); // IMPORTANT

app.Run();