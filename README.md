# Employee Directory

## 📌 Overview
The **Employee Directory** is a web application that allows users to manage employee records efficiently. It includes functionalities such as viewing, adding, updating, and deleting employee details.

## 🚀 Features
- View a list of employees
- Add new employees
- Update employee details
- Delete employee records
- Search functionality

## 🛠️ Tech Stack

### **Frontend (React.js)**
- React.js ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square)
- Axios ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white&style=flat-square)
- Bootstrap ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat-square)

### **Backend (ASP.NET Core API)**
- ASP.NET Core ![ASP.NET](https://img.shields.io/badge/ASP.NET_Core-512BD4?logo=dotnet&logoColor=white&style=flat-square)
- Entity Framework Core ![Entity Framework](https://img.shields.io/badge/EF_Core-512BD4?logo=microsoftsqlserver&logoColor=white&style=flat-square)
- SQL Server ![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?logo=microsoftsqlserver&logoColor=white&style=flat-square)

## 📊 Database Schema

| Employee ID | Name | Email | Age | Department | Action |
|------------|------|-------|-----|------------|--------|
| 101 | John Doe | john@example.com | 30 | IT | Edit/Delete |
| 102 | Jane Smith | jane@example.com | 28 | HR | Edit/Delete |

## 🎯 Installation & Setup
### **Backend (ASP.NET Core API)**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/employee-directory.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd employee-directory/backend
   ```
3. Restore dependencies:
   ```bash
   dotnet restore
   ```
4. Update the database:
   ```bash
   dotnet ef database update
   ```
5. Run the backend:
   ```bash
   dotnet run
   ```

### **Frontend (React.js)**
1. Navigate to the frontend folder:
   ```bash
   cd employee-directory/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```

## 🎥 Demo
![Employee Directory Demo](https://your-image-url/demo.gif)


## 📜 License
This project is licensed under the [MIT License](LICENSE).

