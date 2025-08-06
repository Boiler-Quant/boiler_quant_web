# BoilerQuant Website

[![Website](https://img.shields.io/badge/Website-Live-brightgreen?style=flat-square)](https://boilerquant.com)
[![React](https://img.shields.io/badge/React-19.0+-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Material-UI](https://img.shields.io/badge/Material--UI-6.3+-0081CB?style=flat-square&logo=material-ui)](https://mui.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

<div align="center">
  <img src="public/logo_black.svg" alt="BoilerQuant Logo" width="200"/>
  
  **Purdue's Leading Quantitative Finance Community**
</div>

## Overview

boilerquant.com is the official website for Boiler Quant (Purdue University's Quantitative Finance Club). The platform showcases our projects, executive board, sponsors, and provides information for students interested in joining our community of quantitative finance enthusiasts.

## Live Website

Visit our website at: **[boilerquant.com](https://boilerquant.com)**

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Real-time data integration with Airtable
- **Interactive Components**: Smooth animations and transitions
- **Multi-page Navigation**: Home, About Us, Projects, Sponsors, and Join Us sections
- **Executive Board Showcase**: Dynamic display of current leadership
- **Project Portfolio**: Semester-based project organization
- **Sponsor Integration**: Professional sponsor showcase
- **Recruitment System**: Application and timeline management

## Technology Stack

### Frontend

- **React 19.0+**: Modern React with hooks and functional components
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Material-UI**: React component library
- **React Intersection Observer**: Scroll-based animations

### Backend & Data

- **Airtable**: Content management system for dynamic data
- **Axios**: HTTP client for API requests
- **Vercel API Routes**: Serverless functions for data fetching

### Development & Deployment

- **Vercel**: Hosting and deployment platform
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/boiler_quant_web.git
cd boiler_quant_web
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_AIRTABLE_API_KEY=your_airtable_api_key
REACT_APP_AIRTABLE_BASE_ID=your_airtable_base_id
```

4. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

## Deployment

This project is deployed on Vercel. To deploy updates:

```bash
vercel --prod
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   ├── Home/           # Homepage sections
│   ├── AboutUs/        # About page and executive board
│   ├── Projects/       # Project showcase
│   ├── Sponsors/       # Sponsor information
│   └── JoinUs/         # Recruitment and application
├── utils/              # Utility functions and services
├── assets/             # Static assets and fonts
└── theme-context.js    # Theme management
```

## Key Features

### Dynamic Content Management

- Executive board information pulled from Airtable
- Project data organized by semester
- Real-time content updates without code changes

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Custom responsive typography system
- Optimized images for different screen sizes

### Performance Optimization

- Lazy loading with React Intersection Observer
- Optimized images and assets
- Efficient routing with React Router

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [boilerquant.com](https://boilerquant.com)
- **GitHub**: [Boiler-Quant](https://github.com/Boiler-Quant)
- **Instagram**: [@boilerquant](https://instagram.com/boilerquant)
- **LinkedIn**: [BoilerQuant](https://linkedin.com/company/boilerquant)
