# എഡിറ്റിംഗ് ലോകം (Editing Lokam)
> **All Editing Resources in One Place** • *The premier curated editing portal for Malayalam and global content creators.*

---

## 🌟 Overview

**എഡിറ്റിംഗ് ലോകം (Editing Lokam)** is a fast, responsive, and cinematic editing-resource website built specifically for content creators, video editors, motion graphic artists, and photographers.

The site brings together verified PC and Mobile editing applications, complete step-by-step masterclasses, and curated Google Drive editing assets into one unified, dark-themed portal.

### ✨ Key Design & Feature Highlights
- **Authentic Branding:** Incorporates the custom 3D Malayalam logo prominently in both the header and the cinematic hero section without distortion.
- **Cinematic Aesthetics:** Deep obsidian/navy background, electric blue and neon cyan accents, subtle glassmorphism cards, and smooth micro-animations.
- **Dual Specialty Hubs:**
  1. **Video Editing:** PC & Mobile editors (CapCut, DaVinci Resolve, Premiere Pro, After Effects), YouTube masterclasses, and 6 Google Drive asset packs (Raw Clips, SFX, Transitions, Motion Backgrounds, Green Screen VFX, Fonts).
  2. **Photo Editing:** PC & Mobile design suites (Photoshop, Illustrator, Canva, Lightroom, Picsart, PhotoRoom), complete playlist tutorials, Malayalam typography, Lightroom presets, and PSD files.
- **Nested Platform & Tier Navigation:**
  - Switch between **💻 PC** and **📱 Mobile** seamlessly.
  - Filter by **All Apps**, **🟢 Free Apps**, **💎 Paid Apps**, and **⚡ Paid Apps for Free** (Community links).
  - Clean empty states with custom illustrations whenever a section has no entries yet (e.g. Mobile Paid Apps).
- **Global In-Memory Search:** Real-time search across all apps, tutorials, and cloud assets with live query highlighting, instant filter chips, and keyboard shortcut support (`Ctrl + K` or `/`).
- **Interactive Utility:** One-click "Copy Link" buttons on every item with animated toast feedback.
- **Deep-Linking & Breadcrumbs:** Dynamic breadcrumb path (`Home > Category > Section > Platform`) with native browser forward/backward button support (`#/video/apps/pc`, etc.).
- **Data & UI Separation:** All links and information are maintained in `data.js`, allowing edits without touching HTML/CSS markup.
- **Transparent Sourcing:** Clear badge distinctions between **Official Store/Web**, **Google Drive Cloud**, **Telegram Community Resources**, and **Third-Party Mirror Links**.

---

## 📁 File Structure

The project is located at:
`C:\Users\luluf\.gemini\antigravity\scratch\editing-lokam\`

```text
editing-lokam/
├── assets/
│   ├── logo.png           # Supplied 3D Malayalam "എഡിറ്റിംഗ് ലോകം" logo
│   └── favicon.svg        # Crisp electric blue SVG clapperboard & media favicon
├── index.html             # Semantic, accessible HTML5 layout
├── styles.css             # Cinematic dark & electric cyan stylesheet
├── script.js              # Application state, router, search, and dynamic renderers
├── data.js                # Separate content database for all apps, tutorials & packs
├── start.bat              # One-click Windows launcher (opens default browser)
├── serve.ps1              # Lightweight local HTTP web server via PowerShell
└── README.md              # Project documentation and guide
```

---

## 🚀 How to Run the Website Locally

You have multiple convenient ways to launch and view the website:

### Method 1: Instant Launch (Recommended for Windows)
Simply double-click the **`start.bat`** file in the project folder:
```cmd
start.bat
```
This automatically opens `index.html` in your default web browser (Chrome, Edge, Brave, Opera GX, Firefox).

Or double-click `index.html` directly in File Explorer.

---

### Method 2: Local HTTP Server (Built-in PowerShell)
If you prefer running a local server on `http://localhost:8080` (useful for testing on local network or simulating an HTTP environment):
1. Right-click **`serve.ps1`** and choose **"Run with PowerShell"**, or open PowerShell in the directory and run:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\serve.ps1
   ```
2. Your browser will automatically open:
   `http://localhost:8080`
3. To stop the server, press `Ctrl + C` in the PowerShell window.

---

### Method 3: VS Code Live Server (If using VS Code)
1. Open the folder `C:\Users\luluf\.gemini\antigravity\scratch\editing-lokam` in Visual Studio Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🛠️ How to Update Links and Content Later

All content is kept completely independent of the layout in **`data.js`**. You do not need to touch `index.html` or `styles.css` to add, update, or remove links.

### 1. Adding or Modifying an App
Open `data.js` and locate `video.apps` or `photo.apps`. Inside the respective platform (`pc` or `mobile`) and tier (`free`, `paid`, or `paidForFree`), add an entry:

```javascript
{
  id: "custom-app-1",
  title: "New Video Editor",
  titleMl: "പുതിയ എഡിറ്റർ",
  description: "Short description of what the editor does.",
  url: "https://your-download-link.com",
  sourceType: "official-store", // "official-store" | "official-web" | "telegram" | "third-party"
  badge: "Official Store",
  tierBadge: "Free Official",
  platform: "PC (Windows)",
  tags: ["4K", "VFX"]
}
```

### 2. Adding a Tutorial or Playlist
Locate `video.tutorials` or `photo.tutorials` in `data.js` and add:

```javascript
{
  id: "custom-tut-1",
  title: "Advanced Color Grading Series",
  titleMl: "കളർ ഗ്രേഡിംഗ് ട്യൂട്ടോറിയൽ",
  app: "DaVinci Resolve",
  type: "YouTube Playlist",
  url: "https://youtube.com/playlist?list=...",
  badge: "Full Playlist",
  platform: "PC",
  description: "Complete guide on nodes, LUTs, and color scopes."
}
```

### 3. Adding a Cloud Resource Pack (Drive / VFX / SFX)
Locate `video.resources` or `photo.resources` in `data.js` and add:

```javascript
{
  id: "custom-res-1",
  title: "Cinematic LUTs Pack",
  titleMl: "സിനിമാറ്റിക് ലട്ടുകൾ (LUTs)",
  category: "Presets",
  url: "https://drive.google.com/drive/folders/...",
  sourceType: "gdrive",
  badge: "Google Drive",
  fileTypes: "CUBE / 3DL",
  description: "30+ Hollywood teal and orange cinematic lookup tables."
}
```

Whenever you save `data.js`, refresh your browser to see the updates immediately!

---

## 🛡️ Content Policy & Safety
- **Official Links First:** Wherever available (such as DaVinci Resolve, Microsoft Store CapCut, Canva, Proton VPN), official creator channels are prioritized.
- **Transparent Attribution:** Community packages and APK mirrors are labeled explicitly as `Telegram Community` or `Third-Party Link` so users always know the source.

