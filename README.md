# Elemental

> Create tables from webpage data, by selecting and matching elements for titles and for related data. It's done by analyzing the page and finding out the class names for the elements.
Makes it easy to cut out all the other clutter on the page, and just get what's important to you, in a table format.

*Some sites, that have autogenerated class names will not work*

---

#### Links to dependancy

https://github.com/BunnyCode/element-scraper

#### To install add-on 

Since the add-on is still in development, there is no packed version in the chrome store. You need to get the dependencies for building the app.

First clone the repo from [here](https://github.com/BunnyCode/elemental)
Navigate to the folder in your terminal and run

```
npm i
npm run build
```

This should install Element-scraper and webpack, as well as build the development version of the add-on.

You need to build the Chrome extension with webpack to be able to run it with the dependencies. It does not allow for imports like other JavaScript och Node applications.

Now you need to add it to the Chrome extension list.

> Open Chrome and navigate to chrome://extensions/ in the address bar.

In the top left, activate developer mode.

![developer mode](/readme_img/developer_mode.png)

Once active, choose to **Load unpacked**

![Load unpacked](/readme_img/load_unpacked.png)

> Go to the directory you cloned from github and select the **dist** folder.
This folder was created during the build step.

Now the Add-on should show up in the list like this.

![Addon loaded](/readme_img/addon_loaded.png)

---

#### Using the add-on

This add-on was tested and built around [Sweclockers](https://www.sweclockers.com)
*It could work on other pages, but this is not tested.*

You can click on the add-on in the add-on drawer, or press ctrl+u or on MacOS command+u

The addon will show up like this

![init load](/readme_img/initial_addon_load.png)

Get data of the page you will press the "Get Data" button.
This will show like this

![data loaded](/readme_img/captured.png)

Now enter the parameters to get data.

![Params](/readme_img/addon_param.png)

*On Sweclockers We want to get titles and data from bbParagraph, the data is keept within elements with class "card"*

To try it out, it should look something like this.
Add the parameters, then press get data.

```
**Table title header name**
Titles

**Table data header name**
Bread Text

**Get data from elements containg attribute:**
card

**Get titles from attribute**
title

**Get data from attribute**
bbParagraph
```

![Data shown](/readme_img/data_grabbed.png)

Future development will be done, to allow for copying the table as a csv.