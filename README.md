This is my 2nd Milestone Project for Code Institute - Simple Game for Children aged 3 years+


# Pick the Animal Game

This is a simple animal association game, where the User must try and match the generated animal sound effect, with one of the the three randomly generated animal cards. There are five rounds, each round generates layout of animal pictures.

## UX

This web application has been designed for young children, aged 3years and older and their parents. The User should find this application educational, as it shows the user the correct sound effects matched to the correct animal. The result for selecting the right animal card in each round is a cheering sound, designed to reward the user. An incorrect selection of a animal card gives less enthusiastic alarm type sound, however, the pictures will stay in place until the correct card is selected, so the user gets to have "another shot" at the answer. The background is of a cartoon farm, which was selected to be more appealing to younger users. 

### User Stories:
As a new User (aged 3years +) to the web application, I want to:

* be able to understand how to play the game, and understand the difference between a right and wrong answer easily.
* to be able to identify the buttons, which should be large, colorful and easy to press when needed.
* hear Cartoon-like, sound-effects when I play the game, so as to encourage my enjoyment, and keep me using the application for longer.
* be able to easily identify what each animal is on the animal card, so as to give me an understanding of how the game works.

As a new User (older child/sibling or adult/parent) to the web application, I want to:

* be able to understand how to play the game, and be able to easily refer to the instructions so I can explain to the younger user, if needs be, how     to play the game
* be able to know who created this application.
* be able to present this web application to a younger child, and know they will be entertained for at least a few minutes! 
* be able to know that this web application is somewhat educational, and that a younger user will get some educational use from it.

### Wireframes: 
* My Wireframes plan can be found in the Wireframes Folder in my github repository:
[My Wireframe](https://github.com/haydal810/Milestone-Project-2/blob/master/Wireframes/Initial%20Wireframe.jpg)


## Features

### Layout
This is a one page layout, designed with simplicity in mind, especially visually for younger Users. The layout is responsive, but operates in landscape only for mobile devices. Advice Text pops up on the device, when orientated in portrait.

### Buttons
The User Buttons in this application are big, colorful and designed with a childs small fingers in mind. The large green button is on the left hand side of the application, at the bottom, with a large Font Awesome "Play" Icon at the top of it, along with text. This immediately should draw the user to press it, to begin the game.

### Font
The font used is a google font, called "Anton". A visually appealing font, which I found was a nice nod to the old Nintendo font used years ago. Clean and crisp, and easily readable.

### Sound Effects
The Sounds that are heard in the application are simple, clear and for a younger user, almost cartoon like, t appeal to the younger user.


### Existing Features
* Title Name - This has a link in the designers name that will bring the user to an new window and the designers LinkedIn Profile.

* How to Play Button - This, when clicked, reveals a hidden div that has text explaining the rules of the game.

* Big Green Button - This button is pressed once to begin the game. It's the only time the button is required until the end of the game, as the game                         automatically flows from one round to the next once the correct picture is selected.

* Big Red Button - This button has a simple function: Restart the game. It has a onclick function that reloads the entire window. 

* Advice text window when device is held in portrait orientation - This is just to advise the user that the game works in landscape only.

### Features Left to Implement
* I would like to add more animal pictures and associated animal noises, and increase the rounds from 5 to 10.
* I would like to introduce a scoreboard, so users can record how well they last played. This would mean, that the user would have to proceed to the next round, even if he selected an incorrect animal card. (Presently, the round doesnt progress until the correct answer is selected)
* xxx

## Main Technologies Used

* This project uses HTML and CSS programming languages. 
* Javascript for the majority of the application. 

### Other technologies used:
* Cloud9 - This was used as the IDE for building the website. https://c9.io/login - change this to AWS
* BootstrapCDN - The project uses Bootstrap4 to simplify the structure of the website and make the website responsive easily. https://getbootstrap.com/
* Fontawesome - Used to provide icons from FontAwesome throughtout the site. https://fontawesome.com/
* Google Fonts - The project uses Google fonts to style the website fonts. https://fonts.google.com/
* AutoPrefixer - This project used AutoPrefixer to make sure the css code is valid for all browsers. https://autoprefixer.github.io/
* jQuery - This project uses jQuery to reference Javascript needed for the responsive navigation bar on every page. http://jquery.com/


## Testing

### Below are the list of Internet Browsers I used to test the display of the website:

1. Google Chrome (Version 74.0)
    * Chrome Lighthouse was used to audit the website.
2. Mozilla Firefox (Version 67.0)
3. Microsoft Edge (Version 44.17763.1.0)
4. Internet Explorer 11 (Version 11.615.17763.0)

I tested the web application on the above web browsers. There were no issues with Chrome  or Edge.

Internet Exployer did have difficulties with button functionality. Further investigation didn't find what the cause of this was. It was thought that maybe the security level of the browser was too severe, but that was not the case, as active scripting was already enabled in the security settings.

Mozilla Firefox did load the web application correctly, and basic functionality was OK, however the only aspect that wasn't working was any of the sound effects. chccking the console for errors, I found: "HTTP “Content-Type” of “video/3gpp” is not supported. Load of media resource https://haydal810.github.io/Milestone-Project-2/assets/audio/filename.mp3 failed."
These issues with other browers have not been addressed yet.



### Below are the list of websites I used to test my html and css code:

1. [W3C HTML Validator](https://validator.w3.org/) This is a HTML online validitor.
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) This is a CSS online validitor.
3. [CSS Lint](http://csslint.net/) CSS Lint is an open source CSS code quality tool I used.

#### Meeting the needs of the user stories (as described in the UX section of this README file)

#### As a new User (aged 3years +) to the web application, I want to be able to understand how to play the game, and be able to easily refer to the instructions so I can explain to the younger user, if needs be, how to play the game

The game...

#### As a new User (aged 3years +) to the web application, I want to to be able to identify the buttons, which should be large, colorful and easy to press when needed.
The game...


#### As a new User (aged 3years +) to the web application, I want to hear Cartoon-like, sound-effects when I play the game, so as to encourage my enjoyment, and keep me using the application for longer.

The game...


#### As a new User (aged 3years +) to the web application, I want to be able to easily identify what each animal is on the animal card, so as to give me an understanding of how the game works.
The game...


#### As a new User (older child/sibling or adult/parent) to the web application, I want to be able to understand how to play the game, and be able to easily refer to the instructions so I can explain to the younger user, if needs be, how to play the game
The game...

#### As a new User (older child/sibling or adult/parent) to the web application, I want to be able to know who created this application.
The game...

#### As a new User (older child/sibling or adult/parent) to the web application, I want to be able to present this web application to a younger child, and know they will be entertained for at least a few minutes! 
The game...

#### As a new User (older child/sibling or adult/parent) to the web application, I want to be able to know that this web application is somewhat educational, and that a younger user will get some educational use from it.
The game...

## Manual Testing

User testing - the game was presented to users of a variety of ages for feedback on UX.

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