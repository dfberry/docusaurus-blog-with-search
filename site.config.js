const site = {
  githubAccount: "yourGitHubAccountName",
  githubRepo: "yourRepoName",
  githubBranchName: "main",
  title: "Your site title",
  tagline: "Your tagline",
  siteUrl: "http://yourGitHubAccountName.github.io", // Doesn't have to be a GitHub site
  copyright: `Copyright © ${new Date().getFullYear()} Your Site Name, Inc. Built with Docusaurus.`,

  footerLinks: [
    {
      title: "Links",
      items: [
        {
          label: "GitHub",
          href: "https://github.com/yourGitHubAccountName",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/yourPersonalUrl",
        },
      ],
    },
    {
      title: "Docusaurus",
      items: [
        {
          label: "Help",
          href: "https://docusaurus.io/docs",
        },
        {
          label: "Stay informed",
          href: "https://docusaurus.io/docs#staying-informed",
        },
        {
          label: "Showcase",
          href: "https://docusaurus.io/showcase",
        },
      ],
    },
    {
      title: "Markdown",
      items: [
        {
          label: "Guide",
          href: "https://www.markdownguide.org/",
        },
        {
          label: "Cheatsheet",
          href: "https://www.markdownguide.org/cheat-sheet/",
        },
        {
          label: "Hacks",
          href: "https://www.markdownguide.org/hacks/",
        },
      ],
    },
  ],
  blog: {
    title: "My Blog Title",
    description: "My Blog Description",
    sidebarTitle: "Recent posts",
    sidebarCount: "ALL", // Pick a low number or "All",
    postsPerPage: 3,
    rssFeedOptions: {
      type: "all",
      title: "Simple Docusaurus Blog site feed",
      description: "Simple blog",
      copyright: "Feed options copyright"
    },
  },
  navbar: {
    title: "My site",
    items: [
      {
        type: "doc",
        docId: "introduction",
        position: "left",
        label: "Get Started",
      },
      { 
        to: "/", 
        label: "Blog", 
        position: "left",
        type: "dropdown", 
        items: [
          { to: "/", label: "Recent"},
          { to: "tags", label: "Tags" },
        ]
      },
      {
        href: "https://github.com/dfberry/docusaurus-blog-with-search",
        label: "GitHub",
        position: "right",
      },
    ],
  },
  announcementBar: {
    id: "announcement",
    backgroundColor: "#fafbfc",
    textColor: "#091E42",
    content: `Come join use for a <a href="https://en.wikipedia.org/wiki/Ralphs">party at Ralph's</a>`,
  },

};

module.exports = site;
