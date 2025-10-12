import Article from "./components/Article";
import AINewsPage from "./pages/AINews";
import Abouts from "./pages/Abouts";
import Community from "./pages/CommunityPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Abouts />} />
      <Route path="/news/article" element={<Article />} />
      <Route path="/community" element={<Community />} />
      <Route path="/news/ai" element={<AINewsPage />} />
    </Routes>
  );
}

export default App;
