# [RecruiterAI](https://recruiterai-dhaya.vercel.app/)



## 🎯 Landing Page Overview

The RecruiterAI landing page is designed with a modern **Neo-brutalist** aesthetic, featuring bold typography, vibrant colors, strong borders, and dynamic animations. The page is fully responsive and optimized for both mobile and desktop experiences.

### Landing Page Sections

#### 1. **Navigation Bar**
- Sticky navigation with smooth scrolling to different sections
- Dark/Light mode toggle
- Mobile-responsive hamburger menu
- Company logo and navigation links (Home, How It Works, Impact, Testimonials)

#### 2. **Hero Section**
- **Headline**: "Better Hiring Starts Here" with an eye-catching tagline
- **Value Proposition**: Explains how AI eliminates manual filtering and streamlines recruitment
- **Call-to-Action Buttons**: 
  - "Request a Demo" (primary CTA)
  - "View Features" (secondary CTA)
- **Social Proof**: Displays avatars and text showing "Join 500+ companies hiring smarter"
- **Interactive Carousel**: Rotates between an AI recruitment image and pain point cards highlighting common hiring challenges:
  - Slow Hiring (candidates wait weeks, lose top talent)
  - Resume Overload (200+ resumes, manual screening nightmare)
  - Poor Matches (gut feeling hires, high turnover)
  - Time Crunch (CEO, PM, HR all at once, no bandwidth)

#### 3. **Logo Slider**
- Animated slider showcasing trusted company logos
- Demonstrates social proof and credibility
- Smooth, continuous animation with 3x speed

#### 4. **How It Works - Flowchart Section**
Interactive tabbed section with three automated workflows:

- **Candidate Screening Flow**:
  - New Application → AI Resume Screening → Auto-send Screening Questions → Score Evaluation → Auto-schedule Interview (if score > 75%) or Send Thank You Email
  - **Benefit**: Screen 250+ applications in minutes vs. 8 hours manually

- **Interview Process Flow**:
  - Candidate Accepts → Round 1 AI Video Interview → AI Scores Responses → Auto-schedule Round 2 (if score > 80%) or Auto-rejection Email → Hiring Manager Interview → Final Decision → Send Offer Letter or Personalized Rejection
  - **Benefit**: Reduce time-to-hire from 42 days to 12 days

- **Talent Pipeline Flow**:
  - Candidate Rejected (Score 60-74%) → Add to 'Future Talent' Database → Wait 3 Months → Check for New Relevant Position → AI Sends Personalized Re-engagement Email → Fast-track to Interview or Continue in Talent Pool
  - **Benefit**: Build a qualified talent pipeline automatically - never start from zero

Each flowchart uses hand-drawn SVG illustrations with animated transitions and color-coded steps.

#### 5. **Impact Dashboard**
- **Left Section**: Circular flow visualization showing the recruitment process
- **Right Section**: Hand-drawn bar graph displaying key metrics and impact statistics
- Demonstrates the measurable benefits of using RecruiterAI

#### 6. **Testimonials Section**
- **Design**: Threaded timeline layout with alternating left/right testimonial cards
- **Content**: Features testimonials from:
  - Sarah Jenkins (Head of Talent, TechFlow)
  - David Chen (CTO, StartUp Inc)
  - Emily Rodriguez (HR Director, GlobalCorp)
- **Visual Elements**: 
  - Neo-brutalist card design with bold borders and shadows
  - 5-star ratings
  - Vertical thread connecting testimonials
  - Animated entrance effects

#### 7. **FAQ Section**
- Accordion-style frequently asked questions
- Addresses common concerns about AI recruitment
- Smooth expand/collapse animations

#### 8. **Final Call-to-Action (CTA)**
- Reinforces the value proposition
- Prominent "Get Started" button
- Encourages users to take action

#### 9. **Footer**
- Company information and links
- Social media icons
- Copyright information
- Additional navigation links

---

## 🎨 Design Philosophy

The landing page follows a **Neo-brutalist** design approach characterized by:

- **Bold Typography**: Using 'Outfit' and 'Playwrite NZ Basic Guides' fonts for impact
- **Strong Borders**: 2px black borders on all major components
- **Dramatic Shadows**: Offset box shadows (8px_8px_0px_0px) creating depth
- **Vibrant Colors**: Sky blue, purple, green, and red accents
- **Hover Effects**: Interactive elements with translate and shadow animations
- **Hand-drawn Aesthetics**: Sketchy SVG elements in flowcharts for a unique, approachable feel
- **Micro-animations**: Framer Motion animations for smooth, engaging interactions

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 16.1.6** - React framework with App Router for server-side rendering and optimal performance
- **React 19.2.3** - UI library for building component-based interfaces
- **TypeScript 5** - Type-safe development

### **Styling**
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **Custom CSS** - Additional styling for Neo-brutalist design elements
- **Responsive Design** - Mobile-first approach with breakpoints for all screen sizes

### **Animation & Interactions**
- **Framer Motion 12.33.0** - Production-ready animation library for React
  - Page transitions
  - Scroll-triggered animations
  - Interactive hover effects
  - Carousel animations
- **Lottie React 2.4.1** - For rendering After Effects animations

### **UI Components & Icons**
- **Lucide React 0.563.0** - Beautiful, consistent icon set
- **Recharts 3.7.0** - Composable charting library for data visualization
- **Custom Components** - Hand-built components following Neo-brutalist design system

### **Utilities**
- **clsx 2.1.1** - Utility for constructing className strings conditionally
- **tailwind-merge 3.4.0** - Merge Tailwind CSS classes without style conflicts

### **Theming**
- **next-themes 0.4.6** - Dark mode and theme management

### **Build Tools**
- **Webpack 5.105.0** - Module bundler
- **PostCSS** - CSS transformations
- **ESLint 9** - Code linting and quality assurance

### **Development Tools**
- **TypeScript** - Static type checking
- **ESLint Config Next** - Next.js-specific linting rules
- **Node Types** - TypeScript definitions for Node.js

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd RecruiterAI
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
RecruiterAI/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main landing page
│   │   ├── ImpactFolder/         # Impact section components
│   │   │   ├── left/page.tsx     # Left impact visualization
│   │   │   └── right/page.tsx    # Right impact metrics
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation component
│   │   ├── Hero.tsx              # Hero section with carousel
│   │   ├── LogoSlider.tsx        # Company logo slider
│   │   ├── FlowchartSection.tsx  # Interactive workflow diagrams
│   │   ├── ImpactDashboard.tsx   # Impact metrics section
│   │   ├── Testimonials.tsx      # Customer testimonials
│   │   ├── FAQ.tsx               # Frequently asked questions
│   │   ├── FinalCTA.tsx          # Final call-to-action
│   │   └── Footer.tsx            # Footer component
│   └── styles/
│       └── globals.css           # Global styles
├── public/                       # Static assets (images, logos)
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── tailwind.config.js            # Tailwind CSS configuration
```

---

## 🌟 Key Features

- ✅ **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✅ **Dark/Light Mode** - Theme switching capability
- ✅ **Smooth Animations** - Framer Motion powered interactions
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Performance Optimized** - Next.js SSR and image optimization
- ✅ **Accessible** - WCAG compliant design patterns
- ✅ **Modern Design** - Neo-brutalist aesthetic with bold visuals

---

## 📄 License

This project is private and proprietary.

---

## 🤝 Contributing

This is a private project. For any questions or contributions, please contact the development team.

---

**Built with ❤️ using Next.js and modern web technologies**
