# Sustainability React Application

A modern, accessible React web application built with **TypeScript**, mobile-first responsive design, featuring sustainability reporting, case studies, and environmental impact tracking. All content is organized in JSON files for easy updates without touching code.

## 🌟 Features

- **TypeScript** - Full type safety with interfaces and strict checking
- **JSON Content Management** - All content organized in category-based JSON files
- **Reusable Components** - Component library with 8+ reusable TypeScript components
- **Mobile-First Responsive Design** - Built with Bootstrap 5 for seamless experience across all devices
- **Accessibility Compliant** - WCAG 2.1 AA compliant with semantic HTML and ARIA attributes
- **Component-Based SCSS** - Modular, maintainable styles with clear separation of concerns
- **React Router Integration** - Client-side routing for smooth navigation
- **SEO Optimized** - Dynamic meta tags, structured data, sitemap, and robots.txt
- **Azure Static Web Apps Ready** - Configured for easy deployment to Azure

## 🚀 Tech Stack

- **React 18.3** - Modern React with hooks
- **TypeScript 5.x** - Static type checking
- **Vite 5.4** - Fast build tool and dev server
- **Bootstrap 5.3** - Mobile-first CSS framework
- **React Router 6.28** - Client-side routing
- **React Helmet Async** - Dynamic SEO meta tags
- **Sass** - Advanced CSS preprocessing
- **Azure Static Web Apps** - Cloud hosting platform

## 📁 Project Structure

```
sustainability-react/
├── public/              # Static assets
│   ├── robots.txt       # SEO crawler instructions
│   └── sitemap.xml      # Site structure for search engines
├── src/
│   ├── components/      # TypeScript components
│   │   ├── common/      # Reusable components
│   │   │   ├── PageHeader.tsx
│   │   │   ├── FilterButtons.tsx
│   │   │   ├── AccordionList.tsx
│   │   │   ├── ReportCard.tsx
│   │   │   ├── CaseStudyCard.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── GoalCard.tsx
│   │   │   └── StatCard.tsx
│   │   ├── layout/      # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── SEO.tsx      # SEO component with structured data
│   ├── content/         # JSON content files (EDIT THESE!)
│   │   ├── buttons.json      # Button labels & navigation
│   │   ├── headings.json     # Page titles & subtitles
│   │   ├── links.json        # URLs & navigation routes
│   │   ├── faqs.json         # FAQ questions & answers
│   │   ├── reports.json      # Reports data & stats
│   │   ├── caseStudies.json  # Case studies
│   │   ├── goals.json        # Sustainability goals
│   │   └── initiatives.json  # Key initiatives
│   ├── pages/           # TypeScript page components
│   │   ├── Landing.tsx
│   │   ├── FAQs.tsx
│   │   ├── Sustainability.tsx
│   │   ├── Reporting.tsx
│   │   └── CaseStudy.tsx
│   ├── styles/          # SCSS stylesheets
│   │   ├── abstracts/   # Variables, mixins
│   │   ├── base/        # Reset, typography
│   │   ├── components/  # Component styles
│   │   ├── layout/      # Layout styles
│   │   ├── pages/       # Page-specific styles
│   │   └── main.scss    # Main entry point
│   ├── App.tsx          # Root component (TypeScript)
│   └── main.tsx         # Application entry point (TypeScript)
├── .github/
│   └── workflows/       # GitHub Actions for CI/CD
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration (TypeScript)
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
└── staticwebapp.config.json  # Azure SWA configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js 18+** (required for Vite)
- npm or yarn

⚠️ **Important**: Node.js v18 or higher is required. If you're using an older version, please upgrade:

```bash
# Using nvm (recommended)
nvm install 18
nvm use 18

# Or download from nodejs.org
# https://nodejs.org/en/download/
```

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sustainability-react
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 Updating Content

All content is stored in JSON files in `/src/content/`. Edit these files to update content without touching component code:

### Content Files

- **`buttons.json`** - Button labels, navigation text, CTA text
- **`headings.json`** - Page titles, subtitles, section headings for all pages
- **`links.json`** - Social media URLs, navigation routes, footer links
- **`faqs.json`** - FAQ categories and question/answer pairs
- **`reports.json`** - Sustainability reports, statistics, filter options
- **`caseStudies.json`** - Case study details with categories and filters
- **`goals.json`** - Sustainability goals with icons and targets
- **`initiatives.json`** - Key initiatives with descriptions and impact

### Example: Updating a Button Label

Edit `/src/content/buttons.json`:

```json
{
  "cta": {
    "primary": "Get Started", // Change this text
    "secondary": "Learn More"
  }
}
```

## 🧩 Reusable Components

The application includes TypeScript components with full type safety:

### Common Components (`/src/components/common/`)

- **PageHeader** - Reusable page title/subtitle
- **FilterButtons** - Generic filter button group
- **AccordionList** - FAQ accordion component
- **ReportCard** - Report display card
- **CaseStudyCard** - Case study display card
- **FeatureCard** - Feature highlight card
- **GoalCard** - Sustainability goal card
- **StatCard** - Statistics display card

### Usage Example

```typescript
import PageHeader from "@/components/common/PageHeader";
import headings from "@/content/headings.json";

<PageHeader
  title={headings.landing.hero.title}
  subtitle={headings.landing.hero.subtitle}
/>;
```

## 🔍 SEO Features

- **Dynamic Meta Tags** - Page-specific SEO with react-helmet-async
- **Structured Data** - JSON-LD for rich search results
- **Sitemap** - XML sitemap at `/public/sitemap.xml`
- **Robots.txt** - Crawler instructions at `/public/robots.txt`
- **Open Graph** - Social media preview tags
- **Twitter Cards** - Twitter-specific meta tags

## 🎨 Styling Architecture

The application uses a modular SCSS architecture with Bootstrap 5 customization:

### Abstracts

- `_variables.scss` - Global variables, colors ($primary: #2C5F2D, $secondary: #97BC62), spacing
- `_mixins.scss` - Reusable mixins for common patterns

### Base

- `_reset.scss` - CSS reset and base styles
- `_typography.scss` - Typography system

### Components

- Component-specific styles (buttons, cards, forms)

### Layout

- `_header.scss` - Header/navigation styles
- `_footer.scss` - Footer styles

### Pages

- Page-specific styles for each route

## 💻 TypeScript Features

- **Strict Type Checking** - Enabled for maximum type safety
- **Interfaces** - All components have typed props
- **Path Aliases** - Clean imports with `@/` prefix
- **Type Definitions** - Full IntelliSense support

### Path Aliases

```typescript
import SEO from "@/components/SEO"; // Instead of '../../components/SEO'
import headings from "@/content/headings.json"; // Instead of '../../content/headings.json'
```

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Skip to main content link
- Alt text for images
- Color contrast compliance
- Screen reader friendly

## 📱 Mobile-First Approach

Breakpoints:

- xs: 0px (base styles)
- sm: 576px
- md: 768px
- lg: 992px
- xl: 1200px
- xxl: 1400px

## ☁️ Azure Deployment

### Automatic Deployment

The project is configured with GitHub Actions for automatic deployment to Azure Static Web Apps:

1. Push code to `main` branch
2. GitHub Actions automatically builds and deploys
3. Access your app at the Azure-provided URL

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to Azure Static Web Apps

## 🌍 Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Team Name

## 🙏 Acknowledgments

- Bootstrap team for the excellent CSS framework
- React team for the amazing library
- Vite team for the blazing-fast build tool
