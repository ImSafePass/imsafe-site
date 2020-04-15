export default ({ assets, shortTitle }) => [
  {
    img: {
      src: assets.metricIll,
      className: "ml10 ml0--sm w365 w250--sm",
    },
    title: "A metric of health available to all",
    content: `${shortTitle} combines medical testing, the latest research, and statistical analysis to evaluate each individual’s immunological safety status. As laboratory and at-home tests become more broadly available, both antibody and active infection tests will provide critical results. We stitch together a variety of data points to arrive at a high-confidence, actionable score of your personal safety and safety to others.`,
  },
  {
    img: {
      src: assets.newNormalIll,
      className: "w450 w300--sm",
    },
    title: `A path to a better new normal`,
    content: `Without a solution for establishing immune safety at scale, we could see an incredibly prolonged lockdown with unimaginable social and economic consequences. While frequent testing is a critical source of data, the error potential in each individual test means that no single exam should inform decision making. ImSafe is uniquely focused on solving this problem without compromising individual privacy or public health.`,
  },
  {
    img: {
      src: assets.institutionsIll,
      className: "ml10 ml0--sm w365 w250--sm",
    },
    title: `A vital institution built for trust`,
    content: `There’s widespread discomfort with how large institutions treat our data these days. We founded ImSafe to solve this urgent problem without sacrificing an inch of privacy, individual control, or civil liberty. Your personal records are never shared without your explicit approval and consent, encrypted at rest and in transit, and separated from identifying information.`,
  },
]
