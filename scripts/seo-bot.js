const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const POSTS_DIRECTORY = path.join(__dirname, '..', 'posts');

const formatDate = (dateString) => {
  const d = new Date(dateString);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const downloadImage = async (url, filePath) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const fileStream = fs.createWriteStream(filePath);
    response.body.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log('Download completed!');
    });

    fileStream.on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error saving the image: ${err.message}`);
    });
  } catch (error) {
    console.error(`Error downloading the image: ${error.message}`);
  }
}

const generateMarkdownFile = (data) => {
  const content = `---
templateKey: "blog-post"
title: "${data.headline}"
date: ${formatDate(data.publishedAt)}
featuredpost: false
description: >-
  "${data.metaDescription}"
keywords:
${data.metaKeywords.split(',').map((kw) => `- ${kw.trim()}`).join('\n')}
link: /${data.slug}
category:
- "${data.category?.title}"
tags:
${data.tags.map((t) => `- ${t.slug}`).join('\n')}
author: Anand Narayan
---

<div className='seo-bot-ai-blog' dangerouslySetInnerHTML={{ __html: ${JSON.stringify(data.html.replace(/<h1[^>]*?>[\s\S]*?<\/h1>/, ''))} }} />
  `;

  const blogDirectory = path.join(POSTS_DIRECTORY, data.slug);
  // Create blog directory if doesnt exist
  if (!fs.existsSync(blogDirectory)) {
    fs.mkdirSync(blogDirectory);
  }

  // Delete & recreate blog file if exists
  const filePath = path.join(blogDirectory, `${data.slug}.md`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  downloadImage(data.image, )

  fs.writeFileSync(filePath, content, 'utf8');
}

const fetchBase = async () => {
  const response = await fetch(
    `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${process.env.SEO_BOT_API_KEY}/system/base.json`,
    { cache: "no-store" }
  );
  return response.json();
}

const downloadAndCreateMarkdownPost = async (id) => {
  const postData = await fetch(
    `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${process.env.SEO_BOT_API_KEY}/blog/${id}.json`,
    { cache: "no-store" }
  );
  const data = await postData.json();

  return generateMarkdownFile(data);
}

const processPosts = async () => {
  try {
    const base = await fetchBase();

    await Promise.all(
      base
        .filter((item) => {
          const blogDirectory = path.join(POSTS_DIRECTORY, item.s);
          return item.id && item.s && !fs.existsSync(blogDirectory);
        })
        .map((item) => downloadAndCreateMarkdownPost(item.id))
    );
  } catch (err) {
    console.log({ err });
    console.log('Error occurred while processing articles');
  }
}

console.log(process.env);
processPosts();
