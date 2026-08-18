{
  "savedAt": "2026-08-18T12:29:14.360Z",
  "agentName": "agentCbUsecase",
  "stepId": 51,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "updateInventoryItem",
          "ports": [
            "InventoryItem"
          ],
          "rulesApplied": [
            "selectableInventoryItem"
          ],
          "functions": [
            {
              "functionName": "updateInventoryItem",
              "inputTypeName": "UpdateInventoryItemInput",
              "outputTypeName": "UpdateInventoryItemOutput",
              "input": [
                {
                  "name": "inventoryItemId",
                  "type": "string",
                  "required": true,
                  "description": "Identificador estável do item no catálogo mestre de materiais.",
                  "ofEntity": "InventoryItem",
                  "fieldRef": "InventoryItem.inventoryItemId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "name",
                  "type": "string",
                  "required": true,
                  "description": "Nome pelo qual o material ou consumível é identificado no catálogo.",
                  "ofEntity": "InventoryItem",
                  "fieldRef": "InventoryItem.name",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "description",
                  "type": "string",
                  "required": false,
                  "description": "Descrição complementar para distinguir e especificar o material no catálogo.",
                  "ofEntity": "InventoryItem",
                  "fieldRef": "InventoryItem.description",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "unitOfMeasure",
                  "type": "string",
                  "required": true,
                  "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco.",
                  "ofEntity": "InventoryItem",
                  "fieldRef": "InventoryItem.unitOfMeasure",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "referenceUnitCost",
                  "type": "number",
                  "required": true,
                  "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra.",
                  "ofEntity": "InventoryItem",
                  "fieldRef": "InventoryItem.referenceUnitCost",
                  "item": {
                    "fields": []
                  }
                }
              ],
              "output": [
                {
                  "name": "inventoryItemId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "InventoryItem"
                },
                {
                  "name": "name",
                  "type": "string",
                  "required": true,
                  "ofEntity": "InventoryItem"
                },
                {
                  "name": "description",
                  "type": "string",
                  "required": false,
                  "ofEntity": "InventoryItem"
                },
                {
                  "name": "unitOfMeasure",
                  "type": "string",
                  "required": true,
                  "ofEntity": "InventoryItem"
                },
                {
                  "name": "referenceUnitCost",
                  "type": "number",
                  "required": true,
                  "ofEntity": "InventoryItem"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "InventoryItem"
                }
              ],
              "ports": [
                "InventoryItem"
              ],
              "rulesApplied": [
                "selectableInventoryItem"
              ],
              "transactional": true,
              "steps": [
                "Load the InventoryItem by inventoryItemId through the InventoryItem port.",
                "Apply the selectableInventoryItem invariant inline: the item must exist and its resulting status must be either active or retired; if the rule blocks the update, return a validation error whose details include selectableInventoryItem.",
                "Resolve the systemDefault status server-side, preserving the existing status when no default value is configured.",
                "Update the writable fields through the InventoryItem port inside one transaction and return the declared output projection."
              ],
              "outputShape": {
                "kind": "object",
                "fields": [
                  {
                    "name": "inventoryItemId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "InventoryItem.inventoryItemId"
                  },
                  {
                    "name": "name",
                    "type": "string",
                    "required": true,
                    "fieldRef": "InventoryItem.name"
                  },
                  {
                    "name": "description",
                    "type": "string",
                    "required": false,
                    "fieldRef": "InventoryItem.description"
                  },
                  {
                    "name": "unitOfMeasure",
                    "type": "string",
                    "required": true,
                    "fieldRef": "InventoryItem.unitOfMeasure"
                  },
                  {
                    "name": "referenceUnitCost",
                    "type": "number",
                    "required": true,
                    "fieldRef": "InventoryItem.referenceUnitCost"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "InventoryItem.status"
                  }
                ]
              }
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Repaired the usecase and function port declarations with the valid InventoryItem repository port.",
          "Excluded systemDefault status from the public input surface.",
          "Applied selectableInventoryItem inline in the update orchestration."
        ]
      }
    },
    "status": "completed",
    "stepId": 15,
    "interaction": null,
    "nextSteps": null
  }
}
