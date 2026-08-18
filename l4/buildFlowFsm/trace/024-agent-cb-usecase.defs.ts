{
  "savedAt": "2026-08-18T12:30:35.906Z",
  "agentName": "agentCbUsecase",
  "stepId": 24,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "updateInventoryBalance",
          "ports": [
            "InventoryBalance",
            "InventoryItem"
          ],
          "rulesApplied": [
            "availableInventoryBalance"
          ],
          "functions": [
            {
              "functionName": "updateInventoryBalance",
              "inputTypeName": "UpdateInventoryBalanceInput",
              "outputTypeName": "UpdateInventoryBalanceOutput",
              "input": [
                {
                  "name": "inventoryBalanceId",
                  "type": "string",
                  "required": true,
                  "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas.",
                  "ofEntity": "InventoryBalance",
                  "fieldRef": "InventoryBalance.inventoryBalanceId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "inventoryItemId",
                  "type": "string",
                  "required": true,
                  "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto.",
                  "ofEntity": "InventoryBalance",
                  "fieldRef": "InventoryBalance.inventoryItemId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "physicalQuantity",
                  "type": "number",
                  "required": true,
                  "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo.",
                  "ofEntity": "InventoryBalance",
                  "fieldRef": "InventoryBalance.physicalQuantity",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "applicableUnitCost",
                  "type": "number",
                  "required": true,
                  "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra.",
                  "ofEntity": "InventoryBalance",
                  "fieldRef": "InventoryBalance.applicableUnitCost",
                  "item": {
                    "fields": []
                  }
                }
              ],
              "output": [
                {
                  "name": "inventoryBalanceId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "InventoryBalance"
                },
                {
                  "name": "inventoryItemId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "InventoryBalance"
                },
                {
                  "name": "physicalQuantity",
                  "type": "number",
                  "required": true,
                  "ofEntity": "InventoryBalance"
                },
                {
                  "name": "applicableUnitCost",
                  "type": "number",
                  "required": true,
                  "ofEntity": "InventoryBalance"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "InventoryBalance"
                }
              ],
              "ports": [
                "InventoryBalance",
                "InventoryItem"
              ],
              "rulesApplied": [
                "availableInventoryBalance"
              ],
              "transactional": true,
              "steps": [
                "Validate that inventoryBalanceId, inventoryItemId, physicalQuantity, and applicableUnitCost are present and that physicalQuantity and applicableUnitCost are not negative; if blocked, include rule availableInventoryBalance in the validation error details.",
                "Load the InventoryBalance through the InventoryBalance port and verify that the selected inventoryItemId matches the balance being updated.",
                "Load the InventoryItem through the InventoryItem port and reject the update if the item does not exist or is retired.",
                "Apply availableInventoryBalance inline: a non-retired balance with physicalQuantity greater than zero has status available, while a zero quantity has status depleted; preserve retired status only when the existing balance is already retired.",
                "Update the InventoryBalance aggregate with the validated inventoryItemId, physicalQuantity, applicableUnitCost, and derived status, then save it through the InventoryBalance port.",
                "Return exactly the updated inventoryBalanceId, inventoryItemId, physicalQuantity, applicableUnitCost, and status fields."
              ],
              "outputShape": {
                "kind": "object",
                "fields": [
                  {
                    "name": "inventoryBalanceId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "InventoryBalance.inventoryBalanceId"
                  },
                  {
                    "name": "inventoryItemId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "InventoryBalance.inventoryItemId"
                  },
                  {
                    "name": "physicalQuantity",
                    "type": "number",
                    "required": true,
                    "fieldRef": "InventoryBalance.physicalQuantity"
                  },
                  {
                    "name": "applicableUnitCost",
                    "type": "number",
                    "required": true,
                    "fieldRef": "InventoryBalance.applicableUnitCost"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "InventoryBalance.status"
                  }
                ]
              }
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Update operation uses selectedEntity fields as public inputs and resolves system-default status inside the usecase.",
          "No eventWrites or MDM references were declared.",
          "No child repository is needed because InventoryBalance is its own parent aggregate."
        ]
      }
    },
    "status": "completed",
    "stepId": 10,
    "interaction": null,
    "nextSteps": null
  }
}
