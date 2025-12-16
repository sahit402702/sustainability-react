# Project Structure & Customization Guide

## 📁 Complete Project Structure

````
sustainability-react/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml    # CI/CD pipeline
├── .vscode/
│   ├── extensions.json                   # Recommended VS Code extensions
│   └── settings.json                     # VS Code workspace settings
├── public/
│   └── vite.svg                          # Favicon
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Header.jsx                # Navigation header
│   │       └── Footer.jsx                # Site footer
│   ├── pages/
│   │   ├── Landing.jsx                   # Home page
│   │   ├── FAQs.jsx                      # FAQ page
│   │   ├── Sustainability.jsx            # Sustainability module
│   │   ├── Reporting.jsx                 # Reporting module
│   │   └── CaseStudy.jsx                 # Case studies page
│   ├── styles/
│   │   ├── abstracts/
│   │   │   ├── _variables.scss           # SCSS variables
│   │   │   └── _mixins.scss              # Reusable mixins
│   │   ├── base/
│   │   │   ├── _reset.scss               # CSS reset
│   │   │   └── _typography.scss          # Typography styles
│   │   ├── components/
│   │   │   ├── _buttons.scss             # Button styles
│   │   │   ├── _cards.scss               # Card styles
│   │   │   └── _forms.scss               # Form styles
│   │   ├── layout/
│   │   │   ├── _header.scss              # Header styles
│   │   │   └── _footer.scss              # Footer styles
│   │   ├── pages/
│   │   │   ├── _landing.scss             # Landing page styles
│   │   │   ├── _faqs.scss                # FAQ page styles
│   │   │   ├── _sustainability.scss      # Sustainability styles
│   │   │   ├── _reporting.scss           # Reporting styles
│   │   │   └── _casestudy.scss           # Case study styles
│   │   └── main.scss                     # Main SCSS entry
│   ├── App.jsx                            # Root component
│   └── main.jsx                           # App entry point
├── .gitignore                             # Git ignore rules
├── DEPLOYMENT.md                          # Deployment guide
├── README.md                              # Project documentation
├── index.html                             # HTML template
├── package.json                           # Dependencies & scripts
├── staticwebapp.config.json               # Azure SWA config
└── vite.config.js                         # Vite configuration

## 🎨 How to Customize Styles

### Colors & Branding

Edit `src/styles/abstracts/_variables.scss`:

```scss
// Change primary brand color
$primary: #2C5F2D;        // Your brand green
$secondary: #97BC62;       // Your accent color

// Update other colors
$success: #28a745;
$info: #17a2b8;
$warning: #ffc107;
$danger: #dc3545;
````

### Typography

Edit `src/styles/abstracts/_variables.scss`:

```scss
// Change fonts
$font-family-sans-serif: "Your Font", -apple-system, BlinkMacSystemFont, sans-serif;

// Adjust font sizes
$font-size-base: 1rem;
$h1-font-size: 2.5rem;
```

### Header Customization

Edit `src/components/layout/Header.jsx` and `src/styles/layout/_header.scss`:

**Change logo:**

```jsx
<Navbar.Brand as={Link} to="/">
  <img src="/your-logo.png" alt="Your Brand" />
</Navbar.Brand>
```

**Add/remove navigation items:**

```jsx
<Nav.Link as={NavLink} to="/new-page">
  New Page
</Nav.Link>
```

**Customize header styles:**

```scss
// In _header.scss
.header {
  background-color: white; // Change background
  box-shadow: $box-shadow-sm;

  .navbar-brand {
    color: $primary; // Change logo color
  }
}
```

### Footer Customization

Edit `src/components/layout/Footer.jsx` and `src/styles/layout/_footer.scss`:

**Update footer content:**

```jsx
<span className="footer-brand">Your Brand Name</span>
<p className="footer-description">
  Your custom description here
</p>
```

**Change social media links:**

```jsx
<a href="https://twitter.com/yourbrand">{/* Your icon */}</a>
```

**Modify footer colors:**

```scss
$footer-bg: $dark;
$footer-color: $light;
$footer-link-color: $secondary;
```

### Button Styles

Edit `src/styles/components/_buttons.scss`:

```scss
.btn-primary {
  background-color: $primary;
  border-radius: 8px; // Adjust border radius
  font-weight: 600; // Change font weight
  padding: 1rem 2rem; // Adjust padding
}
```

### Card Styles

Edit `src/styles/components/_cards.scss`:

```scss
.card {
  border-radius: 12px; // More rounded corners
  box-shadow: $box-shadow; // Stronger shadow

  &:hover {
    transform: translateY(-8px); // More dramatic hover
  }
}
```

## 📱 Responsive Breakpoints

Customize in `src/styles/abstracts/_variables.scss`:

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
);
```

Use in your SCSS:

```scss
// Mobile first
.my-component {
  padding: 1rem;

  @include respond-to(md) {
    padding: 2rem;
  }

  @include respond-to(lg) {
    padding: 3rem;
  }
}
```

## 🔧 Adding New Pages

### Step 1: Create Page Component

Create `src/pages/NewPage.jsx`:

```jsx
import { useEffect } from "react";
import { Container } from "react-bootstrap";

function NewPage() {
  useEffect(() => {
    document.title = "New Page - Sustainability Portal";
  }, []);

  return (
    <div className="new-page">
      <Container>
        <h1>New Page</h1>
        <p>Your content here</p>
      </Container>
    </div>
  );
}

export default NewPage;
```

### Step 2: Add Route

Edit `src/App.jsx`:

```jsx
import NewPage from "./pages/NewPage";

// Add in Routes
<Route path="/new-page" element={<NewPage />} />;
```

### Step 3: Add Navigation Link

Edit `src/components/layout/Header.jsx`:

```jsx
<Nav.Link as={NavLink} to="/new-page">
  New Page
</Nav.Link>
```

### Step 4: Create Page Styles

Create `src/styles/pages/_newpage.scss`:

```scss
.new-page {
  padding: 4rem 0;

  h1 {
    margin-bottom: 2rem;
  }
}
```

### Step 5: Import Styles

Edit `src/styles/main.scss`:

```scss
@import "./pages/newpage";
```

## 🎯 Adding New Components

### Step 1: Create Component

Create `src/components/MyComponent.jsx`:

```jsx
import "./MyComponent.scss";

function MyComponent({ title, children }) {
  return (
    <div className="my-component">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default MyComponent;
```

### Step 2: Create Component Styles

Create `src/styles/components/_mycomponent.scss`:

```scss
.my-component {
  padding: 1rem;
  background: $light;
  border-radius: $border-radius;

  h3 {
    margin-bottom: 1rem;
    color: $primary;
  }
}
```

### Step 3: Import Styles

Add to `src/styles/main.scss`:

```scss
@import "./components/mycomponent";
```

### Step 4: Use Component

```jsx
import MyComponent from "./components/MyComponent";

<MyComponent title="Hello">
  <p>Component content</p>
</MyComponent>;
```

## 🌐 Environment Variables

### Create .env File

Create `.env` in root:

```env
VITE_API_URL=https://api.example.com
VITE_SITE_NAME=Sustainability Portal
VITE_ANALYTICS_ID=UA-123456789
```

### Use in Code

```jsx
const apiUrl = import.meta.env.VITE_API_URL;
const siteName = import.meta.env.VITE_SITE_NAME;
```

### Different Environments

- `.env` - All environments
- `.env.local` - Local overrides (gitignored)
- `.env.development` - Development only
- `.env.production` - Production only

## 📊 Adding Analytics

### Google Analytics

1. Install package:

```bash
npm install react-ga4
```

2. Initialize in `src/main.jsx`:

```jsx
import ReactGA from "react-ga4";

ReactGA.initialize("G-XXXXXXXXXX");

// Track page views
ReactGA.send("pageview");
```

### Track Events

```jsx
import ReactGA from "react-ga4";

const handleClick = () => {
  ReactGA.event({
    category: "User",
    action: "Clicked Button",
  });
};
```

## 🔍 SEO Optimization

### Update Meta Tags

Edit `index.html`:

```html
<head>
  <meta name="description" content="Your description" />
  <meta name="keywords" content="sustainability, environment" />
  <meta property="og:title" content="Sustainability Portal" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

### Dynamic Meta Tags

Install react-helmet:

```bash
npm install react-helmet-async
```

Use in pages:

```jsx
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Page Title - Sustainability Portal</title>
  <meta name="description" content="Page description" />
</Helmet>;
```

## 🧪 Testing

### Install Testing Libraries

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

### Create Test

Create `src/components/__tests__/Header.test.jsx`:

```jsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../layout/Header";

test("renders header with brand", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const brand = screen.getByText(/Sustainability Portal/i);
  expect(brand).toBeInTheDocument();
});
```

### Run Tests

```bash
npm test
```

## 🚀 Performance Tips

1. **Lazy Loading Pages**

```jsx
import { lazy, Suspense } from 'react'

const Landing = lazy(() => import('./pages/Landing'))

<Suspense fallback={<div>Loading...</div>}>
  <Landing />
</Suspense>
```

2. **Image Optimization**

- Use WebP format
- Implement lazy loading
- Use responsive images

3. **Code Splitting**

- Already configured with Vite
- Each route is automatically split

## 📚 Further Customization

### Add New SCSS Mixins

Edit `src/styles/abstracts/_mixins.scss`:

```scss
@mixin custom-gradient($color1, $color2) {
  background: linear-gradient(135deg, $color1 0%, $color2 100%);
}

// Use it
.hero {
  @include custom-gradient($primary, $secondary);
}
```

### Custom Bootstrap Theme

Override Bootstrap variables before importing:

```scss
// In _variables.scss
$primary: #your-color;
$secondary: #your-color;
$font-family-base: "Your Font";

// Then import Bootstrap
@import "bootstrap/scss/bootstrap";
```

## 🤝 Contributing

When adding features:

1. Follow existing code structure
2. Use semantic HTML
3. Maintain accessibility (ARIA labels, keyboard navigation)
4. Test responsiveness
5. Update documentation

## 📞 Need Help?

- Check README.md for setup instructions
- See DEPLOYMENT.md for Azure deployment
- Review this file for customization examples
- Consult Bootstrap documentation for components
- Check React Router docs for routing
