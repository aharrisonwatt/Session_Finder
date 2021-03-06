# SessionFinder

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

SessionFinder is a web application inspired by AirBnB. It will use Ruby on Rails to handle the backend database management and React.js to create a interactive frontend.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] New account creation, login, and guest/demo login
- [x] bug-free navigation
- [x] Adequate seed data to demonstrate the site's features
- [x] The minimally necessary features for an AirBnB-inspired site: Event Creation, Map integration showing location of events, filtering events based on a number of factors
- [x] Hosting on Heroku
- [x] CSS styling that is satisfactorily visually appealing

## Product Goals and Priorities

SessionFinder will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [x] Create events (MVP)
- [x] View events(MVP)
- [ ] Comment/review event (expected but not MVP)
- [x] Filter events using tags such as game type or start time/date (expected feature, but not MVP)
- [x] View all events on a map (expected feature, but not MVP)
- [ ] View past results for ongoing events (stretch goal, set up a API scraper)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication using BCrypt password digest algorithm
- [x] user signup/signin pages
- [x] blank landing page after signin
- [x] create guest LogIn

### Phase 2: Happenings Model, API, and basic APIUtil (1 days)

**Objective:** Happenings can be created, read, edited and destroyed through
the API.

- [x] create `Happening` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for happenings (`HappeningsController`)
- [x] jBuilder views for happenings
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Happenings can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each happening component, building out the flux loop as needed.
  - [x] `HappeningsIndex`
  - [x] `HappeningIndexItem`
  - [x] `HappeningForm`
  - [x] `NavBar`

### Phase 4: Map Integration (1 days)

**Objective:** Map is integrated with the page and shows where Happenings
are planned.

- [x] Research how to do map integration
- [x] ????
- [x] Make map

### Phase 5: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 6: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and amazing.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.
- [x] add Landing Page

### Bonus Features (TBD)
- [ ] Tags
  - [ ] create `Tag` model and join table
  - build out API, Flux loop, and components for:
    - [ ] fetching tags for Happening
    - [ ] adding tags to Happening
    - [ ] creating tags while adding to Happening
    - [ ] searching Happening by tag
  - [ ] Style new elements
- [ ] Increase Happenings creation options
- [x] Redo Search in area for map
- [x] Update happenings as map moves
- [ ] More time on CSS

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
