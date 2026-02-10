from django.http import HttpResponse

def custom_404_view(request, exception):
    html = """
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>404 - Page Not Found</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: #0f172a;
      color: #e5e7eb;
      text-align: center;
    }
    h1 { font-size: 8rem; margin: 0; }
    a {
      color: #38bdf8;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div>
    <h1>Opppos :( </h1>
    <p>What are you doing here on this path ?</p>
    <a href="/">Go back to home please</a>
  </div>
</body>
</html>

    """
    print("404 view was triggered")
    return HttpResponse(html, status=404)
