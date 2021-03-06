import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

const getClient = (preview) => (preview ? previewClient : client);

export async function getHome(preview) {
  const homeEntry = await getClient(preview).getEntry("58ppMOLWSXPqYq15pVNXee");
  return homeEntry.fields;
}

export async function getFooter(name) {
  const entry = await getClient(false).getEntries({
    content_type: "footer",
    "fields.footerName": name,
  });
  return entry?.items?.map((item) => item.fields)[0];
}

export async function getMenu(menu) {
  const menuEntry = await getClient(false).getEntries({
    content_type: "menu",
    "fields.menuName": menu,
  });
  return menuEntry?.items?.map((item) => item.fields)[0];
}

function parseAuthor({ fields }) {
  return {
    name: fields.name,
    picture: fields.picture.fields.file,
  };
}

function parsePost({ fields }) {
  return {
    title: fields.title,
    slug: fields.slug,
    date: fields.date,
    content: fields.content,
    excerpt: fields.excerpt,
    coverImage: fields.coverImage.fields.file,
    author: parseAuthor(fields.author),
  };
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb);
}

export async function getPreviewPostBySlug(slug) {
  const entries = await getClient(true).getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug,
  });
  return parsePostEntries(entries)[0];
}

export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: "post",
    select: "fields.slug",
  });
  return parsePostEntries(entries, (post) => post.fields);
}
