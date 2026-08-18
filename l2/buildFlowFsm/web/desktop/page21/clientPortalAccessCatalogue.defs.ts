/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/clientPortalAccessCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Operador administrativo responsável por gerenciar acessos de clientes ao portal.",
    "jobToBeDone": "Localizar um cliente e manter seu vínculo de acesso ao portal correto, criando, corrigindo ou removendo o registro com segurança.",
    "primaryDecision": "Qual vínculo selecionado deve ser criado, atualizado ou removido, e qual ação aplicar a ele.",
    "decisiveInfo": [
      "clientName",
      "contactEmail",
      "clientId",
      "clientPortalAccessId",
      "platformUserId",
      "status"
    ],
    "usageFrequency": "Ocassional/back-office, durante a manutenção de cadastros e permissões de acesso.",
    "informationHierarchy": [
      "Cliente identificado por nome e contato",
      "Vínculo selecionado e seu status atual",
      "Usuário de plataforma associado",
      "Ações contextuais de corrigir, criar ou remover",
      "Feedback de sucesso ou erro e atualização da lista"
    ],
    "successCriteria": "O operador encontra o cliente sem digitar identificadores, entende claramente o vínculo e status atuais, executa a ação apropriada no contexto e recebe confirmação após a lista ser atualizada.",
    "antiPatterns": [
      "Formulário CRUD separado e desconectado da lista",
      "Status como select livre com todos os valores",
      "IDs técnicos digitados manualmente",
      "Excluir sem confirmação",
      "Ocultar o cliente e o status atual antes de uma alteração",
      "Duplicar a consulta de clientes em uma seção independente"
    ],
    "criticalActions": [
      {
        "action": "Selecionar um vínculo ou cliente para definir o contexto",
        "presentation": "master-detail com seleção por linha e picker de cliente contextual"
      },
      {
        "action": "Criar um vínculo",
        "presentation": "primary-button no painel contextual em modo novo, com cliente selecionado"
      },
      {
        "action": "Atualizar um vínculo",
        "presentation": "contextual-action no detalhe da linha selecionada, com valores atuais pré-preenchidos"
      },
      {
        "action": "Remover um vínculo",
        "presentation": "inline-row-command contextual com confirmação destrutiva"
      },
      {
        "action": "Recarregar vínculos e clientes após mutação",
        "presentation": "refresh da superfície mestre com feedback textual dispensável"
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
    "id": "clientPortalAccessCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/clientPortalAccessCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/clientPortalAccessCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientPortalAccessCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
