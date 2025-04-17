# docsify-xpost Plugin

[![Version](https://img.shields.io/npm/v/docsify-xpost?style=flat-square)](https://www.npmjs.com/package/docsify-xpost)
[![License](https://img.shields.io/npm/l/docsify-xpost?style=flat-square)](https://github.com/kevinhuang001/docsify-xpost/blob/main/LICENSE)

[English](./README.md) | [中文](./README.zh-CN.md)

---

## English

### Overview

`docsify-xpost` is a Docsify plugin that allows you to easily embed stylized content blocks resembling X (formerly Twitter) posts directly within your Markdown files. Enhance your documentation by showcasing examples, quotes, or announcements in a familiar and visually appealing format.

### Features

*   **Simple Integration:** Embed posts using intuitive Markdown comments.
*   **Customizable Metadata:** Define avatar, username, timestamp, interaction counts (likes, retweets, etc.), and optional images.
*   **Easy Styling:** Comes with pre-defined CSS for an authentic look and feel.
*   **Lightweight:** Adds minimal overhead to your Docsify site.

### Installation

1.  **Include the Script:** Add the following `<script>` tag inside the `<head>` section of your Docsify `index.html` file:
    ```html
    <head>
      <!-- ... other head elements ... -->
      <script src="https://cdn.jsdelivr.net/npm/docsify-xpost/docsify-xpost.js"></script>
      <!-- ... other head elements ... -->
    </head>
    ```

2.  **Link the Stylesheet:** Add the following `<link>` tag *after* the main Docsify script tag (`docsify.min.js`) in your `index.html` file. Typically, this goes just before the closing `</body>` tag:
    ```html
    <body>
      <!-- ... Docsify initialization ... -->
      <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
      <!-- ... Other Docsify plugins ... -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-xpost/docsify-xpost.css"/>
      <!-- ... Potentially other scripts ... -->
    </body>
    ```
    *(Note: While CSS is often placed in `<head>`, placing it here ensures it loads after Docsify's core styles if necessary, as per your original instructions).*

### Usage

To embed an X-like post in your Markdown content, wrap your content and metadata within `<!-- x:start -->` and `<!-- x:end -->` comments. Use specific comment formats `<!-- key:value -->` to define the post's metadata.

**Available Metadata Keys:**

*   `avatarUrl`: URL of the user's profile picture.
*   `imageUrl`: (Optional) URL of an image attached to the post.
*   `username`: Display name of the user.
*   `userId`: The user's handle (e.g., @handle).
*   `timestamp`: The post's date or time string.
*   `likes`: Number of likes.
*   `retweets`: Number of retweets.
*   `comments`: Number of comments.
*   `views`: Number of views.

**Example:**

```markdown
<!-- x:start -->
<!-- avatarUrl:'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg' -->
<!-- imageUrl:'https://pbs.twimg.com/media/GobIp2wX0AE9zOp?format=jpg&name=small' -->
<!-- username:kevin -->
<!-- userId:kevin12134 -->
<!-- timestamp:Apr 13 -->
<!-- likes:13423 -->
<!-- retweets:13423 -->
<!-- comments:123 -->
<!-- views:321 -->
This is the main content of your x post.
It can span multiple lines.

Nice to meet you! Hello, docsify-xpost!
<!-- x:end -->
```