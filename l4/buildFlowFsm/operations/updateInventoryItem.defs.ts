/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateInventoryItem.defs.ts" enhancement="_blank"/>

export const operationUpdateInventoryItem = {
  "operationId": "updateInventoryItem",
  "title": "Atualizar Item de estoque",
  "actors": [
    "fieldWorker"
  ],
  "entity": "InventoryItem",
  "kind": "update",
  "reads": [
    "InventoryItem"
  ],
  "writes": [
    "InventoryItem"
  ],
  "rulesApplied": [
    "selectableInventoryItem"
  ],
  "story": {
    "actor": "fieldWorker",
    "goal": "Atualizar Item de estoque",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Item de estoque",
    "entity": "InventoryItem",
    "keyField": "InventoryItem.inventoryItemId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "InventoryItem.inventoryItemId",
      "InventoryItem.name",
      "InventoryItem.description",
      "InventoryItem.unitOfMeasure",
      "InventoryItem.referenceUnitCost",
      "InventoryItem.status"
    ]
  },
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
  },
  "inputs": [
    {
      "inputId": "inventoryItemId",
      "fieldRef": "InventoryItem.inventoryItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável do item no catálogo mestre de materiais."
    },
    {
      "inputId": "name",
      "fieldRef": "InventoryItem.name",
      "required": true,
      "source": "userInput",
      "description": "Nome pelo qual o material ou consumível é identificado no catálogo."
    },
    {
      "inputId": "description",
      "fieldRef": "InventoryItem.description",
      "required": false,
      "source": "userInput",
      "description": "Descrição complementar para distinguir e especificar o material no catálogo."
    },
    {
      "inputId": "unitOfMeasure",
      "fieldRef": "InventoryItem.unitOfMeasure",
      "required": true,
      "source": "userInput",
      "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco."
    },
    {
      "inputId": "referenceUnitCost",
      "fieldRef": "InventoryItem.referenceUnitCost",
      "required": true,
      "source": "userInput",
      "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra."
    },
    {
      "inputId": "status",
      "fieldRef": "InventoryItem.status",
      "required": true,
      "source": "systemDefault",
      "description": "Situação do item no catálogo, determinando se pode ser selecionado para consumo."
    }
  ],
  "pageId": "inventoryItemCatalogue",
  "commandName": "cmdUpdateInventoryItem",
  "bffName": "cmdUpdateInventoryItem"
} as const;

export default operationUpdateInventoryItem;
