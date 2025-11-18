# 📦 Product Card UI — Next.js (Pages Router)

A clean, responsive, animation-rich product grid built with **Next.js 14 (Pages Router) (used older version for compatibility with packages, libs, tools)**, **React 18**, **Tailwind CSS**, and **Framer Motion**.  
Includes a global cart system, theme toggling, accessibility features, and complete Jest testing setup.

---

## 🚀 Features

### 🛒 **Shopping Cart**
- Global `CartProvider` using React Context  
- Add to Cart, Buy Now, View More actions  
- Live cart badge count in the header  
- Updates instantly across components  

---

### 🌗 **Theme Toggle**
- Dark/Light mode support  
- Smooth transitions  
- Uses `next-themes` for safe SSR hydration  

---

### 🎨 **Product Cards**
- Fully responsive mobile-first design  
- Framer Motion animations  
- Image placeholder, rating, tags  
- Three accessible CTA buttons  

---

### 🧪 **Testing Setup**
Fully configured Jest + RTL environment:
- JSDOM test environment  
- Babel transform for JSX/TSX  
- Mocks for Next.js Image and static files  
- Compatible with Tailwind & Framer Motion  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (Pages Router) |
| UI | React 18 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| State | React Context (CartProvider) |
| Testing | Jest + React Testing Library |
| Language | TypeScript |

---

## 📂 Folder Structure

```txt
[product-card-pages/
├── pages/
│   ├── index.tsx
│   └── api/
│       └── products.ts
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
├── public/
│   └── images/
├── jest.config.js
├── babel.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
]


