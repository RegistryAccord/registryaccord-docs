import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/payments/registryaccord-payments-payouts-api",
    },
    {
      type: "category",
      label: "Charges",
      link: {
        type: "doc",
        id: "api/payments/charges",
      },
      items: [
        {
          type: "doc",
          id: "api/payments/create-charge",
          label: "Create charge",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-charge",
          label: "Get charge",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/capture-charge",
          label: "Capture charge",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/refund-charge",
          label: "Refund charge",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Disputes",
      link: {
        type: "doc",
        id: "api/payments/disputes",
      },
      items: [
        {
          type: "doc",
          id: "api/payments/create-dispute",
          label: "Create dispute",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-disputes",
          label: "List disputes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-dispute",
          label: "Get dispute",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/respond-to-dispute",
          label: "Respond to dispute",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/escalate-dispute",
          label: "Escalate dispute",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Ledgers",
      link: {
        type: "doc",
        id: "api/payments/ledgers",
      },
      items: [
        {
          type: "doc",
          id: "api/payments/list-ledger-entries",
          label: "List ledger entries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-ledger-entry",
          label: "Get ledger entry",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-account-balance",
          label: "Get account balance",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Payment Intents",
      link: {
        type: "doc",
        id: "api/payments/payment-intents",
      },
      items: [
        {
          type: "doc",
          id: "api/payments/create-payment-intent",
          label: "Create payment intent",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-payment-intent",
          label: "Get payment intent",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/update-payment-intent",
          label: "Update payment intent",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/payments/confirm-payment-intent",
          label: "Confirm payment intent",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payouts",
      link: {
        type: "doc",
        id: "api/payments/payouts",
      },
      items: [
        {
          type: "doc",
          id: "api/payments/create-payout",
          label: "Create payout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-payouts",
          label: "List payouts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-payout",
          label: "Get payout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/hold-payout",
          label: "Hold payout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/release-payout",
          label: "Release payout",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Subscriptions",
      link: {
        type: "doc",
        id: "api/payments/subscriptions",
      },
      items: [
        {
          type: "doc",
          id: "api/payments/create-subscription",
          label: "Create subscription",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-subscriptions",
          label: "List subscriptions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-subscription",
          label: "Get subscription",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/update-subscription",
          label: "Update subscription",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/payments/cancel-subscription",
          label: "Cancel subscription",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
