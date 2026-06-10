/**
 * Yamaha Universe / Yamaverse - Reusable Web Components
 * This file defines the custom HTML elements for the Navbar and Footer components
 * to enable a modular design across the landing and legal pages.
 */

// Custom Navbar Component
class MainNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="navbar">
                <div class="container nav-container">
                    <div class="logo">
                        <a href="index.html" style="text-decoration: none; color: inherit; display: inline-block;">
                            YAMAHA FIFA<span class="logo-accent"> FOOTBALL CHARACTER</span>
                        </a>
                    </div>
                </div>
            </header>
            <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle theme">
                <!-- Sun Icon -->
                <svg class="sun-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <!-- Moon Icon -->
                <svg class="moon-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
        `;

        // Handle Scroll Effect inside Navbar Component
        const navbar = this.querySelector('.navbar');
        if (navbar) {
            // Apply scrolled class initially if page is already scrolled on load
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            }

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }, { passive: true });
        }

        // Handle Theme Toggle Logic
        const toggleBtn = this.querySelector('#theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }
    }
}

// Custom Footer Component
class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="container footer-container">
                    <div class="footer-top">
                        <div class="footer-brand">
                            <div class="logo">YAMAHA FIFA<span class="logo-accent"> FOOTBALL CHARACTER</span>
                            </div>
                            <p class="footer-tagline">Rev Your Heart in the Digital Age. Discover your perfect AI persona.</p>
                        </div>
                        <div class="footer-nav">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-of-service.html">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div class="footer-social">
                            <h4>Connect with Yamaha Motorcycles Bangladesh - ACI Motors</h4>
                            <div class="social-links">
                                <a href="https://www.facebook.com/Yamahabd/" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/yamahamotorcycles_bd_acimotors" class="social-icon"
                                    aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@YAMAHABangladesh" class="social-icon" aria-label="Youtube" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.95-1.92 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z">
                                        </path>
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2026 Yamaha AI Experience. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Custom Head Component to dynamically inject common <head> elements
class MainHead extends HTMLElement {
    connectedCallback() {
        // Load and apply theme immediately to avoid page flash
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        const title = this.getAttribute('title') || document.title || 'See yourself in a Yamaverse';
        const description = this.getAttribute('description') || (document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').getAttribute('content') : '') || 'Enter the Yamaverse and discover your AI-generated persona.';
        const extraCss = this.getAttribute('extra-css') || '';
        const image = this.getAttribute('image') || (document.querySelector('meta[property="og:image"]') ? document.querySelector('meta[property="og:image"]').getAttribute('content') : '') || 'assets/Yamaha_Persona-1.jpg';
        const url = this.getAttribute('url') || (document.querySelector('meta[property="og:url"]') ? document.querySelector('meta[property="og:url"]').getAttribute('content') : '') || window.location.href;

        // Resolve absolute URL for the image (social cards/scrapers require absolute URLs)
        let absoluteImageUrl = image;
        if (image && !image.startsWith('http://') && !image.startsWith('https://')) {
            try {
                absoluteImageUrl = new URL(image, window.location.href).href;
            } catch (e) {
                absoluteImageUrl = window.location.origin + '/' + image;
            }
        }

        // Set Document Title
        document.title = title;

        // Set Meta Description
        let descMeta = document.querySelector('meta[name="description"]');
        if (!descMeta) {
            descMeta = document.createElement('meta');
            descMeta.name = 'description';
            descMeta.content = description;
            document.head.appendChild(descMeta);
        } else {
            descMeta.setAttribute('content', description);
        }

        // Define all common head tags, including Open Graph (Facebook/LinkedIn) and Twitter Cards
        const headTags = [
            { tag: 'meta', attrs: { charset: 'UTF-8' } },
            { tag: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } },
            { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
            { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
            { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Orbitron:wght@500;700;900&display=swap' } },
            { tag: 'link', attrs: { rel: 'stylesheet', href: 'css/style.css' } },
            { tag: 'link', attrs: { rel: 'icon', href: 'favicon.ico', sizes: 'any' } },
            { tag: 'link', attrs: { rel: 'icon', href: 'icons/yamaverse-favicon.svg', type: 'image/svg+xml' } },
            { tag: 'link', attrs: { rel: 'apple-touch-icon', href: 'icons/yamaverse-icon-180.png' } },
            { tag: 'link', attrs: { rel: 'manifest', href: 'site.webmanifest' } },
            { tag: 'meta', attrs: { name: 'theme-color', content: savedTheme === 'dark' ? '#050818' : '#f5f6fa' } },

            // Open Graph / Facebook / Instagram / LinkedIn
            { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
            { tag: 'meta', attrs: { property: 'og:site_name', content: 'Yamaverse' } },
            { tag: 'meta', attrs: { property: 'og:title', content: title } },
            { tag: 'meta', attrs: { property: 'og:description', content: description } },
            { tag: 'meta', attrs: { property: 'og:url', content: url } },
            { tag: 'meta', attrs: { property: 'og:image', content: absoluteImageUrl } },

            // Twitter Cards
            { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
            { tag: 'meta', attrs: { name: 'twitter:title', content: title } },
            { tag: 'meta', attrs: { name: 'twitter:description', content: description } },
            { tag: 'meta', attrs: { name: 'twitter:image', content: absoluteImageUrl } }
        ];

        // Append common tags to document.head if they don't already exist
        headTags.forEach(item => {
            let selector = item.tag;
            if (item.attrs.href) {
                selector += `[href="${item.attrs.href}"]`;
            } else if (item.attrs.name) {
                selector += `[name="${item.attrs.name}"]`;
            } else if (item.attrs.property) {
                selector += `[property="${item.attrs.property}"]`;
            } else if (item.attrs.charset) {
                selector += `[charset="${item.attrs.charset}"]`;
            }

            if (!document.head.querySelector(selector)) {
                const element = document.createElement(item.tag);
                Object.keys(item.attrs).forEach(key => {
                    element.setAttribute(key, item.attrs[key]);
                });
                document.head.appendChild(element);
            }
        });

        // Append extra CSS stylesheet if supplied
        if (extraCss) {
            let selector = `link[href="${extraCss}"]`;
            if (!document.head.querySelector(selector)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = extraCss;
                document.head.appendChild(link);
            }
        }
    }
}

// Define the custom elements
customElements.define('main-head', MainHead);
customElements.define('main-navbar', MainNavbar);
customElements.define('main-footer', MainFooter);
