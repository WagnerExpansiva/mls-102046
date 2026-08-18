/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/submitChangeOrder.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "submitChangeOrder",
  "pageName": "Registrar e submeter ordem de mudança",
  "baseClassName": "BuildFlowFsmSubmitChangeOrderBase",
  "actor": "fieldCoordinator",
  "purpose": "Formalizar uma alteração da obra para tratamento do gerente de projeto.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Responsável por registrar alterações de uma obra e encaminhá-las ao gerente de projeto.",
    "jobToBeDone": "Selecionar o cliente e a obra corretos, registrar os impactos da alteração e submetê-la para tratamento do gerente de projeto.",
    "primaryDecision": "Submeter uma ordem de mudança contextualizada e completa ao gerente de projeto.",
    "decisiveInfo": [
      "clientName",
      "contactEmail",
      "projectId",
      "name",
      "address",
      "status",
      "description",
      "scopeImpact",
      "scheduleImpact",
      "changeAmount"
    ],
    "usageFrequency": "Operacional e recorrente, normalmente durante o acompanhamento de uma obra quando surge uma alteração de escopo.",
    "informationHierarchy": [
      "obra selecionada e seu status",
      "cliente associado e dados de contato",
      "descrição da alteração",
      "impacto no escopo",
      "impacto no cronograma",
      "impacto financeiro",
      "estado da ordem e resultado das ações"
    ],
    "successCriteria": "O usuário confirma rapidamente o cliente e a obra, registra somente os impactos necessários, cria a ordem sem IDs manuais e a encaminha com uma ação contextual clara, recebendo feedback explícito.",
    "antiPatterns": [
      "formulário separado para cada etapa de localização",
      "ID de cliente, projeto ou ordem digitado manualmente",
      "campo livre para editar status",
      "repetição desnecessária dos dados da alteração entre criação e encaminhamento",
      "encaminhamento sem exibir o contexto e o estado atual da ordem"
    ],
    "criticalActions": [
      {
        "action": "Localizar e selecionar cliente e obra",
        "presentation": "master-detail com seleção contextual e contexto read-only"
      },
      {
        "action": "Registrar a ordem de mudança",
        "presentation": "primary-button em formulário compacto de decisão"
      },
      {
        "action": "Submeter a ordem para tratamento",
        "presentation": "contextual-transition-actions junto da ordem selecionada, com botão de ação permitido"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.submitChangeOrder.qryLocateClient",
      "source": "bff.qryLocateClient",
      "command": "qryLocateClient",
      "description": "Localizar o cliente",
      "kind": "query",
      "stateKey": "ui.submitChangeOrder.data.qryLocateClient",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.submitChangeOrder.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.submitChangeOrder.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.submitChangeOrder.cmdCreateChangeOrder",
      "source": "bff.cmdCreateChangeOrder",
      "command": "cmdCreateChangeOrder",
      "description": "Registrar a alteração proposta",
      "kind": "command",
      "stateKey": "ui.submitChangeOrder.output.cmdCreateChangeOrder",
      "inputStateKeys": [
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.description",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact",
        "ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount"
      ],
      "inputs": [
        {
          "name": "clientClientId",
          "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectProjectId",
          "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "description",
          "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scopeImpact",
          "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleImpact",
          "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "changeAmount",
          "stateKey": "ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.submitChangeOrder.cmdHandoffChangeOrderToProjectManager",
      "source": "bff.cmdHandoffChangeOrderToProjectManager",
      "command": "cmdHandoffChangeOrderToProjectManager",
      "description": "Submeter a alteração para tratamento",
      "kind": "command",
      "stateKey": "ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager",
      "inputStateKeys": [
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact",
        "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount"
      ],
      "inputs": [
        {
          "name": "changeOrderChangeOrderId",
          "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scopeImpact",
          "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleImpact",
          "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "changeAmount",
          "stateKey": "ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "submitChangeOrder__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/submitChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/submitChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "submitChangeOrder__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
