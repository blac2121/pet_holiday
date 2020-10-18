## ERD

[ERD](https://drive.google.com/file/d/1lNN6qXNyKothbvrgjVrdAwklXBNnDnzt/view?usp=sharing)


#### Post MVP  

- Households Search
- User Auth
- Animations 


# Pet Holiday

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Pet Holiday** allows pet sitters to add family detail, contact information, and pet information about the families they pet sit for!_


<br>

## MVP

_Pet sitter users accessing the **Pet Holiday** will be able to add, view, update, and delete households in their account visible on their homepage. Pet sitters will be able to add, view, update, and delete household details such as home address, wifi information, and home temperature rules. They will also be able to add, view, update, and delete multiple pets to the household and include medical and feeding information about each pet. Lastely, the users can add, view, update, and delete contact information to the household such as homeowners, neighbors, vets, and emergency contacts._

<br>

### Goals

- _Provide housesitters a one stop shop of all households they pet sit for_
- _Give pet sitters the space to house pet details and notes to make sure no detail is lost!_
- _Create a beautiful space to keep details straight rather than deal with printed instructions on the kitchen counter_


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

[Prototype Flow](https://whimsical.com/6Yeu7U4vyBkJfbzkBu6zbu)

[Desktop Landing](https://jmp.sh/LUEXQ6b)

[Household Dashboard](https://jmp.sh/T1iGyYB)

[Add Example](https://jmp.sh/Sn5eLd6)

[Edit Examples](https://jmp.sh/J4qRxJa)

[Tablet](url)

[Mobile](url)


#### Component Tree

[Whimsical Component Tree](https://whimsical.com/PYe9UkqdjjZzLQxWnuvBDA)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ components/
  |__ Home.jsx
  |__ Household.jsx
    |__ Pet.jsx
    |__ FamilyDetail.jsx
    |__ Contact.jsx
|__ shared/
  |__ Layout.jsx
    |__ Nav.jsx
    |__ Footer.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.





