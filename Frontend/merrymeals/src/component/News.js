import React from "react";
import news1 from '../image/news1.png'

const News = () => {
  return (
    <div className="container1">
      <h2 className="text-center mt-3 mb-4">
        KEEPING SENIORS SAFE AMID COVID-19
      </h2>
      <p className="text-center">
        Vulnerable seniors are at the greatest risk amid COVID-19. Local Meals
        on Wheels programs are on the front lines every day, focused on doing
        all they can to keep older Singaporeans safe and nourished in
        communities across the country. The costs and efforts needed to protect
        seniors from COVID-19 require additional emergency funds, and that is
        why we are asking federal lawmakers, corporations, foundations and the
        general public to remember these vulnerable seniors in our national
        response. We’re monitoring the rapidly evolving COVID-19 situation and
        will continue to share updates as quickly as possible. In the meantime,
        we ask for your help.
      </p>

      <div class="text-center mt-5 mb-5">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/510858692?h=f2df50e0fa"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <h3 className="mt-5 mb-4">IMPACT WHERE IT'S NEEDED MOST</h3>
      <p className="mb-4">
        When the COVID-19 pandemic hit, millions of older adults in Singapore
        found themselves more vulnerable and in urgent need of support. Meals on
        Wheels Singapore rose to the challenge, delivering an additional 1
        million meals and reaching an additional one-hundred thousand seniors.
        <br></br>
        <br></br> By July 2020, the Meals on Wheels COVID-19 Response Fund
        enabled us to successfully scale our efforts and serve 47% more seniors
        than before the pandemic, increasing the number of meals distributed by
        77%. <br></br>
        <br></br>Meals on Wheels Singapore allocated $10.3 million directly to
        the frontlines during the pandemic, providing over 1,000 grants to
        support 628 local communities. Our impact spanned the nation and
        extended into the communities that needed it the most. <br></br>
        <br></br>Thanks to incredible generosity, we have been able to provide
        healthy meals, human connection, and vigilant care for millions of
        Singaporean seniors. That's why we have launched the "Make Good Go
        Further™" campaign to celebrate the positive impact our community has
        made for seniors affected by COVID-19 in Singapore. However, our work is
        far from over. We remain committed to safely serving seniors in need
        throughout the remainder of the pandemic and well into the future.
      </p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={news1} alt="Second profile" style={{ marginRight: '50px' }}/>
  <div>
    <h3 className="mt-5 mb-4">SCALING THE SAFETY NET FOR SENIORS</h3>
    <p>
      As we chart a way out of the COVID-19 crisis and towards a more stable future, we lead the national network of local programs determined to combat senior isolation and hunger. This success requires financial sustainability, so we’ve launched the Go Further Fund. This fund will directly help scale our vital lifeline for older adults by supporting communities in crisis, building capacity, and driving innovation to enable our nation to tackle these issues head-on.
    </p>
    <p>
      The Meals on Wheels Go Further Fund will help ensure local communities have what they need to continue to deliver a vital lifeline to our most at-risk Singaporeans.
    </p>
    <p>
      If you’re interested in exploring partnership opportunities, including investing in the Go Further Fund, please contact kristine@mealsonwheelssingapore.org or 301-233-9998.
    </p>
    <a href="/donate" class="btn btn-info fs-5 fw-bold text-light mt-3 mb-5">DONATE NOW</a>
  </div>
</div>
    
    </div>
  );
};

export default News;
