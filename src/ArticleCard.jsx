function ArticleCard() {
  return (
    <>
      <article className="card">
        <div className="flex-container">
          <div className="avatar">
            <img
              className="avatar-image"
              src="https://doodleipsum.com/100x100/avatar-4?bg=fefefe&i=c74279ef864f00f6facff4be8750c3af"
              alt=""
            />
          </div>
          <div className="snippet">
            <h1>Conventional Commits</h1>
            <p className="author-date">by Author | Date</p>
            <div className="flex-container tags">
              <span className="tag-items">Git</span>
              <span className="tag-items">React</span>
              <span className="tag-items">Typescript</span>
            </div>
            <p className="card-summary">
              Hey, take a look at the earthlings. Goodbye! Eventually you do
              plan to have dinosaurs on your dinosaur tour, right?
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default ArticleCard;
