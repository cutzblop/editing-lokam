/**
 * Editing Lokam (എഡിറ്റിംഗ് ലോകം) - Master Resource Database
 * 
 * This file contains all resource data separate from the UI components.
 * To update, add, or remove links, simply modify the objects below.
 * Each item has clear metadata, categories, platforms, tiers, and transparent source labeling.
 */

const EDITING_LOKAM_DATA = {
  siteInfo: {
    title: "എഡിറ്റിംഗ് ലോകം",
    titleEn: "Editing Lokam",
    subtitle: "All Editing Resources in One Place",
    subtitleMl: "എല്ലാ എഡിറ്റിംഗ് റിസോഴ്സുകളും ഒരൊറ്റ പ്ലാറ്റ്‌ഫോമിൽ",
    description: "The ultimate curated hub for Malayalam and global content creators. Download video & photo editing software, follow step-by-step tutorials, and access high-definition editing packs.",
    version: "1.0.0",
    lastUpdated: "October 2026",
    communityLinks: {
      telegramAbez: "https://t.me/ABEZOFFICIAL",
      telegramAtomGuy: "https://t.me/atomguyadobe"
    }
  },

  // Main high-level categories
  categories: [
    {
      id: "video",
      name: "Video Editing",
      nameMl: "വീഡിയോ എഡിറ്റിംഗ്",
      description: "PC & Mobile tools, pro color grading workflows, cinematic sound design packs, and project templates.",
      icon: "video",
      stats: {
        apps: 11,
        tutorials: 8,
        resources: 6
      },
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      id: "photo",
      name: "Photo Editing",
      nameMl: "ഫോട്ടോ എഡിറ്റിംഗ്",
      description: "Graphic design suites, retouching APKs, typography assets, Lightroom camera presets, and PSD files.",
      icon: "photo",
      stats: {
        apps: 7,
        tutorials: 7,
        resources: 3
      },
      gradient: "from-cyan-500 to-indigo-600"
    }
  ],

  // 1. VIDEO EDITING SECTION
  video: {
    apps: {
      mobile: {
        free: [
          {
            id: "v-m-f-1",
            title: "CapCut Mobile",
            titleMl: "ക്യാപ്കട്ട് മൊബൈൽ",
            description: "Industry-standard mobile video editor featuring auto-captions, keyframes, velocity curve, and AI effects.",
            url: "https://t.me/ABEZOFFICIAL/92",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Free",
            platform: "Mobile (Android / iOS)",
            tags: ["CapCut", "Reels", "Keyframes", "Auto Captions"],
            featured: true
          },
          {
            id: "v-m-f-2",
            title: "Alight Motion",
            titleMl: "അലൈറ്റ് മോഷൻ",
            description: "Professional motion graphics, visual effects, vector animation, and XML preset support on smartphone.",
            url: "https://t.me/ABEZOFFICIAL/81",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Free",
            platform: "Mobile (Android)",
            tags: ["Motion Graphics", "XML Presets", "VFX"],
            featured: true
          },
          {
            id: "v-m-f-3",
            title: "InShot Editor",
            titleMl: "ഇൻഷോട്ട് എഡിറ്റർ",
            description: "Powerful HD video maker and photo editor with music, glitch transitions, speed ramps, and text animations.",
            url: "https://t.me/ABEZOFFICIAL/55",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Free",
            platform: "Mobile (Android)",
            tags: ["Shorts", "Reels", "Speed Ramp"]
          },
          {
            id: "v-m-f-4",
            title: "Kuaishou / KwaiCut",
            titleMl: "ക്വായികട്ട്",
            description: "Official smart video creation suite with trending templates, smart portrait cutouts, and stickers.",
            url: "https://play.google.com/store/apps/details?id=com.kwai.editor&hl=en_IN",
            sourceType: "official-store",
            badge: "Google Play Store",
            tierBadge: "Free Official",
            platform: "Mobile (Android)",
            tags: ["Templates", "Smart Cutout", "Official"]
          },
          {
            id: "v-m-f-5",
            title: "VN Video Editor",
            titleMl: "വിഎൻ എഡിറ്റർ",
            description: "Zero watermark, multi-track timeline video editor with curve speed, mask animations, and LUT import.",
            url: "https://play.google.com/store/apps/details?id=com.frontrow.vlog&hl=en_IN",
            sourceType: "official-store",
            badge: "Google Play Store",
            tierBadge: "Free Official",
            platform: "Mobile (Android / iOS)",
            tags: ["No Watermark", "Multi-Track", "LUTs", "Official"],
            featured: true
          },
          {
            id: "v-m-f-6",
            title: "VPN for CapCut (Proton VPN)",
            titleMl: "ക്യാപ്കട്ട് വിപിഎൻ",
            description: "High-speed encrypted VPN required to unlock CapCut network templates, audio search, and online stickers in restricted regions.",
            url: "https://play.google.com/store/search?q=protonvpn&c=apps&hl=en_IN",
            sourceType: "official-store",
            badge: "Google Play Store",
            tierBadge: "Free Official",
            platform: "Mobile (Android)",
            tags: ["VPN", "CapCut Fix", "Templates Unlock"]
          }
        ],
        paid: [], // Empty state requirement: "No apps added yet"
        paidForFree: [] // Empty state requirement: "No apps added yet"
      },
      pc: {
        free: [
          {
            id: "v-p-f-1",
            title: "CapCut Desktop",
            titleMl: "ക്യാപ്കട്ട് പിസി",
            description: "Optimized Windows desktop version with GPU hardware acceleration, 4K export, optical flow slow-mo, and auto-subtitles.",
            url: "https://apps.microsoft.com/detail/xp9kn75rrb9nhs?hl=en-US&gl=IN",
            sourceType: "official-store",
            badge: "Microsoft Store",
            tierBadge: "Free Official",
            platform: "PC (Windows)",
            tags: ["4K Export", "Auto Subs", "Hardware Accelerated"],
            featured: true
          },
          {
            id: "v-p-f-2",
            title: "DaVinci Resolve",
            titleMl: "ഡാവിഞ്ചി റിസോൾവ്",
            description: "Hollywood's premier tool for professional editing, Fusion visual effects, Fairlight audio, and world-class color grading.",
            url: "https://www.blackmagicdesign.com/in/products/davinciresolve",
            sourceType: "official-web",
            badge: "Blackmagic Design",
            tierBadge: "Free Pro Edition",
            platform: "PC (Windows / Mac / Linux)",
            tags: ["Color Grading", "Fusion VFX", "Fairlight Audio", "Industry Standard"],
            featured: true
          },
          {
            id: "v-p-f-3",
            title: "Proton VPN for Windows",
            titleMl: "പ്രോട്ടോൺ വിപിഎൻ (വിൻഡോസ്)",
            description: "Swiss-based secure VPN software to access global media libraries, CapCut PC online assets, and geo-restricted resources.",
            url: "https://protonvpn.com/download-windows",
            sourceType: "official-web",
            badge: "Proton Official",
            tierBadge: "Free Tier",
            platform: "PC (Windows)",
            tags: ["VPN", "Desktop Utilities", "Security"]
          }
        ],
        paid: [
          {
            id: "v-p-p-1",
            title: "Adobe After Effects",
            titleMl: "ആഫ്റ്റർ ഇഫക്ട്സ്",
            description: "The cinematic industry standard for motion graphics, VFX compositing, tracking, particle systems, and 3D camera animations.",
            url: "https://www.adobe.com/in/creativecloud/plans.html#filter=video-audio",
            sourceType: "official-web",
            badge: "Adobe Official",
            tierBadge: "Paid Subscription",
            platform: "PC (Windows / Mac)",
            tags: ["VFX", "Motion Graphics", "3D Tracking", "Adobe"]
          },
          {
            id: "v-p-p-2",
            title: "Adobe Premiere Pro",
            titleMl: "പ്രീമിയർ പ്രോ",
            description: "Leading video editing software for film, TV, and the web. Native timeline editing, Lumetri color, and seamless Adobe ecosystem integration.",
            url: "https://www.adobe.com/in/creativecloud/plans.html",
            sourceType: "official-web",
            badge: "Adobe Official",
            tierBadge: "Paid Subscription",
            platform: "PC (Windows / Mac)",
            tags: ["Film Editing", "Lumetri Color", "Adobe"]
          }
        ],
        paidForFree: [
          {
            id: "v-p-pff-1",
            title: "After Effects Resource Package",
            titleMl: "ആഫ്റ്റർ ഇഫക്ട്സ് റിസോഴ്സ്",
            description: "Direct community shared download and installation resources for After Effects via Telegram channel.",
            url: "https://t.me/atomguyadobe/5",
            sourceType: "telegram",
            badge: "Telegram Community",
            tierBadge: "Community Link",
            platform: "PC (Windows)",
            tags: ["Telegram", "Community Resource", "After Effects"]
          },
          {
            id: "v-p-pff-2",
            title: "Premiere Pro Resource Package",
            titleMl: "പ്രീമിയർ പ്രോ റിസോഴ്സ്",
            description: "Community shared package and setup guide for Adobe Premiere Pro hosted on Telegram.",
            url: "https://t.me/atomguyadobe/13",
            sourceType: "telegram",
            badge: "Telegram Community",
            tierBadge: "Community Link",
            platform: "PC (Windows)",
            tags: ["Telegram", "Community Resource", "Premiere Pro"]
          }
        ]
      }
    },
    tutorials: {
      pc: [
        {
          id: "v-t-pc-1",
          title: "CapCut PC Master Class Playlist",
          titleMl: "ക്യാപ്കട്ട് പിസി ട്യൂട്ടോറിയൽസ്",
          app: "CapCut",
          type: "YouTube Playlist",
          url: "https://youtube.com/playlist?list=PLFwlslCFx_cMy6WXX_A1poEHEkwkc-5Ma",
          badge: "Full Playlist",
          platform: "PC",
          description: "Complete course covering interface walkthrough, trimming, keyframing, trending transitions, and speed ramping on PC."
        },
        {
          id: "v-t-pc-2",
          title: "Adobe Premiere Pro Complete Playlist",
          titleMl: "പ്രീമിയർ പ്രോ ഫുൾ കോഴ്സ്",
          app: "Premiere Pro",
          type: "YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLDI50UxVZIgcMoS4f-8R8xPgAGHX7NPlD",
          badge: "Full Playlist",
          platform: "PC",
          description: "Comprehensive multi-part guide from beginner timeline cuts to advanced audio sync, color grading, and dynamic link exports."
        },
        {
          id: "v-t-pc-3",
          title: "Adobe After Effects Motion & VFX Playlist",
          titleMl: "ആഫ്റ്റർ ഇഫക്ട്സ് ട്യൂട്ടോറിയൽസ്",
          app: "After Effects",
          type: "YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLMia0UuzMc5B64tPHYOXNV6uXznSCe-Ly",
          badge: "Full Playlist",
          platform: "PC",
          description: "Hands-on tutorials for creating cinematic intros, kinetic typography, glowing saber effects, and 3D camera projections."
        },
        {
          id: "v-t-pc-4",
          title: "Basic Video Editing Fundamentals",
          titleMl: "ബേസിക് എഡിറ്റിംഗ് പാഠങ്ങൾ",
          app: "General Video Editing",
          type: "YouTube Video",
          url: "https://youtu.be/pEpkNFsW7lA",
          badge: "Master Video",
          platform: "PC",
          description: "Essential fundamental video editing concepts: pacing, jump cuts, B-roll selection, sound balancing, and storytelling theory."
        }
      ],
      mobile: [
        {
          id: "v-t-m-1",
          title: "CapCut Mobile Editing Master Playlist",
          titleMl: "ക്യാപ്കട്ട് മൊബൈൽ ട്യൂട്ടോറിയൽസ്",
          app: "CapCut",
          type: "YouTube Playlist",
          url: "https://youtube.com/playlist?list=PLBqwRTjUB2Aye3gA0CBcmno9oAaLs2cXO",
          badge: "Full Playlist",
          platform: "Mobile",
          description: "Learn viral Instagram Reels and YouTube Shorts editing techniques, smooth shakes, velocity edits, and 3D photo effects."
        },
        {
          id: "v-t-m-2",
          title: "InShot Mobile Complete Tutorial Series",
          titleMl: "ഇൻഷോട്ട് എഡിറ്റിംഗ് ക്ലാസുകൾ",
          app: "InShot",
          type: "YouTube Playlist",
          url: "https://youtube.com/playlist?list=PLn5zXzLdT3OJMcSgaXxY6qPGbh40__1sf",
          badge: "Full Playlist",
          platform: "Mobile",
          description: "Step-by-step guidance on creating crisp status videos, canvas aspect ratios, picture-in-picture, and beat-synced cuts."
        },
        {
          id: "v-t-m-3",
          title: "Alight Motion Animation & Presets Playlist",
          titleMl: "അലൈറ്റ് മോഷൻ എഫക്ട്സ് ഗൈഡ്",
          app: "Alight Motion",
          type: "YouTube Playlist",
          url: "https://youtube.com/playlist?list=PLPSk3_ciBcl7hAfy_4e6eemz4wuin0AkH",
          badge: "Full Playlist",
          platform: "Mobile",
          description: "Learn graph curve smoothing, shake effect XMLs, glow overlays, bass shake transitions, and lyric animations on phone."
        },
        {
          id: "v-t-m-4",
          title: "Smartphone Basic Editing Walkthrough",
          titleMl: "മൊബൈൽ ബേസിക് എഡിറ്റിംഗ്",
          app: "General Mobile Editing",
          type: "YouTube Video",
          url: "https://youtu.be/K6qbJURYins",
          badge: "Master Video",
          platform: "Mobile",
          description: "Foundational smartphone video editing principles: format selection, audio cleanup, lighting fixes, and export bitrates."
        }
      ]
    },
    resources: [
      {
        id: "v-r-1",
        title: "Raw Cinematic Clips Pack",
        titleMl: "റോ ക്ലിപ്പുകൾ (Raw Clips)",
        category: "Clips",
        icon: "film",
        url: "https://drive.google.com/drive/folders/1BRYiVzoDk9THjnRvX8ZU6CHhqbhTco0D",
        sourceType: "gdrive",
        badge: "Google Drive",
        fileTypes: "MP4 / MOV (4K & 1080p)",
        description: "Curated high-bitrate raw cinematic footage for color grading practice, video reels, and aesthetic montage editing."
      },
      {
        id: "v-r-2",
        title: "Sound Effects (SFX) Mega Library",
        titleMl: "സൗണ്ട് ഇഫക്റ്റുകൾ (Sound Effects)",
        category: "Audio",
        icon: "volume",
        url: "https://drive.google.com/drive/folders/16q1FuUNB67jvA1l0t-P74ZUxwv4Pq8hk",
        sourceType: "gdrive",
        badge: "Google Drive",
        fileTypes: "WAV / MP3",
        description: "Whooshes, cinematic risers, gunshots, deep sub-bass drops, glitches, cinematic hits, and subtle UI pops."
      },
      {
        id: "v-r-3",
        title: "Transitions & Overlay Elements",
        titleMl: "ട്രാൻസിഷനുകൾ & ഓവർലേകൾ",
        category: "Overlays",
        icon: "layers",
        url: "https://drive.google.com/drive/folders/1aCBjhsigy8tX_KDPWDVDhY4J0WO_fNzK",
        sourceType: "gdrive",
        badge: "Google Drive",
        fileTypes: "ProRes / MP4 Alpha",
        description: "Film burns, light leaks, glitch wipes, dust and scratch film mattes, camera shutter transitions, and lens flares."
      },
      {
        id: "v-r-4",
        title: "Dynamic Motion Backgrounds",
        titleMl: "മോഷൻ ബാക്ക്ഗ്രൗണ്ടുകൾ",
        category: "Backgrounds",
        icon: "sparkles",
        url: "https://drive.google.com/drive/folders/1BZAJdvPuJZH3ViNGg89zWlYUtU7irYPf",
        sourceType: "gdrive",
        badge: "Google Drive",
        fileTypes: "Seamless Loop MP4",
        description: "Abstract dark cyber grids, particle flow simulations, dark gradient motions, and subtle ambient loops for podcasts and reels."
      },
      {
        id: "v-r-5",
        title: "Green Screen VFX & Animations",
        titleMl: "ഗ്രീൻ സ്ക്രീൻ ആനിമേഷൻസ്",
        category: "VFX",
        icon: "tv",
        url: "https://drive.google.com/drive/folders/1nGu5OiUcYPMxQOZRquvUid75fH-M6Oe5",
        sourceType: "gdrive",
        badge: "Google Drive",
        fileTypes: "Chroma Key MP4",
        description: "Subscribe buttons, notification popups, social media lower thirds, muzzle flashes, and animated UI elements ready for Chroma Key."
      },
      {
        id: "v-r-6",
        title: "Creator Fonts & Typography Pack",
        titleMl: "എഡിറ്റിംഗ് ഫോണ്ടുകൾ (Fonts)",
        category: "Typography",
        icon: "type",
        url: "https://drive.google.com/drive/folders/1zf65NQ0onqVoshu9HfJT8Z-Td17S8QVA",
        sourceType: "gdrive",
        badge: "Google Drive",
        fileTypes: "TTF / OTF",
        description: "Trending cinematic Malayalam & English typography fonts, bold sans-serifs, handwritten scripts, and poster headline typefaces."
      }
    ]
  },

  // 2. PHOTO EDITING SECTION
  photo: {
    apps: {
      mobile: {
        all: [
          {
            id: "p-m-1",
            title: "Picsart AI Photo Editor",
            titleMl: "പിക്സ്ആർട്ട്",
            description: "All-in-one photo collage maker, sticker creator, AI background removal, double exposure, and artistic sketch filters.",
            url: "https://picsart-mod-13.apkpure.co.in/",
            sourceType: "third-party",
            badge: "Third-Party Link",
            tierBadge: "Community Mod",
            platform: "Mobile (Android)",
            tier: "paidForFree",
            tags: ["Collage", "AI Effects", "Background Removal"],
            featured: true
          },
          {
            id: "p-m-2",
            title: "Adobe Lightroom Mobile",
            titleMl: "ലൈറ്റ്‌റൂം മൊബൈൽ",
            description: "High-precision color grading, RAW camera DNG support, tone curve control, selective masking, and custom DNG presets.",
            url: "https://lightroom.latestmodapks.com/",
            sourceType: "third-party",
            badge: "Third-Party Link",
            tierBadge: "Community Mod",
            platform: "Mobile (Android)",
            tier: "paidForFree",
            tags: ["RAW Color", "Curves", "Presets", "Masking"],
            featured: true
          },
          {
            id: "p-m-3",
            title: "Canva Design & Graphic Editor",
            titleMl: "കാൻവ മൊബൈൽ",
            description: "Intuitive graphic design application for YouTube thumbnails, Instagram carousels, logos, and business flyers.",
            url: "https://canva-mod-apk.en.filerox.com/android/download",
            sourceType: "third-party",
            badge: "Third-Party Link",
            tierBadge: "Community Mod",
            platform: "Mobile (Android)",
            tier: "paidForFree",
            tags: ["Thumbnails", "Posters", "Templates"]
          },
          {
            id: "p-m-4",
            title: "PhotoRoom Studio Photo Editor",
            titleMl: "ഫോട്ടോറൂം",
            description: "Automated instant studio-quality background removal, shadow projection, and e-commerce product mockup creation.",
            url: "https://photoroom-mod-apk.apkpure.co.in/",
            sourceType: "third-party",
            badge: "Third-Party Link",
            tierBadge: "Community Mod",
            platform: "Mobile (Android)",
            tier: "paidForFree",
            tags: ["Cutout", "Product Mockup", "Studio Shadows"]
          }
        ],
        free: [], // Can link to official stores if needed; shows empty or filtered view
        paid: [], // Official store entries or empty state
        paidForFree: [
          // References the mod/third-party links provided by user
          {
            id: "p-m-pff-1",
            title: "Picsart Resource APK",
            titleMl: "പിക്സ്ആർട്ട് എപികെ",
            description: "Picsart unlocked package download link via third-party mirror.",
            url: "https://picsart-mod-13.apkpure.co.in/",
            sourceType: "third-party",
            badge: "Third-Party Link",
            tierBadge: "Community Mod",
            platform: "Mobile (Android)",
            tags: ["Picsart", "Unlocked"]
          },
          {
            id: "p-m-pff-2",
            title: "Lightroom Mobile APK",
            titleMl: "ലൈറ്റ്‌റൂം എപികെ",
            description: "Lightroom unlocked camera suite link via third-party mirror.",
            url: "https://lightroom.latestmodapks.com/",
            sourceType: "third-party",
            badge: "Third-Party Link",
            tierBadge: "Community Mod",
            platform: "Mobile (Android)",
            tags: ["Lightroom", "Color Grading"]
          },
          {
            id: "p-m-pff-3",
            title: "Canva Android APK",
            titleMl: "കാൻവ എപികെ",
            description: "Canva graphic design resource download link.",
            url: "https://canva-mod-apk.en.filerox.com/android/download",
            sourceType: "third-party",
            badge: "Third-Party Link",
            tierBadge: "Community Mod",
            platform: "Mobile (Android)",
            tags: ["Canva", "Templates"]
          },
          {
            id: "p-m-pff-4",
            title: "PhotoRoom Studio APK",
            titleMl: "ഫോട്ടോറൂം എപികെ",
            description: "PhotoRoom background cutout resource link.",
            url: "https://photoroom-mod-apk.apkpure.co.in/",
            sourceType: "third-party",
            badge: "Third-Party Link",
            tierBadge: "Community Mod",
            platform: "Mobile (Android)",
            tags: ["PhotoRoom", "Cutout"]
          }
        ]
      },
      pc: {
        all: [
          {
            id: "p-p-1",
            title: "Adobe Photoshop Resource Package",
            titleMl: "ഫോട്ടോഷോപ്പ് റിസോഴ്സ്",
            description: "Full PC setup and installation instructions for Adobe Photoshop shared on Telegram.",
            url: "https://t.me/atomguyadobe/27",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Paid Apps for Free",
            platform: "PC (Windows)",
            tier: "paidForFree",
            tags: ["Photoshop", "Telegram", "Photo Retouching", "PSD"],
            featured: true
          },
          {
            id: "p-p-2",
            title: "Adobe Illustrator Resource Link 1",
            titleMl: "ഇലസ്ട്രേറ്റർ ലിങ്ക് 1",
            description: "Vector graphics suite installation archive part 1 on Telegram.",
            url: "https://t.me/atomguyadobe/44",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Paid Apps for Free",
            platform: "PC (Windows)",
            tier: "paidForFree",
            tags: ["Illustrator", "Vector", "Logo Design"]
          },
          {
            id: "p-p-3",
            title: "Adobe Illustrator Resource Link 2",
            titleMl: "ഇലസ്ട്രേറ്റർ ലിങ്ക് 2",
            description: "Vector graphics suite installation archive part 2 on Telegram.",
            url: "https://t.me/atomguyadobe/45",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Paid Apps for Free",
            platform: "PC (Windows)",
            tier: "paidForFree",
            tags: ["Illustrator", "Vector", "Telegram"]
          },
          {
            id: "p-p-4",
            title: "Canva Desktop for Windows",
            titleMl: "കാൻവ ഡെസ്ക്ടോപ്പ്",
            description: "Official standalone desktop application for Windows for fast social media graphics, banners, and thumbnails.",
            url: "https://www.canva.com/en_in/download/windows/",
            sourceType: "official-web",
            badge: "Canva Official",
            tierBadge: "Free Official",
            platform: "PC (Windows)",
            tier: "free",
            tags: ["Canva", "Windows App", "Thumbnails"],
            featured: true
          }
        ],
        free: [
          {
            id: "p-p-f-1",
            title: "Canva Desktop for Windows",
            titleMl: "കാൻവ ഡെസ്ക്ടോപ്പ്",
            description: "Official standalone desktop application for Windows for fast social media graphics, banners, and thumbnails.",
            url: "https://www.canva.com/en_in/download/windows/",
            sourceType: "official-web",
            badge: "Canva Official",
            tierBadge: "Free Official",
            platform: "PC (Windows)",
            tags: ["Canva", "Windows App", "Thumbnails"],
            featured: true
          }
        ],
        paid: [], // Empty state: "No apps added yet"
        paidForFree: [
          {
            id: "p-p-pff-1",
            title: "Photoshop PC Resource Link",
            titleMl: "ഫോട്ടോഷോപ്പ് പിസി റിസോഴ്സ്",
            description: "Adobe Photoshop installation post on Telegram channel.",
            url: "https://t.me/atomguyadobe/27",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Community Link",
            platform: "PC (Windows)",
            tags: ["Photoshop", "Telegram"]
          },
          {
            id: "p-p-pff-2",
            title: "Illustrator Resource Link 1",
            titleMl: "ഇലസ്ട്രേറ്റർ ലിങ്ക് 1",
            description: "Adobe Illustrator part 1 shared file on Telegram.",
            url: "https://t.me/atomguyadobe/44",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Community Link",
            platform: "PC (Windows)",
            tags: ["Illustrator", "Telegram"]
          },
          {
            id: "p-p-pff-3",
            title: "Illustrator Resource Link 2",
            titleMl: "ഇലസ്ട്രേറ്റർ ലിങ്ക് 2",
            description: "Adobe Illustrator part 2 shared file on Telegram.",
            url: "https://t.me/atomguyadobe/45",
            sourceType: "telegram",
            badge: "Telegram Resource",
            tierBadge: "Community Link",
            platform: "PC (Windows)",
            tags: ["Illustrator", "Telegram"]
          }
        ]
      }
    },
    tutorials: {
      pc: [
        {
          id: "p-t-pc-1",
          title: "Photoshop Complete Installation Guide",
          titleMl: "ഫോട്ടോഷോപ്പ് ഇൻസ്റ്റലേഷൻ ഗൈഡ്",
          app: "Photoshop",
          type: "Telegram Guide",
          url: "https://t.me/atomguyadobe/30",
          badge: "Telegram Guide",
          platform: "PC",
          description: "Step-by-step setup, prerequisites, and troubleshooting guide for installing Photoshop on Windows."
        },
        {
          id: "p-t-pc-2",
          title: "Adobe Photoshop Masterclass Series",
          titleMl: "ഫോട്ടോഷോപ്പ് ട്യൂട്ടോറിയൽസ്",
          app: "Photoshop",
          type: "YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLsdMYKIrpm00kb6ZR4Z2Z1HervgAviyuj",
          badge: "Full Playlist",
          platform: "PC",
          description: "Learn photo retouching, frequency separation, manipulation, layer masking, and thumbnail design."
        },
        {
          id: "p-t-pc-3",
          title: "Adobe Illustrator Vector Design Series",
          titleMl: "ഇലസ്ട്രേറ്റർ ട്യൂട്ടോറിയൽസ്",
          app: "Illustrator",
          type: "YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PL4GJhst06tTcURcCTJ_epG4ubvho7ihGu",
          badge: "Full Playlist",
          platform: "PC",
          description: "Master the pen tool, shape builder, vector logo creation, flat art, and typography poster design."
        },
        {
          id: "p-t-pc-4",
          title: "Canva Design Master Tutorial Course",
          titleMl: "കാൻവ ഡിസൈൻ ട്യൂട്ടോറിയൽസ്",
          app: "Canva",
          type: "YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLY4eL2lX_iBTm2teh3P38W5tZ6ZONpCCP",
          badge: "Full Playlist",
          platform: "PC",
          description: "Full guide on crafting click-worthy YouTube thumbnails, branding kits, brochures, and resume designs."
        }
      ],
      mobile: [
        {
          id: "p-t-m-1",
          title: "Picsart Mobile Photo Editing Masterclass",
          titleMl: "പിക്സ്ആർട്ട് മൊബൈൽ ട്യൂട്ടോറിയൽ",
          app: "Picsart",
          type: "YouTube Video",
          url: "https://www.youtube.com/watch?v=nOsj5rXykKA",
          badge: "Master Video",
          platform: "Mobile",
          description: "Create viral neon portrait edits, realistic double exposure, hair brushing, and background blending on mobile."
        },
        {
          id: "p-t-m-2",
          title: "Lightroom Mobile Color Grading Series",
          titleMl: "ലൈറ്റ്‌റൂം കളർ ഗ്രേഡിംഗ്",
          app: "Lightroom",
          type: "YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLW-zSkCnZ-gCDj0DhrC9DrsVtndLuntdj",
          badge: "Full Playlist",
          platform: "Mobile",
          description: "Moody dark presets, teal and orange cinema looks, skin tone smoothing, and DNG preset saving tutorial series."
        },
        {
          id: "p-t-m-3",
          title: "Canva Smartphone Graphic Design Guide",
          titleMl: "കാൻവ മൊബൈൽ ഡിസൈനിംഗ്",
          app: "Canva",
          type: "YouTube Video",
          url: "https://www.youtube.com/watch?v=V2597l6GZko",
          badge: "Master Video",
          platform: "Mobile",
          description: "Design social media posters, birthday flyers, and story designs directly from your smartphone screen."
        }
      ]
    },
    resources: [
      {
        id: "p-r-1",
        title: "Malayalam & Creative Typography Pack",
        titleMl: "ടൈപ്പോഗ്രാഫി & ഫോണ്ടുകൾ",
        category: "Typography",
        icon: "type",
        url: "https://drive.google.com/drive/folders/1EL8nbCE97z4RrvgaT5gE_PLEs9wz7DTI",
        sourceType: "gdrive",
        badge: "Google Drive",
        fileTypes: "TTF / OTF / PSD Lettering",
        description: "Specialized collection of Malayalam calligraphic fonts, 3D text layer styles, and poster typography sets."
      },
      {
        id: "p-r-2",
        title: "Lightroom Aesthetic Presets & DNGs",
        titleMl: "ലൈറ്റ്‌റൂം പ്രീസെറ്റുകൾ (Presets)",
        category: "Presets",
        icon: "sliders",
        url: "https://unsplash.com/s/photos/lightroom-preset",
        sourceType: "web",
        badge: "Unsplash / Presets",
        fileTypes: "DNG / XMP / Photography",
        description: "Inspirational aesthetic high-resolution photographic palettes, color references, and Lightroom tone presets."
      },
      {
        id: "p-r-3",
        title: "PSDFiles - High Quality PSD Mockups & Templates",
        titleMl: "പിഎസ്ഡി ഫയലുകൾ (PSD Files)",
        category: "Templates",
        icon: "box",
        url: "https://psfiles.com/",
        sourceType: "web",
        badge: "PSDFiles Official",
        fileTypes: "Layered PSD / Smart Objects",
        description: "Free editable Photoshop PSD templates, flyer mockups, business cards, text effects, and social media kits."
      }
    ]
  }
};

// Helper function to query all items for global search
function getAllSearchableItems() {
  const items = [];

  // Helper to push items
  const addItems = (list, category, section, platform = "", tier = "") => {
    if (!Array.isArray(list)) return;
    list.forEach(item => {
      items.push({
        ...item,
        searchCategory: category,
        searchSection: section,
        searchPlatform: platform,
        searchTier: tier
      });
    });
  };

  // Video Apps
  addItems(EDITING_LOKAM_DATA.video.apps.mobile.free, "video", "apps", "mobile", "free");
  addItems(EDITING_LOKAM_DATA.video.apps.mobile.paid, "video", "apps", "mobile", "paid");
  addItems(EDITING_LOKAM_DATA.video.apps.mobile.paidForFree, "video", "apps", "mobile", "paid-for-free");

  addItems(EDITING_LOKAM_DATA.video.apps.pc.free, "video", "apps", "pc", "free");
  addItems(EDITING_LOKAM_DATA.video.apps.pc.paid, "video", "apps", "pc", "paid");
  addItems(EDITING_LOKAM_DATA.video.apps.pc.paidForFree, "video", "apps", "pc", "paid-for-free");

  // Video Tutorials
  addItems(EDITING_LOKAM_DATA.video.tutorials.pc, "video", "tutorials", "pc");
  addItems(EDITING_LOKAM_DATA.video.tutorials.mobile, "video", "tutorials", "mobile");

  // Video Resources
  addItems(EDITING_LOKAM_DATA.video.resources, "video", "resources", "cloud");

  // Photo Apps
  addItems(EDITING_LOKAM_DATA.photo.apps.mobile.all, "photo", "apps", "mobile", "all");
  addItems(EDITING_LOKAM_DATA.photo.apps.pc.all, "photo", "apps", "pc", "all");

  // Photo Tutorials
  addItems(EDITING_LOKAM_DATA.photo.tutorials.pc, "photo", "tutorials", "pc");
  addItems(EDITING_LOKAM_DATA.photo.tutorials.mobile, "photo", "tutorials", "mobile");

  // Photo Resources
  addItems(EDITING_LOKAM_DATA.photo.resources, "photo", "resources", "cloud");

  // Deduplicate by ID
  const seen = new Set();
  return items.filter(item => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

// Export for module systems or window global
if (typeof module !== "undefined" && module.exports) {
  module.exports = { EDITING_LOKAM_DATA, getAllSearchableItems };
}

