import React from 'react';

function App() {
    return (
        <div className="frame_main">
            {/* TOP RIBBON */}
            <div className="frame_main__area--top">
                <header className="ribbon--top" role="navigation">
                    <div className="ribbon__slot--horizontal_left">
                        <h1 className="ribbon__title" role="heading" aria-level="1">
                            <div className="ribbon__title__text">
                                <a href="/">STYLESCAPE REACT</a>
                            </div>
                        </h1>
                    </div>

                    <div className="ribbon__slot--horizontal_center">
                        <button
                            aria-label="Toggle navigation"
                            aria-expanded="false"
                            type="button"
                            className="menu_button ribbon__nav_button"
                        >
                            ☰
                        </button>
                    </div>

                    <div className="ribbon__slot--horizontal_right">
                        <menu className="ribbon__menu" role="menubar">
                            <li className="ribbon__menu__item">
                                <input type="checkbox" id="themeToggle" data-ss="theme-toggle" />
                            </li>
                        </menu>
                    </div>
                </header>
            </div>

            {/* LEFT SIDEBAR */}
            <div className="frame_main__area--middle_left">
                <aside
                    className="sidebar--left"
                    id="sidebar_left"
                    role="navigation"
                    data-ss="aside"
                    data-ss-aside-menu="sidebar_left_menu"
                    data-ss-aside-switch="sidebar_left_switch"
                >
                    <nav className="ribbon--left ribbon--inverted" aria-label="Sidebar Left Navigation"></nav>

                    <nav id="sidebar_left_menu" className="sidebar__menu" aria-label="Sidebar Left Content Navigation">
                        <section className="sidebar__content rail" role="region">
                            <h2>Navigation</h2>
                            <ul>
                                <li><a href="#intro">Introduction</a></li>
                                <li><a href="#setup">Setup</a></li>
                                <li><a href="#components">Components</a></li>
                            </ul>
                        </section>
                    </nav>

                    <div className="sidebar__control" role="group" aria-label="Sidebar Toggle">
                        <button
                            className="flipper--left"
                            id="sidebar_left_switch"
                            aria-pressed="false"
                            aria-label="Toggle Left Sidebar"
                        ></button>
                    </div>
                </aside>
            </div>

            {/* MAIN CONTENT */}
            <div className="frame_main__area--middle_center">
                <main className="main_content rail" role="main">
                    <section id="intro">
                        <h1>Stylescape with React</h1>
                        <p>
                            This example demonstrates using Stylescape with React and Vite for
                            fast development and optimized production builds.
                        </p>

                        <h4>⚛️ Why React + Vite?</h4>
                        <ul>
                            <li>Lightning fast HMR (Hot Module Replacement)</li>
                            <li>React's component-based architecture</li>
                            <li>Optimized production builds</li>
                            <li>Built-in Sass support</li>
                        </ul>
                    </section>

                    <hr />

                    <section id="setup">
                        <h2>Setup</h2>

                        <h3>1. Install dependencies</h3>
                        <pre><code>npm install stylescape react react-dom
npm install -D vite @vitejs/plugin-react sass</code></pre>

                        <h3>2. Import in your Sass</h3>
                        <pre><code>{`// src/styles/main.scss
@use "stylescape";`}</code></pre>

                        <h3>3. Import in your entry file</h3>
                        <pre><code>{`// src/main.jsx
import './styles/main.scss';
import 'stylescape';`}</code></pre>

                        <h3>4. Run development server</h3>
                        <pre><code>npm run start</code></pre>
                    </section>

                    <hr />

                    <section id="components">
                        <h2>Components</h2>

                        <h3>Accordion</h3>
                        <div data-ss="accordion">
                            <details>
                                <summary>What is React?</summary>
                                <p>React is a JavaScript library for building user interfaces with a component-based architecture.</p>
                            </details>
                            <details>
                                <summary>Why use Vite with React?</summary>
                                <p>Vite offers instant server start and lightning-fast HMR, making React development much faster.</p>
                            </details>
                            <details>
                                <summary>How does Stylescape integrate?</summary>
                                <p>Simply import the Stylescape SCSS and JS in your entry file, then use the CSS classes in your React components.</p>
                            </details>
                        </div>

                        <h3>Buttons</h3>
                        <div className="button_group">
                            <button className="button">Default Button</button>
                            <button className="button button--primary">Primary Button</button>
                        </div>
                    </section>
                </main>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="frame_main__area--middle_right rail">
                <aside
                    className="sidebar--right"
                    id="sidebar_right"
                    role="navigation"
                    data-ss="aside"
                    data-ss-aside-menu="sidebar_right_menu"
                    data-ss-aside-switch="sidebar_right_switch"
                >
                    <nav id="sidebar_right_menu" className="sidebar__menu" aria-label="Sidebar Right Content Navigation">
                        <section className="sidebar__content rail" role="region">
                            <h2>Resources</h2>
                            <ul>
                                <li><a href="https://github.com/stylescape/stylescape">GitHub</a></li>
                                <li><a href="https://www.scape.style/">Documentation</a></li>
                                <li><a href="https://vitejs.dev/">Vite Docs</a></li>
                                <li><a href="https://react.dev/">React Docs</a></li>
                            </ul>
                        </section>
                    </nav>

                    <div className="sidebar__control" role="group" aria-label="Sidebar Toggle">
                        <button
                            className="flipper--right"
                            id="sidebar_right_switch"
                            aria-pressed="false"
                            aria-label="Toggle Right Sidebar"
                        ></button>
                    </div>
                </aside>
            </div>

            {/* BOTTOM RIBBON */}
            <div className="frame_main__area--bottom">
                <footer className="ribbon--bottom">
                    <p>Stylescape React Example | <a href="https://github.com/stylescape/example-react">View on GitHub</a></p>
                </footer>
            </div>
        </div>
    );
}

export default App;
