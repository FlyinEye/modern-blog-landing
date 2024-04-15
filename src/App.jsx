import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ArticleAIPrompt from "./pages/ArticleAIPrompt.jsx";
import ArticleGenerativeAI from "./pages/ArticleGenerativeAI.jsx";
import ArticleAIConsulting from "./pages/ArticleAIConsulting.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/ai-prompt-engineering" element={<ArticleAIPrompt />} />
        <Route path="/generative-ai-visuals" element={<ArticleGenerativeAI />} />
        <Route path="/ai-consulting-services" element={<ArticleAIConsulting />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
