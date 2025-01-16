import { defineQuery } from "next-sanity";

export const BLOGS_QUERY =
  defineQuery(`*[_type == "blog" && defined(slug.current) && !defined($search) || category match $search || author->name match $search || title match $search] | order(_createdAt desc) {
  _id, 
  title, 
  slug, 
  _createdAt, 
  description, 
  author -> {_id, name, bio, image},
  views, 
  description,
  category,
  image
}`);

export const BLOG_BY_ID_QUERY =
  defineQuery(`*[_type == "blog" && _id == $id][0]{
  _id, 
  title, 
  slug, 
  _createdAt, 
  description, 
  author -> {_id, name, username, bio, image},
  views, 
  description,
    category,
    image,
    pitch
} `);

export const BLOG_VIEWS_QUERY = defineQuery(`
  *[_type == "blog" && _id == $id][0]{
      _id, views
  }
`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
  `);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
  *[_type == "author" && _id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
  `);
