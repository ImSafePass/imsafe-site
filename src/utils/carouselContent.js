import React from "react"

import { roundTo } from "./number"

const contentData = ({ shortTitle, assets }) => [
  {
    width: 450,
    asset: assets.healthcareWorkersIll,
    title: "Clearing healthcare workers",
    content: `The frontline health workforce’s role and collective capacity is under historic stress. Without tactical support, we expose healthcare workers and their patients to unnecessary risks. With ImSafe, doctors, nurses, and caretakers with confirmed immunity status can confidently return to the frontlines, serving the most vulnerable and at-risk populations.`,
  },
  {
    width: 350,
    asset: assets.workIll,
    title: "Reopening the workforce",
    content: `Emergency measures that save lives have also brought economic activity to a near-halt. Increased screening and careful analysis of test data allows employers and local officials to safely re-open for business. ImSafe allows businesses and government to base their critical decision-making on the high-confidence computed status of each individual’s combined test results. Let’s get back to work and back to normal.`,
  },
  {
    width: 300,
    title: "Catching a ride",
    asset: assets.catchRideIll,
    content: `${shortTitle} will allow drivers and riders to assess their individual risk when calling a ride. Transportation partners can integrate ImSafe scores into driver and passenger profiles, so that the elderly and immunosuppressed can regain their mobility. Transit systems could integrate ImSafe to ensure safe transport for the broader population.`,
  },
  {
    width: 330,
    title: "Back to school",
    asset: assets.backToSchoolIll,
    content: `With primary schools suspended and entire university and college campuses shut down, teachers and students are struggling to maintain progress in a wholly new paradigm. Parents also struggle as they juggle their other responsibilities with at-home kids and shuttered childcare. ImSafe arms administrators with the information they need to keep their communities protected, reopen dorms and classes, and protect their staff.`,
  },
]

export default data => {
  const content = contentData(data)

  return content.map(({ title, asset, width, content }, ind) => (
    <div className="flex flex-col pb40--sm flex-ai--c" key={title}>
      <div className={`h400--lg flex flex-col flex-jc--c h250--sm mt30--sm`}>
        <img className={`w${roundTo(width)}--lg`} alt={title} src={asset} />
      </div>
      <div className="flex flex-col h250--sm flex-ai--fs flex-ai--c--sm">
        <h4 className="color--dark-purple mb20--sm mt40--sm center">{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  ))
}
