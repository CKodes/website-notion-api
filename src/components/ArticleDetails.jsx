function ArticleDetails() {
  return (
    <section className='p-1rem' aria-label='article details'>
      <h1 className='m-0'>Blog Article Title</h1>
      <div className='flex-column p-top-1rem gap-03rem'>
        <div className='flex-row gap-03rem'>
          <div>
            <span
              className='sgds-icon sgds-icon-calendar'
              role='img'
              aria-label='Article Date'
            ></span>
          </div>
          <div>1st January 2024</div>
        </div>
        <div className='flex-row gap-03rem'>
          <div>
            <span
              className='sgds-icon sgds-icon-person'
              role='img'
              aria-label='Written by'
            ></span>
          </div>
          <div>Riley Wee</div>
        </div>
        <div className='flex-row gap-03rem'>
          <div>
            <span
              className='sgds-icon sgds-icon-text-left'
              role='img'
              aria-label='Reading time'
            ></span>
          </div>
          <div>5 Minutes</div>
        </div>
      </div>
    </section>
  );
}

export default ArticleDetails;
