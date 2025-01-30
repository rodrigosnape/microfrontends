import ReactDOM from "react-dom/client";
// Criando o componente principal
const App = () => (
  <>
    <style>
      {`h1 {color: #087ea4;}
      `}
    </style>
    <h1>Este é um Web Component do React</h1>
  </>
);
// Criando o Web Component para React
class ReactApp extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" }); // Usando Shadow DOM para isolar estilos
      const mountPoint = document.createElement("div");
      shadow.appendChild(mountPoint);

      ReactDOM.createRoot(mountPoint).render(<App />);
    }
  }
}
// Registrando o Web Component
customElements.define("react-app", ReactApp);
