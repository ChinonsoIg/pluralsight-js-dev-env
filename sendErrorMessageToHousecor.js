Hi Cory. I must commend you for your effort to put together this wondeerful course. However, I'm stuck on Module 11 - Serving Mock Data via JSON Server. When I run "npm run start-mockapi", I get an error that the value of "id" in db.json is not supported, that I should use an object or object arrays. I've modified the file as the error stated, but it then gives me another error which is, "Invalid JSON format" - which is expected. Please kindly help me out. The full error message is below.

PS C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env> npm run start-mockapi

> javascript-development-environment@1.0.0 start-mockapi C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env
> json-server --watch src/api/db.json --port 5001


  \{^_^}/ hi!

  Loading src/api/db.json
  Done
C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\json-server\src\server\router\index.js:68
    throw new Error(msg)
    ^

Error: Type of "id" (string) in src/api/db.json is not supported. Use objects or arrays of objects.
    at C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\json-server\src\server\router\index.js:68:11
    at C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lodash\lodash.js:4905:15
    at baseForOwn (C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lodash\lodash.js:2990:24)
    at C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lodash\lodash.js:4874:18
    at Function.forEach (C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lodash\lodash.js:9342:14)
    at C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lodash\lodash.js:4368:28
    at arrayReduce (C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lodash\lodash.js:683:21)
    at baseWrapperValue (C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lodash\lodash.js:4367:14)
    at LodashWrapper.wrapperValue (C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lodash\lodash.js:9050:14)
    at LodashWrapper.<anonymous> (C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env\node_modules\lowdb\lib\_index.js:77:19)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! javascript-development-environment@1.0.0 start-mockapi: `json-server --watch src/api/db.json --port 5001`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the javascript-development-environment@1.0.0 start-mockapi script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Hp\AppData\Roaming\npm-cache\_logs\2020-07-05T21_18_41_442Z-debug.log
PS C:\Users\Hp\Projects\GADS\pluralsight-js-dev-env>

