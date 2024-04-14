import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ArticleAIPrompt from "./pages/ArticleAIPrompt.jsx";
import ArticleGenerativeAI from "./pages/ArticleGenerativeAI.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/ai-prompt-engineering" element={<ArticleAIPrompt />} />
        <Route path="/generative-ai-visuals" element={<ArticleGenerativeAI />} />
      </Routes>
    </Router>
  );
}

export default App;
