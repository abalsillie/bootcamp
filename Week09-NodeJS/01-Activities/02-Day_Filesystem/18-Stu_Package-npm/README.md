// logged from command line using npm init

PS C:\Users\abals\Desktop\bootcamp\Week09-NodeJS\01-Activities\02-Day_Filesystem\18-Stu_Package-npm\Unsolved> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (unsolved) my-project
version: (1.0.0) 1.0.0                                                                                                                   
description: this is my first project                                                                                                    
entry point: (index.js) index.js                                                                                                         
test command:                                                                                                                            
git repository:                                                                                                                          
keywords:                                                                                                                                
author: Alex                                                                                                                             
license: (ISC) ISC                                                                                                                       
About to write to C:\Users\abals\Desktop\bootcamp\Week09-NodeJS\01-Activities\02-Day_Filesystem\18-Stu_Package-npm\Unsolved\package.json:

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "this is my first project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Alex",
  "license": "ISC"
}


Is this OK? (yes) yes
PS C:\Users\abals\Desktop\bootcamp\Week09-NodeJS\01-Activities\02-Day_Filesystem\18-Stu_Package-npm\Unsolved> npm i inquirer@8.2.4

added 52 packages, and audited 53 packages in 6s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\abals\Desktop\bootcamp\Week09-NodeJS\01-Activities\02-Day_Filesystem\18-Stu_Package-npm\Unsolved> 




# 📖 Initialize Projects using Node Package Manager (npm)

Work with a partner to implement the following user story:

* As a developer, I want to be able to keep track of dependencies using `npm`.

* As a developer, I want to initialize my project and create a `package.json` file.

* As a developer, I want to be able to save packages to my project.

## Acceptance Criteria

* It's done when I see an Unsolved folder with a `package.json` file created inside.

* It's done when I have installed the `inquirer` version 8.2.4 package successfully and see it listed in the `package.json` file. Since we will be using a specific version of the `inquirer` package you will need to use the `@` symbol to specify which version during installation.

* It's done when I see the `node_modules` folder and `package-lock.json` file in the [Unsolved](./Unsolved/) folder.

## 📝 Notes

Refer to the documentation:

* [npm-init](https://docs.npmjs.com/cli/v6/commands/npm-init)

* [npm-install](https://docs.npmjs.com/cli/v6/commands/npm-install)

## 💡 Hints

It's possible that the `node_modules` folder is hidden in the `files.exclude` setting in VS Code, so don't let that throw you off if you don't see it.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How does the `-y` flag save us some time when running `npm init`? What does the `-g` flag do when running `npm install`?

* What is `npx` and how is it different from `npm install`?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
