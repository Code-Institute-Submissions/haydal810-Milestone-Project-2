This is my 2nd Milestone Project for Code Institute - Simple Game for Children aged 3 years+


# Pick the Animal Game

This is a simple animal association game, where the User must try and match the generated animal sound effect, with one of the the three randomly generated animal cards. There are five rounds, each round generates layout of animal pictures.

## UX

This web application has been designed for young children, aged 3years and older and their parents. The User should find this application educational, as it shows the user the correct sound effects matched to the correct animal. The result for selecting the right animal card in each round is a cheering sound, designed to reward the user. An incorrect selection of a animal card gives less enthusiastic alarm type sound, however, the pictures will stay in place until the correct card is selected, so the user gets to have "another shot" at the answer. The background is of a cartoon farm, which was selected to be more appealing to younger users. 

### User Stories:
As a new User (aged 3years +) to the web application, I want to:

* be able to understand how to play the game, and understand the difference between a right and wrong answer easily.
* to be able to identify the buttons, which should be large, colorful and easy to press when needed.
* Cartoon-like, sound-effects when I play the game, so as to encourage my enjoyment, and keep me using the application for longer.
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
* I would like to add far more animal pictures and associated animal noises, and increase the rounds from 5 to 10.
* I would like to introduce a scoreboard, so users can record how well they last played. This would mean, that the user would have to proceed to the next round, even if he selected an incorrect animal card. (Presently, the round doesnt progress until the correct answer is selected)
* xxx

## Technologies Used

* This project uses HTML and CSS programming languages. Also used is Javascript for the majority of the application. 

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
3. Internet Explorer 11 (Version 11.5)

### Below are the list of websites I used to test my html and css code:

1. [W3C HTML Validator](https://validator.w3.org/) This is a HTML online validitor.
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) This is a CSS online validitor.
3. [CSS Lint](http://csslint.net/) CSS Lint is an open source CSS code quality tool I used.

#### Meeting the needs of the user stories (as described in the UX section of this README file)

#### As a new visitor to the website, I want to easily navigate the site, regardless of device used, so I can find what I need efficiently.
The website is responsive on all devices, thanks to the Bootstrap 4 Grid incorporated in the HTML & CSS code. 

#### As a new visitor to the website, I want to find out about things to do in the area, so I can decide if it's worth visiting the area.
xxx


#### As a new visitor to the website, I want to find out where to eat & drink in the area, so I can decide if it's worth visiting the area.

xxx


#### As a new visitor to the website, I want to know if it's possible what accomodation is available locally, in case I decide to stay in the area for longer than a day.
xxx


#### As a visitor to the website, I want to contact the person in charge of the website, to discuss how I want my local business to be mentioned on the website.
xxx



## Deployment

This project was developed using the AWS Cloud9 IDE, committed to git and pushed to GitHub using the built in function within cloud9.
From there it was deployed to GitHub Pages from its GitHub repository.
The website is published here: https://haydal810.github.io/Milestone-Project-1/

### To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:
1. Log into GitHub.
2. From the list of repositories on the screen, select haydal810/Milestone-Project-1
3. From the menu items near the top of the page, select Settings.
4. Scroll down to the GitHub Pages section.
5. Under Source click the drop-down menu labelled None and select Master Branch
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.
8. The website is published here: https://haydal810.github.io/Milestone-Project-1/

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
xxxxx
* [https://www.facebook.com/](https://www.facebook.com/)



The two video clips on the "Outdoor Activities" page were sourced from Youtube:

* [https://youtu.be/Et98URg4xas](https://youtu.be/Et98URg4xas)
* [https://youtu.be/DMagyvlU_7U?list=PLM6KOvVfwyn2P4LUZbTwTpotW47L3Fwbi](https://youtu.be/DMagyvlU_7U?list=PLM6KOvVfwyn2P4LUZbTwTpotW47L3Fwbi)


### Media
The photos used in this site were obtained from:

pexels...animals, background
background cartoon farm - vectorstock.com


### External CSS Code

External CSS code was taken from the following sources:
- The CSS code for the footer Social Media Icons taken from www.codemyui.com
- The CSS code for the hover effect on the Nav Bar was taken from https://github.com/IanLunn

### Acknowledgements

- I received inspiration for this project from TBA
- I'd like to thank my mentor, [Antonija Šimić](https://github.com/tonkec), for her useful and constructive feedback throughout the Milestone Project



### The content of this website is for educational purposes only. 
### Thank you.