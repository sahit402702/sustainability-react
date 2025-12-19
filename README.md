# Sustainability Portal

A modern, accessible React web application for SME sustainability compliance and reporting for UK public sector contracts. Built with TypeScript, featuring mobile-first responsive design with all content managed through JSON files.

## 🌟 Features

- **TypeScript** - Full type safety with strict checking
- **JSON Content Management** - All content organized in JSON files for easy updates
- **Reusable Components** - Component library with 10+ reusable TypeScript components
- **Mobile-First Responsive Design** - Built with Bootstrap 5 for seamless experience across all devices
- **Accessibility Compliant** - WCAG 2.1 AA compliant with semantic HTML and ARIA attributes
- **Component-Based SCSS** - Modular, maintainable styles
- **React Router** - Client-side routing for smooth navigation
- **SEO Optimized** - Dynamic meta tags and structured data
- **Azure Static Web Apps Ready** - Configured for easy deployment

## 🚀 Tech Stack

- **React 18.3** - Modern React with hooks
- **TypeScript 5.x** - Static type checking
- **Vite 5.4** - Fast build tool and dev server
- **Bootstrap 5.3** - Mobile-first CSS framework
- **React Router 6.28** - Client-side routing
- **React Helmet Async** - Dynamic SEO meta tags
- **Sass** - Advanced CSS preprocessing

## 📁 Project Structure

```
sustainability-react/
├── public/              # Static assets
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/      # Reusable components
│   │   │   ├── PageHeader.tsx
│   │   │   ├── FilterButtons.tsx
│   │   │   ├── AccordionList.tsx
│   │   │   ├── ReportCard.tsx
│   │   │   ├── CaseStudyCard.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── GoalCard.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── QuestionCard.tsx
│   │   │   └── ResultsPanel.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── SEO.tsx
│   ├── content/         # JSON content files
│   │   ├── sustainability.json  # Sustainability module content
│   │   ├── faqs.json            # FAQ sections
│   │   ├── questionnaire.json   # Reporting questionnaire
│   │   ├── buttons.json
│   │   ├── headings.json
│   │   ├── links.json
│   │   ├── reports.json
│   │   ├── caseStudies.json
│   │   ├── goals.json
│   │   └── initiatives.json
│   ├── pages/           # Page components
│   │   ├── Landing.tsx
│   │   ├── Sustainability.tsx
│   │   ├── Reporting.tsx
│   │   ├── CaseStudy.tsx
│   │   └── FAQs.tsx
│   ├── styles/          # SCSS stylesheets
│   │   ├── abstracts/   # Variables, mixins
│   │   ├── base/        # Reset, typography
│   │   ├── components/  # Component styles
│   │   ├── layout/      # Header, footer
│   │   ├── pages/       # Page-specific styles
│   │   └── main.scss
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── staticwebapp.config.json
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js 18+**
- npm or yarn

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

4. Open browser at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 Updating Content

All content is stored in JSON files in `/src/content/`. Edit these files to update content without modifying components:

### Content Files

- **`sustainability.json`** - All sustainability module content (contracts terminology, definitions, legislation)
- **`faqs.json`** - FAQ sections and page content
- **`questionnaire.json`** - Reporting questionnaire sections and questions
- **`buttons.json`** - Button labels and navigation text
- **`headings.json`** - Page titles and subtitles
- **`links.json`** - Navigation routes
- **`reports.json`** - Reports data
- **`caseStudies.json`** - Case studies
- **`goals.json`** - Sustainability goals
- **`initiatives.json`** - Key initiatives

### Example: Updating Sustainability Content

Edit `/src/content/sustainability.json`:

```json
{
  "pageTitle": "Sustainability module",
  "contractsTerminology": [
    {
      "title": "Crown Commercial Service (CCS)",
      "description": "Description here..."
    }
  ]
}
```

## 🧩 Reusable Components

TypeScript components with full type safety:

- **PageHeader** - Page title/subtitle
- **FilterButtons** - Filter button group
- **AccordionList** - FAQ accordion
- **ReportCard** - Report display
- **CaseStudyCard** - Case study display
- **FeatureCard** - Feature highlight
- **GoalCard** - Sustainability goal
- **StatCard** - Statistics display
- **QuestionCard** - Questionnaire question
- **ResultsPanel** - Assessment results

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

- Dynamic meta tags with react-helmet-async
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Open Graph tags
- Twitter Cards

## 🎨 Styling

Modular SCSS architecture with Bootstrap 5:

- **Abstracts**: Variables, mixins
- **Base**: Reset, typography
- **Components**: Button, card, form styles
- **Layout**: Header, footer
- **Pages**: Page-specific styles

## 💻 TypeScript

- Strict type checking
- Typed component props
- Path aliases (`@/`)
- Full IntelliSense support

### Path Aliases

```typescript
import SEO from "@/components/SEO";
import headings from "@/content/headings.json";
```

## ♿ Accessibility

- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation
- Focus indicators
- Screen reader support
- Color contrast compliance

## 📱 Responsive Breakpoints

- xs: 0px (base)
- sm: 576px
- md: 768px
- lg: 992px
- xl: 1200px
- xxl: 1400px

## ☁️ Azure Deployment

### Automatic Deployment

GitHub Actions automatically builds and deploys on push to `main` branch.

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to Azure Static Web Apps
```

## 📄 License

MIT License

---

Built for SME sustainability compliance with UK public sector contracts.
