/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/inventoryBalanceCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "inventoryBalanceCatalogue",
  "pageName": "Saldo de estoque",
  "baseClassName": "BuildFlowFsmInventoryBalanceCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Saldo de estoque.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Responsável pelo controle de estoque, como um estoquista ou operador administrativo.",
    "jobToBeDone": "Localizar um saldo de estoque, corrigir seus valores quando necessário ou cadastrar um novo saldo com segurança.",
    "primaryDecision": "Qual saldo de estoque selecionar para revisar/corrigir ou, na ausência dele, qual item usar para criar um novo saldo.",
    "decisiveInfo": [
      "inventoryItemId",
      "name",
      "description",
      "unitOfMeasure",
      "physicalQuantity",
      "applicableUnitCost",
      "referenceUnitCost",
      "status"
    ],
    "usageFrequency": "Uso operacional recorrente, especialmente durante conferências e correções de inventário.",
    "informationHierarchy": [
      "Lista de saldos localizável e selecionável",
      "Item associado e estado atual do saldo",
      "Quantidade física e custo aplicável, com custo de referência para comparação",
      "Ações de atualizar ou excluir o registro selecionado",
      "Criação de um novo saldo a partir do item escolhido"
    ],
    "successCriteria": "O operador identifica o registro correto sem digitar IDs, entende seu estado e valores atuais, consegue corrigir ou excluir com baixo atrito e cadastra novos saldos sem expor campos técnicos.",
    "antiPatterns": [
      "Formulário CRUD separado e dominante para cada operação",
      "IDs técnicos como campos digitáveis",
      "Status exposto como select livre ou entrada manual",
      "Excluir sem confirmação",
      "Pedir novamente dados já disponíveis no registro selecionado",
      "Ocultar a lista enquanto o operador edita"
    ],
    "criticalActions": [
      {
        "action": "Selecionar um saldo para inspeção e edição",
        "presentation": "master-detail row selection"
      },
      {
        "action": "Atualizar quantidade ou custo do saldo selecionado",
        "presentation": "contextual detail action with prefilled selected-entity context"
      },
      {
        "action": "Excluir o saldo selecionado",
        "presentation": "inline-row-command with destructive confirmation"
      },
      {
        "action": "Criar novo saldo",
        "presentation": "primary-button opening an inline or contextual creation form with inventory-item picker"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.inventoryBalanceCatalogue.qryListInventoryBalance",
      "source": "bff.qryListInventoryBalance",
      "command": "qryListInventoryBalance",
      "description": "Listar Saldo de estoque",
      "kind": "query",
      "stateKey": "ui.inventoryBalanceCatalogue.data.qryListInventoryBalance",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.inventoryBalanceCatalogue.cmdCreateInventoryBalance",
      "source": "bff.cmdCreateInventoryBalance",
      "command": "cmdCreateInventoryBalance",
      "description": "Criar Saldo de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
        "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status"
      ],
      "inputs": [
        {
          "name": "inventoryItemId",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "physicalQuantity",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "applicableUnitCost",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.inventoryBalanceCatalogue.cmdUpdateInventoryBalance",
      "source": "bff.cmdUpdateInventoryBalance",
      "command": "cmdUpdateInventoryBalance",
      "description": "Atualizar Saldo de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
        "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status"
      ],
      "inputs": [
        {
          "name": "inventoryBalanceId",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "inventoryItemId",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "physicalQuantity",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "applicableUnitCost",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.inventoryBalanceCatalogue.cmdDeleteInventoryBalance",
      "source": "bff.cmdDeleteInventoryBalance",
      "command": "cmdDeleteInventoryBalance",
      "description": "Excluir Saldo de estoque",
      "kind": "command",
      "stateKey": "ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance",
      "inputStateKeys": [
        "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId"
      ],
      "inputs": [
        {
          "name": "inventoryBalanceId",
          "stateKey": "ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.inventoryBalanceCatalogue.qryInventoryItemPicker",
      "source": "bff.qryInventoryItemPicker",
      "command": "qryInventoryItemPicker",
      "description": "Listar Item de estoque",
      "kind": "query",
      "stateKey": "ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "inventoryBalanceCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/inventoryBalanceCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/inventoryBalanceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "inventoryBalanceCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
