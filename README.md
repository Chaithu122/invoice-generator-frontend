# 🧾 Invoice Generator Application
## 📖 About the Project

The **Invoice Generator Application** is a modern full-stack web application designed to simplify the process of creating and managing professional invoices. It enables users to securely sign in, create customized invoices, manage invoice details, and generate professional-looking invoices through a clean, intuitive, and responsive user interface.

This application streamlines the invoicing process by allowing users to add billing and shipping information, company details, invoice items, taxes, payment information, and additional notes. It also supports multiple invoice templates, giving users flexibility in generating professional invoices based on their preferences.

The frontend is built using **React.js** and **Vite**, providing a fast, responsive, and interactive user experience. The backend is developed using **Spring Boot**, exposing secure REST APIs protected with **Spring Security** and **Clerk Authentication** to ensure secure access and data protection.

All invoice data is stored in a **MySQL** database, enabling reliable, efficient, and scalable data management. The application follows a modern client-server architecture, where the frontend communicates with the backend through REST APIs to perform all business operations.

For deployment, the frontend is hosted on **Netlify**, while the backend and MySQL database are deployed on **Railway**, allowing users to access the application online from anywhere without requiring any local setup.

This project demonstrates full-stack web development skills, including frontend development, backend API development, authentication and authorization, database management, RESTful API integration, and cloud deployment using modern technologies.

### ✨ Features
- 🔐 Secure user authentication using **Clerk Authentication**
- 📝 Create and manage professional invoices
- 📄 Multiple invoice templates for different layouts
- 👤 Add customer billing and shipping information
- 🏢 Manage company and account details
- ➕ Add multiple invoice items dynamically
- 🧮 Automatic tax and total amount calculation
- 🖼️ Upload and display company logo
- 📥 Generate and download invoices
- 💾 Store invoice data securely in **MySQL**
- 🔒 Secure REST APIs using **Spring Security** and JWT Authentication
- 📱 Fully responsive user interface
- ☁️ Cloud deployment using **Netlify** and **Railway**

### 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios

### Backend
- Java
- Spring Boot
- Spring Security
- REST API
- Maven

### Authentication
- Clerk Authentication
- JWT (JSON Web Token)

### Database
- MySQL

### Deployment
- Netlify (Frontend)
- Railway (Backend)
- Railway MySQL (Database)

### Version Control
- Git
- GitHub


### 🚀 Live Demo

🌐 **Live Application:** 

**https://luminous-klepon-08541f.netlify.app**

Click the link above to explore the application.

### Test Credentials

Sign up with your own email account or use Clerk authentication to log in and start creating invoices.

## 📸 Screenshots

## 🏠 Home Page

The QuickInvoice home page provides a modern, responsive, and user-friendly interface that introduces the application and its core features.

## Hero Section

The landing page welcomes users with a professional interface, introducing QuickInvoice and its primary purpose. Users can quickly navigate to the invoice generation process using the call-to-action button.

<img width="1905" height="872" alt="Screenshot 2026-06-28 124658" src="https://github.com/user-attachments/assets/75ae4d1d-8da0-4006-93a6-722172a2a549" />

### Get Started in 4 Simple Steps

This section explains the complete invoice generation workflow in four simple steps, making the application easy to understand for first-time users.

<img width="1900" height="671" alt="Screenshot 2026-06-28 124812" src="https://github.com/user-attachments/assets/a214b4ab-0ba8-429a-ad1f-00ce9e5b6211" />


### Why Choose QuickInvoice

This section highlights the main advantages of the application, including simple invoice creation, multiple professional templates, and an easy-to-use interface.

<img width="1877" height="716" alt="Screenshot 2026-06-28 124843" src="https://github.com/user-attachments/assets/0fabde7b-22d4-4e23-bc58-e579c297a054" />


### Beautiful Dashboard

The dashboard allows users to manage all their invoices in one place. Users can create new invoices, view previously saved invoices, and organize their work efficiently.


<img width="1890" height="617" alt="Screenshot 2026-06-28 124936" src="https://github.com/user-attachments/assets/c7901c68-489f-4d12-811e-9bdf9c679027" />


### Invoice Preview with Action Buttons

Users can preview invoices before finalizing them. The application provides quick action buttons for saving, downloading as PDF, sending via email, or deleting invoices.


<img width="1895" height="456" alt="Screenshot 2026-06-28 125005" src="https://github.com/user-attachments/assets/3297da56-b3d5-4648-8b15-59791befee66" />


### Send Invoices Instantly

QuickInvoice enables users to send professional invoices directly through email without leaving the application, making the invoicing process faster and more convenient.

<img width="1890" height="517" alt="Screenshot 2026-06-28 125038" src="https://github.com/user-attachments/assets/9185004e-ee9b-437e-91d1-38517e65a177" />


### Footer

The footer provides branding information, copyright details, and social media links while maintaining a clean and professional design.

<img width="1901" height="791" alt="Screenshot 2026-06-28 125140" src="https://github.com/user-attachments/assets/4bf3dcae-d125-4312-80f1-be079662a56a" />

## ⚙️ Installation

Follow these steps to set up the project locally.

### 1️⃣ Clone the Repository


```bash
git clone https://github.com/Chaithu122/invoice-generator-frontend.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd invoice-generator-frontend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the project root and add the required environment variables.

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=https://invoice-generator-backend-production-fc42.up.railway.app/api
```

### 5️⃣ Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```


### 📁 Project Structure

```
invoice-generator-frontend/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│── .env
│── package.json
│── vite.config.js
│── README.md
```


### 👨‍💻 Author

**Pigilapu Krishna Chaithanya**

Java Full Stack Developer

- 📧 Email: your-email@example.com
- 💼 LinkedIn: https://www.linkedin.com/in/your-linkedin-profile
- 💻 GitHub: https://github.com/Chaithu122









