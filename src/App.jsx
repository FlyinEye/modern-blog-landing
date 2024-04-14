import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ArticleAIPrompt from "./pages/ArticleAIPrompt.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/ai-prompt-engineering" element={<ArticleAIPrompt />} />
      </Routes>
    </Router>
  );
}

export default App;
