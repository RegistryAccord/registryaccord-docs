import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/revenue/registryaccord-revenue-services-api",
    },
    {
      type: "category",
      label: "Campaigns",
      link: {
        type: "doc",
        id: "api/revenue/campaigns",
      },
      items: [
        {
          type: "doc",
          id: "api/revenue/create-campaign",
          label: "Create campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/revenue/list-campaigns",
          label: "List campaigns",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Creatives",
      link: {
        type: "doc",
        id: "api/revenue/creatives",
      },
      items: [
        {
          type: "doc",
          id: "api/revenue/upload-creative",
          label: "Upload creative",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/revenue/list-creatives",
          label: "List creatives",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Segments",
      link: {
        type: "doc",
        id: "api/revenue/segments",
      },
      items: [
        {
          type: "doc",
          id: "api/revenue/create-segment",
          label: "Create segment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/revenue/list-segments",
          label: "List segments",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transparency",
      link: {
        type: "doc",
        id: "api/revenue/transparency",
      },
      items: [
        {
          type: "doc",
          id: "api/revenue/explain-ad-targeting",
          label: "Why am I seeing this ad?",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
