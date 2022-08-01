export interface Project {
  id: Number;
  title: string;
  tagList: tagList[];
  imageUrl: string;
  githubUrl: string;
  deployUrl: string;
}

interface tagList {
  name: string;
  color: string;
}
