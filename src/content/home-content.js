module.exports = {
  hero: {
    title: `A secure and private way to share your immune status`,
    subtitle: `We can get back to normal in the wake of Covid-19 without compromising civil liberties or personal privacy.`,
    imgSrc: `homeHeroIll`,
  },
  cta: {
    text: `We're looking for partners in healthcare, government, tech, and more.`,
    buttonText: `Get Involved`,
    dest: `/contact-us`,
  },
  sections: [
    {
      img: {
        src: `homeMetricIll`,
        className: "ml10 ml0--sm w365 w250--sm",
      },
      title: "A metric of health available to all",
      content: `ImSafe combines medical testing, the latest research, and statistical analysis to evaluate each individual’s immunological safety status. As laboratory and at-home tests become more broadly available, both antibody and active infection tests will provide critical results. We stitch together a variety of data points to arrive at a high-confidence, actionable score of your personal safety and safety to others.`,
      linkText: "Learn more",
      linkDest: null, // Will show up if destination provided
    },
    {
      img: {
        src: `homeNewNormalIll`,
        className: "w450 w300--sm",
      },
      title: `A path to a better new normal`,
      content: `Without a solution for establishing immune safety at scale, we could see an incredibly prolonged lockdown with unimaginable social and economic consequences. While frequent testing is a critical source of data, the error potential in each individual test means that no single exam should inform decision making. ImSafe is uniquely focused on solving this problem without compromising individual privacy or public health.`,
      linkText: "Learn more",
      linkDest: "/contact-us" || null, // Will show up if destination provided
    },
    {
      img: {
        src: `homeInstitutionsIll`,
        className: "ml10 ml0--sm w365 w250--sm",
      },
      title: `A vital institution built for trust`,
      content: `There’s widespread discomfort with how large institutions treat our data these days. We founded ImSafe to solve this urgent problem without sacrificing an inch of privacy, individual control, or civil liberty. Your personal records are never shared without your explicit approval and consent, encrypted at rest and in transit, and separated from identifying information.`,
      linkText: "Learn more",
      linkDest: null, // Will show up if destination provided
    },
  ],
  applications: [
    {
      width: 450,
      src: "homeHealthcareWorkersIll",
      title: "Clearing healthcare workers",
      content: `The frontline health workforce’s role and collective capacity is under historic stress. Without tactical support, we expose healthcare workers and their patients to unnecessary risks. With ImSafe, doctors, nurses, and caretakers with confirmed immunity status can confidently return to the frontlines, serving the most vulnerable and at-risk populations.`,
    },
    {
      width: 350,
      src: "homeWorkforceIll",
      title: "Reopening the workforce",
      content: `Emergency measures that save lives have also brought economic activity to a near-halt. Increased screening and careful analysis of test data allows employers and local officials to safely re-open for business. ImSafe allows businesses and government to base their critical decision-making on the high-confidence computed status of each individual’s combined test results. Let’s get back to work and back to normal.`,
    },
    {
      width: 300,
      title: "Catching a ride",
      src: "homeRideIll",
      content: `ImSafe will allow drivers and riders to assess their individual risk when calling a ride. Transportation partners can integrate ImSafe scores into driver and passenger profiles, so that the elderly and immunosuppressed can regain their mobility. Transit systems could integrate ImSafe to ensure safe transport for the broader population.`,
    },
    {
      width: 330,
      title: "Back to school",
      src: "homeSchoolIll",
      content: `With primary schools suspended and entire university and college campuses shut down, teachers and students are struggling to maintain progress in a wholly new paradigm. Parents also struggle as they juggle their other responsibilities with at-home kids and shuttered childcare. ImSafe arms administrators with the information they need to keep their communities protected, reopen dorms and classes, and protect their staff.`,
    },
  ],
}
