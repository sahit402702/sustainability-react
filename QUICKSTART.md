# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites Check

- ✅ Node.js 16+ installed
- ✅ npm or yarn installed
- ✅ Git installed
- ✅ Code editor (VS Code recommended)

### Installation Steps

```bash
# 1. Navigate to project directory
cd sustainability-react

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

## 📋 Project Overview

### Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **CSS Framework**: Bootstrap 5.3
- **CSS Preprocessor**: Sass (SCSS)
- **Routing**: React Router 6.28
- **Deployment**: Azure Static Web Apps

### Key Features Implemented

#### ✅ Responsive Design

- Mobile-first approach
- Breakpoints: xs, sm, md, lg, xl, xxl
- Tested on all device sizes
- Bootstrap grid system

#### ✅ Accessibility (WCAG 2.1 AA)

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation
- Focus visible indicators
- Skip to main content link
- Screen reader friendly
- Color contrast compliant

#### ✅ Component Architecture

- **Layout Components**:
  - Header with sticky navigation
  - Footer with multiple sections
- **Page Components**:
  - Landing page with hero section
  - FAQs with search and filtering
  - Sustainability module
  - Reporting module
  - Case studies showcase

#### ✅ SCSS Architecture

```
styles/
├── abstracts/    # Variables, mixins
├── base/         # Reset, typography
├── components/   # Button, card, form styles
├── layout/       # Header, footer styles
└── pages/        # Page-specific styles
```

#### ✅ Azure Deployment Ready

- GitHub Actions workflow configured
- Static Web Apps config included
- Automatic CI/CD pipeline
- Environment variables support

## 📁 Important Files

| File                                          | Purpose                          |
| --------------------------------------------- | -------------------------------- |
| `src/App.jsx`                                 | Main app component with routing  |
| `src/main.jsx`                                | Application entry point          |
| `src/styles/main.scss`                        | Main stylesheet entry            |
| `src/styles/abstracts/_variables.scss`        | Customize colors, fonts, spacing |
| `staticwebapp.config.json`                    | Azure SWA configuration          |
| `.github/workflows/azure-static-web-apps.yml` | CI/CD pipeline                   |
| `vite.config.js`                              | Vite build configuration         |

## 🎨 Quick Customization

### Change Brand Colors

Edit `src/styles/abstracts/_variables.scss`:

```scss
$primary: #YOUR_COLOR;
$secondary: #YOUR_COLOR;
```

### Update Site Name

1. Edit `src/components/layout/Header.jsx`:

```jsx
<Navbar.Brand>🌱 Your Brand Name</Navbar.Brand>
```

2. Edit `index.html`:

```html
<title>Your Site Name</title>
```

### Add New Page

1. Create `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`
3. Add nav link in `src/components/layout/Header.jsx`
4. Create styles in `src/styles/pages/_yourpage.scss`

## 📦 Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for outdated packages
npm outdated

# Update packages
npm update
```

## 🌐 Pages & Routes

| Page           | Route             | Description                          |
| -------------- | ----------------- | ------------------------------------ |
| Landing        | `/`               | Home page with hero and features     |
| Sustainability | `/sustainability` | Sustainability goals and initiatives |
| Reporting      | `/reporting`      | Sustainability reports and data      |
| Case Studies   | `/case-studies`   | Success stories and impact           |
| FAQs           | `/faqs`           | Frequently asked questions           |

## 🎯 Next Steps

### Immediate Actions

1. **Customize Content**

   - [ ] Update text in all pages
   - [ ] Add your own images
   - [ ] Update company information

2. **Branding**

   - [ ] Change colors in `_variables.scss`
   - [ ] Add your logo
   - [ ] Update favicon

3. **Deployment**
   - [ ] Push to GitHub
   - [ ] Deploy to Azure (see DEPLOYMENT.md)
   - [ ] Configure custom domain

### Enhancement Ideas

1. **Add Features**

   - [ ] Contact form
   - [ ] Newsletter signup
   - [ ] Search functionality
   - [ ] Blog section
   - [ ] User authentication

2. **Integrations**

   - [ ] Google Analytics
   - [ ] Social media feeds
   - [ ] Email marketing (Mailchimp)
   - [ ] CMS integration (Contentful, Strapi)

3. **Performance**
   - [ ] Add lazy loading for images
   - [ ] Implement code splitting
   - [ ] Add service worker (PWA)
   - [ ] Optimize bundle size

## 🐛 Troubleshooting

### Development Server Won't Start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Styles Not Applying

1. Check SCSS syntax errors
2. Verify import order in `main.scss`
3. Clear browser cache
4. Check browser console for errors

### Build Fails

```bash
# Check Node version (should be 16+)
node --version

# Try clean build
npm run build -- --force
```

### Module Not Found Errors

```bash
# Install missing dependencies
npm install

# Or install specific package
npm install package-name
```

## 📚 Documentation

- **README.md** - Project overview and setup
- **DEPLOYMENT.md** - Azure deployment guide
- **CUSTOMIZATION.md** - Detailed customization guide
- **This file** - Quick start reference

## 🔗 Useful Resources

### Documentation

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Bootstrap Docs](https://getbootstrap.com)
- [React Router Docs](https://reactrouter.com)
- [Sass Docs](https://sass-lang.com)

### Tools

- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Vite Plugin for VS Code](https://marketplace.visualstudio.com/items?itemName=antfu.vite)
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)

### Learning

- [React Tutorial](https://react.dev/learn)
- [Vite Guide](https://vitejs.dev/guide/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Accessibility Checklist](https://www.a11yproject.com/checklist/)

## ✅ Pre-Launch Checklist

Before deploying to production:

### Content

- [ ] All placeholder text replaced
- [ ] Images optimized and added
- [ ] Links tested and working
- [ ] Contact information updated
- [ ] Legal pages added (Privacy, Terms)

### Technical

- [ ] Build succeeds without errors
- [ ] No console errors
- [ ] All routes work correctly
- [ ] Forms validated
- [ ] 404 page configured

### Performance

- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] Bundle size checked
- [ ] Load time < 3 seconds

### Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] Alt text on images
- [ ] ARIA labels present

### SEO

- [ ] Meta tags updated
- [ ] Sitemap created
- [ ] robots.txt configured
- [ ] Open Graph tags added
- [ ] Structured data added

### Security

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Dependencies updated
- [ ] No exposed secrets

## 🎉 You're Ready!

Your Sustainability Portal is now set up and ready for customization.

**Development server running at:** http://localhost:3000

**Next steps:**

1. Explore each page in the browser
2. Customize colors and branding
3. Add your content
4. Deploy to Azure

Happy coding! 🚀
