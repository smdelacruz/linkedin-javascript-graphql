Node js commands
```
npm init 

//install dev dependecies
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0

//main dependecies
//nodemon restart the server automatically
npm install express express-graphql graphql nodemon 

```

After installing dependecies. Create the following files
1. index.js
2. .babelrc //this file will be hidden
```
{
    "presets":[
        "env",
        "stage-0"
    ]
}
```

on package.json, add the following script on Line 7
```
"start": "nodemon ./index.js --exec babel-node -e js"
```

Test the server
```
npm start //localhost:8080
```