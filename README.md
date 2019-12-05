# location-detective
    A simple app to retrieve places using FourSquare API

# Node configuration for this project
    bpatel:location-detective bpatel$ nvm version
    v6.16.0
    bpatel:location-detective bpatel$ node -v
    v6.16.0
    bpatel:location-detective bpatel$ npm -v 
    3.10.10
    
    
    You will need to install node modules first. Do the following.
    
    bpatel:location-detective bpatel$ npm -v 

# Unit testing 

jest and enzyme is used for unit testing in this project. 
   
    
    bpatel:location-detective bpatel$ jest
     
   
To check the code coverage by unit tests run the following comamnd.

     bpatel:location-detective bpatel$ jest --coverage -u 
         PASS  src/components/Venues/VenueItem/venueitem.test.js
         PASS  src/components/Search/Search.test.js
         PASS  src/components/Venues/venues.test.js
        -----------------------------|----------|----------|----------|----------|-------------------|
        File                         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
        -----------------------------|----------|----------|----------|----------|-------------------|
        All files                    |      100 |      100 |      100 |      100 |                   |
         components/Search           |      100 |      100 |      100 |      100 |                   |
          Search.js                  |      100 |      100 |      100 |      100 |                   |
         components/Venues           |      100 |      100 |      100 |      100 |                   |
          Venues.js                  |      100 |      100 |      100 |      100 |                   |
          index.js                   |        0 |        0 |        0 |        0 |                   |
         components/Venues/VenueItem |      100 |      100 |      100 |      100 |                   |
          index.js                   |        0 |        0 |        0 |        0 |                   |
          venueitem.js               |      100 |      100 |      100 |      100 |                   |
         services                    |      100 |      100 |      100 |      100 |                   |
          api.js                     |      100 |      100 |      100 |      100 |                   |
          index.js                   |        0 |        0 |        0 |        0 |                   |
        -----------------------------|----------|----------|----------|----------|-------------------|
        

# Run the application

This is a node and webpack based project. npm command can be used to run the application. 

    bpatel:location-detective bpatel$ npm run start
    

If built/compiled successfully the app will run on http://localhost:8080

    Built at: 12/04/2019 4:57:56 PM
         Asset       Size  Chunks                   Chunk Names
     bundle.js   1.47 MiB    main  [emitted]        main
    bundle.map   2.62 MiB    main  [emitted] [dev]  main
    index.html  806 bytes          [emitted]        
    Entrypoint main = bundle.js bundle.map
    [0] multi (webpack)-dev-server/client?http://localhost:8080 ./src/index.js 40 bytes {main} [built]


# Future enhancements

The redux integration is done successfully and it was working. The final changes do not have the redux piece in working condition.
