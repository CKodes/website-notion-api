import CalendarIcon from "../assets/calendar.svg";
import NotesIcon from "../assets/notes.svg";
import PersonIcon from "../assets/person.svg";

function ArticleDetails() {
  return (
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
          <span className="tag-items px-2">git commits</span>
          <span className="tag-items px-2">react</span>
          <span className="tag-items px-2">typescript</span>
        </div>
      </div>
    </section>
  );
}

export default ArticleDetails;
