{
  "savedAt": "2026-08-18T12:30:36.217Z",
  "agentName": "agentCbUsecase",
  "stepId": 29,
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
                  "description": "Identificador estável da fatura a atualizar.",
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
                  "description": "Referência do cliente da fatura.",
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
                  "description": "Referência da obra faturável vinculada à fatura.",
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
                "Dentro de uma única transação, carregar a Invoice pelo Invoice.invoiceId usando o port Invoice; rejeitar com o identificador da regra aplicável quando não encontrada.",
                "Carregar o Client pelo clientId e o Project pelo projectId usando exclusivamente os ports correspondentes; aplicar invoiceRequiresClientAndProject, rejeitando se qualquer referência não existir ou se o projeto não pertencer ao cliente informado.",
                "Validar o valor e a referência comercial conforme as invariantes do domínio e calcular o valor faturável considerando somente change orders aprovadas; aplicar invoiceIncludesApprovedChangeOrdersOnly e rejeitar qualquer composição que inclua change order não aprovada. A ontologia fornecida não declara a entidade/coleção de change orders, portanto registrar essa lacuna de modelagem e não inventar um repositório ou filtro inexistente.",
                "Aplicar a transição de status permitida pelo domínio e a regra clientVisibleInvoice: somente marcar a fatura como availableToClient quando estiver apta à consulta externa do cliente; preservar ou definir o status server-side conforme o lifecycle, sem aceitar status do cliente.",
                "Atualizar a Invoice carregada com clientId, projectId, commercialReference, amount e o status resolvido, salvar pelo port Invoice e retornar exatamente os campos projetados da Invoice persistida."
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
          "Public inputs include only selectedEntity and userInput sources; systemDefault status is resolved server-side.",
          "No child repository is needed because Invoice is its own parent aggregate.",
          "The supplied model has no ChangeOrder entity or port, so invoiceIncludesApprovedChangeOrdersOnly is applied as a domain validation boundary with a recorded modeling gap."
        ]
      }
    },
    "status": "completed",
    "stepId": 11,
    "interaction": null,
    "nextSteps": null
  }
}
