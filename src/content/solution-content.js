import SolutionDoctorGraph from "@images/solution-doctor-graph.svg"

const solutionContent = {
  hero: {
    title:
      "A secure, private, digital immune record to get us all to new normal, faster.",
    imgSrc: "solutionManPhone",
  },
  sections: [
    {
      title: "Transparent, error-reducing analysis.",
      text: `Each diagnostic and laboratory test has its own intrinsic potential for error. Advertised test accuracy alone (a test’s “sensitivity” and “specificity”) does not give us the critical answer to the probability that your actual status is accurately reflected by the test result. For this, we need to know, or at least estimate, the actual percentage of the regional population that shares this status (“prevalence”). Especially early in COVID-19 spread, low prevalence makes the potential for individual misdiagnosis extremely high, even for tests with 90%+ sensitivity and specificity.\nWe use the latest data and research to derive high-confidence predictive values from each of your raw test results. This analysis clarifies the risk of false-positives and false-negatives for each of your tests. At every point along the way, we openly explain how our statistical algorithm works to reduce error margin, and to keep you and those you love safer.`,
      cta: {
        live: false,
        title: "Get Technical",
        text: "Read more about the Bayesian analysis that powers ImSafe.",
      },
    },
    {
      image: SolutionDoctorGraph,
      title: "A combined measure that goes beyond single tests.",
      text: `As laboratory and at-home tests become more broadly available, both antibody and active infection tests will provide critical information — but individual tests fall short.\nIt takes more than a single test to confidently determine an individual’s immunity to Covid-19, or for that matter, that they are virus-free. Even in ideal circumstances, the margin of error is too great for any one test result to be safely deemed decisive. We combine and analyze multiple tests and broader community data points to arrive at a single, high-confidence score that is easy to understand and communicate.`,
      cta: {
        live: false,
        title: "Get Technical",
        text:
          "Read more about the joint probabilistic analysis that powers ImSafe.",
      },
    },
    {
      title: "A safe, secure way to share your information on your own terms.",
      text: `It’s paramount to us that individuals always remain in control of their personal information. The information stored with ImSafe, as well as individual’s resulting scores, qualify as protected health information, so we think it’s important to treat it like any other private medical matter. The ImSafe Pass features consent-only sharing of encrypted values, authorized by two-factor authentication.`,
      cta: {
        live: false,
        title: "Get Technical",
        text:
          "Read more about the security and verification measures that protect ImSafe data.",
      },
    },
  ],
}

export default solutionContent
