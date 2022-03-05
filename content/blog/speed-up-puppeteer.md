---
title: Speed Up Puppeteer
category: tech
---

Here the three most important tips we've learned along the way while building our API infrastructure based on Puppeteer to speed up the execution of Chromium browser using Puppeteer library.

## Local Cache

Let Chromium to reusing the already downloaded files of previous sessions by setting the `--user-data-dir` argument when launcing the browser. This way images and fonts will be served much quicker:

```js
'--user-data-dir=./tmpusr'
```



## Single Launch

Reuse the same Browser instance instead of lauching it for every session. Launch it on every request is significantly slow:

```js
// keep this reference for next requests
browser = await puppeteer.launch({...})
                                  
// so, don't close it with browser.close()
```



## Set the HTML

Instead of loading from remote the page you want to process, inject it with `page.setContent` because it's faster:

```js
await page.setContent(html)
```
