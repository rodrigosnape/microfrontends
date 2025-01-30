import ReactDOM from "react-dom/client";

const App = () => (
  <>
    {}
    <style>
      {`.azul{
          color: blue;
        }`}
    </style>
    <h1 className="azul">Este é um Web Component do React</h1>
  </>
);

// Criar e montar o Web Component
const mountPoint = document.createElement("div");
document.body.appendChild(mountPoint);
ReactDOM.createRoot(mountPoint).render(<App />);
