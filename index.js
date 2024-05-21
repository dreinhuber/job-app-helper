document.body.style.border = "5px solid red";

const WORKDAY_STEPS = [
    "My Information",
    "My Experience",
    "Application Questions",
    "Voluntary Disclosures",
    "Self Identify",
    "Review"
]



let activeStepDiv = document.querySelectorAll('[data-automation-id="progressBarActiveStep"]')[0];

let activeStep = getActiveStep(activeStepDiv);

switch (activeStep) {
    case "My Information":
        console.log('weeeeeeeeeeeee found me');
        // pop up  address, name, etc. to copy and paste
        break;
    case "My Experience":
        console.log('not it');

        break;
}


function getActiveStep (div) {
    // let labelElements = div.getElementsByTagName("label");
    console.log(div)

    for (node of div.children) {
        let labelText = node.textContent;
        if (WORKDAY_STEPS.includes(labelText)) {
            return labelText;
        }
    }
}

