/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const deleteInvoiceChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteInvoiceChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteInvoiceChangeOrder",
    "ports": [
      "InvoiceChangeOrder"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteInvoiceChangeOrder",
        "inputTypeName": "DeleteInvoiceChangeOrderInput",
        "outputTypeName": "DeleteInvoiceChangeOrderOutput",
        "input": [
          {
            "name": "invoiceChangeOrderId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do vínculo de faturamento entre uma fatura e uma ordem de mudança aprovada.",
            "ofEntity": "InvoiceChangeOrder",
            "fieldRef": "InvoiceChangeOrder.invoiceChangeOrderId",
            "item": {
              "fields": []
            }
          }
        ],
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
        "transactional": true,
        "steps": [
          "Iniciar uma transação usando ctx.data apenas como wrapper transacional.",
          "Carregar o InvoiceChangeOrder pelo invoiceChangeOrderId através do port InvoiceChangeOrder.",
          "Se o vínculo não existir, rejeitar a operação com erro de validação/not-found referenciando invoiceChangeOrderId.",
          "Capturar os campos do vínculo carregado para formar a saída canônica.",
          "Excluir o InvoiceChangeOrder através do port InvoiceChangeOrder dentro da transação.",
          "Confirmar a transação e retornar invoiceChangeOrderId, invoiceId, changeOrderId e billedAmount do vínculo excluído."
        ],
        "outputShape": {
          "kind": "object",
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

export default deleteInvoiceChangeOrderUsecase;

export const pipeline = [
  {
    "id": "deleteInvoiceChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoiceChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoiceChangeOrder.defs.ts",
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
