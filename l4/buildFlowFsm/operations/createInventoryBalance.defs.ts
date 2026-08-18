/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createInventoryBalance.defs.ts" enhancement="_blank"/>

export const operationCreateInventoryBalance = {
  "operationId": "createInventoryBalance",
  "title": "Criar Saldo de estoque",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "InventoryBalance",
  "kind": "create",
  "reads": [
    "InventoryBalance",
    "InventoryItem"
  ],
  "writes": [
    "InventoryBalance"
  ],
  "rulesApplied": [
    "availableInventoryBalance"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Criar Saldo de estoque",
    "steps": [
      "Informar os dados do novo registro."
    ],
    "outcome": "Informar os dados do novo registro."
  },
  "accessPattern": {
    "kind": "create",
    "description": "Criar Saldo de estoque",
    "entity": "InventoryBalance",
    "keyField": "InventoryBalance.inventoryBalanceId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "InventoryBalance.inventoryBalanceId",
      "InventoryBalance.inventoryItemId",
      "InventoryBalance.physicalQuantity",
      "InventoryBalance.applicableUnitCost",
      "InventoryBalance.status"
    ]
  },
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
  },
  "inputs": [
    {
      "inputId": "inventoryItemId",
      "fieldRef": "InventoryBalance.inventoryItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto, não digitada como identificador bruto."
    },
    {
      "inputId": "physicalQuantity",
      "fieldRef": "InventoryBalance.physicalQuantity",
      "required": true,
      "source": "userInput",
      "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo."
    },
    {
      "inputId": "applicableUnitCost",
      "fieldRef": "InventoryBalance.applicableUnitCost",
      "required": true,
      "source": "userInput",
      "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra."
    },
    {
      "inputId": "status",
      "fieldRef": "InventoryBalance.status",
      "required": true,
      "source": "systemDefault",
      "description": "Estado operacional que indica se o saldo pode atender consumo, está esgotado ou foi desativado."
    }
  ],
  "pageId": "inventoryBalanceCatalogue",
  "commandName": "cmdCreateInventoryBalance",
  "bffName": "cmdCreateInventoryBalance"
} as const;

export default operationCreateInventoryBalance;
