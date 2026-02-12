# India Explorer Hub - Tour & Travel Website

## Project Overview

India Explorer Hub is a modern, responsive tour and travel website designed to showcase the beautiful destinations across India. Built with cutting-edge technologies, this website provides an immersive experience for travelers looking to explore the diverse culture, heritage, and natural beauty of India.

## Key Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **Comprehensive Tour Packages**: Detailed travel packages covering various destinations across India
- **Interactive Components**: Dynamic filtering, booking forms, and contact sections
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Focused**: Optimized assets and efficient code structure

## Recent Updates

### Business Information
- Updated business name to "RBS TOURS AND TRAVELS"
- Contact information updated to:
  - Phone: 93107 00129
  - Address: sector 1 jalpura g noida
  - Email: rbsharma0064@gmail.com
  - Owner: krishnakant bhardwaj

### Navigation & Routing
- All "Book Now" buttons redirect to Contact page
- "Call Us Now" buttons initiate phone calls with proper tel: links
- "Get Free Quote" buttons navigate to Contact page
- "Explore Pakages" button redirects to Packages page
- All navigation links properly implemented with React Router

### Content Updates
- Removed pricing information from all package cards
- Removed "Watch Video" button from Hero section
- Removed "Meet Our Leadership Team" section from About page
- Updated button texts and navigation flows
- Streamlined user journey across all pages

### Visual Enhancements
- Integrated custom logo (rbs_logo.png)
- Updated social media presence (Instagram only)
- Consistent branding throughout the website
- Improved typography and spacing

## Technology Stack

This project is built with modern web technologies:

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Testing**: Vitest
- **Form Handling**: Formspree.io integration

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd india-explorer-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero/banner section
│   ├── Packages.tsx    # Package listings
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── AboutUs.tsx     # About page
│   ├── Contact.tsx     # Contact page
│   ├── PackagePlans.tsx # Packages page
│   └── ...
├── lib/                # Utility functions
├── assets/             # Images and static assets
└── App.tsx             # Main application component
```

## Deployment to GitHub Pages

### Prerequisites
1. Repository must be on GitHub
2. Repository name should match the base path in `vite.config.ts` (currently `india-explorer-hub`)

### Setup Instructions

#### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - Save the configuration

#### 2. Push Your Code
```bash
# Add all files
git add .

# Commit changes
git commit -m "Configure for GitHub Pages deployment"

# Push to main branch
git push origin main
```

#### 3. Monitor Deployment
1. Go to the **Actions** tab in your repository
2. Watch the deployment workflow run
3. Once successful, your site will be available at:
   `https://[your-username].github.io/india-explorer-hub/`

### Alternative Deployment Methods

#### Manual Deployment Script
```bash
# Windows
deploy.bat

# Linux/Mac
./deploy.sh
```

#### Using gh-pages package
```bash
npm run deploy
```

## Customization

### Updating Business Information
Modify the following files to update business details:
- `src/components/Header.tsx` - Header contact info
- `src/components/Footer.tsx` - Footer contact info
- `src/pages/Contact.tsx` - Contact page details
- `src/components/CTA.tsx` - Call-to-action section

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: Tailwind classes in component files
- Custom theme: `tailwind.config.ts`

## Troubleshooting

### Common Issues

**Build Failures:**
- Check for CSS @import placement (must be at the top of files)
- Verify all dependencies are installed: `npm install`
- Clear cache if needed: `npm cache clean --force`

**Deployment Issues:**
- Ensure GitHub Pages is enabled in repository settings
- Verify the workflow file is in `.github/workflows/deploy.yml`
- Check that the repository name matches the base path in `vite.config.ts`

**Form Submission Issues:**
- Verify Formspree endpoint is correct
- Check browser console for network errors
- Ensure all required form fields have proper `name` attributes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, email rbsharma0064@gmail.com or reach out via the contact form on the website.

## License

This project is proprietary software. All rights reserved.