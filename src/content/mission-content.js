import MissionCombinedTesting from "@images/mission-combined-testing.svg"
import MissionWalkingOutside from "@images/mission-walking-outside.svg"

export default {
  hero: {
    title: `Big security. Small tech. A solution custom-built to protect both you and your civil liberties.`,
  },
  paragraph: {
    title:
      "Safely return to normal without giving up our private, personal information.",
    text: `We believe that some kind of verified immunological passport is an essential next step for public health. We also believe such a solution does not need to put our privacy at risk.\nEarly on in the roll-out of shelter-in-place mandates and business shutdowns, we were taken aback by the rapid suspension of basic rights across many countries. Many have signaled a desire to extend government into the management and scoring of personal biological data. Some governments have already launched intrusive, mandatory programs to track citizens’ location, monitor their financial transactions, and delimit their movement in society.\nWe are deeply concerned by these trends, and believe a superior and privacy-protecting alternative can resolve the urgency motivating governments to sideline civil liberties in order to reopen economies. This is what we're racing to build: a platform that keeps data in individuals' hands, addresses critical error potential in singular test results, and allows for easy sharing with user consent.`,
  },
  valueProps: {
    title: "Together with our institutional partners, we seek to:",
    bullets: [
      {
        title: `Empower individuals`,
        text: `ImSafe is designed around individuals. Our goal is to allow each individual Pass holder to understand their own safety profile and demonstrate their own safety through the platform. Unlike location-tracking, contact-tracing, and other top-down surveillance programs, ImSafe uses individual data, not group-associations or proxies, to clear our users of unnecessary restrictions.`,
      },
      {
        title: `Lead with science and data`,
        text: `Though originally we focused on antibody-based immunity, we have expanded to make sure our algorithm also supports frequently tested non-infected individuals, helping both groups to establish confidence in their test results. Our approach to scoring employs Bayesian statistical analysis and joint probabilistic analysis to derive high-confidence predictive values that form the basis of our easily understandable score.`,
        image: MissionCombinedTesting,
      },
      {
        title: `Accelerate safe re-entry`,
        text: `Saving lives will require an open society and open economy, and we shouldn't have to risk rebounding infection and hospitalization rates to get there. Our strategy is clear: frequent, broad-based testing, with data and analytics in the hands of individuals. We believe that smart data analytics can help to reduce errors, lower testing costs, and keep our family, friends, colleagues, and neighbors safe, without sacrificing our privacy.`,
      },
      {
        title: `Pragmatically minimize restrictions and intrusions`,
        text: `Without this solution, we fear that businesses, states, and countries will reopen based on singular tests, not taking into account the significant and dangerous potential for test-error in both false-positives and false-negatives. We also fear leaders may insist on loosening critical civil liberties. This is why we've built our platform to be independent, consent-only, and are committed to keeping individuals' data in their hands.`,
        image: MissionWalkingOutside,
      },
      {
        title: `Maximize security and privacy`,
        text: `We protect user data with the best in digital security, in line with both HIPAA and GDPR best practices. Our security measures cover personal identifying information, test results, and score data. All records are encrypted at rest and in transit. User-identifying data is structurally segregated from test records, and the APIs for accessing the two are separated and incapable of bulk record collection. All non-API access to data is heavily authenticated and logged. Data access through individually approved sharing is extended only to authenticated parties.`,
      },
      {
        title: `Earn trust through transparency`,
        text: `All of our underlying software is Open Source and auditable by anybody with a Github account. Because we are following encryption and authentication best practices, this doesn’t compromise individuals’ data. Rather, it ensures that our software is thoroughly scrutinized. For further auditability, we log all data inputs as well as all checks on data to a blockchain with each record decryptable only by the individual who owns it. This allows anyone to validate that the ledger has not been tampered, and any user to decrypt their specific records to validate that their records on the immutable ledger match their records in the app. Together, these checks ensure that our software is secure and the underlying data is accurate and unchanged.`,
      },
    ],
  },
}
