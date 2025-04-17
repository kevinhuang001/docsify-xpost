# docsify-xpost 插件

[![版本](https://img.shields.io/npm/v/docsify-xpost?style=flat-square)](https://www.npmjs.com/package/docsify-xpost)
[![许可证](https://img.shields.io/npm/l/docsify-xpost?style=flat-square)](https://github.com/your-username/docsify-xpost/blob/main/LICENSE) 
<!-- <-- **TODO: 请将 your-username/docsify-xpost 替换为您的实际 GitHub 用户名和仓库名，并确保 LICENSE 文件存在** -->

---

## 概述

`docsify-xpost` 是一个 Docsify 插件，它允许您轻松地在 Markdown 文件中嵌入样式化的、类似于 X (前 Twitter) 帖子的内容块。通过使用熟悉且视觉吸引人的格式展示示例、引述或公告，来增强您的文档。

## 特性

*   **集成简单:** 使用直观的 Markdown 注释来嵌入帖子。
*   **可定制元数据:** 可定义头像、用户名、时间戳、互动计数（点赞、转推等）以及可选的帖子图片。
*   **样式便捷:** 附带预定义的 CSS，提供真实的外观和感觉。
*   **轻量级:** 对您的 Docsify 站点增加的负担极小。

## 安装

1.  **引入脚本:** 将以下 `<script>` 标签添加到您的 Docsify `index.html` 文件的 `<head>` 部分内：
    ```html
    <head>
      <!-- ... 其他 head 元素 ... -->
      <script src="https://cdn.jsdelivr.net/npm/docsify-xpost/docsify-xpost.js"></script>
      <!-- ... 其他 head 元素 ... -->
    </head>
    ```

2.  **链接样式表:** 将以下 `<link>` 标签添加到您的 `index.html` 文件中 **主 Docsify 脚本标签 (`docsify.min.js`) 之后**。通常，这位于 `</body>` 结束标签之前：
    ```html
    <body>
      <!-- ... Docsify 初始化 ... -->
      <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
      <!-- ... 其他 Docsify 插件 ... -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-xpost/docsify-xpost.css"/>
      <!-- ... 可能还有其他脚本 ... -->
    </body>
    ```
    *（注意：虽然 CSS 通常放在 `<head>` 中，但根据您最初的指示，将其放在此处可确保它在 Docsify 核心样式之后加载，以避免潜在冲突。）*

## 使用方法

要在您的 Markdown 内容中嵌入一个类 X 帖子，请将您的内容和元数据包裹在 `<!-- x:start -->` 和 `<!-- x:end -->` 注释之间。使用特定的注释格式 `<!-- 键:'值' -->` 来定义帖子的元数据。

**可用的元数据键:**

*   `avatarUrl`: 用户头像图片的 URL。
*   `imageUrl`: (可选) 帖子附带图片的 URL。
*   `username`: 用户的显示名称。
*   `userId`: 用户的 handle (例如, @kevin12134)。
*   `timestamp`: 帖子的日期或时间字符串 (例如, 'Apr 13' 或 '2024-04-13 10:00')。
*   `likes`: 点赞数。
*   `retweets`: 转推数。
*   `comments`: 评论数。
*   `views`: 查看数。

**示例:**

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
这是你的 x 帖子的主要内容。
它可以跨越多行。

很高兴认识你！你好，docsify-xpost！
<!-- x:end -->
```