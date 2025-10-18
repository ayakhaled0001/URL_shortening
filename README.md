# 🔗 URL Shortening App (React + Redux Toolkit)

A sleek and responsive **URL Shortening Web App** built with **React**, **Axios**, and **Redux Toolkit**

The app allows users to shorten long URLs via the **TinyURL API**, manage them efficiently through **Redux state management**, and store them persistently for later use.

---

## 🚀 Features

- ✂️ **Shorten long URLs** using the [TinyURL API](https://tinyurl.com/app/dev)
- 📦 **Redux Toolkit** for global state management
- 📋 **Copy to clipboard** functionality
- 📱 **Fully responsive design**
- ⚡ **Axios** for clean, promise-based API calls
- 🧩 **Reusable components** and clean project structure


## 🛠️ Built With

- ⚛️ **React.js (Vite)**
- 🧰 **Redux Toolkit**
- 🌐 **Axios**
- 🎨 **TailwindCSS**
- 🔗 **TinyURL API**

---

## ⚙️ Project Structure

```

src/
├── features/
│       ├── URLSlice.js
│       ├── URLThunks.js
│       └── store.js
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Shorten.jsx
│   ├── AdvancedStatistics.jsx
│   ├── Header.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css
├── app.css
└── main.jsx

````

---

## 🔑 API Reference (TinyURL)

- **Base URL:** `https://api.tinyurl.com/`
- **Method:** `POST`
- **Headers:**
  ```js
  {
    Authorization: `Bearer YOUR_API_KEY`,
    "Content-Type": "application/json"
  }


* **Body Example:**

  ```json
  { "url": "https://example.com" }
  ```

* **Response Example:**

```json
{
  "data": {
    "tiny_url": "https://tinyurl.com/abc123"
  }
}
```


---

## 📸 Preview
![desktop-active-states](https://github.com/user-attachments/assets/f55473de-714c-4049-8c5e-616858110205)


---

## 🧩 Setup & Run Locally

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/url-shortening-app.git
   ```

2. Navigate to the project folder

   ```bash
   cd url-shortening-app
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the app

   ```bash
   npm run dev
   ```

5. Open your browser and visit:

   ```
   http://localhost:5173/
   ```

