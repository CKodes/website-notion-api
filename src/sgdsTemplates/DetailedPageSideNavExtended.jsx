import { Row, Col, Breadcrumb } from "@govtechsg/sgds-react";
import ArticleDetails from "../components/ArticleDetails.jsx";

function DetailedPageSideNavExtended() {
  return (
    <div>
      <Row className="m-8 justify-content-center">
        <Col lg="7">
          {/* <Breadcrumb className="mb-8">
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Library</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb> */}
          <ArticleDetails />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h2>Heading Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <h3>Heading Three</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </Col>
        <Col lg="2" className="d-none d-lg-block">
          <p>On this page</p>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            <li>
              <a href="" className="text-decoration-none">
                Blog Article Title
              </a>
            </li>
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <li>
                <a href="" className="text-decoration-none">
                  Heading Two
                </a>
              </li>
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                <li>
                  {" "}
                  <a href="" className="text-decoration-none">
                    Heading Three
                  </a>
                </li>
              </ul>
            </ul>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default DetailedPageSideNavExtended;
