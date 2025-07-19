from django.shortcuts import render

# Create your views here.

def publications(request):
    """
    Rendering the requested publications page.
    Args:
        request: The HTTP request object.
    """
    return render(request, "publications/articles.html")