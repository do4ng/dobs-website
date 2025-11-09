export interface Post {
  title: string;
  date: string;
}

export default [
  {
    title: "About DOBS",
    date: "25-10-26",
  },
] satisfies Post[];
