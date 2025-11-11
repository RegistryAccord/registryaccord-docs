import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/storage/registryaccord-storage-gateway-api",
    },
    {
      type: "category",
      label: "Buckets",
      link: {
        type: "doc",
        id: "api/storage/buckets",
      },
      items: [
        {
          type: "doc",
          id: "api/storage/create-bucket",
          label: "Create bucket",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/storage/list-buckets",
          label: "List buckets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/storage/get-bucket",
          label: "Get bucket",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/storage/delete-bucket",
          label: "Delete bucket",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Objects",
      link: {
        type: "doc",
        id: "api/storage/objects",
      },
      items: [
        {
          type: "doc",
          id: "api/storage/create-object",
          label: "Initiate object upload",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/storage/list-objects",
          label: "List objects",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/storage/get-object",
          label: "Get object metadata",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/storage/delete-object",
          label: "Delete object",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Uploads",
      link: {
        type: "doc",
        id: "api/storage/uploads",
      },
      items: [
        {
          type: "doc",
          id: "api/storage/create-multipart-upload",
          label: "Create multipart upload session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/storage/upload-part",
          label: "Upload part",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/storage/complete-multipart-upload",
          label: "Complete upload",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/storage/abort-multipart-upload",
          label: "Abort upload",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
