if (window.innerWidth > 768) {
  // aktifin efek animasi JS
}
// Particles Effect - Script asli Anda (tidak diubah)
const numParticles = 30;
const particlesContainer = document.getElementById("particles");

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDelay = `${Math.random() * 10}s`;
  particle.style.animationDuration = `${10 + Math.random() * 10}s`;
  particlesContainer.appendChild(particle);
}

// === Simulasi Live IoT Data ===
// Ganti dengan API Key-mu sendiri
const API_KEY = "a2e7292664650eaafd00fa404316f9a5";

// Nama kota
const CITY = "Bekasi,ID"; // “ID” adalah kode negara Indonesia

async function updateWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    // Ambil suhu & kelembapan dari properti JSON
    const temp = data.main.temp; // dalam °C
    const humidity = data.main.humidity; // dalam %

    // Tampilkan di elemen HTML
    document.getElementById("temp").textContent = temp.toFixed(1);
    document.getElementById("hum").textContent = humidity;
  } catch (err) {
    console.error("Gagal mengambil data cuaca:", err);
    document.getElementById("temp").textContent = "--";
    document.getElementById("hum").textContent = "--";
  }
}

// Saat halaman dimuat
updateWeather();
// Update tiap 10 menit (600.000 ms). Kamu bisa atur intervalnya.
setInterval(updateWeather, 600000);
// === Scroll Animation ===
const toolCards = document.querySelectorAll(".tool-card");
function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  toolCards.forEach((card) => {
    const boxTop = card.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", checkVisibility);
checkVisibility();
// === Mini Music Player Script ===
const playBtn = document.getElementById("playPauseBtn");
const audio = document.getElementById("audioPlayer");
const icon = playBtn.querySelector("i");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    audio.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
});

const container = document.getElementById("cyberDust");

for (let i = 0; i < 40; i++) {
  const dot = document.createElement("div");
  dot.className = "cyber-dot";
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.animationDelay = Math.random() * 12 + "s";
  container.appendChild(dot);
}

const terminalBody = document.getElementById("terminalBody");

const commands = [
  { cmd: "echo 'Initializing portfolio system...'", output: "Initializing portfolio system...", speed: 80 },
  { cmd: "ssh anandhito@myServer101", output: "Connecting to anandhito.myServer101 ...\nConnection established ✅", speed: 100 },
  { cmd: "ls modules/", output: "Loading modules: [ Arduino, ESP, IoT, Python, HTML, CSS, JS ]", speed: 90 },
  { cmd: "whoami", output: "System online. Welcome back, Anan 🚀", speed: 70 }
];

let commandIndex = 0;
let charIndex = 0;
let currentText = "";
let isCommand = true;
let typingSpeed = 80; // default speed

function typeLine() {
  if (commandIndex < commands.length) {
    const currentItem = commands[commandIndex];
    const text = isCommand ? currentItem.cmd : currentItem.output;
    typingSpeed = currentItem.speed;

    currentText = text.slice(0, charIndex++);
    const prefix = isCommand ? "$ " : "> ";
    const cursor = charIndex <= text.length ? "|" : "";

    // Build the full terminal content
    let fullContent = "";
    for (let i = 0; i < commandIndex; i++) {
      fullContent += "$ " + commands[i].cmd + "<br>> " + commands[i].output.replace(/\n/g, "<br>") + "<br>";
    }
    if (isCommand) {
      fullContent += prefix + currentText + cursor;
    } else {
      fullContent += "$ " + currentItem.cmd + "<br>" + prefix + currentText.replace(/\n/g, "<br>") + cursor;
    }

    terminalBody.innerHTML = fullContent;

    if (charIndex <= text.length) {
      setTimeout(typeLine, typingSpeed);
    } else {
      charIndex = 0;
      if (isCommand) {
        isCommand = false;
        setTimeout(typeLine, 500); // delay before output
      } else {
        isCommand = true;
        commandIndex++;
        setTimeout(typeLine, 1000); // delay between commands
      }
    }
  } else {
    terminalBody.innerHTML += "<br><span style='color:#66ffff;'>$ echo 'Portfolio ready ✔'</span><br><span style='color:#00ff00;'>Portfolio ready ✔</span>";
  }
}

window.onload = typeLine;

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100; // jarak sebelum muncul

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // biar efek langsung aktif di awal

const hudToggle = document.getElementById("hudToggle");
const hudMenu = document.getElementById("hudMenu");

hudToggle.addEventListener("click", () => {
  hudMenu.classList.toggle("active");
});
// ai chat
const chatFab = document.getElementById("chatFab");
const chatBot = document.getElementById("chatBot");
const chatToggle = document.getElementById("chatToggle");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

chatFab.addEventListener("click", () => {
  chatBot.style.display = "flex";
  chatFab.style.display = "none";
});

chatToggle.addEventListener("click", () => {
  chatBot.style.display = "none";
  chatFab.style.display = "block";
});

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

// Formspree form handler
const suggestionForm = document.getElementById('suggestionForm');
if (suggestionForm) {
    suggestionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = suggestionForm.querySelector('.forum-submit');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Mengirim...';
        submitButton.disabled = true;
        
        try {
            const formData = new FormData(suggestionForm);
            const response = await fetch(suggestionForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                submitButton.textContent = 'Terkirim! ✓';
                submitButton.style.backgroundColor = '#4CAF50';
                
                // Reset form
                suggestionForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.backgroundColor = '';
                    submitButton.disabled = false;
                }, 3000);
            } else {
                throw new Error('Gagal mengirim');
            }
        } catch (error) {
            // Show error message
            submitButton.textContent = 'Gagal! ✗';
            submitButton.style.backgroundColor = '#f44336';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 3000);
        }
    });
}

// end of ai chat
//hud
// ambil semua link di HUD
const hudLinks = document.querySelectorAll("#hudMenu a");

hudLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // optional: prevent default anchor jump untuk smooth scroll
    e.preventDefault();

    const href = this.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const targetId = href.slice(1); // hapus #
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      // smooth scroll ke target
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("HUD link target not found:", targetId);
    }

    // tutup menu HUD setelah klik (jika ada)
    const hudMenu = document.getElementById("hudMenu");
    hudMenu.classList.remove("active");
  });
});
// end of hud

// === Enhanced AI Chatbot with Profile Understanding ===

// Extract profile data from DOM
let profileData = {};

function extractProfileData() {
  // Name and basic info from header
  const header = document.querySelector("header");
  profileData.name = header
    ? header.querySelector("h1").textContent.trim()
    : "Anandito Ernanda";
  profileData.age = 19; // From text
  profileData.description = header
    ? header.querySelector(".text-glow p").textContent.trim()
    : "";

  // About section
  const aboutSection = document.getElementById("about");
  profileData.about = aboutSection
    ? aboutSection.querySelector(".text-container p").textContent.trim()
    : "";

  // Skills
  const skillsSection = document.getElementById("skills");
  profileData.skills = [];
  if (skillsSection) {
    const skillItems = skillsSection.querySelectorAll(
      ".skill-item p, .skill-item-x p"
    );
    skillItems.forEach((item) =>
      profileData.skills.push(item.textContent.trim())
    );
  }

  // Skill levels
  profileData.skillLevels = {};
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const skillName = bar.querySelector("p").textContent.split(" ")[0];
    const level = bar.querySelector("span").textContent.replace("%", "");
    profileData.skillLevels[skillName] = parseInt(level);
  });

  // Achievements
  const achievementsSection = document.getElementById("achievements");
  profileData.achievements = [];
  if (achievementsSection) {
    const achList = achievementsSection.querySelectorAll("ul li");
    achList.forEach((li) =>
      profileData.achievements.push(li.textContent.trim())
    );
  }

  // Projects
  const projectsSection = document.getElementById("projects");
  profileData.projects = [];
  if (projectsSection) {
    const projectCards = projectsSection.querySelectorAll(".project-card h3");
    projectCards.forEach((card) =>
      profileData.projects.push(card.textContent.trim())
    );
  }

  // Store
  const storeSection = document.getElementById("store");
  profileData.store = storeSection
    ? storeSection.querySelector(".iot-content p").textContent.trim()
    : "";

  // Social links
  const socialSection = document.getElementById("social");
  profileData.social = [];
  if (socialSection) {
    const links = socialSection.querySelectorAll("a");
    links.forEach((link) => profileData.social.push(link.textContent.trim()));
  }
}

// Generate AI-like responses based on profile data
function generateResponse(userMsg) {
  const msg = userMsg.toLowerCase();

  // Greetings
  if (msg.includes("halo") || msg.includes("hi") || msg.includes("hello")) {
    return `Halo! Saya ${profileData.name}, ${profileData.age} tahun. Apa yang ingin kamu tahu tentang saya atau proyek IoT saya? 😊`;
  }

  // About
  if (
    msg.includes("tentang") ||
    msg.includes("about") ||
    msg.includes("siapa")
  ) {
    return `Saya ${profileData.about} Salam kenal! 😄`;
  }

  // Skills
  if (
    msg.includes("skill") ||
    msg.includes("kemampuan") ||
    msg.includes("bisa")
  ) {
    const skillsList = profileData.skills.join(", ");
    const topSkill = Object.keys(profileData.skillLevels).reduce((a, b) =>
      profileData.skillLevels[a] > profileData.skillLevels[b] ? a : b
    );
    return `Skill saya meliputi: ${skillsList}. Skill terkuat saya adalah ${topSkill} dengan level ${profileData.skillLevels[topSkill]}%! ⚙️`;
  }

  // Achievements
  if (
    msg.includes("prestasi") ||
    msg.includes("achievement") ||
    msg.includes("menang")
  ) {
    const achList = profileData.achievements.join("; ");
    return `Beberapa prestasi saya: ${achList}. Saya bangga dengan pencapaian ini! 🏆`;
  }

  // Projects
  if (
    msg.includes("proyek") ||
    msg.includes("project") ||
    msg.includes("kerjaan")
  ) {
    const projList = profileData.projects.join(", ");
    return `Saya punya proyek seperti: ${projList}. Ingin tahu lebih detail? 💡`;
  }

  // Store
  if (msg.includes("store") || msg.includes("jasa") || msg.includes("order")) {
    return `${profileData.store} Kalau mau pesan, chat WA saya ya! 🛒`;
  }

  // IoT specific
  if (msg.includes("iot")) {
    return `IoT adalah passion saya! Saya pakar di bidang ini dengan pengalaman di berbagai proyek. Apa yang ingin kamu tahu lebih lanjut? 🌐`;
  }

  // Arduino
  if (msg.includes("arduino")) {
    return `Arduino adalah favorit saya! Saya punya skill level ${profileData.skillLevels["Arduino"]}% di sana. Banyak proyek saya pakai Arduino. ⚙️`;
  }

  // Default responses
  const defaults = [
    "Menarik! Tapi aku masih belajar memahami itu. Coba tanya tentang skill atau proyek saya ya! 🤖",
    "Hmm, mungkin aku bisa jawab kalau kamu tanya tentang IoT atau profile saya. Apa lagi yang ingin kamu tahu? 😄",
    "Aku di sini buat bantu tentang Anandito Ernanda dan dunia IoT. Silakan tanya! 🚀",
  ];
  return defaults[Math.floor(Math.random() * defaults.length)];
}

// Update sendMessage to use new logic with bubbles and smooth scroll
function sendMessage() {
  const msg = userInput.value.trim();
  if (msg === "") return;

  // Create user message bubble
  const userMessage = document.createElement('div');
  userMessage.className = 'message user';
  userMessage.textContent = msg;
  chatBody.appendChild(userMessage);

  userInput.value = "";

  const reply = generateResponse(msg);

  setTimeout(() => {
    // Create bot message bubble with typing animation
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot typing';
    botMessage.textContent = reply;
    chatBody.appendChild(botMessage);

    // Smooth scroll to the new message
    botMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });

    // Remove typing animation after a short delay
    setTimeout(() => {
      botMessage.classList.remove('typing');
    }, 1000);
  }, 600);
}

// Extract data on page load
window.addEventListener("DOMContentLoaded", extractProfileData);

// Performance Toggle Functionality
const performanceToggle = document.getElementById('performanceToggle');

performanceToggle.addEventListener('click', () => {
  document.body.classList.toggle('effects-disabled');
  performanceToggle.classList.toggle('active');
});

// === Tutorial Functionality for 4 Bottom Icons ===
const tutorialOverlay = document.getElementById('tutorial-overlay');
const tutorialHighlight = document.getElementById('tutorial-highlight');
const tutorialBubble = document.getElementById('tutorial-bubble');
const tutorialText = document.getElementById('tutorial-text');
const tutorialNext = document.getElementById('tutorial-next');
const tutorialSkip = document.getElementById('tutorial-skip');

let currentStep = 0;

// Define tutorial steps
const tutorialSteps = [
  {
    element: '#hudToggle',
    text: 'Ini adalah tombol HUD Navigation. Klik untuk membuka menu navigasi cepat ke berbagai bagian website.',
    position: 'top'
  },
  {
    element: '#chatFab',
    text: 'Tombol ini membuka chatbot AI. Tanyakan apa saja tentang IoT atau profil saya!',
    position: 'top'
  },
  {
    element: '#performanceToggle',
    text: 'Tombol toggle efek visual. Klik untuk menonaktifkan animasi dan efek agar website lebih ringan.',
    position: 'top'
  },
  {
    element: '#musicPlayer',
    text: 'Di pojok kanan bawah terdapat pemutar musik mini. Klik play untuk menikmati lagu sambil browsing!',
    position: 'top'
  }
];

function showTutorialStep(step) {
  if (step >= tutorialSteps.length) {
    endTutorial();
    return;
  }

  const stepData = tutorialSteps[step];
  const element = document.querySelector(stepData.element);

  if (!element) {
    console.warn('Tutorial element not found:', stepData.element);
    currentStep++;
    showTutorialStep(currentStep);
    return;
  }

  // Highlight the element
  const rect = element.getBoundingClientRect();
  tutorialHighlight.style.top = rect.top + 'px';
  tutorialHighlight.style.left = rect.left + 'px';
  tutorialHighlight.style.width = rect.width + 'px';
  tutorialHighlight.style.height = rect.height + 'px';

  // Position the bubble
  let bubbleTop = rect.top - 120; // Above the element
  let bubbleLeft = rect.left + rect.width / 2 - 150; // Centered

  // Adjust to keep bubble on screen
  bubbleLeft = Math.max(10, Math.min(window.innerWidth - 310, bubbleLeft));
  bubbleTop = Math.max(10, bubbleTop);

  tutorialBubble.style.top = bubbleTop + 'px';
  tutorialBubble.style.left = bubbleLeft + 'px';

  // Set text
  tutorialText.textContent = stepData.text;

  // Show overlay
  tutorialOverlay.style.display = 'flex';
}

function endTutorial() {
  tutorialOverlay.style.display = 'none';
  localStorage.setItem('tutorialCompleted', 'true');
}

function startTutorial() {
  if (localStorage.getItem('tutorialCompleted')) {
    return; // Skip if already completed
  }
  currentStep = 0;
  showTutorialStep(currentStep);
}

// Event listeners
tutorialNext.addEventListener('click', () => {
  currentStep++;
  showTutorialStep(currentStep);
});

tutorialSkip.addEventListener('click', () => {
  endTutorial();
});
// Start tutorial on page load
window.addEventListener('load', () => {
  setTimeout(startTutorial, 2000); // Delay 2 seconds after load
});
