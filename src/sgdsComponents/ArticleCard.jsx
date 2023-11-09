import ArticleTagItems from "../components/ArticleTagItems.jsx";
import CowImg from "../assets/card-img-cow.jpg";
import { Card } from "@govtechsg/sgds-react";
import "@govtechsg/sgds/css/sgds.css";

function ArticleCardSgds() {
  return (
    <>
      <Card className="article-card">
        <Card.Img
          variant="top"
          alt="Image of a cow grazing against a lush mountainous background."
          src={CowImg}
          className="mw-100"
        />
        <Card.Body className="">
          <Card.Title className="article-title m-0" as="h1">
            This is a H1 Title Card
          </Card.Title>
          <p className="article-author-date mb-2">by Author | Date</p>
          <div className="d-flex flex-row gap-3 mb-4">
            <ArticleTagItems />
            <ArticleTagItems />
            <ArticleTagItems />
          </div>

          <Card.Text className="article-summary ps-3">
            Hey, take a look at the earthlings. Goodbye! Eventually you do plan
            to have dinosaurs on your dinosaur tour, right?
          </Card.Text>
          <Card.Link
            href="https://unsplash.com/photos/brown-and-white-cow-on-green-grass-field-near-lake-during-daytime-_Abz8hOHsFA"
            target="_blank"
          >
            Read Article
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default ArticleCardSgds;
