import { useEffect, useState } from 'react'

const ACCESS_CODE = 'Student26'

// Each entry preserves the exact wording/numbering as provided.
// Rendered with white-space: pre-line so internal line breaks are kept
// without altering the text itself.
const QUESTIONS_PART_ONE = [
  'Further pt teaching needed when pt say they’re going to increase their fat-soluble vitamin — Vitamin K is fat soluble & doesn’t need to be increased but taken consistently.',
  'Lab tests to consider for pt on Coumadin — answer option is PT/INR (spelt out in full).',
  'What to do before giving digoxin — take apical pulse for a minute.',
  'What happens with too much levothyroxine (Synthroid)?\nIatrogenic hyperthyroidism.',
  'Pt on lisinopril (Zestril) — be concerned with?\nA rare but serious side effect: angioedema.',
  'The most dangerous side effect of warfarin:\nHemorrhage.',
  'What happens when you skip baclofen (Lioresal)?\nYou get seizures.',
  'What’s a big side effect with baclofen to watch out for?\nRebound muscle spasticity that could be life threatening & even death.',
  'All are to be watched in pt on statins except:\nSJS.\nThe options are rhabdomyolysis, which is an adverse effect for statins. Other options are HFI, AST/ALT & liver damage. All these are required & are concern except SJS.',
  'Know signs of hypoglycemia:\nSweaty (diaphoresis), trembling, clammy.',
  'Order to crush Ativan, calcium & propranolol ER/SR — crush all but spare propranolol.',
  'What deficiency is caused by vitamin B9 lack? — folic\nMegaloblastic anemia.',
  'Pt teaching when pt is confused about vitamin 9 being for pernicious anemia.\nLet/advise them to call doctor & clarify.\nDon’t tell them the answer that has B12 (doctor is wrong, take B12).',
  'Pt in a private mental facility refuses scheduled Ativan. What do you do?\nWaste med & document.',
  'Know “6 rights.”',
  'Know how to dispose from a bottle.',
]

const QUESTIONS_PART_TWO = [
  'The goal of statin therapy is to lower LDL & ↑ HDL.',
  'A1c level: CA’s A1c is 5 — this is within normal range.\nThe option that says “you did a good job & your A1c is correct.”',
  'Classification of guanfacine:\nIt is a nonselective antihypertensive.',
  'Pt teaching regarding Concerta med for an ADHD child.\nWhen a parent says it’s a med that works quick & doesn’t stay long.',
  'Pt with pain prescribed Tylenol with codeine; other med and pt expect:\nStool softener because we don’t want pt to strain themselves.',
  'MOA of lactulose:\nExerts osmotic pressure on colon.',
  'What not to give with Amitiza (24 mcg)?\nMeals. (No meals if for constipation.)',
  'Which of the following is not a controlled med?\nEscitalopram (Lexapro??)\nThe others are benzos (lorazepam/Ativan, diazepam etc.) — they’re all controlled except escitalopram. It’s an SSRI.',
  'What you watch for in a pt on Risperdal & another med...',
  'What side effect to watch for in a pt on amitriptyline (amitripty??) — Agreements — ans:\nSuicidal thoughts, insomnia.',
  'What med to expect for a pt experiencing EPS?\nCogentin.',
  'What side effects to monitor for in a pt on Cogentin?\nThink anticholinergics — dry up: flushed face, dry mouth, blurry vision.',
  'What to watch out for patient on sertraline (Zoloft)?\nSuicidal thoughts — black box warning of SSRIs.',
  'How to administer insulin:\nLet another psych tech or RN verify.',
  'Insulin on a sliding scale:\nReading 118 — give 0. But mainly read sliding scale & if reading is above numbers on the scale — don’t give, call doctor.',
  'How insulin is given:\nPinch skin & administer @ 45° angle.',
  'Another important aspect is:\nRotate sites.',
  'When a pt is given insulin & another medication together, your biggest concern should be hypoglycemia. Know your symptoms: sweaty, dizzy, weak, shaking, etc.',
  'Pt is experiencing excessive hunger, excess urination, excess thirst — pt is hyperglycemic. This is related to...',
  'When giving ferrous sulfate.',
  'Antidote of heparin:\nProtamine sulfate.',
  'How to administer metformin (Glucophage):\nGive with meals.',
  'Black box warning of propranolol:\nAbrupt discontinuation — blah blah is dangerous.',
  'What class of med is propranolol?\nA non-selective beta blocker.',
  'Zestril (lisinopril) therapy:\nAngioedema is a rare but serious adverse reaction to be concerned with.',
  'Important teaching to pt on long-term omeprazole (Prilosec):\nOmeprazole can deplete magnesium levels.',
]

function TestQuestionsGate({ onClose }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  // Allow closing with the Escape key, like a typical modal.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  function handleSubmit(event) {
    event.preventDefault()
    if (code === ACCESS_CODE) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  function handleChange(event) {
    setCode(event.target.value)
    if (error) setError(false)
  }

  return (
    <div className="gate-overlay">
      <button
        type="button"
        className="gate-backdrop"
        aria-label="Close"
        onClick={onClose}
      />

      <div
        className="gate-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gate-heading"
      >
        <button type="button" className="gate-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {!unlocked && (
          <div className="gate-lock">
            <p className="eyebrow">Restricted Content</p>
            <h2 id="gate-heading" className="gate-lock__heading">
              Enter Access Code
            </h2>
            <p className="gate-lock__text">
              This content is restricted. Enter the access code to continue
              to the Pharm 4 Test Questions.
            </p>

            <form className="gate-form" onSubmit={handleSubmit} noValidate>
              <label className="gate-form__label" htmlFor="access-code">
                Access code
              </label>
              <input
                id="access-code"
                className="gate-input"
                type="password"
                value={code}
                onChange={handleChange}
                autoComplete="off"
                aria-invalid={error}
                aria-describedby={error ? 'gate-error' : undefined}
              />

              {error && (
                <p id="gate-error" className="gate-error" role="alert">
                  That code isn&rsquo;t correct. Please try again.
                </p>
              )}

              <div className="gate-form__actions">
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
                <button type="button" className="btn btn-ghost" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {unlocked && (
          <div className="gate-questions">
            <p className="eyebrow">Study Resource</p>
            <h2 id="gate-heading" className="gate-lock__heading">
              Pharm 4 Test Questions
            </h2>

            <div className="gate-questions__scroll">
              <ol className="gate-question-list">
                {QUESTIONS_PART_ONE.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ol>

              <p className="gate-note">Note: Read all instructions.</p>

              <ol className="gate-question-list" start={17}>
                {QUESTIONS_PART_TWO.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ol>
            </div>

            <div className="gate-form__actions">
              <button type="button" className="btn btn-ghost" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestQuestionsGate
