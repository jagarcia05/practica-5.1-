# 📖 Documentación del Proyecto

## 📌 Introducción  
Este proyecto está desarrollado en **React + TypeScript** y utiliza **Tailwind CSS** para el diseño. Cuenta con varios componentes reutilizables, como **Header**, **Slider**, **Card** y **Button**, todos ellos diseñados en **Figma**, incluyendo tanto las variables de estilo como la estructura de los componentes.

---

## 📂 Estructura del Proyecto  
```
mi-proyecto/
│── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   ├── Slider.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│── public/
│── index.html
│── package.json
│── vite.config.ts
```

---

## 📌 Componentes

### 1️⃣ **Header.tsx**  
Este componente representa la barra de navegación con un logo, enlaces y un icono de búsqueda.  

#### **📌 Props**
| Prop       | Tipo     | Descripción |
|------------|---------|-------------|
| `navlogo`  | string  | URL del logo de la empresa |
| `navitem1` | string  | Texto del primer ítem del menú |
| `navitem2` | string  | Texto del segundo ítem del menú |
| `navitem3` | string  | Texto del tercer ítem del menú |
| `navitem4` | string  | Texto del cuarto ítem del menú |
| `navlupa`  | string  | URL del icono de búsqueda |

#### **Ejemplo de Uso**
```tsx
<Header 
  navlogo="logo.png"
  navitem1="Home"
  navitem2="About us"
  navitem3="Services"
  navitem4="Contact"
  navlupa="lupa.png"
/>
```

---

### 2️⃣ **Button.tsx**  
Este componente renderiza un botón reutilizable que puede ser un `<button>` normal o un `<a>` si se proporciona un `link`.  

#### **📌 Props**
| Prop      | Tipo       | Descripción |
|-----------|-----------|-------------|
| `text`    | string    | Texto del botón |
| `link`    | string?   | (Opcional) URL del enlace |
| `onClick` | función?  | (Opcional) Acción al hacer clic |

#### **Ejemplo de Uso**
```tsx
<Button text="Haz clic aquí" onClick={() => alert("Hola")} />
<Button text="Ver más" link="https://example.com" />
```

---

### 3️⃣ **Card.tsx**  
Este componente muestra una tarjeta con imagen y descripción.

#### **📌 Props**
| Prop          | Tipo     | Descripción |
|--------------|---------|-------------|
| `imageSource` | string  | URL de la imagen |
| `description` | string  | Texto descriptivo |

#### **Ejemplo de Uso**
```tsx
<Card imageSource="imagen.jpg" description="Este es un proyecto destacado." />
```

---

### 4️⃣ **Slider.tsx**  
Este componente crea un carrusel de imágenes con botones de navegación y un botón para ver más proyectos.

#### **📌 Props**
| Prop    | Tipo       | Descripción |
|---------|-----------|-------------|
| `images` | string[]  | Lista de imágenes para el slider |

#### **Ejemplo de Uso**
```tsx
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

<Slider images={images} />
```

---

## 🛠️ Tecnologías Utilizadas  
✅ **React + TypeScript**  
✅ **Tailwind CSS**  
✅ **Vite** (para un desarrollo rápido)  

## Links Proyectos
[figma](https://www.figma.com/design/SCM4nGlVgsW7VnW68uu3Su/Untitled?node-id=40-2&p=f&t=l4fxHb0Wh0wKSl10-0)
[git gub](https://github.com/jagarcia05/practica-5.1-/tree/main/mi-proyecto)


---

## 🚀 Conclusión  
Este proyecto proporciona una estructura modular para crear una página interactiva con un diseño moderno. Los componentes son reutilizables y fáciles de personalizar. ¡Sigue construyendo! 🚀