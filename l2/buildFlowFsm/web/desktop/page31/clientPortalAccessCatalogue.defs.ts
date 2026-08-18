/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/clientPortalAccessCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientPortalAccessCatalogue",
  "pageName": "Vínculo de acesso do cliente",
  "baseClassName": "BuildFlowFsmClientPortalAccessCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Vínculo de acesso do cliente.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Operador administrativo responsável por gerenciar acessos do portal de clientes.",
    "jobToBeDone": "Localizar um vínculo de acesso, criar um novo vínculo para o cliente correto ou corrigir/remover o registro selecionado.",
    "primaryDecision": "Selecionar o vínculo correto e decidir entre corrigir ou remover, ou iniciar a criação de um novo vínculo.",
    "decisiveInfo": [
      "clientName",
      "contactEmail",
      "clientId",
      "platformUserId",
      "status",
      "clientPortalAccessId"
    ],
    "usageFrequency": "Uso operacional recorrente, geralmente ocasional e orientado a manutenção de cadastros.",
    "informationHierarchy": [
      "cliente e contato identificáveis",
      "estado atual do vínculo",
      "usuário da plataforma associado",
      "ações disponíveis para corrigir ou remover",
      "criação de um novo vínculo"
    ],
    "successCriteria": "O operador identifica o cliente sem memorizar ids, entende imediatamente o estado atual, edita somente os dados necessários e executa exclusão com segurança; após cada comando, a lista permanece atualizada.",
    "antiPatterns": [
      "formulário CRUD separado para cada operação",
      "status como select livre com estados inválidos",
      "ids técnicos digitados manualmente",
      "exclusão sem confirmação",
      "duplicar a consulta de clientes em uma seção isolada",
      "ocultar o registro selecionado durante a edição"
    ],
    "criticalActions": [
      {
        "action": "Selecionar um vínculo existente",
        "presentation": "master-detail"
      },
      {
        "action": "Criar um vínculo",
        "presentation": "primary-button no painel contextual"
      },
      {
        "action": "Corrigir um vínculo selecionado",
        "presentation": "contextual-transition-actions no painel de detalhe"
      },
      {
        "action": "Excluir um vínculo selecionado",
        "presentation": "inline-row-command com confirmação destrutiva"
      },
      {
        "action": "Escolher o cliente",
        "presentation": "lookup/picker integrado ao editor"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.clientPortalAccessCatalogue.qryListClientPortalAccess",
      "source": "bff.qryListClientPortalAccess",
      "command": "qryListClientPortalAccess",
      "description": "Listar Vínculo de acesso do cliente",
      "kind": "query",
      "stateKey": "ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.clientPortalAccessCatalogue.cmdCreateClientPortalAccess",
      "source": "bff.cmdCreateClientPortalAccess",
      "command": "cmdCreateClientPortalAccess",
      "description": "Criar Vínculo de acesso do cliente",
      "kind": "command",
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
        "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status"
      ],
      "inputs": [
        {
          "name": "clientId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "platformUserId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess",
      "source": "bff.cmdUpdateClientPortalAccess",
      "command": "cmdUpdateClientPortalAccess",
      "description": "Atualizar Vínculo de acesso do cliente",
      "kind": "command",
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
        "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status"
      ],
      "inputs": [
        {
          "name": "clientPortalAccessId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "platformUserId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess",
      "source": "bff.cmdDeleteClientPortalAccess",
      "command": "cmdDeleteClientPortalAccess",
      "description": "Excluir Vínculo de acesso do cliente",
      "kind": "command",
      "stateKey": "ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess",
      "inputStateKeys": [
        "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId"
      ],
      "inputs": [
        {
          "name": "clientPortalAccessId",
          "stateKey": "ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.clientPortalAccessCatalogue.qryClientPicker",
      "source": "bff.qryClientPicker",
      "command": "qryClientPicker",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.clientPortalAccessCatalogue.data.qryClientPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "clientPortalAccessCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/clientPortalAccessCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/clientPortalAccessCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientPortalAccessCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
