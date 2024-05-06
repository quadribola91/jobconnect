import React, { useState } from "react";
import Fill1 from "./Fill1";
import Fill2 from "./Fill2";
import Fill3 from "./Fill3";

const ParentComponent = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && <Fill1 onNext={handleNext} />}
      {step === 2 && <Fill2 onNext={handleNext} />}
      {step === 3 && <Fill3 onPost={handleNext} />}
    </div>
  );
};

export default ParentComponent;
