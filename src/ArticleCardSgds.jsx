import { Card } from "@govtechsg/sgds-react";
import { Button } from "@govtechsg/sgds-react/Button";
import "@govtechsg/sgds/css/sgds.css";

function ArticleCardSgds() {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          alt="Image of a cow grazing against a lush mountainous background."
          src="card-img-cow.jpg"
          className="max-width-100"
        />
        <Card.Body className="snippet">
          <Card.Title as="h1">This is a H1 Title Card</Card.Title>
          <p className="author-date">by Author | Date</p>
          <div className="flex-container tags">
            <span className="tag-items">Git</span>
            <span className="tag-items">React</span>
            <span className="tag-items">Typescript</span>
          </div>

          <Card.Text className="card-summary">
            Hey, take a look at the earthlings. Goodbye! Eventually you do plan
            to have dinosaurs on your dinosaur tour, right?
          </Card.Text>
          {/* <Button>Click Here</Button> */}
          {/* <Card.Link
            as={Button}
            href="https://unsplash.com/photos/brown-and-white-cow-on-green-grass-field-near-lake-during-daytime-_Abz8hOHsFA"
            target="_blank"
          >
            Read More
          </Card.Link> */}
          <Card.Link
            href="https://unsplash.com/photos/brown-and-white-cow-on-green-grass-field-near-lake-during-daytime-_Abz8hOHsFA"
            target="_blank"
          >
            Read More
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default ArticleCardSgds;
