// تأثير الضغط على الزر
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => btn.style.transform = 'scale(1)', 150);
  });
});

// توليد فيديوهات ديناميكية
const videos = [
  { title: "CSS Trick #1", url: "https://www.youtube.com/watch?v=video1" },
  { title: "CSS Trick #2", url: "https://www.youtube.com/watch?v=video2" },
  { title: "JS Trick #1", url: "https://www.youtube.com/watch?v=video3" },
  { title: "Frontend Roadmap", url: "https://www.youtube.com/watch?v=video4" },
];

const videoGrid = document.getElementById('video-grid');

videos.forEach(video => {
  const div = document.createElement('div');
  div.className = 'video-card';
  div.textContent = video.title;
  div.addEventListener('click', () => {
    window.open(video.url, "_blank");
  });
  videoGrid.appendChild(div);
});

const langBtn = document.getElementById("lang-btn");
const aboutText = document.querySelector(".about p");
const aboutTitle = document.querySelector(".about h2");
const tagline = document.querySelector(".tagline");

let currentLang = "ar";

langBtn.addEventListener("click", () => {
  if (currentLang === "ar") {
    // 🔄 إلى الإنجليزية
    document.documentElement.lang = "en";
    document.body.dir = "ltr";
    aboutTitle.textContent = "About the Channel";
    aboutText.innerHTML = `CodeSpark4U teaches <bdi class="code">CSS</bdi>, 
      <bdi class="code">HTML</bdi>, and <bdi class="code">JavaScript</bdi>, 
      along with frontend tricks, in a smooth and fast way through short and fun videos 
      that help learners grasp concepts quickly.`;
    tagline.textContent = "Learn programming fast with short videos!";
    langBtn.textContent = "العربية";
    currentLang = "en";
  } else {
    // 🔄 إلى العربية
    document.documentElement.lang = "ar";
    document.body.dir = "rtl";
    aboutTitle.textContent = "عن القناة";
    aboutText.innerHTML = `تُقدّم قناة CodeSpark4U تعليماً في 
      <bdi dir="ltr" class="code">CSS</bdi> و
      <bdi dir="ltr" class="code">HTML</bdi> و
      <bdi dir="ltr" class="code">JavaScript</bdi>،
      إضافةً إلى حِيَلٍ في تطوير واجهات المستخدم الأمامية، 
      بأسلوبٍ سلسٍ وسريعٍ عبر فيديوهات قصيرة وممتعة تُسهِّل على المتعلّم استيعاب المفاهيم بسرعة.`;
    tagline.textContent = "تعلم البرمجة بسرعة وفيديوهات قصيرة!";
    langBtn.textContent = "English";
    currentLang = "ar";
  }
});

