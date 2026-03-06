# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Tripleten web_project_around_react
Este proyecto es una implementación en React utilizando Vite como herramienta de infraestructura. El objetivo es renderizar un perfil de usuario y un conjunto de tarjetas interactivas, con ventanas emergentes (popups) que permiten editar información, añadir nuevas tarjetas, actualizar el avatar y eliminar tarjetas.

🚀 Tecnologías utilizadas
- React con componentes funcionales y hooks.
- Vite como bundler y entorno de desarrollo.
- CSS modularizado en la carpeta blocks.
- JavaScript ES6+.
- Git para control de versiones.

📂 Estructura del proyecto
├── index.css
├── main.jsx
├── components
│   ├── App.jsx
│   ├── Header
│   │   └── Header.jsx
│   ├── Main
│   │   └── Main.jsx
│   ├── Footer
│   │   └── Footer.jsx
│   ├── Card
│   │   └── Card.jsx
│   ├── EditProfile
│   │   └── EditProfile.jsx
│   ├── EditAvatar
│   │   └── EditAvatar.jsx
│   ├── NewCard
│   │   └── NewCard.jsx
│   ├── RemoveCard
│   │   └── RemoveCard.jsx
│   ├── ImagePopup
│   │   └── ImagePopup.jsx
│   └── Main/components/Popup/Popup.jsx
├── assets
│   └── images
├── README.md
└── .gitignore


⚙️ Funcionalidad implementada
- Renderizado del perfil de usuario y las tarjetas iniciales.
- Popups interactivos:
- Editar perfil.
- Añadir nueva tarjeta.
- Actualizar avatar.
- Confirmar eliminación de tarjeta.
- Visualizar imagen ampliada.
- Estados controlados con hooks (useState) para abrir/cerrar popups y manejar interacciones.
- Botones de acción para editar, agregar y eliminar.
- Manejo de eventos (onClick, onSubmit) en los componentes.

🎨 Estilo y convenciones de código
- Uso de camelCase en variables y funciones.
- Variables con nombres descriptivos y claros.
- Funciones nombradas con verbos que reflejan su acción.
- Componentes funcionales nombrados con sustantivos y en PascalCase.
- Sin abreviaturas poco claras.
