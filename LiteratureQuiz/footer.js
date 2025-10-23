class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e1b4b;
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: 4rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #a5b4fc;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: white;
        }
        .copyright {
          font-size: 0.9rem;
          color: #c7d2fe;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="index.html">������</a>
            <a href="literature.html">����������</a>
            <a href="bulgarian.html">���������</a>
          </div>
          <p class="copyright">&copy; 2024 ����������� ���������. ������ ����� ��������.</p>
        </div>
      </footer>
    `;
    }
}
customElements.define('custom-footer', CustomFooter);// JavaScript source code
