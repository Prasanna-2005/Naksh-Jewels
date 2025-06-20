# Naksh Jewels — Jewelry Homepage (API Driven)

Hi 
This is a **jewelry website homepage** made using **Next.js**, **Tailwind-Material CSS**, and a few cool animation libraries like **GSAP** and **Framer Motion**.

---


>  I'm good at backend. I’ve mostly worked with APIs, logic, and data handling. 
>  When it comes to frontend, I’m still learning — but I love using Tailwind CSS because it's easier and cleaner than plain CSS. 
>  I recently discovered GSAP and Velocity.js, and I use AI tools to help bring creative UI ideas to life.

---

##  Tech Stack

| Area         | Tools / Libraries |
|--------------|-------------------|
| Frontend     | **Next.js App Router**, **Tailwind CSS**, **Material Tailwind** |
| Animation    | **GSAP (MotionPath)**, **Framer Motion** |
| Backend      | **Custom API Routes** in Next.js |
| Data Format  | JSON (stored locally inside `/public/products/products.json`) |
| File Upload  | Manual buffer parsing for image + data (no Formidable, pure logic) |



## 📁 Folder Structure (Simplified)
~~~
/public
/products
/images <-- Uploaded product images
products.json <-- All product data
Naksh-Jewels/
├── public/
│ └── products/
│ ├── images/ # Uploaded product images
│ └── products.json # Product details
├── src/
│ ├── components/ # Navbar, Carousel, Forms, Footer
│ └── app/
│ ├── add/ # Add product page
│ ├── delete/ # Delete product page
│ └── api/products/ # API routes
├── tailwind.config.js
└── package.json

/app
/add <-- Shows AddProductForm
/delete <-- Shows DeleteProductForm
/api/products <-- GET / POST / DELETE API
~~~


---
DONT CHANGE ANY DIRECTORY OR MOVE THE FILES 
---
DON'T WORRY ABOUT RED LINES (DUE TO TYPESCRIPT):IT's NOT AN ERROR


---

## 🔧 Installation & Setup

### 📦 1. Clone the Repository

```bash
git clone https://github.com/Prasanna-2005/Naksh-Jewels.git
cd Naksh-Jewels

npm install
npm run dev
```

```
IN CASE OF VULNERABIILTIES:
npm audit fix --force
npm run dev
```

```
Then go to:
http://localhost:3000

FIRST LOAD i.e) FIRST REQUEST TAKES 10-15s for server to start
BE PATIENT
```
---

You can:
>LOOK MY CUSTOMIZED HOMEPAGE 
>I MADE MULTIPLE SECTIONS
>CREATED 3 API's.
>➕ Click add to post a product with image
>🗑️ Click delete to remove a product
>🎞️ Watch animated image displays
---


---


>IN THIS WEB< I DIDN'T IMPLEMENT SEARCH AND GET A ITEM/ FILTER
>I DIDN't IMPLEMENET SINGLE PRODUCT DESCRIPTION

---
