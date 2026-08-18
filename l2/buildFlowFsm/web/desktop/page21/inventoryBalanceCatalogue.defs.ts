/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/inventoryBalanceCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Profissional responsável pelo controle de estoque",
    "jobToBeDone": "Localizar um item e manter seu saldo físico e custo aplicável corretos, criando, corrigindo ou removendo o registro quando necessário.",
    "primaryDecision": "Selecionar o saldo de estoque correto e decidir se deve criá-lo, corrigir seus dados ou excluí-lo.",
    "decisiveInfo": [
      "inventoryItemId",
      "name",
      "description",
      "unitOfMeasure",
      "referenceUnitCost",
      "inventoryBalanceId",
      "physicalQuantity",
      "applicableUnitCost",
      "status"
    ],
    "usageFrequency": "Ocasional e operacional, durante conferências e ajustes de inventário.",
    "informationHierarchy": [
      "Item de estoque reconhecível e seu contexto descritivo",
      "Saldo atual selecionado",
      "Quantidade física e custo aplicável",
      "Estado atual do saldo",
      "Ações de corrigir, criar ou excluir",
      "Confirmação e resultado da operação"
    ],
    "successCriteria": "O usuário encontra rapidamente o item e o saldo correspondente, entende o estado atual antes de editar ou excluir, informa apenas os valores necessários e recebe confirmação clara após cada alteração.",
    "antiPatterns": [
      "Expor identificadores técnicos como campos digitáveis",
      "Permitir edição livre do status do saldo",
      "Separar exclusão em formulário independente",
      "Exigir que o usuário memorize códigos do item",
      "Ocultar o saldo atual antes de solicitar uma correção"
    ],
    "criticalActions": [
      {
        "action": "Selecionar o saldo ou item alvo",
        "presentation": "master-detail com lookup contextual e dados descritivos"
      },
      {
        "action": "Corrigir quantidade e custo do saldo selecionado",
        "presentation": "contextual detail action com valores atuais pré-preenchidos"
      },
      {
        "action": "Criar saldo para item selecionado",
        "presentation": "primary-button em formulário contextual e compacto"
      },
      {
        "action": "Excluir saldo selecionado",
        "presentation": "inline-row-command com confirmação destrutiva"
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
    "id": "inventoryBalanceCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/inventoryBalanceCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/inventoryBalanceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "inventoryBalanceCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
