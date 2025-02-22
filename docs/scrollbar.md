# Scrollbar Customization in Next.js


##  Features
 Custom scrollbar width  
 Custom scrollbar colors  
 Applies to the entire page or specific elements  

## 🛠️ Implementation Steps

### 1️⃣ **Using Global CSS**
Modify `app/globals.css`:
```css

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: #000000;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
  background: #2980b9;
}
