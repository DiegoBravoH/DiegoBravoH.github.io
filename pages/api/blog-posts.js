import data from './blog-posts.json';

export function getBlogPosts() {
  return data;
}

export default function handler(req, res) {
  res.status(200).json(data);
}
