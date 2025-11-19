export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
  hidden?: boolean;
}

export interface Config {
  title: string;
  icon?: string;
  category: Category[];
  directory?: string;
  target: string;
}

export default [
  {
    title: "docs",
    icon: "book-open-line",
    target: "overview",
    category: [
      {
        name: "Overview",
        posts: [
          { overview: "Overview" },
          { "why-dobs": "Why Dobs" },
          { "getting-started": "Getting Started" },
        ],
      },
      {
        name: "Guide",
        posts: [
          { guide: "Guide" },
          { routing: "Routing" },
          { "define-handler": "Define Handler" },
          { context: "Context" },
          { entry: "Server Entry" },
          { "config-file": "Config File" },
          { build: "Build Server" },
          { "data-caching": "Data Caching" },
          { assets: "Assets" },
          { "plugin-guide": "Plugin Guide" },
          { cli: "CLI" },
          { "dobs-integration": "Dobs Integration" },
        ],
      },
      {
        name: "Community",
        hidden: true,
        posts: [{ community: "Community" }, { contributing: "Contributing" }],
      },
    ],
  },
] as Config[];
