import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/identity/registryaccord-identity-service-api",
    },
    {
      type: "category",
      label: "Identities",
      link: {
        type: "doc",
        id: "api/identity/identities",
      },
      items: [
        {
          type: "doc",
          id: "api/identity/create-identity",
          label: "Create identity",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/identity/get-identity",
          label: "Get identity",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/identity/update-identity",
          label: "Update identity",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/identity/delete-identity",
          label: "Delete identity",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Sessions",
      link: {
        type: "doc",
        id: "api/identity/sessions",
      },
      items: [
        {
          type: "doc",
          id: "api/identity/create-session",
          label: "Create session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/identity/get-session",
          label: "Get session details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/identity/end-session",
          label: "End session",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Tokens",
      link: {
        type: "doc",
        id: "api/identity/tokens",
      },
      items: [
        {
          type: "doc",
          id: "api/identity/mint-token",
          label: "Mint access token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/identity/verify-token",
          label: "Verify token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/identity/refresh-token",
          label: "Refresh token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/identity/revoke-token",
          label: "Revoke token",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Organizations",
      link: {
        type: "doc",
        id: "api/identity/organizations",
      },
      items: [
        {
          type: "doc",
          id: "api/identity/list-organizations",
          label: "List organizations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/identity/create-organization",
          label: "Create organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/identity/get-organization",
          label: "Get organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/identity/update-organization",
          label: "Update organization",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Consents",
      link: {
        type: "doc",
        id: "api/identity/consents",
      },
      items: [
        {
          type: "doc",
          id: "api/identity/grant-consent",
          label: "Grant consent",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/identity/list-consents",
          label: "List consents",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/identity/revoke-consent",
          label: "Revoke consent",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Keys",
      link: {
        type: "doc",
        id: "api/identity/keys",
      },
      items: [
        {
          type: "doc",
          id: "api/identity/create-key",
          label: "Create keypair",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/identity/list-keys",
          label: "List keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/identity/revoke-key",
          label: "Revoke key",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Audit",
      link: {
        type: "doc",
        id: "api/identity/audit",
      },
      items: [
        {
          type: "doc",
          id: "api/identity/query-audit-events",
          label: "Query audit events",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
