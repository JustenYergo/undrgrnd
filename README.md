# [undrgrnd] Mobile Small Event Application

## Revision History
| Name | Date       | Reasons for Change | Version |
|------|------------|-------------------|---------|
| Justen Yergo | 12/8/2023 | Documents is first created, sections 1 and 2 are created and revised | 1.0 |


## 1. Introduction
### 1.0 Purpose
This document outlines the various requirements to be met by [undrgrnd] with respect to its end users, software developers, and owners. This application is expected to be a mobile application end users use to find small events and/or post small events for others to find. This document will encompass all system parts including front end and backend systems/operations as well as non-functional requirements.

### 1.1 Intended Audience
This document is intended for all members working on developing, advertising, managing, testing, documenting, and using the application. This project is a prototype for a small event finding and advertising application and is available to a event goers and event hosts. The application is useful for our event goers who are looking for small events in their area to attend along with event hosts who are looking to garner more foot traffic or advertise their small events.

### 1.2 Product Scope
The purpose of this software is to act a means of discovery and advertisement for local small events. It is expected to be use majorly by individuals aged 18 and above, but this software is available to people of all age ranges.

### 1.3 Product Value
The product value of this application is that it is a mobile small event discovering and advertising application that provides its users with the ability to discover small events within a radius from their current location and/or create and advertise a small event they or the entity they operate under are hosting. For us as developers, we wanted to create an app that gives us a deep understanding of frameworks like React.js and Node.js, programming languages like JavaScript, and the intricacies of Full-Stack Development.

## Overall Description
### 2.0 Product Perspective
The application will be available for download on both iOS and Android. Upon the first login, the user will be prompted to enter in their email, first name, last name, and password. This information will be stored in a centralized, secure database and will be linked to their unique profile.

Geolocation services would need to be enabled on this application only for the purpose of getting the users location upon opening the app in order to find events in their set area. User's location data will not be stored in the database.

### 2.1 Product Functions
The application should be able to perform the following major functions:

**Sign Up:**
Upon opening the application for the first time, the user will be prompted to sign up. The user will have to input their email, first name, last name, and a password. They will then be asked to fill out a survey to guage their interests. All of this will be created and added to the database.

**Login:**
Upon returning to the application for another time, the user will be prompted to sign in if they were signed out after closing the app. The user will need to input their email and password to sign in.

**Forgot Password:**
If the user forgets their password to login, they will be directed to the forgot password screen. There they will be asked to input their email. A recovery email will be sent to them to change their password.

**Logout:**
When a user clicks logout, all personal data will be removed until the user logs back in using their credentials.

**Update Account Information:** 
When a user clicks the edit profile button, they will be directed to a screen where they can change and update any section of their information (email, first name, last name, password, and interests).

**Display Event Feed:**
After the user is finished signing in for the first time and they have completed the user interest survey, they will be brought to their homepage. The event feed will be compared with their interest array and the event feed will display with common interests first.

**Filter Event Feed:**
After clicking filter, the user will be able to filter the event feed by "Event Category" (intertests), "Ticket Price", and/or "Distance" (radius).

**Search Event Feed:**
The user will be able to search through the event feed to find a specific event.

**View Event Details:**
Upon click of an event item, the user will be able to view a comprehensive list of all the details of the event including event title, date and time, location, ticket price, categories, description, and host.

**Add Event to "My Events" List:**
Clicking the add event button will add the event to the users list of events. The user will be able to view all the events they have added to their list.

**Remove Event from "My Events" List:**
Clicking the remove event button will remove the event from the users list of events. The event will not be able to be viewed in their list any longer.

**Create Event Item:**
A user can create an private or public event. Private events will only be able to be accessed by other users via an invite link. When creating an event the user will be prompted to input event title, date and time, location, ticket price, categories, description, and select between public or private.

**Update Event Item:**
After an event is created it will be populated in the "My Events" list. The user will be able to update any information of their event from there.

**Delete Event Item:**
Clicking this button will prompt the user to make sure they want to continue this action. If continued, the event will be deleted, removed from the display in the users "My Events" list and removed from the database.

**Monitor Event Analytics:**
Upon clicking this button the user will be able to view all the impression their event made on other users.

**Event Notifications:**
The user will be able to view all the notifications they have received for the events in their "My Events" list.


