# 🌐 RentVerse

<div align="center">

  <img src="public/home.svg" alt="RentVerse Logo" width="90" height="90" />

  <h1>RentVerse — Next-Gen Real Estate Investment Platform</h1>

  <p>
    <strong>Fractional Real Estate Ownership Powered by Blockchain & Cryptocurrency</strong>
  </p>

  <p>
    <a href="https://github.com/developer-sazzad/RentVerse/stargazers"><img src="https://img.shields.io/github/stars/developer-sazzad/RentVerse?style=for-the-badge&logo=github&color=3b82f6" alt="Stars" /></a>
    <a href="https://github.com/developer-sazzad/RentVerse/network/members"><img src="https://img.shields.io/github/forks/developer-sazzad/RentVerse?style=for-the-badge&logo=github&color=0ea5e9" alt="Forks" /></a>
    <a href="https://github.com/developer-sazzad/RentVerse/issues"><img src="https://img.shields.io/github/issues/developer-sazzad/RentVerse?style=for-the-badge&logo=github&color=6366f1" alt="Issues" /></a>
    <a href="https://github.com/developer-sazzad/RentVerse/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge" alt="License" /></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 18" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-12.9.4-FF4154?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Three.js-0.176.0-000000?style=flat-square&logo=three.js&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/Web3-Ethers.js-F6851B?style=flat-square&logo=ethereum&logoColor=white" alt="Web3" />
  </p>

  <p>
    <a href="https://rentverse-demo.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/🚀_Live_Demo-rentverse--demo.vercel.app-2563eb?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  </p>

</div>

---

## 📸 Preview

![RentVerse Platform Preview](public/home.jpg)

---

## 📖 About The Project

**RentVerse** is a modern, decentralized real estate investment platform that bridges the gap between traditional physical property investing and Web3 blockchain technology. Inspired by leading platforms like Arrived.com, RentVerse introduces fractional NFT tokenization — enabling investors around the globe to own shares of high-yield properties for as little as **$10** and earn passive monthly rental dividends directly into their cryptocurrency wallets.

Designed with a focus on luxury aesthetic, high performance, and intuitive user experience, RentVerse features an adaptive **Dual-Theme Engine (Light & Dark)**, interactive **3D property exploration**, **real-time filtering**, and an **exclusive single-open FAQ accordion**.

---

## ✨ Key Features

### 🌓 Dual-Theme Engine (Light & Dark Mode)
- **Fluid Theme Switching**: Seamless toggle between luxury dark navy mode and crisp, high-contrast light mode with saved preferences in `localStorage`.
- **Adaptive Architecture Heroes**: Every page (Home, Properties, About, FAQ, Blog) features tailored background architectural imagery with dual-layer gradients that look stunning in both themes.
- **Glassmorphic Elements**: Backdrop blur cards, subtle borders, and ambient glow lighting.

### 🪙 Tokenized Real Estate & Web3 Ready
- **Fractional NFT Shares**: Properties are represented by digital tokens with transparent financial metrics (total valuation, monthly rental income, annual ROI, and token pricing).
- **Crypto Wallet Connectivity**: Connect seamlessly with Web3 wallets (Metamask, VeChain, Phantom, Trust Wallet).
- **Liquidity & Exit Strategy**: Trade property NFTs on the secondary marketplace anytime without lock-in penalties.

### 🔍 Interactive Filtering & Property Search
- **Always-Active 2-Row Filter Bar**: Clean filter controls accessible at all screen sizes.
- **Multi-Criteria Querying**: Search by property name/city, filter by price range dropdown, property type (Villas, Apartments, Houses), location, minimum ROI, and funding status.
- **Smart Reset**: One-click reset restores the marketplace view instantly.

### 🧊 Three.js 3D Property Visualization
- Interactive 3D property models powered by `@react-three/fiber` and `@react-three/drei` for virtual architectural walkthroughs.

### ❓ Single-Open FAQ Accordion
- Interactive question-and-answer accordions on both the Home and FAQ pages where expanding any question automatically closes any open question for a clean, distraction-free reading experience.

### 📱 Responsive Layout & Navigation
- **Sticky Glass Header**: Persistent navigation bar with backdrop blur that remains accessible during scrolling.
- **Mobile Drawer Menu**: Fully responsive navigation drawer with integrated theme toggle.
- **Back-to-Top Floating Control**: Quick return button at the bottom-right corner with smooth scrolling.

---

## 🧩 Core Pages & Architecture

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Luxury hero banner, platform statistics, featured investment opportunities, why choose us crypto benefits, step-by-step investment flow, FAQ accordion, and community CTA. |
| `/properties` | **Properties Marketplace** | Complete property catalog with active multi-filter controls, token metrics, and investment status. |
| `/properties/:id` | **Property Detail** | Comprehensive property overview, 3D viewer, financial breakdown, token availability, and investment calculator. |
| `/about` | **About RentVerse** | Company mission, core values, blockchain vision, and leadership information. |
| `/faq` | **Help & Support (FAQ)** | Grouped questions covering general info, marketplace trading, property management, legal & compliance. |
| `/blog` | **Insights & Articles** | Educational crypto & real estate articles with category selector dropdown and search. |
| `/blog/:slug` | **Article Detail** | Long-form reading view with author credentials, estimated reading time, and social share links. |
| `/privacy` | **Privacy Policy** | Platform legal, data protection, and terms guidelines. |

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18](https://reactjs.org/) (Create React App with `react-app-rewired`)
- **Styling & Design System**: [Tailwind CSS v3.4](https://tailwindcss.com/)
- **Animation & Transitions**: [Framer Motion v12](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Feather, FontAwesome, SimpleIcons)
- **3D Visualization**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Charts & Data**: [Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Web3 & Blockchain**: [Ethers.js v5](https://docs.ethers.org/), `@walletconnect/web3-provider`
- **Routing**: [React Router v6](https://reactrouter.com/)
- **State Management**: React Hooks & [Jotai](https://jotai.org/)

---

## 📁 Project Directory Structure

```text
RentVerse/
├── public/                     # Static assets, 3D models, images, manifest
│   ├── home.jpg                # Platform banner preview
│   ├── client.png              # Client showcase
│   └── models/                 # 3D assets for Three.js viewer
├── src/
│   ├── assets/                 # Brand graphics and images
│   ├── components/             # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Sticky header with theme toggle & mobile menu
│   │   │   └── Footer.jsx      # Global footer with quick links
│   │   └── property/
│   │       ├── PropertyCard.jsx # Property card with token metrics & badges
│   │       └── ...
│   ├── hooks/                  # Custom React hooks
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Properties.jsx      # Marketplace with 2-row filter system
│   │   ├── PropertyDetail.jsx  # Single property investment page
│   │   ├── Property3D.jsx      # 3D interactive viewer
│   │   ├── About.jsx           # About page
│   │   ├── FAQ.jsx             # Help center with single-open accordion
│   │   ├── Blog.jsx            # Articles page with category dropdown
│   │   ├── BlogPost.jsx        # Single article reader
│   │   ├── Privacy.jsx         # Privacy policy
│   │   └── NotFound.jsx        # 404 handler
│   ├── App.jsx                 # Route definitions & global theme provider
│   ├── index.css               # Tailwind imports & custom utilities
│   └── index.js                # App entrypoint
├── config-overrides.js         # Webpack polyfills for Web3 libraries
├── package.json                # Project dependencies and build scripts
├── tailwind.config.js          # Custom theme colors, fonts, and dark mode setup
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 16.x or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/developer-sazzad/RentVerse.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd RentVerse
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm start
   ```

5. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

This compiles and minifies the code into the `build/` directory ready for deployment to Vercel, Netlify, or any static hosting provider.

---

## 🤝 Contributing

Contributions make the open-source community an inspiring place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Sazzad**
- GitHub: [@developer-sazzad](https://github.com/developer-sazzad)
- Repository: [https://github.com/developer-sazzad/RentVerse](https://github.com/developer-sazzad/RentVerse)

---

<div align="center">
  <sub>Built with ❤️ for decentralized real estate investing.</sub>
</div>
