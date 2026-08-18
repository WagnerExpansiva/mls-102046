/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const createInvoiceChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createInvoiceChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createInvoiceChangeOrder",
    "ports": [
      "InvoiceChangeOrder",
      "ChangeOrder",
      "Invoice"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly"
    ],
    "functions": [
      {
        "functionName": "createInvoiceChangeOrder",
        "inputTypeName": "CreateInvoiceChangeOrderInput",
        "outputTypeName": "CreateInvoiceChangeOrderOutput",
        "input": [
          {
            "name": "invoiceId",
            "type": "string",
            "required": true,
            "description": "Referência da fatura emitida que incorpora a ordem de mudança.",
            "ofEntity": "InvoiceChangeOrder",
            "fieldRef": "InvoiceChangeOrder.invoiceId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "description": "Referência da ordem de mudança a ser incorporada na fatura.",
            "ofEntity": "InvoiceChangeOrder",
            "fieldRef": "InvoiceChangeOrder.changeOrderId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "billedAmount",
            "type": "number",
            "required": true,
            "description": "Valor efetivamente faturado nesta fatura em razão da ordem de mudança vinculada.",
            "ofEntity": "InvoiceChangeOrder",
            "fieldRef": "InvoiceChangeOrder.billedAmount",
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
          "InvoiceChangeOrder",
          "ChangeOrder",
          "Invoice"
        ],
        "rulesApplied": [
          "invoiceIncludesApprovedChangeOrdersOnly"
        ],
        "transactional": true,
        "steps": [
          "Executar a operação dentro de uma única transação usando ctx.data apenas como wrapper transacional.",
          "Carregar a Invoice pelo invoiceId através do port Invoice e rejeitar se ela não existir.",
          "Carregar a ChangeOrder pelo changeOrderId através do port ChangeOrder e rejeitar se ela não existir.",
          "Aplicar inline a regra invoiceIncludesApprovedChangeOrdersOnly: rejeitar com o identificador da regra nos detalhes do erro se o status da ChangeOrder não for approved.",
          "Gerar invoiceChangeOrderId com ctx.idGenerator e criar a InvoiceChangeOrder pelo port InvoiceChangeOrder com invoiceId, changeOrderId e billedAmount.",
          "Retornar exatamente invoiceChangeOrderId, invoiceId, changeOrderId e billedAmount do agregado criado."
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

export default createInvoiceChangeOrderUsecase;

export const pipeline = [
  {
    "id": "createInvoiceChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoiceChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoiceChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
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
