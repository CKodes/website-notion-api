import { SideNav } from "@govtechsg/sgds-react/SideNav";

function RightSideNavbar() {
  return (
    <div className="p-1rem">
      <h2>Table of Contents</h2>
      <SideNav alwaysOpen defaultActiveKey={["0", "1"]}>
        <SideNav.Item eventKey="0">
          <SideNav.Button>
            <h2>SideNav Item 1</h2>
          </SideNav.Button>
          <SideNav.Collapse>
            <SideNav.Link eventKey="nl-1" href="#">
              number one
            </SideNav.Link>
            <SideNav.Link eventKey="nl-2" href="#">
              number one
            </SideNav.Link>
            <SideNav.Link eventKey="nl-3" href="#">
              number one
            </SideNav.Link>
          </SideNav.Collapse>
        </SideNav.Item>
        <SideNav.Item eventKey="1">
          <SideNav.Button>
            <h2>SideNav Item 2</h2>
          </SideNav.Button>
          <SideNav.Collapse>
            <SideNav.Link eventKey="nl-4">number two</SideNav.Link>
            <SideNav.Link eventKey="nl-6">number two</SideNav.Link>
            <SideNav.Link eventKey="nl-7">number two</SideNav.Link>
            <SideNav.Link eventKey="nl-8">number two</SideNav.Link>
          </SideNav.Collapse>
        </SideNav.Item>
        <SideNav.Item eventKey="2">
          <SideNav.Button href="#">
            <h2>SideNav Item 3</h2>
          </SideNav.Button>
        </SideNav.Item>
      </SideNav>
    </div>
  );
}

export default RightSideNavbar;
