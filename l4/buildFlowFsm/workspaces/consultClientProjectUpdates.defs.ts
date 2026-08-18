/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/consultClientProjectUpdates.defs.ts" enhancement="_blank"/>

export const consultClientProjectUpdatesWorkspace = {
  "workspaceId": "consultClientProjectUpdates",
  "title": "Consultar status e faturamento da obra",
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
      "route": "buildFlowFsm.consultClientProjectUpdates.qryLocateProject"
    },
    {
      "bffId": "qryInspectStatusReport",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectStatusReport"
        }
      ],
      "input": [
        {
          "name": "statusReportStatusReportId",
          "from": "inspectStatusReport.statusReportStatusReportId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "statusReportId",
            "from": "inspectStatusReport.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "inspectStatusReport.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "inspectStatusReport.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "inspectStatusReport.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "inspectStatusReport.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "inspectStatusReport.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "inspectStatusReport.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "inspectStatusReport.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "inspectStatusReport.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "inspectStatusReport.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "inspectStatusReport.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport"
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
      "route": "buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary"
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
      "sectionId": "inspectStatusReport",
      "intent": "O relatório publicado, incluindo riscos comunicados, está visível.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectStatusReport"
        }
      ]
    },
    {
      "sectionId": "inspectClientBillingSummary",
      "intent": "Faturas e valores relacionados à obra estão visíveis.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectClientBillingSummary"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectClientBillingSummary",
    "inspectStatusReport",
    "locateProject"
  ],
  "purpose": "Acompanhar informações publicadas sobre a execução e os valores da própria obra.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:61cb13fe"
} as const;

export default consultClientProjectUpdatesWorkspace;
