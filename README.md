<div align="right">

[![GitHub License](https://img.shields.io/github/license/stylescape/example-react?style=flat-square&logo=readthedocs&logoColor=FFFFFF&label=&labelColor=%23041B26&color=%23041B26&link=LICENSE)](https://github.com/stylescape/example-react/blob/main/LICENSE)
[![devContainer](https://img.shields.io/badge/devContainer-23041B26?style=flat-square&logo=Docker&logoColor=%23FFFFFF&labelColor=%23041B26&color=%23041B26)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/stylescape/example-react)
[![StackBlitz](https://img.shields.io/badge/StackBlitz-23041B26?style=flat-square&logo=StackBlitz&logoColor=%23FFFFFF&labelColor=%23041B26&color=%23041B26)](https://stackblitz.com/github/stylescape/example-react/tree/main?file=src%2Findex.html)

</div>

<p align="center">
    <img src="https://raw.githubusercontent.com/stylescape/brand/master/src/logo/logo-transparant.png" width="20%" alt="Stylescape Logo">
</p>
<h1 align="center" style='border-bottom: none;'>Stylescape + React</h1>
<h3 align="center">Example Project</h3>

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/stylescape/example-react)

---

Integrate [Stylescape](https://scape.style) with [React](https://react.dev/) and [Vite](https://vitejs.dev/) for fast development and optimized production builds.

---

## Features

- ⚛️ React 19 with modern hooks and patterns
- ⚡ Vite for lightning-fast HMR and builds
- 🎨 Stylescape's complete styling system
- 🌗 Built-in theme toggle with `data-ss="theme-toggle"`
- 📐 Frame layout with sidebars and ribbons
- 🎹 Interactive accordion with `data-ss="accordion"`

---

## Quickstart

```sh
git clone https://github.com/stylescape/example-react.git
cd example-react
npm install
npm start
```

---

## Project Structure

```
src/
├── App.jsx           # Main application component
├── main.jsx          # Entry point with Stylescape imports
└── styles/
    └── main.scss     # Stylescape SCSS import
```

---

## Usage

### 1. Install Dependencies

```sh
npm install stylescape react react-dom
npm install -D vite @vitejs/plugin-react sass
```

### 2. Import Stylescape in SCSS

```scss
// src/styles/main.scss
@use "stylescape";
```

### 3. Import in Entry File

```jsx
// src/main.jsx
import './styles/main.scss';
import 'stylescape';
```

### 4. Use Stylescape Classes

```jsx
<div className="frame_main">
    <header className="ribbon--top">
        <input type="checkbox" data-ss="theme-toggle" />
    </header>
    <aside className="sidebar--left" data-ss="aside">
        {/* Sidebar content */}
    </aside>
    <main className="main_content">
        <div data-ss="accordion">
            <details>
                <summary>Accordion Item</summary>
                <p>Content here</p>
            </details>
        </div>
    </main>
</div>
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Colophon

Made with ❤️ by **[Scape Agency](https://www.scape.agency)**

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

### License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for details.

---
