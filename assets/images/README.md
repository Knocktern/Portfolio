# 📸 HOW TO ADD YOUR PROFILE PHOTO

## Quick Instructions:

1. **Prepare Your Photo:**
   - Choose a professional, clear photo
   - Recommended: Square format (800x800px or larger)
   - Formats accepted: JPG, JPEG, PNG

2. **Add the Photo:**
   - Copy/Move your photo to this folder: `assets/images/`
   - Rename it to: `profile.jpg`
   
3. **That's it!** The website will automatically display your photo in the hero section.

## Alternative: Use a Different Filename
If you want to keep your original filename:
1. Put your photo in `assets/images/`
2. Open `index.html`
3. Find line 79: `<img src="assets/images/profile.jpg" ...>`
4. Change `profile.jpg` to your filename

---

## 🏆 HOW TO ADD ACHIEVEMENT AWARD PHOTOS

1. **Add Photos:**
   - Copy your award/certificate photos to `assets/images/`
   - For this template, the Achievements section currently references:
     - `Hackathon.jpg`
       - `ProjectShow.png`
       - `poster.png`
   - You can use other filenames, but then update the `src` in `index.html`.

2. **Update HTML:**
   - Open `index.html`
   - Find the Achievements section (`<section id="achievements" ...>`)
   - Update the image `src`, for example:
   
```html
<div class="achievement-image">
    <img src="assets/images/Hackathon.jpg" 
         alt="UIU HackDay Winning Moment"
         style="width: 100%; border-radius: 12px; margin-top: 20px;">
</div>

<!-- Project Show example -->
<div class="achievement-image">
   <img src="assets/images/ProjectShow.png" 
       alt="UIU CSE Project Show — HireMe award photo"
       style="width: 100%; border-radius: 12px; margin-top: 20px;">
</div>

<!-- FYDP-1 example (poster + group photo) -->
<div class="achievement-gallery" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 20px;">
   <img src="assets/images/poster.png" alt="FYDP-1 winner list poster" style="width: 100%; border-radius: 8px;">
   <img src="assets/images/ProjectShow.png" alt="Award ceremony group photo" style="width: 100%; border-radius: 8px;">
</div>
```

3. **Multiple Photos (Optional):**
   Create a simple gallery:
```html
<div class="achievement-gallery" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 20px;">
    <img src="assets/images/award1.jpg" alt="Award Photo 1" style="width: 100%; border-radius: 8px;">
    <img src="assets/images/award2.jpg" alt="Award Photo 2" style="width: 100%; border-radius: 8px;">
    <img src="assets/images/award3.jpg" alt="Award Photo 3" style="width: 100%; border-radius: 8px;">
    <img src="assets/images/award4.jpg" alt="Award Photo 4" style="width: 100%; border-radius: 8px;">
</div>
```

---

**All set!** Your photos will appear on your portfolio website. 📸✨
