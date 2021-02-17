## Random happy birthday
Creates a CSV file with fake data and reads all people in it.
Will send and 'email' to everyone whos birthday is today.

### How to run
After cloning the repo, install the dependencies with npm and first run:
```
node index.js -p
```
to populate the CSV. Then to run it
```
node index.js -r
```
If no one has its birthday today try to populate the CSV again.

### Tests to implement
Using an existing CSV file or a populated in memory DB

Test that the retrieval works correctly with edge cases like the 29th of February.

Test the sending functions by mocking them to not make the real call and check the payload generated
against our expected.

Or do a more integration/E2E test by having a test enviroment and check if we have or messages correctly in
a queue system.
