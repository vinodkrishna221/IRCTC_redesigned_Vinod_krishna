# IRCTC Website Redesign

A modern redesign of the IRCTC (Indian Railway Catering and Tourism Corporation) website, developed for the IIT Patna Hackathon.
Website 

# Demo
You can see the demo of this website.
URL:https://irctc-redesigned-vinod.netlify.app/

## Project Overview

This project is a complete redesign of the IRCTC website using modern web development practices and technologies. The redesign focuses on improving user experience, performance, and visual design while maintaining all the essential functionality of the original platform.

## Technologies Used

- TypeScript
- React
- Tailwind CSS
- Vite
- Shadcn UI Components
- HTML5
- CSS3
- AI-assisted development (Lovable AI)

## Features

- Modern, responsive user interface
- Improved navigation and user flow
- Enhanced booking experience
- Real-time train tracking
- PNR status checking
- Fare alerts and notifications
- Loyalty program integration
- Cross-platform compatibility
- Interactive particle background
- Additional services: Hotels, Flights, and Holiday packages

## Installation and Setup

The only requirement is having Node.js & npm installed. We recommend installing with [nvm](https://github.com/nvm-sh/nvm).

Follow these steps:

```bash
# Step 1: Clone the repository using the project's Git URL
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd vinodkrishna221-irctc_redesigned_vinod_krishna

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server with auto-reloading and an instant preview
npm run dev
```

After running the development server, the application will be available at `http://localhost:5173` (default Vite port) in your browser.

## Project Structure

```
vinodkrishna221-irctc_redesigned_vinod_krishna/
├── public/                  # Static assets
├── src/                     # Source files
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Common components (Navbar, Footer, etc.)
│   │   ├── fare-alert/      # Fare alert related components
│   │   └── ui/              # Shadcn UI components
│   ├── context/             # React context providers
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layout components
│   ├── lib/                 # Utility functions
│   ├── pages/               # Application pages
│   ├── App.css              # App-specific styles
│   ├── App.tsx              # Main App component
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── package.json             # Project dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Key Pages

- **Home** - Main landing page with search functionality
- **BookTrain** - Train booking interface
- **TrainList** - List of available trains
- **PNRStatus** - Check PNR status
- **TrackTrain** - Real-time train tracking
- **FareAlert** - Set alerts for fare changes
- **Dashboard** - User dashboard with bookings and preferences
- **LoyaltyProgram** - IRCTC loyalty program interface
- **Hotels**, **Flights**, **HolidayPackages** - Additional travel services

## Development Tools

- **Vite** - Next generation frontend tooling
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Reusable component library


## Acknowledgements

- IIT Patna for hosting the hackathon
- Lovable AI for assistance in development
- Original IRCTC platform for inspiration
