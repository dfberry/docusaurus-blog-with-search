const site = {
  githubAccount: "yourGitHubAccountName",
  githubRepo: "yourRepoName",
  githubBranchName: "main",
  title: "Your site title",
  tagline: "Your tagline",
  siteUrl: "http://yourGitHubAccountName.github.io", // Doesn't have to be a GitHub site
  copyright: `Copyright © ${new Date().getFullYear()} Your Site Name, Inc. Built with Docusaurus.`,
  navBarTitle: "Nav Bar Title",
  footerLinks: [
    {
      title: "My Other Links",
      items: [
        {
          label: "GitHub",
          href: "https://github.com/yourGitHubAccountName",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/yourPersonalUrl",
        }
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
  ],
};

module.exports = site;