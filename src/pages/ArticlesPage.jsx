import { Row } from "@govtechsg/sgds-react";
import ArticleDetails from "../components/ArticleDetails.jsx";
import ArticleSideNav from "../components/ArticleSideNav.jsx";

function ArticlesPage() {
  return (
    <main>
      <Row className="m-8 justify-content-center">
        <ArticleDetails />
        <ArticleSideNav />
      </Row>
    </main>
  );
}

export default ArticlesPage;
