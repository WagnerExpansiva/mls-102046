/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/consultApprovedProjectChangeOrders.defs.ts" enhancement="_blank"/>

export const consultApprovedProjectChangeOrdersWorkspace = {
  "workspaceId": "consultApprovedProjectChangeOrders",
  "title": "Consultar alterações aprovadas da obra",
  "actors": [
    "client"
  ],
  "kind": "operation",
  "entity": "Project",
  "bffCalls": [
    {
      "bffId": "qryLocateProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "locateProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "locateProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "locateProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "locateProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "locateProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "locateProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject"
    },
    {
      "bffId": "qryInspectApprovedChangeOrders",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectApprovedChangeOrders"
        }
      ],
      "input": [
        {
          "name": "changeOrderChangeOrderId",
          "from": "inspectApprovedChangeOrders.changeOrderChangeOrderId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "changeOrderId",
            "from": "inspectApprovedChangeOrders.changeOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientRef",
            "from": "inspectApprovedChangeOrders.clientRef",
            "type": "string",
            "required": true
          },
          {
            "name": "projectRef",
            "from": "inspectApprovedChangeOrders.projectRef",
            "type": "string",
            "required": true
          },
          {
            "name": "description",
            "from": "inspectApprovedChangeOrders.description",
            "type": "string",
            "required": true
          },
          {
            "name": "scopeImpact",
            "from": "inspectApprovedChangeOrders.scopeImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "scheduleImpact",
            "from": "inspectApprovedChangeOrders.scheduleImpact",
            "type": "string",
            "required": true
          },
          {
            "name": "changeAmount",
            "from": "inspectApprovedChangeOrders.changeAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "submittedAt",
            "from": "inspectApprovedChangeOrders.submittedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "forwardedForClientApprovalAt",
            "from": "inspectApprovedChangeOrders.forwardedForClientApprovalAt",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "from": "inspectApprovedChangeOrders.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders"
    },
    {
      "bffId": "qryInspectClientBillingSummary",
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
      "route": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary"
    }
  ],
  "sections": [
    {
      "sectionId": "locateProject",
      "intent": "Uma obra associada ao cliente está selecionada.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateProject",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "inspectApprovedChangeOrders",
      "intent": "Ordens aprovadas da obra, descrições e valores estão visíveis.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectApprovedChangeOrders"
        }
      ]
    },
    {
      "sectionId": "inspectClientBillingSummary",
      "intent": "O resumo apresenta alterações aprovadas, faturas e valores.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectClientBillingSummary"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectApprovedChangeOrders",
    "inspectClientBillingSummary",
    "locateProject"
  ],
  "purpose": "Consultar ordens aprovadas da própria obra e seus valores no faturamento.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:39c986a4"
} as const;

export default consultApprovedProjectChangeOrdersWorkspace;
