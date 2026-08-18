/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.defs.ts" enhancement="_blank"/>

export const inspectClientBillingSummaryUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "inspectClientBillingSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "inspectClientBillingSummary",
    "ports": [
      "ClientBillingSummary",
      "ChangeOrder",
      "Client",
      "Invoice",
      "Project"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly"
    ],
    "functions": [
      {
        "functionName": "inspectClientBillingSummary",
        "inputTypeName": "InspectClientBillingSummaryInput",
        "outputTypeName": "InspectClientBillingSummaryOutput",
        "input": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Resumo de faturamento do cliente",
            "ofEntity": "ClientBillingSummary",
            "fieldRef": "ClientBillingSummary.clientId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "ClientBillingSummary"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "ClientBillingSummary"
          },
          {
            "name": "approvedChangeOrderReferences",
            "type": "string",
            "required": false,
            "ofEntity": "ClientBillingSummary"
          },
          {
            "name": "invoiceReferences",
            "type": "string",
            "required": false,
            "ofEntity": "ClientBillingSummary"
          },
          {
            "name": "approvedChangeOrderAmount",
            "type": "number",
            "required": true,
            "ofEntity": "ClientBillingSummary"
          },
          {
            "name": "billableAmount",
            "type": "number",
            "required": true,
            "ofEntity": "ClientBillingSummary"
          },
          {
            "name": "invoicedAmount",
            "type": "number",
            "required": true,
            "ofEntity": "ClientBillingSummary"
          },
          {
            "name": "clientAvailableAmount",
            "type": "number",
            "required": true,
            "ofEntity": "ClientBillingSummary"
          }
        ],
        "ports": [
          "ClientBillingSummary",
          "ChangeOrder",
          "Client",
          "Invoice",
          "Project"
        ],
        "rulesApplied": [
          "invoiceIncludesApprovedChangeOrdersOnly"
        ],
        "transactional": false,
        "steps": [
          "Load the ClientBillingSummary aggregate by clientId through the ClientBillingSummary port.",
          "Load the referenced client and project through their ports and verify that the summary belongs to the requested client and project.",
          "Load ChangeOrder records for the client and project, retain only records whose status is approved, and calculate approvedChangeOrderAmount from their changeAmount values.",
          "Load Invoice records for the client and project, exclude cancelled invoices, and calculate invoicedAmount from the applicable invoice amounts.",
          "Apply invoiceIncludesApprovedChangeOrdersOnly inline: billableAmount must include only approved change orders, and the returned references and amounts must correspond to that approved set.",
          "Calculate clientAvailableAmount as billableAmount minus invoicedAmount and return the canonical summary projection, preserving the declared reference fields."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "ClientBillingSummary.clientId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "ClientBillingSummary.projectId"
            },
            {
              "name": "approvedChangeOrderReferences",
              "type": "string",
              "required": false,
              "fieldRef": "ClientBillingSummary.approvedChangeOrderReferences"
            },
            {
              "name": "invoiceReferences",
              "type": "string",
              "required": false,
              "fieldRef": "ClientBillingSummary.invoiceReferences"
            },
            {
              "name": "approvedChangeOrderAmount",
              "type": "number",
              "required": true,
              "fieldRef": "ClientBillingSummary.approvedChangeOrderAmount"
            },
            {
              "name": "billableAmount",
              "type": "number",
              "required": true,
              "fieldRef": "ClientBillingSummary.billableAmount"
            },
            {
              "name": "invoicedAmount",
              "type": "number",
              "required": true,
              "fieldRef": "ClientBillingSummary.invoicedAmount"
            },
            {
              "name": "clientAvailableAmount",
              "type": "number",
              "required": true,
              "fieldRef": "ClientBillingSummary.clientAvailableAmount"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default inspectClientBillingSummaryUsecase;

export const pipeline = [
  {
    "id": "inspectClientBillingSummary__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientBillingSummaryRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
