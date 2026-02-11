# 🚀 GitHub Pages Deployment Guide

## Prerequisites
- GitHub account (free at github.com)
- Git installed on your computer
- Your portfolio files ready

---

## 📋 Step-by-Step Deployment

### **STEP 1: Prepare Your Files**

1. **Add your profile photo:**
   - Copy your professional photo to `assets/images/`
   - Rename it to `profile.jpg`

2. **Add hackathon award photos (optional but recommended):**
   - Follow instructions in `assets/images/README.md`

3. **Double-check everything:**
   - Open `index.html` in your browser
   - Make sure everything looks good
   - Test all links and buttons

---

### **STEP 2: Initialize Git Repository**

Open PowerShell/Terminal in your project folder and run:

```powershell
# Navigate to your project
cd "d:\Portfolio Website\Portfolio_Project"

# Initialize Git
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: My portfolio website"
```

---

### **STEP 3: Create GitHub Repository**

**Two Options:**

#### **Option A: Custom Domain URL** (e.g., `knocktern.github.io/portfolio`)
1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you like)
3. Make it **Public**
4. **Do NOT** initialize with README (we already have one)
5. Click **Create repository**

#### **Option B: Clean URL** (e.g., `knocktern.github.io`) ⭐ **RECOMMENDED**
1. Go to https://github.com/new
2. Repository name: `knocktern.github.io` (replace `knocktern` with YOUR GitHub username)
3. Make it **Public**
4. **Do NOT** initialize with README
5. Click **Create repository**

---

### **STEP 4: Push Your Code to GitHub**

After creating the repository, run these commands:

```powershell
# Add remote repository (use YOUR GitHub username)
git remote add origin https://github.com/Knocktern/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If prompted:**
- Enter your GitHub username
- Enter your GitHub password (or Personal Access Token)

---

### **STEP 5: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down and click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**
6. **Wait 2-3 minutes** for deployment

---

### **STEP 6: Visit Your Live Website! 🎉**

Your site will be live at:
- **Option A**: `https://knocktern.github.io/portfolio/`
- **Option B**: `https://knocktern.github.io/`

---

## 🔄 How to Update Your Portfolio Later

Whenever you make changes:

```powershell
# Save your changes
git add .
git commit -m "Update: describe what you changed"
git push

# Your website will auto-update in 1-2 minutes!
```

---

## 🐛 Troubleshooting

### "Images not showing after deployment"
- Check that image filenames match exactly (case-sensitive)
- Verify images are in the `assets/images/` folder
- Wait a few minutes and hard refresh: `Ctrl + Shift + R`

### "Projects not loading"
- Check `data/projects.json` for syntax errors
- Use https://jsonlint.com/ to validate
- Check browser console (F12) for errors

### "GitHub Pages not activating"
- Make sure repository is **Public**
- Verify `index.html` is in the root folder
- Wait up to 5 minutes after enabling Pages

### "Authentication failed when pushing"
If using password doesn't work:
1. Go to GitHub → Settings → Developer settings
2. Create a Personal Access Token (PAT)
3. Use the token as your password

---

## ✅ Post-Deployment Checklist

- [ ] All sections display correctly
- [ ] Profile photo visible
- [ ] All project cards showing
- [ ] CV download works
- [ ] Social links work (GitHub, LinkedIn, Email)
- [ ] Mobile responsive (test on phone)
- [ ] Animations smooth
- [ ] No console errors (F12)

---

## 🌟 Share Your Portfolio!

Add your portfolio URL to:
- ✅ LinkedIn (in your profile summary and featured section)
- ✅ GitHub profile README
- ✅ Resume/CV
- ✅ Email signature
- ✅ Social media bios

---

## 📞 Need Help?

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Search the error on Stack Overflow
3. Check your repository's Actions tab for deployment logs

---

**Good luck! Your portfolio will be live in minutes.** 🚀✨
