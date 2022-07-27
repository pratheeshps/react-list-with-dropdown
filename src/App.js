import "./styles.css";
import ErrorBoundary from "./ErrorBoundary";
import List from "./List";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <List />
      </div>
    </ErrorBoundary>
  );
}
