# Storefront React App

## Overview

Storefront is a modern, responsive e-commerce web application built with React. It features authentication-aware UI, cart persistence, reusable components, and a clean, modular codebase. The app is styled with Tailwind CSS and demonstrates best practices in separation of concerns and user experience.

## Features

- **Product Listing**: Browse products with category filtering and pop-out hover effects.
- **Authentication**: Login system with authentication-aware UI (e.g., disabling cart actions when logged out).
- **Cart**: Add/remove products, view cart, and persistent cart state using localStorage.
- **Checkout Flow**: Secure checkout page with shipping and payment forms, and a payment processed confirmation page.
- **Newsletter Popup**: Modal popup for newsletter signup using a reusable input component.
- **Reusable Components**: Includes `InputField`, `Modal`, `ProductCard`, `Footer`, `Categories`, and more.
- **API/Data Separation**: API calls and static data are outsourced to dedicated files for maintainability and scalability.
- **UI/UX Enhancements**: Floating components, expand/collapse, tooltips, modals, and responsive design.
- **Styling**: Tailwind CSS for rapid, consistent, and responsive styling.

## Project Structure

```
storefront/
├── public/
├── src/
│   ├── api/
│   │   └── products.jsx
│   ├── components/
│   │   ├── InputField.jsx
│   │   ├── Navbar.jsx
│   │   ├── Modal.jsx
│   │   ├── Jumbotron.jsx
│   │   ├── FreeDelivery.jsx
│   │   ├── Footer.jsx
│   │   ├── Categories.jsx
│   │   ├── NewsletterPopup.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   ├── data/
│   │   ├── api/
│   │   │   └── getProducts.jsx
│   │   └── constants/
│   │       ├── categoriesStaticData.js
│   │       └── footerStaticData.js
│   ├── pages/
│   │   ├── PaymentProcessed.jsx
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── Checkout.jsx
│   │   └── Cart.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## Tools & Technologies

- **React**: UI library for building interactive interfaces
- **React Router**: Client-side routing
- **React Context API**: State management for authentication and cart management
- **Tailwind CSS**: Utility-first CSS framework
- **React Toastify**: Toast notifications
- **LocalStorage**: Cart persistence
- **Chartjs**: Creating and displaying dynamic data in chart form

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization & Extensibility

- Add new components in `src/components/`
- Update static data in `src/data/constants/`
- Extend API logic in `src/data/api/`
- Modify context logic in `src/context/`

## Live Site

The live site and be viewed and interacted with here:
[DVT Storefront](dvt-storefront.netlify.app)
