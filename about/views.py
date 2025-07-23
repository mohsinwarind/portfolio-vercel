from django.shortcuts import render

# Create your views here.
def home(request):
    """
    Render the home page of the about section.
    
    Args:
        request: The HTTP request object.
    
    Returns:
        HttpResponse: Rendered home page template.
    """
    return render(request, 'about/home.html')  # Ensure 'about/home.html' exists in your templates directory.


def about(request):
    return render (request, "about/about.html")


def  extra(request):
    return render(request , "about/extra.html")