import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/feeds/registryaccord-feed-generator-api",
    },
    {
      type: "category",
      label: "Feeds",
      link: {
        type: "doc",
        id: "api/feeds/feeds",
      },
      items: [
        {
          type: "doc",
          id: "api/feeds/generate-feed",
          label: "Generate personalized feed",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feeds/get-cached-feed",
          label: "Get cached feed",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feeds/get-fairness-scorecard",
          label: "Retrieve public fairness scorecard",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feeds/get-audit-history",
          label: "Retrieve audit history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feeds/submit-dispute",
          label: "Submit fairness dispute",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feeds/get-dispute-stats",
          label: "Retrieve dispute statistics",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Signals",
      link: {
        type: "doc",
        id: "api/feeds/signals",
      },
      items: [
        {
          type: "doc",
          id: "api/feeds/list-signals",
          label: "List available ranking signals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feeds/register-custom-signal",
          label: "Register custom signal",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Experiments",
      link: {
        type: "doc",
        id: "api/feeds/experiments",
      },
      items: [
        {
          type: "doc",
          id: "api/feeds/create-experiment",
          label: "Create A/B test",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feeds/list-experiments",
          label: "List experiments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feeds/get-experiment-results",
          label: "Get experiment results",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
