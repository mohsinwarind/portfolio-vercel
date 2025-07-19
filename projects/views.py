from django.shortcuts import render

# Create your views here.
def projects(request):
    """
    Render the projects page.

    Args:
        request: The HTTP request object.

    Returns:
        HttpResponse: Rendered projects page template.
    """
    return render(request, 'projects/project.html')  