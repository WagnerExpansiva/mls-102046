/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const updateInvoiceChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateInvoiceChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateInvoiceChangeOrder",
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
        "functionName": "updateInvoiceChangeOrder",
        "inputTypeName": "UpdateInvoiceChangeOrderInput",
        "outputTypeName": "UpdateInvoiceChangeOrderOutput",
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
          },
          {
            "name": "invoiceId",
            "type": "string",
            "required": true,
            "description": "Referência de contexto à fatura emitida que incorpora a ordem de mudança.",
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
            "description": "Referência de contexto à ordem de mudança aprovada incorporada na fatura.",
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
          "Iniciar uma transação usando o contexto transacional e carregar o InvoiceChangeOrder pelo invoiceChangeOrderId através do port InvoiceChangeOrder.",
          "Validar que o vínculo carregado corresponde ao invoiceId e changeOrderId recebidos; rejeitar inconsistências de seleção.",
          "Carregar a Invoice pelo invoiceId e o ChangeOrder pelo changeOrderId através dos respectivos ports; rejeitar referências inexistentes.",
          "Aplicar inline a regra invoiceIncludesApprovedChangeOrdersOnly: rejeitar a atualização com erro que identifique essa regra quando o ChangeOrder não estiver com status approved.",
          "Atualizar somente billedAmount no InvoiceChangeOrder, preservar suas referências e identificador, salvar pelo port InvoiceChangeOrder e confirmar a transação.",
          "Retornar exatamente invoiceChangeOrderId, invoiceId, changeOrderId e billedAmount do vínculo atualizado."
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

export default updateInvoiceChangeOrderUsecase;

export const pipeline = [
  {
    "id": "updateInvoiceChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoiceChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoiceChangeOrder.defs.ts",
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
