import { Col } from "@govtechsg/sgds-react";

function ArticleSideNav() {
  return (
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
  );
}

export default ArticleSideNav;
