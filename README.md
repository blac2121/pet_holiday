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

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|       React       | _A front-end JavaScript library enabling quick component based page rendering._ |
|       Axios       | _Axios is a HTTP library enabling the sending and accepting HTTP requests and responses._ |
| React Router Dom  | _Enables component rendering._ |
| Styled Components | _Library enabling CSS to be done from the component sheet._ |
|        Rails      | _A model-view-controller frameowrk utilizing Ruby._ |


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
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to Hoome through the logo._       |
|    Layout    | functional |   n   |   n   | _The Layout will be the placeholder to render the main pages._               |
|      Home    | functional |   n   |   y   | _List of all households._                 |
|   Household  | functional |   n   |   n   | _Household dashboard holding Pet, Contact, and Famil Details._ |
|    PetCard   | functional |   n   |   n   | _Pet card to hold render the pet details._ |
|    PetAdd   | functional |   n   |   n   | _Pet card to hold render the pet details._ |
|    PetEdit   | functional |   n   |   n   | _Pet card to hold render the pet details._ |
|    PetForm  | functional |   n   |   n   | _Pet card to hold render the pet details._ |
|    PetAdd  | functional |   n   |   n   | _Pet card to hold render the pet details._ |
|  ContactCard | functional |   n   |   n   | _Contact card to hold render the Contact details._ |
| FamilyDetailCard | functional |   n   |   n   | _FamilyDetail card to hold render the FamilyDetail details._ |
|     Footer   | functional |   y   |   n   | _The footer will contain attributions._      |

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

[ERD](https://drive.google.com/file/d/1lNN6qXNyKothbvrgjVrdAwklXBNnDnzt/view?usp=sharing)

<br>

***

## Post-MVP

- Households Search
- User Auth
- A way for homeowners to upkeep their own profiles

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.





