{
  "savedAt": "2026-08-18T12:30:37.541Z",
  "agentName": "agentCbUsecase",
  "stepId": 32,
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
                "Within one transaction, load the MaterialUsage by materialUsageId and load the referenced Project, InventoryItem, and InventoryBalance through their ports.",
                "Validate that the project exists and is active, the inventory item exists and is active, the balance exists, belongs to the selected inventory item, is available, and has sufficient physical quantity; if any validation fails, reject with the corresponding rule id in the error details.",
                "Apply the update to the MaterialUsage aggregate using the supplied selected references and editable values; preserve status according to the system default and enforce the recorded/voided state invariant.",
                "Validate costEligibleMaterialUsage inline: require a non-negative unitCostBasis and preserve the supplied cost basis as the updated usage basis.",
                "Save the MaterialUsage through its port and return the canonical MaterialUsage output fields."
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
          "Public inputs include only selectedEntity and userInput sources; status is resolved from systemDefault and is intentionally omitted from the public input.",
          "No mdmRefs or eventWrites are present.",
          "All four supplied ports are used for aggregate/reference validation; no child repository is invented."
        ]
      }
    },
    "status": "completed",
    "stepId": 9,
    "interaction": null,
    "nextSteps": null
  }
}
