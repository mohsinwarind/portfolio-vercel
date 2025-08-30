document.addEventListener("DOMContentLoaded", function () {
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
    Fusion: {
      title: "Mango Disease Classifier",
      desc: "A Machine Learning app that classifies mango diseases using pre-trained CNN individual models, along with a novel dynamic attention-based fusion model that integrates the predictions of both leaf and fruit models to improve generalization.",
      img: STATIC_URL + "projects/images/Fusion.png",
      github: "https://github.com/mohsinwarind/Mango_Fusion",
      demo: "https://mango-fusion-brown.vercel.app/",
      paper: "under-review"
    },
    GPT: {
      title: "CogitoGPT",
      desc: "CogitoGPT is an AI-powered reaserch-oriented chatbot application that utilize Mistral-7B-Instruct-v0.3 model to provide intelligent, relevant, concise and context-aware summariziation and answer of user queries in real-time on reaserch articles.",
      img: STATIC_URL + "projects/images/GPT.png",
      github: "https://github.com/mohsinwarind/CogitoGPT",
      demo: "https://cogitogpt.vercel.app/"
    },
    Bus: {
      title: "KFUEIT Bus System",
      desc: "A digitialize bus system for KFUEIT, which let the student see their bus routes, manage them, find there lost items , list the item they found, and to trace the live location of buses.",
      img: STATIC_URL + "projects/images/Bus.png",
      github: "https://github.com/mohsinwarind/KFUEIT-Bus-System",
      demo: "https://kfueit-bus-system.onrender.com"
    },
    Bidraze: {
      title: "Bidraze",
      desc: "Bidraze is a feature-rich online auction platform built with Python and Django. It allows users to create listings, place bids, track items via a watchlist, and manage auctions in a user-friendly interface.",
      img: STATIC_URL + "projects/images/BidRaze.png",
      github: "https://github.com/mohsinwarind/Bidraze",
      demo: "https://bidraze.onrender.com/",
      // paper: "under-review"
    },
    Conectify: {
      title: "Conectify",
      desc: "Conectify is a Django-based social media platform that allows users to create, share, and interact with posts. It supports user authentication, profile customization, image uploads, follow systems, and more.",
      img: STATIC_URL + "projects/images/connect.png",
      github: "https://github.com/mohsinwarind/Conectify",
      demo: "https://conectify.onrender.com/",
      // paper: "under-review"
    },
    MBox: {
      title: "MBox",
      desc: "MBox is a dynamic, single-page mail application built using Django for the backend and JavaScript (ES6) for frontend interactivity. Inspired by Gmail, this project demonstrates how to implement core email functionalities in a full-stack web environment.",
      img: STATIC_URL + "projects/images/MBox.png",
      github: "https://github.com/mohsinwarind/MBox",
      demo: "https://mbox-z3f9.onrender.com/"
    },
    sapiens: {
      title: "The Wise Sapiens",
      desc: "A multi-pages static website I designed for my own organization",
      img: STATIC_URL + "projects/images/wisesapiens.png",
      github: "https://github.com/mohsinwarind/TheWiseSapiens",
      demo: "https://thewisesapiens.org/"
    },
    codequest1: {
      title: "Code Conquest I",
      desc: "A website which I designed for our very first hackthon..",
      img: STATIC_URL + "projects/images/Hakathon.png",
      github: "https://github.com/mohsinwarind/Code-Conquest-I/",
      demo: "https://mohsinwarind.github.io/Code-Conquest-I/",
      // paper: "https://arxiv.org/abs/xyz123"
    },
    mall: {
      title: "Virtual Mall System",
      desc: "Virtual Mall System is an interactive C++ project...",
      img: STATIC_URL + "projects/images/Mall.png",
      github: "https://github.com/mohsinwarind/Virtual-Mall-",
      
      // demo and paper are optional/missing
    },
    // more projects...
  };

  // 📌 Event handler for each project card
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const data = projects[id];

      modalTitle.textContent = data.title;
      modalImage.src = data.img;
      modalDesc.textContent = data.desc;
      modalGitHub.href = data.github;

      // 📌 Handle Live Demo logic
      if (data.demo) {
        modalDemo.href = data.demo;
        modalDemo.classList.remove('hidden');
        modalDemo.style.display = 'inline-block';
      } else {
        modalDemo.removeAttribute('href');
        modalDemo.classList.add('hidden');
        modalDemo.style.display = 'none';
      }

      // 📌 Handle Research Article logic
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

  // 📌 3D Card Animation on Hover
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
});
