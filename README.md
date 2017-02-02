# mvc5-grunt

This project is a sample project for web application development with ASP.NET MVC5.
It consists of the following:
- ASP.NET MVC5
- OWIN
- Grunt

## Prerequisite
- [NodeJs](https://nodejs.org/en/download/)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)

## How to run

1. Fork or clone this repository
2. Open a powershell window and make sure you are in the `Sample` folder of the project
3. Type in the following command: 
    ```powershell
    npm install
    ```
    ![image](https://cloud.githubusercontent.com/assets/9193983/22563178/1a677a20-e9b2-11e6-8711-4a02d1ad6355.png)

    This command will restore all the required packages for this project.
4. Open project with Visual Studio
5. Build & Run
    
    ![image](https://cloud.githubusercontent.com/assets/9193983/22563681/3a4c24c4-e9b4-11e6-8d32-8fc19c74c289.png)

## How to edit
1. Open `Task Runner Explorer` window in Visual Studio

    **Tip:** If you cannot find it type in `Task Runner Explorer` into the Quick Launch on the upper right corner
    
    ![image](https://cloud.githubusercontent.com/assets/9193983/22564006/6715c57c-e9b5-11e6-960f-5ef53f7442b3.png)

2. You should see the task runner explorer open up

    ![image](https://cloud.githubusercontent.com/assets/9193983/22564086/afbe5a6e-e9b5-11e6-8107-7f06493b6d78.png)

3. Double click on `watch:scripts`

    ![image](https://cloud.githubusercontent.com/assets/9193983/22564124/e5fc37a4-e9b5-11e6-9b7e-9aea988c9933.png)

    **What's happening??**
    
    Basically, watch is a grunt task that keeps looking out for file changes so whenever you make change to **any** of the typescript       `(*.ts)` files it will compile those files for you.

4. Navigate to `\Scripts\ng-controllers\home\index-controllers.ts` and make any change you should see it compile

    ![image](https://cloud.githubusercontent.com/assets/9193983/22564429/13df28c4-e9b7-11e6-9f3f-b8b842cf0d44.png)
    
5. That's it!!

    ![image](https://cloud.githubusercontent.com/assets/9193983/22564498/58898a32-e9b7-11e6-97bb-526715da2b88.png)


## What Grunt does when it detect changes

1. Delete all of the `js` files and `js.map` files in `Scripts` folder
    
2. Compile all typescript files, which will result in `*.js` in separate folders

3. Uglify and bundle all `*.js` files into one file called `bundle.js`

**Note** `bundle.js` file is not included in the project
