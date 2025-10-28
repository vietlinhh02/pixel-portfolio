# 🎮 Pixel Portfolio 2D

A retro-inspired, pixel-perfect portfolio website for developers and creatives.

## 🌟 Features

- **Pixel-Perfect Design** — Crisp, blocky aesthetics with retro 8-bit vibes
- **Fully Responsive** — Works beautifully on desktop, tablet, and mobile
- **No Dependencies** — Pure HTML, CSS, and vanilla JavaScript
- **Dark Theme** — Easy on the eyes with a cyberpunk color palette
- **Project Showcase** — Modal popups to display detailed project information
- **Smooth Animations** — Pixel-friendly fade-ins, floats, and hover effects
- **Keyboard Navigation** — Press number keys (1-4) to jump between sections
- **Contact Form** — Simple form for visitor inquiries
- **Social Links** — GitHub, Twitter, LinkedIn, Email

## 📂 Project Structure

```
pixel-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling (pixel-perfect CSS)
├── js/
│   └── script.js       # Interactive features & animations
├── assets/
│   └── images/         # Your pixel art & screenshots here
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Direct File Open
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Done! No build process needed

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### 1. **Update Your Information**
Edit `index.html` and replace:
- "DEV.PIXEL" with your name
- "Creative Developer | Pixel Artist" with your tagline
- "12", "15+", "5" stats with your actual numbers
- Social links with your profiles

### 2. **Customize Colors**
Edit `css/style.css` and modify the `:root` variables:
```css
:root {
    --primary: #0b3d91;      /* Dark blue */
    --secondary: #08a4de;    /* Cyan */
    --accent: #ffd700;       /* Gold */
    --dark: #1a1a1a;         /* Black */
    --light: #f0f0f0;        /* Off-white */
    --danger: #e74c3c;       /* Red */
    --success: #27ae60;      /* Green */
}
```

### 3. **Add Your Projects**
Edit `js/script.js` and update the `projectsData` array:
```javascript
{
    title: "Your Project Name",
    icon: "🎮",
    description: "Short description of your project",
    fullDesc: `<p>Detailed description with HTML...</p>`,
    tags: ["Tech1", "Tech2"]
}
```

### 4. **Add Pixel Art Assets**
1. Create your pixel art in Aseprite, Piskel, or similar tools
2. Export as PNG files
3. Place them in `assets/images/`
4. Update the project cards with image backgrounds

### 5. **Change Font**
Current font is "Press Start 2P" (pixel-style). You can:
- Keep it as-is for maximum retro effect
- Swap for another pixel font: Pixellari, 8-bit Operator, Courier New
- Edit in `css/style.css`: `font-family` property

## 🎮 Features Explained

### Navigation
- Click nav buttons to switch sections
- Or press **1**, **2**, **3**, **4** on keyboard
- Smooth animations between sections

### Project Cards
- Hover to see elevation effect
- Click "[ DETAIL ]" button to open modal
- Modal shows full project description, tech stack, and links

### Contact Form
- Submit your message (currently shows alert; wire to backend for real emails)
- Built-in validation

### Responsive Design
- Auto-adjusts for mobile (below 768px)
- Font sizes scale appropriately
- Grid becomes single-column on small screens

## 📱 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `1` | Jump to Home |
| `2` | Jump to Projects |
| `3` | Jump to About |
| `4` | Jump to Contact |
| `Esc` | Close project modal |

## 🌐 Deployment

### Option A: GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/pixel-portfolio.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repo settings.

### Option B: Netlify (Free)
1. Drag & drop the folder into Netlify
2. Or connect your GitHub repo
3. Auto-deploys on every push

### Option C: Vercel (Free)
1. `npm i -g vercel` (or use web interface)
2. `vercel` in the project folder
3. Follow prompts

### Option D: Traditional Hosting
1. Upload all files to your web host (GoDaddy, Bluehost, etc.)
2. Ensure `.htaccess` allows directory access if needed

## ✨ Tips & Tricks

1. **Add Parallax Background**: Update `index.html` background
   ```css
   background-attachment: fixed;
   ```

2. **Add Sound Effects**: Include audio files and trigger with JavaScript
   ```javascript
   new Audio('sound.wav').play();
   ```

3. **Add Animations**: Extend CSS with custom keyframes
   ```css
   @keyframes myPixelBounce { /* ... */ }
   ```

4. **Add More Projects**: Copy a project card and update data

5. **Dark/Light Mode Toggle**: Add a button in header and toggle CSS variables

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Images look blurry | Ensure `image-rendering: pixelated` is in CSS |
| Font not loading | Check Google Fonts connection or use system fallback |
| Mobile layout broken | Check viewport meta tag in HTML |
| Form not sending | Wire up backend or use Formspree/Netlify Forms |

## 📝 License

Feel free to use this template! No attribution required, but appreciated.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to fork and improve!

---

**Made with ❤️ and pixels** 🎮

Happy coding! If you use this portfolio, tag me on social media — I'd love to see your creative take on it!
