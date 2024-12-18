# **Product List Application**

This is a single-page application (SPA) built with **Angular 18** that displays a list of products in a card format. It includes features like filtering products by name, sorting them by name or price, and viewing product details.

---

## **Features**

### **Product List**
- Displays products in a clean grid layout with:
  - **Image** 
  - **Product Name** in bold.
  - **Description** of the product.
  - **Price** displayed in red.
- Includes a "View Details" button for each product.

### **Filter by Name**
- Allows users to filter products dynamically using a search bar.

### **Sort Products**
- Users can sort the product list using two buttons:
  - **Sort by Name**
  - **Sort by Price**


---

## **Technologies Used**
- **Angular 18** (Standalone Components)
- **TypeScript**
- **HTML5**
- **CSS3** 
- **Mock API** (Static `products.json` file in `assets/`)

---


## **How to Run the Project**

### **1. Prerequisites**
Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **Angular CLI** (v18 or higher):
   ```bash
   npm install -g @angular/cli
   ```

### **2. Clone the Repository**
Clone the project to your local machine:
```bash
git clone <https://github.com/ahmedrabeh/shop-app-assignment.git>
```

### **3. Install Dependencies**
Install the required Node.js packages:
```bash
npm install
```

### **4. Run the Application**
Start the development server:
```bash
ng serve
```

Once running, open your browser and visit:

```
http://localhost:4200/
```

---

## **Mock Product Data**

The application uses static JSON data stored in the `assets` folder. Example:

```json
[
  {
    "id": 1,
    "name": "Product 1",
    "price": 29.99,
    "description": "This is Product 1.",
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 19.99,
    "description": "This is Product 2.",
    "image": "https://via.placeholder.com/150"
  }
]
```


