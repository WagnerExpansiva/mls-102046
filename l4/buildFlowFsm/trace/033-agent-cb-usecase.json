{
  "savedAt": "2026-08-18T12:30:34.448Z",
  "agentName": "agentCbUsecase",
  "stepId": 33,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
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
        },
        "questions": [],
        "trace": [
          "InvoiceChangeOrder é o agregado proprietário e possui port próprio; não foi inventado repositório de filho.",
          "invoiceId e changeOrderId são inputs públicos porque foram declarados com source selectedEntity; billedAmount é público porque foi declarado com source userInput.",
          "A regra de aprovação foi aplicada inline no fluxo do usecase."
        ]
      }
    },
    "status": "completed",
    "stepId": 9,
    "interaction": null,
    "nextSteps": null
  }
}
