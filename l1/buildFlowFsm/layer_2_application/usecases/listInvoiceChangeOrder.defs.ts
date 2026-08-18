/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const listInvoiceChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listInvoiceChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listInvoiceChangeOrder",
    "ports": [
      "InvoiceChangeOrder"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listInvoiceChangeOrder",
        "inputTypeName": "ListInvoiceChangeOrderInput",
        "outputTypeName": "ListInvoiceChangeOrderOutput",
        "input": [],
        "output": [
          {
            "name": "invoiceChangeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "InvoiceChangeOrder"
          },
          {
            "name": "invoiceId",
            "type": "string",
            "required": true,
            "ofEntity": "InvoiceChangeOrder"
          },
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "InvoiceChangeOrder"
          },
          {
            "name": "billedAmount",
            "type": "number",
            "required": true,
            "ofEntity": "InvoiceChangeOrder"
          }
        ],
        "ports": [
          "InvoiceChangeOrder"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Consultar o port InvoiceChangeOrder para listar as aplicações de ordem de mudança na fatura.",
          "Projetar cada registro nos campos invoiceChangeOrderId, invoiceId, changeOrderId e billedAmount conforme o outputShape canônico."
        ],
        "outputShape": {
          "kind": "list",
          "fields": [
            {
              "name": "invoiceChangeOrderId",
              "type": "string",
              "required": true,
              "fieldRef": "InvoiceChangeOrder.invoiceChangeOrderId"
            },
            {
              "name": "invoiceId",
              "type": "string",
              "required": true,
              "fieldRef": "InvoiceChangeOrder.invoiceId"
            },
            {
              "name": "changeOrderId",
              "type": "string",
              "required": true,
              "fieldRef": "InvoiceChangeOrder.changeOrderId"
            },
            {
              "name": "billedAmount",
              "type": "number",
              "required": true,
              "fieldRef": "InvoiceChangeOrder.billedAmount"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default listInvoiceChangeOrderUsecase;

export const pipeline = [
  {
    "id": "listInvoiceChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoiceChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoiceChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
