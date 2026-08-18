/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/clientBillingSummaryView.defs.ts" enhancement="_blank"/>

export const clientBillingSummaryViewWorkspace = {
  "workspaceId": "clientBillingSummaryView",
  "title": "Resumo de faturamento do cliente",
  "actors": [
    "billingStaff"
  ],
  "kind": "landing",
  "entity": "ClientBillingSummary",
  "bffCalls": [
    {
      "bffId": "qryClientBillingSummaryView",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectClientBillingSummary"
        }
      ],
      "input": [
        {
          "name": "clientBillingSummaryClientId",
          "from": "inspectClientBillingSummary.clientBillingSummaryClientId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "clientId",
            "from": "inspectClientBillingSummary.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "inspectClientBillingSummary.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "approvedChangeOrderReferences",
            "from": "inspectClientBillingSummary.approvedChangeOrderReferences",
            "type": "string",
            "required": false
          },
          {
            "name": "invoiceReferences",
            "from": "inspectClientBillingSummary.invoiceReferences",
            "type": "string",
            "required": false
          },
          {
            "name": "approvedChangeOrderAmount",
            "from": "inspectClientBillingSummary.approvedChangeOrderAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "billableAmount",
            "from": "inspectClientBillingSummary.billableAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "invoicedAmount",
            "from": "inspectClientBillingSummary.invoicedAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "clientAvailableAmount",
            "from": "inspectClientBillingSummary.clientAvailableAmount",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView"
    }
  ],
  "sections": [
    {
      "sectionId": "overview",
      "intent": "Projeção comercial por cliente e obra que consolida alterações aprovadas, valores faturáveis, faturas emitidas e valores disponibilizados ao cliente.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryClientBillingSummaryView"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectClientBillingSummary"
  ],
  "purpose": "Projeção comercial por cliente e obra que consolida alterações aprovadas, valores faturáveis, faturas emitidas e valores disponibilizados ao cliente.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter",
    "confidence": 10,
    "classificationNote": "Derived from the projection tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:52193545"
} as const;

export default clientBillingSummaryViewWorkspace;
