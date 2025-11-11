import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/analytics/registryaccord-analytics-api",
    },
    {
      type: "category",
      label: "Events",
      link: {
        type: "doc",
        id: "api/analytics/events",
      },
      items: [
        {
          type: "doc",
          id: "api/analytics/ingest-events",
          label: "Ingest events",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Metrics",
      link: {
        type: "doc",
        id: "api/analytics/metrics",
      },
      items: [
        {
          type: "doc",
          id: "api/analytics/query-metrics",
          label: "Query metrics",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      link: {
        type: "doc",
        id: "api/analytics/schemas",
      },
      items: [
        {
          type: "doc",
          id: "api/analytics/register-schema",
          label: "Register schema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/analytics/list-schemas",
          label: "List schemas",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Exports",
      link: {
        type: "doc",
        id: "api/analytics/exports",
      },
      items: [
        {
          type: "doc",
          id: "api/analytics/create-export",
          label: "Create export",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/analytics/list-exports",
          label: "List exports",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/analytics/get-export",
          label: "Get export",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Privacy",
      link: {
        type: "doc",
        id: "api/analytics/privacy",
      },
      items: [
        {
          type: "doc",
          id: "api/analytics/get-privacy-budget",
          label: "Get privacy budget",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/analytics/adjust-privacy-budget",
          label: "Adjust privacy budget",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
