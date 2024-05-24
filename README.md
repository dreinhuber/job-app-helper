## Idea

Basically this extension will detect which job board/application site you're on (workday, greenhouse, jobvite, etc.) and produce a pop up with whatever information is required for whichever step you're currently on.

## Structure:

It's going to be a pretty basic "3-page" structure - I played around with react router but I don't think it works with browser extensions, so I'm using switch case statements to conditionally render the pages.

### Homepage:

Essentially just two buttons, `Applicant Info` and `Fill-In Helper`, when clicked it renders the respective pages, which contain a link back to the "Homepage"

### Applicant Info:
#### MVP:
A form that lets the user input the usual information required by a job application:
- Personal info, name, phone, address, etc.
- Work Experience
- Educational Experience
- button to return to homepage

#### Other Ideas/post MVP:
- Store Resume/Generic Cover Letter
- Custom entries for other responses

### Fill-In Helper:
#### MVP:
- Pulls the responses to the Applicant Info form from the local browser storage and makes it available to copy to the clipboard
- should just be able to click on the relevant response and paste it into the application field
- button to return to homepage

#### Other Ideas/post MVP:
- maybe automate some of the filling out - this sort of happens anyway if personal info is stored in browser, but it could be cool to automatically upload a resume, automatically fill in work experience, etc.
    - this should probably come with a feature that marks form elements that maybe aren't certain to have been copied over properly by adding a red border around those input fields.
 

# Issues:
Webpack is running into space issues - main is getting bloated. I think it may have to do with the way I'm passing the full applicant info to every input component? Not 100% but I may be able to use the useContext hook to offload some of this - there's no reason to be doing this anyway.


