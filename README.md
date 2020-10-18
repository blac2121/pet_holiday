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

[Tablet](https://jmp.sh/C0s5fv3)

[Mobile](https://jmp.sh/9KcQTjF)


#### Component Tree

[Whimsical Component Tree](https://whimsical.com/PYe9UkqdjjZzLQxWnuvBDA)

#### Component Hierarchy

``` structure
src
|__ components/
  |__ SubmitButton.jsx 
  |__ DeleteConfirmation.jsx 
  |__ shared/
    |__ Layout.jsx
      |__ Nav.jsx
      |__ Footer.jsx  
|__ screens/
  |__ home
    |__ Home.jsx
      |__ HuseholdCard.jsx
    |__ HouseholdAddForm.jsx 
  |__ householddashboard       
    |__ HouseholdDashboard.jsx
    |__ pets
      |__ PetCard.jsx
      |__ PetAdd.jsx
      |__ PetEdit.jsx
      |__ PetForm.jsx    
    |__ familydetails
      |__ FamilyCard.jsx
      |__ FamilyEdit.jsx
      |__ FamilyForm.jsx
    |__ contacts
      |__ ContactCard.jsx
      |__ ContactAdd.jsx
      |__ ContactEdit.jsx
      |__ ContactForm.jsx
|__ services/
```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to Home through the logo._ |
|    Layout    | functional |   n   |   y   | _The Layout will be the placeholder to render the main pages._ |
|      Home    | functional |   n   |   y   | _List of all households._ |
|HouseholdCard | functional |   y   |   y   | _Household card to hold render the household details as well as delete the household record._ |
|   Household  | functional |   y   |   n   | _Household dashboard holding Pet, Contact, and Famil Details._ |
|    PetCard   | functional |   y   |   y   | _Pet card to hold render the pet details as well as delete the pet record._ |
|    PetAdd    | functional |   y   |   n   | _Add takes the form and submit button as well as sends values to database._ |
|    PetEdit   | functional |   y   |   y   | _Edit takes the form and submit button as well as sends updated vaulues to database._ |
|    PetForm   | functional |   y   |   y   | _Form to style and create inputs for add and edit._ |
|  ContactCard | functional |   y   |   y   | _Contact card to hold render the Contact details as well as delete the contact._ |
|  ContactAdd  | functional |   y   |   n   | _Add takes the form and submit button as well as sends values to database._ |
|  ContactEdit | functional |   y   |   y   | _Edit takes the form and submit button as well as sends updated vaulues to database._ |
|  ContactForm | functional |   y   |   y   | _Form to style and create inputs for add and edit._ |
|  FamilyCard  | functional |   y   |   y   | _FamilyDetail card to hold render the FamilyDetail details as well as delete the whole household._ |
|  FamilyEdit  | functional |   y   |   y   | _Edit has form and takes the submit button as well as sends updated vaulues to database._ |
| SubmitButton | functional |   n   |   y   | _Styled button to be used on add and edit components._ |
|     Footer   | functional |   n   |   n   | _The footer will contain attributions._      |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Set Up Backend      |    H     |     8 hrs      |     TBD       |     TBD     |
| Set Up Frontend     |    H     |     8 hrs      |     TBD     |    TBD     |
| Nav Footer Layout   |    H     |     3 hrs      |     TBD     |     TBD    | 
| Mobile              |    H     |     8 hrs      |     TBD     |     TBD     |
| Household CRUD      |    H     |     6 hrs      |     TBD     |     TBD     |
| Pet CRUD            |    H     |     6 hrs      |     TBD     |     TBD     |
| Contact CRUD        |    H     |     6 hrs      |     TBD     |     TBD     |
| Submit Button       |    H     |     1 hr       |     TBD     |     TBD     |
| Delete Modal        |    L     |     1 hr       |     TBD     |     TBD     |
| TOTAL               |          |     47 hrs     |     TBD     |     TBD     |


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
