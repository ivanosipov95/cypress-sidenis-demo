# Demo

## points:
- basic selectors features / helping tools
- execution timeline / problem solving
- run a single(dedicated) test / concentrate on a block of logic
- js debug mode
- dynamic components
- controlling the cookies, local storage etc.
- date/time control
- stub the api requests / waiting responses
---
- unit/component testing
---
???
- mobile view (viewport can be changed)
- direct application control (window.cypress.app = your app)
- snapshot/visual testing
- video and photo snapshots


##Plan

- Hey. It's us 2m
- Agenda 2m
- History of approaches  5m
- Cypress Test Runner - open source (show also that Cypress has Dashboard Service) but today we talk about Test Runner + very good doc 5m
- intro to config (we skip this part - just say about it) 2m
- Implement test 1 (Ping pong)
- Implement test 2 (Ping pong)
- Implement test 3 (Ivan - cookie just show) - ???? if time is enough          
- Implement test 5 (unit tests for isolate component - Sergey)
- Implement test 6, 7 (Advance usage - stubbing server data and example of how deep we can control our test env - clock example - Sergey)
- Additional features (viewport, direct application control, snapshot/visual testing and video/photo snapshots) 10m
- Weak points: JS, browsers (cypress doesn't support all browsers), trade offs 10m


## Tests
1. Test user name

Features:
- basic selectors features / helping tools 


Selenium:
-

Cypress:
- Small talk about running Cypress (show project configuration)
- Implement simple test (just visit the app)
- Intro into Cypress execution window (status menu, commands, app preview, execution engines)


Cypress:
fail first run
bdd assertions show on original site
talk about tool a bit 


2. Test adding new history row

Selenium:
-

Cypress:
- run a single(dedicated) test / concentrate on a block of logic
- execution timeline / problem solving
- js debug mode
- dynamic components (show tests again (change dialog timeout) and then show config file and baseUrl property)
change client code to fail assertion

3. Test rejecting new history row
Cypress
show small refactoring 
introduce beforeEach and after


4. Test cookie
with token with user name ( {name: some name})
Cypress 
- controlling the cookies, local storage etc.
