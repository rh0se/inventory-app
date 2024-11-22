# Inventory App

This **Inventory App** is a modern web application built using **Vite**, **Tailwind CSS**, and **CSS** for styling. The application supports role-based navigation between **User Pages** and **Admin Pages** and provides features for browsing categories, managing products, and a dynamic shopping cart. The application is deployed on **Vercel** for seamless hosting and scalability.

---

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens using Tailwind CSS.
- **Role-Based Navigation**: Switch between **User** and **Admin** pages using the avatar navigation element.
- **Product Management**: Browse and interact with products fetched from an external API.
- **Cart Functionality**: Add, remove, and adjust quantities dynamically in the cart.
- **Categories Section**: View product categories directly within the admin.

---

## Navigation

To switch between **User Page** and **Admin Page** by Clicking the **avatar or name** redirects you to the appropriate page (User or Admin).

---

## Setup Instructions

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A modern web browser (e.g., Google Chrome, Firefox)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-repository-name.git
cd your-repository-name
```

---

### 2. Install Dependencies

Install required packages using npm or yarn:

```bash
npm install
```

Or with Yarn:

```bash
yarn install
```

---

### 3. Start the Development Server

To start the application in development mode:

```bash
npm run dev
```

Or with Yarn:

```bash
yarn dev
```

The application will run at [http://localhost:5173](http://localhost:5173). Open this URL in your browser.

---


## Deployment Instructions

### 1. Build the Application

To create a production-ready build:

```bash
npm run build
```

This will generate an optimized `dist/` directory.

---

### 2. Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy** the application:
   ```bash
   vercel
   ```

Follow the prompts to link your project and deploy.

---

## Troubleshooting

### Common Issues

1. **Styling Issues**:
   - Ensure Tailwind CSS is properly configured in `tailwind.config.js`.

---

## Technologies Used

- **Vite**: Ultra-fast build tool for modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **CSS**: Additional styles for specific elements.
- **Vercel**: Hosting platform for deploying modern web applications.

---


