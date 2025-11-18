📦 Product Card Grid — Next.js (Pages Router)

A clean, animated, responsive product grid built using Next.js 14(to make it compatible with all packages, lib, tools versions), React 18, Tailwind CSS, and Framer Motion — including:

🛒 Add to Cart with Global Cart Context

🌗 Dark / Light Theme Toggle

🎯 Accessible Buttons, ARIA Labels

💨 Smooth Animations

🖼 Image optimization via custom Next.js Image mock

🧪 Fully working Jest + React Testing Library setup

🔄 Reusable Card Components

📱 Mobile-first design

🚀 Features
🛒 Shopping Cart

Global CartProvider using React Context

Add to Cart, Buy Now, View More buttons

Persistent badge count in Cart Icon

🌗 Theme Toggle

Dark/light mode with smooth transitions

Uses next-themes

🖼 ProductCard Component

Framer-motion animations

Three CTA buttons

Mobile-optimized layout

🧪 Testing

Includes working Jest setup:

Jest

React Testing Library

Babel transform for JSX

JSDOM environment

Next.js Image mock

Framer Motion safe render

🛠 Tech Stack

Next.js 14 (Pages Router)

React 18

Tailwind CSS v4

Framer Motion

Jest + RTL

TypeScript

📂 Project Structure
product-card-pages/
├── pages/
│   ├── index.tsx
│   └── api/products.ts
├── components/
│   ├── CartProvider.tsx
│   ├── CartIcon.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── ThemeToggle.tsx
├── __tests__/
│   ├── ProductCard.test.tsx
│   └── ProductGrid.test.tsx
├── __mocks__/
│   ├── nextImageMock.js
│   └── fileMock.js
├── public/images/
├── jest.config.js
├── babel.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
