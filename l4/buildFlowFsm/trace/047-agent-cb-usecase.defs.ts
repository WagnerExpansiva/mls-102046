{
  "savedAt": "2026-08-18T12:29:30.854Z",
  "agentName": "agentCbUsecase",
  "stepId": 47,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "updateInvoice",
          "ports": [
            "Invoice",
            "Client",
            "Project"
          ],
          "rulesApplied": [
            "invoiceRequiresClientAndProject",
            "invoiceIncludesApprovedChangeOrdersOnly",
            "clientVisibleInvoice"
          ],
          "functions": [
            {
              "functionName": "updateInvoice",
              "inputTypeName": "UpdateInvoiceInput",
              "outputTypeName": "UpdateInvoiceOutput",
              "input": [
                {
                  "name": "invoiceId",
                  "type": "string",
                  "required": true,
                  "description": "Identificador estável da fatura selecionada.",
                  "ofEntity": "Invoice",
                  "fieldRef": "Invoice.invoiceId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "clientId",
                  "type": "string",
                  "required": true,
                  "description": "Cliente selecionado para a fatura.",
                  "ofEntity": "Invoice",
                  "fieldRef": "Invoice.clientId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "projectId",
                  "type": "string",
                  "required": true,
                  "description": "Obra selecionada para a fatura.",
                  "ofEntity": "Invoice",
                  "fieldRef": "Invoice.projectId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "commercialReference",
                  "type": "string",
                  "required": true,
                  "description": "Referência comercial da fatura.",
                  "ofEntity": "Invoice",
                  "fieldRef": "Invoice.commercialReference",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "amount",
                  "type": "number",
                  "required": true,
                  "description": "Valor comercial total faturado para a obra.",
                  "ofEntity": "Invoice",
                  "fieldRef": "Invoice.amount",
                  "item": {
                    "fields": []
                  }
                }
              ],
              "output": [
                {
                  "name": "invoiceId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "clientId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "projectId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "commercialReference",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "amount",
                  "type": "number",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                }
              ],
              "ports": [
                "Invoice",
                "Client",
                "Project"
              ],
              "rulesApplied": [
                "invoiceRequiresClientAndProject",
                "invoiceIncludesApprovedChangeOrdersOnly",
                "clientVisibleInvoice"
              ],
              "transactional": true,
              "steps": [
                "Dentro da transação, carregar a Invoice pelo invoiceId e validar que existe.",
                "Carregar Client pelo clientId e Project pelo projectId pelos respectivos ports; rejeitar com o identificador da regra invoiceRequiresClientAndProject se qualquer referência não existir ou se o projeto não pertencer ao cliente.",
                "Aplicar inline a regra invoiceIncludesApprovedChangeOrdersOnly: preservar a composição financeira aprovada da fatura e rejeitar qualquer alteração de amount que não esteja suportada por ordens de mudança aprovadas; como o contrato não expõe uma coleção de ChangeOrder, usar a invariável de domínio da Invoice para validar a base aprovada e não aceitar uma atualização sem essa comprovação.",
                "Aplicar inline a regra clientVisibleInvoice: resolver o status padrão no contexto da aplicação, mantendo apenas issued, availableToClient ou cancelled; tornar a fatura availableToClient somente quando os dados obrigatórios do cliente e do projeto estiverem válidos.",
                "Atualizar a Invoice carregada com clientId, projectId, commercialReference, amount e o status resolvido, salvar pelo port Invoice e retornar exatamente os seis campos projetados.",
                "Se uma regra bloquear a operação, retornar erro de validação contendo o identificador da regra correspondente."
              ],
              "outputShape": {
                "kind": "object",
                "fields": [
                  {
                    "name": "invoiceId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Invoice.invoiceId"
                  },
                  {
                    "name": "clientId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Invoice.clientId"
                  },
                  {
                    "name": "projectId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Invoice.projectId"
                  },
                  {
                    "name": "commercialReference",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Invoice.commercialReference"
                  },
                  {
                    "name": "amount",
                    "type": "number",
                    "required": true,
                    "fieldRef": "Invoice.amount"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Invoice.status"
                  }
                ]
              }
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Incluídas as três portas declaradas e usadas: Invoice, Client e Project.",
          "A regra invoiceIncludesApprovedChangeOrdersOnly é aplicada inline como invariável de domínio da Invoice; não foi criado repositório ou entidade ChangeOrder inexistente no contrato.",
          "status é systemDefault e permanece resolvido no servidor, não sendo exposto como input público."
        ]
      }
    },
    "status": "completed",
    "stepId": 18,
    "interaction": null,
    "nextSteps": null
  }
}
