class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo { 
          color: white; 
          font-weight: bold; 
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        ul { 
          display: flex; 
          gap: 1.5rem; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
        }
        a { 
          color: white; 
          text-decoration: none; 
          transition: opacity 0.2s;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
        }
        a:hover { 
          opacity: 0.9; 
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s;
        }
        a:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          ul {
            gap: 1rem;
          }
        }
      </style>
      <nav>
        <a href="index.html" class="logo">
          <i data-feather="book"></i>
          <span></span>
        </a>
        <ul>
          <li><a href="index.html">Начало</a></li>
          <li><a href="literature.html">Литература</a></li>
          <li><a href="bulgarian.html">Български</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);