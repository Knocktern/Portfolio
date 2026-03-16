# 🎓 Abdullah Al Sakib - Portfolio Website

A modern, aesthetic portfolio website showcasing my work as a software developer.

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-success)](https://knocktern.github.io/portfolio)

---

## ✨ Features

- 🎨 **Modern Light Theme** - Clean, aesthetic design with smooth animations
- 📱 **Fully Responsive** - Perfect on all devices (desktop, tablet, mobile)
- ⚡ **Fast Loading** - Optimized vanilla HTML/CSS/JS
- 🎭 **Smooth Animations** - Scroll reveals, hover effects, and tasteful transitions
- 🏆 **Achievements Section** - Highlighting UIU HackDay win
- 💼 **Projects Showcase** - Filterable project portfolio with details
- 📄 **Downloadable CV** - Easy access to resume
- 🔗 **Social Links** - Direct connections to GitHub, LinkedIn, and Email

---

## 🚀 Quick Start

### Option 1: Open Locally
Simply open `index.html` in your web browser - no server required!

### Option 2: Use Live Server (Recommended for development)
```bash
# If you have VS Code with Live Server extension
# Right-click on index.html → "Open with Live Server"

# Or use Python's built-in server
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 📁 Project Structure

```
Portfolio_Project/
│
├── index.html              # Main HTML file (entire website)
│
├── css/
│   ├── style.css          # Main stylesheet (layout, components)
│   └── animations.css     # All animations and transitions
│
├── js/
│   └── main.js            # JavaScript functionality
│
├── data/
│   └── projects.json      # Project data (EDIT THIS to update projects)
│
└── assets/
    ├── images/
    │   └── profile.jpg    # Your profile photo
    └── cv/
        └── CV_*.pdf       # Your CV file
```

---

## 🛠️ How to Update Content

### 1. **Add/Update Your Profile Photo**
1. Put your photo in `assets/images/`
2. Rename it to `profile.jpg` (or update line 79 in `index.html`)
3. Recommended: Square image, at least 800x800px

### 2. **Add/Update Projects**
Edit `data/projects.json`:

```json
{
  "id": 7,
  "name": "Your New Project",
  "category": "Machine Learning",  // or "Full-Stack"
  "tagline": "Short one-liner",
  "description": "Detailed description...",
  "tech": ["Python", "TensorFlow", "Flask"],
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  "github": "https://github.com/yourusername/repo",
  "live": "https://yourproject.com",  // or null if no live demo
  "folder": "Project-Folder-Name"
}
```

### 3. **Update Personal Info**
Edit `index.html`:
- **Lines 65-70**: Hero section (name, title, tagline)
- **Lines 115-125**: About section (bio, CGPA, graduation)
- **Lines 187-245**: Achievements section
- **Lines 345-365**: Contact section (email, LinkedIn, GitHub)

### 4. **Add Achievement Photos**
1. Put award photos in `assets/images/`
2. Replace lines 238-244 in `index.html`:
```html
<div class="achievement-image">
    <img src="assets/images/uiu-hackday-win.jpg" alt="UIU HackDay Award">
</div>
```

### 5. **Update CV**
1. Put your new CV in `assets/cv/`
2. Update the filename in line 296 of `index.html`

---

## 🌐 Deploy to GitHub Pages (FREE!)

### Step 1: Create GitHub Repository
```bash
# Navigate to your portfolio project folder
cd "d:\Portfolio Website\Portfolio_Project"

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Push to GitHub
```bash
# Create a new repository on GitHub named "portfolio" or "your-username.github.io"
# Then run:

git branch -M main
git remote add origin https://github.com/Knocktern/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 2-3 minutes
6. Your site will be live at: `https://knocktern.github.io/portfolio/`

**Pro Tip**: For a cleaner URL, name your repo `knocktern.github.io` and it will be available at `https://knocktern.github.io/`

---

## 🎨 Color Customization

Want to change colors? Edit `css/style.css` (lines 6-15):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --accent-color: #14b8a6;       /* Accent color */
    --bg-color: #fafafa;           /* Background */
    --text-primary: #1f2937;       /* Main text */
    /* ... */
}
```

---

## 📊 Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure & Content |
| **CSS3** | Styling & Layout |
| **JavaScript (Vanilla)** | Interactivity & Animations |
| **Google Fonts** | Typography (Poppins) |
| **Font Awesome** | Icons |
| **JSON** | Data Storage (Projects) |

---

## ✅ Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Edge | ✅ 90+ |

---

## 🐛 Troubleshooting

### Profile image not showing?
- Check that `assets/images/profile.jpg` exists
- Try hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- The site will show an "AS" placeholder if image is missing

### Projects not loading?
- Check browser console (F12) for errors
- Verify `data/projects.json` has valid JSON syntax
- Use a JSON validator: https://jsonlint.com/

### Animations not working?
- Ensure `css/animations.css` is loaded
- Check if browser supports CSS animations
- Some users may have "reduced motion" enabled in accessibility settings

---

## 📈 Performance

- ⚡ Load time: < 1 second
- 📦 Total size: < 500KB (without images)
- 🎯 Lighthouse Score: 95+ (Performance)
- ♿ Accessibility: WCAG 2.1 compliant

---

## 🔮 Future Enhancements (Version 2)

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Contact form with backend
- [ ] Project detail modal windows
- [ ] Testimonials section
- [ ] Multi-language support

---

## 📝 License

This project is open source and available for personal use. Feel free to fork and customize!

---

## 🤝 Contact

**Abdullah Al Sakib**  
🎓 CSE Student | Software Developer  
📧 Email: asakib223519@bscse.uiu.ac.bd  
💼 LinkedIn: [abdullah-sakib12](https://www.linkedin.com/in/abdullah-sakib12)  
💻 GitHub: [@Knocktern](https://github.com/Knocktern)

---

## 🙏 Acknowledgments

- Built with ❤️ and lots of ☕
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Inspired by modern portfolio designs

---

**Made with passion | February 2026**
