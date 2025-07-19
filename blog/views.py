import os
import markdown
import frontmatter 
from django.conf import settings
from django.shortcuts import render, Http404 


BLOG_DIR = os.path.join(settings.BASE_DIR,'blog','blogs')

def blog_list(request):
    posts = []
    for file in os.listdir(BLOG_DIR):
        if file.endswith('.md'):
            with open(os.path.join(BLOG_DIR,file),'r',encoding='utf-8') as f :
                post = frontmatter.load(f)
                posts.append({
                    "title" : post.get("title"),
                    "slug": post.get("slug"),
                    "date": post.get("date"),
                    "description": post.get("description"),
                    "image" : post.get("image"),
                })
    posts.sort(key=lambda x : x['date'],reverse=True)
    return render(request, "blog/blog_list.html",{"posts" : posts})


def blog_detail(request, slug):
    filepath  = os.path.join(BLOG_DIR, f"{slug}.md")
    if not os.path.exists(filepath):
        raise Http404("Blog post not found dude!")
    with open(filepath,'r', encoding='utf-8') as f:
        post = frontmatter.load(f)
        content_html = markdown.markdown(post.content , extensions = ['fenced_code', 'codehilite'])

    return render(request, "blog/blog_detail.html", {
    "title": post.get("title"),
    "content": content_html,
    "date": post.get("date"),
    "description": post.get("description"),
    "image": post.get("image")  
})

    