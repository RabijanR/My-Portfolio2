Rabijan Ragupalan — Portfolio2 Website

Overview 
Portfolio follows expressjs  and nodejs structure with the 4 separate pages for the actual webpage:  
- `index.html` → Home page  
- `about.html` → About Me (includes `Me.jpg` and `Video.mp4`)  
- `projects.html` → Projects  
- `contact.html` → Contact Me  


- Assets:  
  - `Me.jpg` → my photo  
  - `background.jpg` → site background image  
  - `Video.mp4` → introduction video  


Color Scheme
I used a blue / gray theme to match my background image which is textured royal blue.  
The palette was tested by Adobe Color:

- Textured Royal Blue: '#114FB2'
- Dark Blue (fallback background): '#0f375e'  
- Accent Blue:' #2b6ca3'  
- Gray-Blue: '#6d8ea6'
- Off-White (text): '#eaf6ff'
- Neutral Gray: '#2b333b'

This made sure of good readability against the blue background and because its darker its easier to view in the sun on a phone.


Gradients
- Linear Gradient: was used in the site header (`.site-header`) for a subtle effect.  
- Angled Gradient (135°): was used in the hero section (`.hero`) to create a diagonal overlay for readability on top of the background image.  


Form & Validation
The **Contact Me** page contains a form with the following fields:  
- Name (required, min 2 characters)  
- Email (required, type="email")  
- Phone (required, pattern enforces digits, spaces, +, parentheses, dashes)  
- Comments (optional)  


Testing & Validation
The following tools were used to test and validate the site:  
- **HTML Validation:** [W3C Markup Validator](http://validator.w3.org/)  
- **CSS Validation:** [W3C CSS Validator](http://jigsaw.w3.org/css-validator/)  
- **Link Checker:** [W3C Link Checker](http://validator.w3.org/checklink)  
- **Accessibility:** [WAVE Tool](http://wave.webaim.org/)  
- **Spelling:** Checked using an online spell checker  

sources
- **Font Awesome** (https://fontawesome.com/)
-**expressjs** (https://expressjs.com/)

GitHub Repository: https://github.com/RabijanR/My-Portfolio2.git
Portfolio Access Link:https://my-portfolio2-r8ws.onrender.com/home