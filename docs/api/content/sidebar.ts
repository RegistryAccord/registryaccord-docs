import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/content/registryaccord-content-registry-api",
    },
    {
      type: "category",
      label: "Collections",
      link: {
        type: "doc",
        id: "api/content/collections",
      },
      items: [
        {
          type: "doc",
          id: "api/content/create-collection",
          label: "Create collection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/content/list-collections",
          label: "List collections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/content/get-collection",
          label: "Get collection",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/content/update-collection",
          label: "Update collection",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/content/add-content-to-collection",
          label: "Add content to collection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/content/remove-content-from-collection",
          label: "Remove content from collection",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Content",
      link: {
        type: "doc",
        id: "api/content/content",
      },
      items: [
        {
          type: "doc",
          id: "api/content/create-content",
          label: "Create new content",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/content/list-content",
          label: "List content",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/content/get-content",
          label: "Get content",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/content/update-content",
          label: "Update content",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/content/delete-content",
          label: "Delete content",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Events",
      link: {
        type: "doc",
        id: "api/content/events",
      },
      items: [
        {
          type: "doc",
          id: "api/content/create-event-subscription",
          label: "Subscribe to content events",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/content/list-event-subscriptions",
          label: "List event subscriptions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/content/delete-event-subscription",
          label: "Unsubscribe from content events",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Licenses",
      link: {
        type: "doc",
        id: "api/content/licenses",
      },
      items: [
        {
          type: "doc",
          id: "api/content/attach-license",
          label: "Attach license to content",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/content/list-content-licenses",
          label: "List content licenses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/content/remove-license",
          label: "Remove license from content",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Transparency",
      link: {
        type: "doc",
        id: "api/content/transparency",
      },
      items: [
        {
          type: "doc",
          id: "api/content/get-content-access-audit",
          label: "Who accessed my content?",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Versions",
      link: {
        type: "doc",
        id: "api/content/versions",
      },
      items: [
        {
          type: "doc",
          id: "api/content/list-content-versions",
          label: "List content versions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/content/create-content-version",
          label: "Create new content version",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
