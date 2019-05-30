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

- Hey. It's us 3m
- Agenda 3m
- History of approaches  5m
- Cypress Test Runner - open source (show also that Cypress has Dashboard Service) but today we talk about Test Runner + very good doc 5m
- intro to config (we skip this part - just say about it) 2m
- Implement test 1 (Ping pong)
- Implement test 2 (Ping pong)
- Implement test 3 (Ivan - cookie just show) - ???? if time is enough          
- Implement test 5 (unit tests for isolate component - Sergey)
- Implement test 6, 7 (Advance usage - stubbing server data and example of how deep we can control our test env - clock example - Sergey)
- Additional features (viewport, direct application control, snapshot/visual testing and video/photo snapshots) 10m
- Trade offs: JS, browsers (cypress doesn't support all browsers) 10m


## Tests
1. Test user name

Features:
- basic selectors features / helping tools

Flow:
- talk about installing
- open test file and talk Cypress execution window (status menu, commands, app preview)
- talk about bdd syntax (show website: https://docs.cypress.io/guides/references/bundled-tools.html#Mocha)
- run this file and talk about interface
- talk about cy and commands and visit website
- open cypress show the result and talk about first feature (live reloading)
- add assert url().should.be.eql and talk about assert library (show website: https://www.chaijs.com/, https://docs.cypress.io/guides/references/assertions.html#Chai)
- proceed. talk about selectors (jQuery syntax)

2. Test adding new history row

Features:
- basic selectors features / helping tools
- run a single(dedicated) test / concentrate on a block of logic
- execution timeline / problem solving
- js debug mode

Flow:
- start refactor
- add beforeEach, show config file and Cypress UI config
- add only
- add startTimer and stopTimer
- talk about commands and time travel
- talk about debugging
- add description and accept
- add assertion
- dynamic components (show tests again (change dialog timeout))
- talk about auto waiting 
- go to selenium and run test 

3. Test cookie
with token with user name ( {name: some name})
Cypress 
- controlling the cookies, local storage etc.
