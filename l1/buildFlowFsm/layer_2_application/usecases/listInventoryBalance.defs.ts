/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.defs.ts" enhancement="_blank"/>

export const listInventoryBalanceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listInventoryBalance",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listInventoryBalance",
    "ports": [
      "InventoryBalance"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listInventoryBalance",
        "inputTypeName": "ListInventoryBalanceInput",
        "outputTypeName": "ListInventoryBalanceOutput",
        "input": [],
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
          "InventoryBalance"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Query all InventoryBalance records through the InventoryBalance port.",
          "Project inventoryBalanceId, inventoryItemId, physicalQuantity, applicableUnitCost, and status for each record.",
          "Return the resulting collection without pagination."
        ],
        "outputShape": {
          "kind": "list",
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
  }
} as const;

export default listInventoryBalanceUsecase;

export const pipeline = [
  {
    "id": "listInventoryBalance__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.d.ts"
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
