/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createInventoryItem.defs.ts" enhancement="_blank"/>

export const operationCreateInventoryItem = {
  "operationId": "createInventoryItem",
  "title": "Criar Item de estoque",
  "actors": [
    "fieldWorker"
  ],
  "entity": "InventoryItem",
  "kind": "create",
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
    "goal": "Criar Item de estoque",
    "steps": [
      "Informar os dados do novo registro."
    ],
    "outcome": "Informar os dados do novo registro."
  },
  "accessPattern": {
    "kind": "create",
    "description": "Criar Item de estoque",
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
  "commandName": "cmdCreateInventoryItem",
  "bffName": "cmdCreateInventoryItem"
} as const;

export default operationCreateInventoryItem;
