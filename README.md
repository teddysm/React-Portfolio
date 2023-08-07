# React-Portfolio

This is my portfolio made with React

<br>

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Links](#links)
- [Features](#features)
- [Installations](#installations)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

<br>

## Description

- This is a developer portfolio made with React. It has 4 main pages: About Me, Portfolio, Resume and Contact.

<br>

## Usage

- Start the server with 'npm start'

  ![Screenshot](/react-portfolio/src/images/AboutMe.png)
  ![Screenshot](/react-portfolio/src/images/ContactMe.png)

<br>

## Links

- Github Repo: https://github.com/teddysm/React-Portfolio
- Deployed: 

<br>

## Features

- User check the developer information on the about page.
- User can visit the developer's project deployed page or repo on the portfolio page.
- User can see the developer's resume and download it on the resume page.
- User can send a message to the developer on the contact me page.

<br>

## Installations

- Users need to install the dependencies with the command "npm i".

<br>

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```
