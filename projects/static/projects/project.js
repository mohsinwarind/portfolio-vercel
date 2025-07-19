document.addEventListener("DOMContentLoaded", function(){


    // 📌 Modal DOM elements
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDescription');
const modalGitHub = document.getElementById('modalGitHub');
const modalDemo = document.getElementById('modalDemo');
const modalPaper = document.getElementById('modalPaper');
const closeModal = document.querySelector('.close-modal');

// 📌 Review modal
const reviewModal = document.getElementById('reviewModal');
const closeReviewModal = document.querySelector('.close-review-modal');

// 📌 Project cards and data
const projects = {
  neuro: {
    title: "NeuroVision AI",
    desc: "AI-powered brain tumor detection system built with TensorFlow and Flask...",
    img: "Templates/landingpage.jpg",
    github: "https://github.com/yourrepo/neurovision",
    demo: "https://neurovision-demo.vercel.app",
    paper: "under-review"
  },
  codemap: {
    title: "CodeMap",
    desc: "Real-time task dashboard...",
    img: "assets/projects/codemap.png",
    github: "https://github.com/yourrepo/codemap",
    demo: "https://codemap.io"
  },
  citegen: {
    title: "CiteGen",
    desc: "Citation extractor...",
    img: "assets/projects/citegen.png",
    github: "https://github.com/yourrepo/citegen",
    demo: "https://citegen.org",
    paper: "https://arxiv.org/abs/xyz123"
  },
  // etc...
};

// 📌 Single event handler for all project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    const data = projects[id];

    modalTitle.textContent = data.title;
    modalImage.src = data.img;
    modalDesc.textContent = data.desc;
    modalGitHub.href = data.github;
    modalDemo.href = data.demo;

    // 🧠 Handle Research Article logic
    if (data.paper && data.paper !== "under-review") {
      modalPaper.href = data.paper;
      modalPaper.classList.remove('hidden');
      modalPaper.onclick = null;
    } else if (data.paper === "under-review") {
      modalPaper.classList.remove('hidden');
      modalPaper.removeAttribute('href');
      modalPaper.onclick = function (e) {
        e.preventDefault();
        reviewModal.classList.remove('hidden');
      };
    } else {
      modalPaper.classList.add('hidden');
      modalPaper.removeAttribute('href');
      modalPaper.onclick = null;
    }

    modal.classList.remove('hidden');
  });
});

// 📌 Modal close logic
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});

// 📌 Review modal close logic
closeReviewModal.addEventListener('click', () => reviewModal.classList.add('hidden'));
window.addEventListener('click', (e) => {
  if (e.target === reviewModal) reviewModal.classList.add('hidden');
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth: w, offsetHeight: h } = card;
    const rotateX = ((offsetY / h) - 0.5) * 10;
    const rotateY = ((offsetX / w) - 0.5) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});


})