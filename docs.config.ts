export interface Docs {
  name: string;
  description: string;

  github: string;

  index: {
    content: string;
    href: string;
  }[];

  header: Array<
    | {
        type: "popover";
        title: string;
        children: Array<{
          title: string;
          href: string;
          icon: string;
          description?: string;
        }>;
      }
    | { title: string; href: string; type: "link" }
  >;
}

export default {
  name: "dobs",
  description: 'The <span class="gra ">Lightweight</span><br>Backend Framework',
  index: [
    {
      content: "Getting Started",
      href: "/docs/getting-started",
    },
    {
      content: "Why Dobs?",
      href: "/docs/why-dobs",
    },
  ],
  header: [
    {
      title: "Docs",
      type: "popover",
      children: [
        {
          title: "Docs",
          href: "/docs/overview",
          description: "Learn all of information of package.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-book-open-line",
        },
        {
          title: "Contribute",
          href: "/docs/contributing",
          description: "thank you for your contribution.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-sticky-note-line",
        },
      ],
    },

    {
      title: "Ecosystem",
      type: "popover",
      children: [
        {
          title: "zely-js",
          href: "https://github.com/zely-js/zely",
          description: "The fast backend framework",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-instance-line",
        },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Our development blog",
      // https://remixicon.com/icon/book-open-line
      icon: "ri-book-open-line",
    },
  ],
} as Docs;
