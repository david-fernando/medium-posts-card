<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=128px src="https://images2.imgbox.com/aa/22/t57NWwys_o.jpg" alt="Medium Posts Card"></a>
</p>

<h3 align="center">Medium Posts Card</h3>

<div align="center">
  <p align="center">React Isomorphic library that show your Medium articles.
    <br> 
  </p>

 [![CSR](https://img.shields.io/badge/Client%20Side%20Rendering-Supported-green)]() [![SSR](https://img.shields.io/badge/Server%20Side%20Rendering-Supported-green)]() [![Licence](https://img.shields.io/github/license/david-fernando/medium-posts-card)]() 
</div>

---

## 📝 Table of Contents

- [About](#about)
- [Install](#install)
- [Components](#components)
- [Server Side Rendering](#server_side_rendering)
- [How to contribute](#how_to_contribute)
- [Author](#authors)

## <span id="about">About </span>

Are you looking for a React library to display your medium posts that render both the client side and on the server side? So you are in the right place! **Medium Posts Card** get your medium articles, and displays them on your website through an easy to  use component. 
Just download and use, as simple as that.

## <span id="install">Install</span>

Install this library with one of the commands below

```bash
yarn add mediumpostscard

//or

npm install mediumpostscard
```

## <span id="components">Components</span>

### Carousel

- <h4>Describe</h4>
  Shows a Carousel with your Medium articles

- <h4>Carousel example</h4>
  <img height="170" src="https://i.imgur.com/FmVwAJ5.png" alt="Medium Posts Card Carousel Preview"></a>

- <h4>Basic usage (with example)</h4>

```javascript
import { Carousel } from 'mediumpostscard'

function Example(){
  return (
    <Carousel username="alex.streza" />
  )
}

export default Example
```

- <h4>Valid Props</h4>

| Prop name  |                   Description                     |         Type |      Default |
| ---------- | :-----------------------------------------------: | -----------: | ------------:|
| usernane   |               Sets your Medium username           |     _String_ |  _underfined_
| dataMedium | Set data Medium (_only_ to Server Side Rendering) |     _Object_ |  _underfined_
| options    |               Object with options                 |     _Object_ |      _Object_|

- <h4>Valid Options</h4>

| Option       |                   Description                      |         Type |      Default |
| -------------| :------------------------------------------------: | -----------: | ------------:|
| borderRadius |       Set if the card will have rounded edges      |    _Boolean_ |         true 
| openInNewTab | Set if the link of article will openned in new tab |    _Boolean_ |         true 
| showTags     |       Define if the card will show article tags    |    _Boolean_ |         false
| showDate     | Set if the card will show the date of the article  |    _Boolean_ |         false
| ssr          |   Set if the component should rendered on server   |    _Boolean_ |         false|

### List

- <h4>Describe</h4>
  Shows a list with your Medium articles

- <h4>List example</h4>
  <img width="780" height="500" src="https://i.imgur.com/J11pgwP.png" alt="Medium Posts Card List Preview"></a>

- <h4>Basic usage (with example)</h4>

```javascript
import { List } from 'mediumpostscard'

function Example(){
  return (
    <List username="alex.streza" />
  )
}

export default Example
```

- <h4>Valid Props</h4>

| Prop name  |                   Description                     |         Type |      Default |
| ---------- | :-----------------------------------------------: | -----------: | ------------:|
| usernane   |               Sets your Medium username           |     _String_ |  _underfined_
| dataMedium | Set data Medium (_only_ to Server Side Rendering) |     _Object_ |  _underfined_
| options    |               Object with options                 |     _Object_ |      _Object_|

- <h4>Valid Options</h4>

| Option       |                   Description                      |         Type |      Default |
| -------------| :------------------------------------------------: | -----------: | ------------:|
| openInNewTab | Set if the link of article will openned in new tab |    _Boolean_ |         true 
| showTags     |       Define if the card will show article tags    |    _Boolean_ |         true
| showDate     | Set if the card will show the date of the article  |    _Boolean_ |         true
| borderRadius |       Set if the card will have rounded edges      |    _Boolean_ |         false 
| ssr          |   Set if the component should rendered on server   |    _Boolean_ |         false|


## <span id="server_side_rendering">Server Side Rendering</span>

 - <h4>Usage</h4>
 To make the component render the server do the prefetching:
```javascript
const data = fetchMedium('yourmediumusername')
```
Next define _ssr_ as true, according to the example
```javascript
<Carousel dataMedium={dataMedium} options={{ssr: true}} />
```
In the example above, I used the Carousel component, but you do the same with the List component.

Next I will show an example of how to make server side on Next.js

```javascript
import Head from 'next/head'
import { List, fetchMedium } from 'mediumpostscard'

export default function Home({dataMedium}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List dataMedium={dataMedium} options={{ssr: true}} />

    </div>
  )
}

export async function getStaticProps() {
  const dataMedium = await fetchMedium('alex.streza')
  return {
    props: {
      dataMedium
    }
  }
}

```


## <span id="how_to_contribute">How to contribute</span>

 Fork this repository, make clone for your machine.

 Install the dependencies with the command below:

 ```bash
 yarn install
 ```

To view on storybook

```bash
yarn storybook
```

To build

```bash
yarn build
```
To run the tests.

```bash
yarn test
```

## ✍️ <span id="authors">Author</span>

- [@david-fernando](https://github.com/david-fernando) - Idea & Initial work