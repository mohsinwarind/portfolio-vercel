document.addEventListener("DOMContentLoaded", function () {
    // Terminal typing effect...
    // const text = `> Hello, I'm Mohsin learning new things, doing new stuff and helping no one , lol, right now i'm testing this terminal that how is it supporsed to work or behvave here\n> 🧠 Full Stack Web Developer\n> 🤖 AI Researcher | 📚 Author\n> 🌍 Founder - AI for Society\n\n> Crafting solutions in code and community.`;
    const text = `> Hello, I'm Mohsin, a final-year Computer Science undergraduate student. \n> A Harvard-Certified Full Stack Web App Developer with Python and Django. \n> Currently immersed in writing research articles and developing applications in the realm of Artificial Intelligence and Machine Learning. \n> Founder of 'The Wise Sapiens' , a non-profit dedicated to STEM education and fostering rational dialogue. \n> Author of 'The Programmer's Path with Java', a book that covers programming fundamentals and object-oriented principles. \n> In my free time you will find me reading books and scribing  through paper.`
    let i = 0;
    const speed = 20;
  
    function typeText() {
      const terminal = document.getElementById('terminalText');
      if (terminal && i < text.length) {
        terminal.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, speed);
      }
    }
  
    window.onload = typeText;
  
    // Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
      });
    }
  
    // 🌙 Theme Toggle
    const toggle = document.getElementById("themeToggle");
  
    if (toggle) {
      const icon = toggle.querySelector(".toggle-icon");
      const body = document.body;
  
      // Load theme
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        body.classList.add("light");
        if (icon) icon.textContent = "🌞";
        toggleGitHubTheme("light");
      }
  
      toggle.addEventListener("click", () => {
        body.classList.toggle("light");
        const isLight = body.classList.contains("light");
  
        if (icon) {
          icon.classList.add("flip");
          icon.textContent = isLight ? "🌞" : "🌙";
          setTimeout(() => icon.classList.remove("flip"), 300);
        }
  
        localStorage.setItem("theme", isLight ? "light" : "dark");
        toggleGitHubTheme(isLight ? "light" : "dark");
      });
    }
  
   // Count-up Animation
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {

  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || '';

    // Remove suffix before converting to number
    const current = parseInt(counter.innerText);

    const increment = Math.ceil(target / 100);

    if (current < target) {
      counter.innerText = `${current + increment}${suffix}`;
      setTimeout(updateCount, 100);
    } else {
      counter.innerText = `${target}${suffix}`;
    }
  };

  updateCount();
});
  
    function toggleGitHubTheme(theme) {
      const statsImg = document.getElementById("github-stats-img");
     if (statsImg) {
    const url1 = `https://github-readme-stats.vercel.app/api?username=mohsinwarind&show_icons=true&theme=${theme}`;
    const url2 = `https://streak-stats.demolab.com/?user=mohsinwarind&theme=${theme}`;

    statsImg.src = url1;

    statsImg.onerror = function () {
        console.log("Primary image failed, switching to backup...");
        this.onerror = null; // prevent infinite loop
        this.src = url2;
    };
}
    }
  });
  