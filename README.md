# Sustainability React Application

A modern, accessible React web application built with mobile-first responsive design principles, featuring sustainability reporting, case studies, and environmental impact tracking.

## 🌟 Features

- **Mobile-First Responsive Design**: Built with Bootstrap 5 for seamless experience across all devices
- **Accessibility Compliant**: WCAG 2.1 AA compliant with semantic HTML and ARIA attributes
- **Component-Based SCSS**: Modular, maintainable styles with clear separation of concerns
- **React Router Integration**: Client-side routing for smooth navigation
- **Azure Static Web Apps Ready**: Configured for easy deployment to Azure

## 🚀 Tech Stack

- **React 18.3** - Modern React with hooks
- **Vite 5.4** - Fast build tool and dev server
- **Bootstrap 5.3** - Mobile-first CSS framework
- **React Router 6.28** - Client-side routing
- **Sass** - Advanced CSS preprocessing
- **Azure Static Web Apps** - Cloud hosting platform

## 📁 Project Structure

````
sustainability-react/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   └── layout/      # Layout components (Header, Footer)
│   ├── pages/           # Page components
│   │   ├── Landing.jsx
│   │   ├── FAQs.jsx
│   │   ├── Sustainability.jsx
│   │   ├── Reporting.jsx
│   │   └── CaseStudy.jsx
│   ├── styles/          # SCSS stylesheets
│   │   ├── abstracts/   # Variables, mixins
│   │   ├── base/        # Reset, typography
│   │   ├── components/  # Component styles
│   │   ├── layout/      # Layout styles
│   │   ├── pages/       # Page-specific styles
│   │   └── main.scss    # Main entry point
│   ├── App.jsx          # Root component
│   └── main.jsx         # Application entry point
├── .github/
│   └── workflows/       # GitHub Actions for CI/CD
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── staticwebapp.config.json  # Azure SWA configuration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sustainability-react
````

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Styling Architecture

The application uses a modular SCSS architecture:

### Abstracts

- `_variables.scss` - Global variables, colors, spacing
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
