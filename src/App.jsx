import ArticleCard from "./ArticleCard.jsx";
import ArticleCardSgds from "./ArticleCardSgds.jsx";
import "./App.css";

function App() {
  return (
    <>
      <main className="card-container">
        <ArticleCard />
        <ArticleCard />
        <ArticleCardSgds />
        <ArticleCardSgds />
      </main>
    </>
  );
}

export default App;
