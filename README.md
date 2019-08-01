This is the 2nd Milestone Project for Code Institute - Simple Game for Children (aged 3 years+)


# Pick the Animal Game

This is a simple animal association game, where the User must try and match the generated animal sound effect, with one of the three randomly generated animal cards. There are five rounds.

## UX

This web application has been designed for young children, aged 3years and older and their parents. The User should find this application educational, as it shows the user the correct sound effects matched to the correct animal. The result for selecting the right animal card in each round is a cheering sound, designed to reward the user. An incorrect selection of a animal card gives less enthusiastic alarm type sound, however, the pictures will stay in place until the correct card is selected, so the user gets to have "another shot" at the answer. The background is of a cartoon farm, which was selected to be more appealing to younger users. 

### User Stories:
As a new User (aged 3years +) to the web application, I want to:

* be able to understand how to play the game, and understand the difference between a right and wrong answer easily.
* to be able to identify the buttons, which should be large, colorful and easy to press when needed.
* hear cartoon-like, sound-effects when I play the game, so as to encourage my enjoyment, and keep me using the application for longer.

As a new User (older child/sibling or adult/parent) to the web application, I want to:

* be able to understand how to play the game, and be able to easily refer to the instructions so I can explain to the younger user, if needs be, how     to play the game
* be able to know who created this application.
* be able to know that this web application is somewhat educational, and that a younger user will get some educational use from it.

### Wireframes: 
* The Wireframes plan can be found in the Wireframes Folder in my github repository:
[My Wireframe](https://github.com/haydal810/Milestone-Project-2/blob/master/Wireframes/Initial%20Wireframe.jpg)


## Features

### Layout
This is a one page layout, designed with simplicity in mind, especially visually for younger Users. The layout is responsive, but operates in landscape only for mobile devices. Advice Text pops up on the device, when orientated in portrait.

### Buttons
The User Buttons in this application are big, colorful and designed with a childs small fingers in mind. The large green button is on the left hand side of the application, at the bottom, with a large Font Awesome "Play" Icon at the top of it, along with text. This immediately should draw the user to press it, to begin the game.

### Font
The font used is a google font, called "Anton". A visually appealing font, which I found was a nice nod to the old Nintendo font used years ago. Clean and crisp, and easily readable.

### Sound Effects
The Sounds that are heard in the application are simple, clear and for a younger user, almost cartoon like, to appeal to the younger user.


### Existing Features
* Title Name - This has a link in the designers name that will bring the user to an new window and the designers LinkedIn Profile.

* How to Play Button - This, when clicked, reveals a hidden div that has text explaining the rules of the game.

* Big Green Button - This button is pressed once to begin the game. It's the only time the button is required until the end of the game, as the game automatically flows from one round to the next once the correct picture is selected.

* Advice text window when device is held in portrait orientation - This is just to advise the user that the game works in landscape only.

### Features Left to Implement
* To add more animal pictures and associated animal sounds, and increase the rounds from 5 to 10.
* To introduce a scoreboard, so users can record how well they last played. This would mean, that the user would have to proceed to the next round, even if he selected an incorrect animal card. (Presently, the round doesnt progress until the correct answer is selected)
* To have more visual and audio feedback when a correct or incorrect animal card is selected, such as an animation that overlays on top of the game, and appears for a few seconds, before disappearing.

## Main Technologies Used

* This project uses HTML and CSS programming languages. 
* Javascript for the majority of the application. 

### Other technologies used:
* AWS Cloud9 - This was used as the IDE for building the website. 
* BootstrapCDN - The project uses Bootstrap4 to simplify the structure of the website and make the website responsive easily. https://getbootstrap.com/
* Fontawesome - Used to provide icons from FontAwesome throughtout the site. https://fontawesome.com/
* Google Fonts - The project uses Google fonts to style the website fonts. https://fonts.google.com/
* AutoPrefixer - This project used AutoPrefixer to make sure the css code is valid for all browsers. https://autoprefixer.github.io/


## Testing

### User Testing

User testing - the game was presented to users of a variety of ages for feedback on UX.
This type of testing was done during the early stages of development. Surprising, the game itself was made to operate simplier, due to feedback that was received from users, especially younger users. Younger users preferred to use just one button, as opposed to three buttons, that were present in earlier iterations of the game.

### Below are the list of Internet Browsers I used to test the display of the website:

1. Google Chrome (Version 74.0)
    * Chrome Lighthouse was used to audit the website.
2. Mozilla Firefox (Version 67.0)
3. Microsoft Edge (Version 44.17763.1.0)
4. Internet Explorer 11 (Version 11.615.17763.0)

I tested the web application on the above web browsers. There were no issues with Google Chrome or Microsoft Edge.

Internet Exployer did have difficulties with button functionality. Further investigation didn't find what the cause of this was. It was thought that maybe the security level of the browser was too severe, but that was not the case, as active scripting was already enabled in the security settings.

Mozilla Firefox did load the web application correctly, and basic functionality was OK, however the only aspect that wasn't working was any of the sound effects. Checking the console for errors, I found: "HTTP “Content-Type” of “video/3gpp” is not supported. Load of media resource https://haydal810.github.io/Milestone-Project-2/assets/audio/filename.mp3 failed."
These issues with other browsers have not been addressed yet.

### Below are the list of websites I used to test the HTML, CSS and JS code:

1. [W3C HTML Validator](https://validator.w3.org/) This is a HTML online validitor.
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) This is a CSS online validitor.
3. [CSS Lint](http://csslint.net/) CSS Lint is an open source CSS code quality tool I used.
4. [JS Lint](https://www.jslint.com/)

#### Meeting the needs of the user stories (as described in the UX section of this README file)

#### As a new User (aged 3years +) to the web application, I want to be able to understand how to play the game, and be able to easily refer to the instructions so I can explain to the younger user, if needs be, how to play the game

The web application is visually easy to look at: Simple Big Button at the bottom, with a suitable Font Awesome Icon, to indicate to the user, its functionality. The animal pictures are clear to see, with no confusion as to what the animal is. The game is designed primarily for mobile devices, although it is responsive on all devices. Audio feedback is present, when a right or wrong card selection is made, making the game more easier to understand. The "how to play" button on the top right hand side of the game, when clicked, gives a brief and concise rundown of how the game is played.

#### As a new User (aged 3years +) to the web application, I want to to be able to identify the buttons, which should be large, colorful and easy to press when needed.

The web application has a large green button at the bottom of the screen. This is the only button a user needs to press, to begin the game. As the game progresses, the green button is ghosted, and is no longer required until a new game begins. The game is designed so the next round plays automatically after the selection of the correct animal card.


#### As a new User (aged 3years +) to the web application, I want to hear Cartoon-like, sound-effects when I play the game, so as to encourage my enjoyment, and keep me using the application for longer.

This web application has sound effets that are easy to hear and give feedback to the user as to why they occured. An incorrect animal card selections gives a slightly negative "alarm-type" sound, whereas a correct animal card selection gives the user an "applause" sound effect, which is designed to reward the user for getting it right. 


#### As a new User (older child/sibling or adult/parent) to the web application, I want to be able to understand how to play the game, and be able to easily refer to the instructions so I can explain to the younger user, if needs be, how to play the game
The game has a button on the top right hand side of the window. Once clicked it gives a brief outline of how the game is played, along with a "start game" button at the bottom of the window, which will start the game again.

#### As a new User (older child/sibling or adult/parent) to the web application, I want to be able to know who created this application.
The game has a title on the top left hand side. In the title, the is a link attached the the name of the designer. This brings the user to the designers LinkedIn page, where additional info can be sought.

#### As a new User (older child/sibling or adult/parent) to the web application, I want to be able to know that this web application is somewhat educational, and that a younger user will get some educational use from it.
The game is centered around everyday animals and the sounds they make. It is envisaged that a young user will learn what animals make which sound, thereby educating them.

## Deployment

This project was developed using the AWS Cloud9 IDE, committed to git and pushed to GitHub using the built in function within AWS Cloud9.
From there it was deployed to GitHub Pages from its GitHub repository.
The website is published here: https://haydal810.github.io/Milestone-Project-2/

### To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:
1. Log into GitHub.
2. From the list of repositories on the screen, select haydal810/Milestone-Project-2
3. From the menu items near the top of the page, select Settings.
4. Scroll down to the GitHub Pages section.
5. Under Source click the drop-down menu labelled None and select Master Branch
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.
8. The website is published here: https://haydal810.github.io/Milestone-Project-2/

### How to run this project locally.
To clone this project from GitHub:

1. Follow this link to the Project GitHub repository.
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.
7. git clone https://github.com/USERNAME/REPOSITORY
8. Press Enter. Your local clone will be created.

Further information can be found [here](https://help.github.com/en/articles/cloning-a-repository)

## Credits

### Content
All text in this project was written by the developer.


### Media
- The animal pictures used in this site were obtained from: https://www.pexels.com/
- The background image was sourced from https://www.vectorstock.com/
- The sound effects were sourced from: https://www.youtube.com/

### Acknowledgements

- I'd like to thank my mentor, [Antonija Šimić](https://github.com/tonkec), for her useful and constructive feedback throughout the Milestone Project


### The content of this website is for educational purposes only. 
### Thank you.