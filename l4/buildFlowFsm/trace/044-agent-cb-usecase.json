{
  "savedAt": "2026-08-18T12:29:47.782Z",
  "agentName": "agentCbUsecase",
  "stepId": 44,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "updateMaterialUsage",
          "ports": [
            "MaterialUsage",
            "InventoryBalance",
            "InventoryItem",
            "Project"
          ],
          "rulesApplied": [
            "materialUsageRequiresActiveProjectAndAvailableInventory",
            "costEligibleMaterialUsage"
          ],
          "functions": [
            {
              "functionName": "updateMaterialUsage",
              "inputTypeName": "UpdateMaterialUsageInput",
              "outputTypeName": "UpdateMaterialUsageOutput",
              "input": [
                {
                  "name": "materialUsageId",
                  "type": "string",
                  "required": true,
                  "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas.",
                  "ofEntity": "MaterialUsage",
                  "fieldRef": "MaterialUsage.materialUsageId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "projectId",
                  "type": "string",
                  "required": true,
                  "description": "Referência de contexto à obra contra a qual o material foi efetivamente consumido.",
                  "ofEntity": "MaterialUsage",
                  "fieldRef": "MaterialUsage.projectId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "inventoryItemId",
                  "type": "string",
                  "required": true,
                  "description": "Referência de contexto ao item de material efetivamente utilizado.",
                  "ofEntity": "MaterialUsage",
                  "fieldRef": "MaterialUsage.inventoryItemId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "inventoryBalanceId",
                  "type": "string",
                  "required": true,
                  "description": "Referência ao saldo operacional que suportou o consumo, para manter a rastreabilidade de disponibilidade e custo.",
                  "ofEntity": "MaterialUsage",
                  "fieldRef": "MaterialUsage.inventoryBalanceId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "quantity",
                  "type": "number",
                  "required": true,
                  "description": "Quantidade do item efetivamente consumida na obra.",
                  "ofEntity": "MaterialUsage",
                  "fieldRef": "MaterialUsage.quantity",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "usageDescription",
                  "type": "string",
                  "required": true,
                  "description": "Descrição informada do consumo de material realizado em campo.",
                  "ofEntity": "MaterialUsage",
                  "fieldRef": "MaterialUsage.usageDescription",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "consumedOn",
                  "type": "string",
                  "required": true,
                  "description": "Data em que o material foi efetivamente consumido na obra.",
                  "ofEntity": "MaterialUsage",
                  "fieldRef": "MaterialUsage.consumedOn",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "unitCostBasis",
                  "type": "number",
                  "required": true,
                  "description": "Custo unitário preservado como base para o custeio realizado do consumo.",
                  "ofEntity": "MaterialUsage",
                  "fieldRef": "MaterialUsage.unitCostBasis",
                  "item": {
                    "fields": []
                  }
                }
              ],
              "output": [
                {
                  "name": "materialUsageId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                },
                {
                  "name": "projectId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                },
                {
                  "name": "inventoryItemId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                },
                {
                  "name": "inventoryBalanceId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                },
                {
                  "name": "quantity",
                  "type": "number",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                },
                {
                  "name": "usageDescription",
                  "type": "string",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                },
                {
                  "name": "consumedOn",
                  "type": "string",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                },
                {
                  "name": "unitCostBasis",
                  "type": "number",
                  "required": true,
                  "ofEntity": "MaterialUsage"
                }
              ],
              "ports": [
                "MaterialUsage",
                "InventoryBalance",
                "InventoryItem",
                "Project"
              ],
              "rulesApplied": [
                "materialUsageRequiresActiveProjectAndAvailableInventory",
                "costEligibleMaterialUsage"
              ],
              "transactional": true,
              "steps": [
                "Load the MaterialUsage aggregate by materialUsageId through the MaterialUsage port.",
                "Load the referenced Project, InventoryItem, and InventoryBalance through their ports.",
                "Apply materialUsageRequiresActiveProjectAndAvailableInventory inline: reject when the project is not active, the inventory item is not active, the balance is not available, the balance item does not match inventoryItemId, or the requested quantity is not positive and no greater than the available physicalQuantity; include the rule id in validation error details.",
                "Apply costEligibleMaterialUsage inline: reject when quantity or unitCostBasis is negative, and preserve the supplied unitCostBasis as the cost basis for the recorded usage; include the rule id in validation error details.",
                "Apply the update payload and the context-resolved recorded status to the MaterialUsage aggregate, then save it through the MaterialUsage port.",
                "Return the updated MaterialUsage fields in the canonical output shape."
              ],
              "outputShape": {
                "kind": "object",
                "fields": [
                  {
                    "name": "materialUsageId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "MaterialUsage.materialUsageId"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "MaterialUsage.status"
                  },
                  {
                    "name": "projectId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "MaterialUsage.projectId"
                  },
                  {
                    "name": "inventoryItemId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "MaterialUsage.inventoryItemId"
                  },
                  {
                    "name": "inventoryBalanceId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "MaterialUsage.inventoryBalanceId"
                  },
                  {
                    "name": "quantity",
                    "type": "number",
                    "required": true,
                    "fieldRef": "MaterialUsage.quantity"
                  },
                  {
                    "name": "usageDescription",
                    "type": "string",
                    "required": true,
                    "fieldRef": "MaterialUsage.usageDescription"
                  },
                  {
                    "name": "consumedOn",
                    "type": "string",
                    "required": true,
                    "fieldRef": "MaterialUsage.consumedOn"
                  },
                  {
                    "name": "unitCostBasis",
                    "type": "number",
                    "required": true,
                    "fieldRef": "MaterialUsage.unitCostBasis"
                  }
                ]
              }
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Public inputs include only selectedEntity and userInput values; systemDefault status is resolved server-side.",
          "Project and InventoryItem are included as read ports alongside InventoryBalance and MaterialUsage.",
          "Both listed rules are applied inline in the usecase steps."
        ]
      }
    },
    "status": "completed",
    "stepId": 16,
    "interaction": null,
    "nextSteps": null
  }
}
