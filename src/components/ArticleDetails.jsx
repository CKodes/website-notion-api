import { Col } from "@govtechsg/sgds-react";
import ArticleTagItems from "./ArticleTagItems";

import CalendarIcon from "../assets/calendar.svg";
import NotesIcon from "../assets/notes.svg";
import PersonIcon from "../assets/person.svg";

function ArticleDetails() {
  return (
    <Col lg="7">
      <section className="" aria-label="article details">
        <h1 className="m-0">Blog Article Title</h1>
        <div className="d-flex flex-column pt-2 pb-5 gap-2">
          <div className="d-flex flex-row gap-2">
            <div>
              <span aria-label="Article date">
                <img src={CalendarIcon} role="img"></img>
              </span>
            </div>
            <div>1st January 2024</div>
          </div>
          <div className="d-flex flex-row gap-2">
            <div>
              <span aria-label="Written by">
                <img src={PersonIcon} role="img"></img>
              </span>
            </div>
            <div>Riley Wee</div>
          </div>
          <div className="d-flex flex-row gap-2">
            <div>
              <span aria-label="Reading Time">
                <img src={NotesIcon} role="img"></img>
              </span>
            </div>
            <div>5 Minutes</div>
          </div>
          <div className="d-flex flex-row gap-3">
            <ArticleTagItems />
            <ArticleTagItems />
            <ArticleTagItems />
          </div>
        </div>
      </section>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2>Heading Two</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <h3>Heading Three</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </article>
    </Col>
  );
}

export default ArticleDetails;
