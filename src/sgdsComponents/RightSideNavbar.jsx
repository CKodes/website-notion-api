import { SideNav } from "@govtechsg/sgds-react/SideNav";

function RightSideNavbar() {
  return (
    <div className="p-1rem">
      <h2>Related Articles</h2>
      <SideNav alwaysOpen defaultActiveKey={["0", "1"]}>
        <SideNav.Item eventKey="0">
          <SideNav.Link eventKey="nl-1" href="#">
            number one
          </SideNav.Link>
          <SideNav.Link eventKey="nl-2" href="#">
            number one
          </SideNav.Link>
          <SideNav.Link eventKey="nl-3" href="#">
            number one
          </SideNav.Link>
        </SideNav.Item>
      </SideNav>
    </div>
  );
}

export default RightSideNavbar;
