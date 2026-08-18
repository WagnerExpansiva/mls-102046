/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/statusReportCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "statusReportCatalogue",
  "pageName": "Relatório de status",
  "baseClassName": "BuildFlowFsmStatusReportCatalogueBase",
  "actor": "client",
  "purpose": "Cadastro de Relatório de status.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Gestor de projetos ou responsável por comunicação da obra",
    "jobToBeDone": "Localizar um relatório de status e gerar ou corrigir uma versão profissional para revisão e publicação, preservando o contexto correto da obra.",
    "primaryDecision": "Decidir se deve gerar um novo relatório para a obra selecionada ou corrigir o relatório existente selecionado.",
    "decisiveInfo": [
      "statusReportId",
      "projectId",
      "title",
      "content",
      "communicatedRisks",
      "status",
      "generatedAt",
      "publishedAt",
      "projectProjectId",
      "projectExecutionOverviewProjectId"
    ],
    "usageFrequency": "Ocasional, durante marcos de acompanhamento e comunicação do andamento da obra.",
    "informationHierarchy": [
      "relatório selecionado e seu estado atual",
      "obra e contexto de execução associados",
      "título e conteúdo do relatório",
      "riscos comunicados",
      "ações de gerar ou corrigir",
      "metadados de geração/publicação e exclusão"
    ],
    "successCriteria": "O usuário identifica rapidamente a obra e o relatório corretos, entende o estado atual antes de editar, consegue gerar ou corrigir o conteúdo com poucos campos e recebe confirmação clara após atualizar ou excluir.",
    "antiPatterns": [
      "formulário CRUD separado e sempre visível para cada operação",
      "status como select livre com todos os estados",
      "digitação manual de ids de relatório, projeto ou contexto",
      "edição manual de timestamps e metadados de ciclo de vida sem necessidade",
      "exclusão sem confirmação",
      "duplicar a consulta de projetos em uma seção independente"
    ],
    "criticalActions": [
      {
        "action": "Gerar relatório profissional de status",
        "presentation": "primary-button no painel contextual de criação, precedido pela seleção da obra e do contexto de execução"
      },
      {
        "action": "Corrigir dados do relatório escolhido",
        "presentation": "contextual-transition-actions no detalhe do relatório selecionado, com estado atual visível"
      },
      {
        "action": "Excluir relatório escolhido",
        "presentation": "inline-row-command contextual à linha selecionada, com confirmação destrutiva"
      },
      {
        "action": "Selecionar obra e contexto de execução",
        "presentation": "lookup/picker integrado ao painel de criação, usando reconhecimento em vez de id digitado"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.statusReportCatalogue.qryListStatusReport",
      "source": "bff.qryListStatusReport",
      "command": "qryListStatusReport",
      "description": "Listar Relatório de status",
      "kind": "query",
      "stateKey": "ui.statusReportCatalogue.data.qryListStatusReport",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.statusReportCatalogue.cmdCreateStatusReport",
      "source": "bff.cmdCreateStatusReport",
      "command": "cmdCreateStatusReport",
      "description": "Gerar relatório profissional de status",
      "kind": "command",
      "stateKey": "ui.statusReportCatalogue.output.cmdCreateStatusReport",
      "inputStateKeys": [
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectProjectId",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.title",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.content",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.communicatedRisks",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.generatedByUserId",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.publishedByUserId"
      ],
      "inputs": [
        {
          "name": "projectProjectId",
          "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "projectExecutionOverviewProjectId",
          "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "title",
          "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.title",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "content",
          "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.content",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "communicatedRisks",
          "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.communicatedRisks",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "generatedByUserId",
          "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.generatedByUserId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "publishedByUserId",
          "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.publishedByUserId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.statusReportCatalogue.cmdUpdateStatusReport",
      "source": "bff.cmdUpdateStatusReport",
      "command": "cmdUpdateStatusReport",
      "description": "Atualizar Relatório de status",
      "kind": "command",
      "stateKey": "ui.statusReportCatalogue.output.cmdUpdateStatusReport",
      "inputStateKeys": [
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.statusReportId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.projectId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt"
      ],
      "inputs": [
        {
          "name": "statusReportId",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.statusReportId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectId",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "status",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "title",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "content",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "communicatedRisks",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "generatedAt",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "generatedByUserId",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "publishedAt",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt",
          "source": "systemDefault",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "publishedByUserId",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "withdrawnAt",
          "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt",
          "source": "systemDefault",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.statusReportCatalogue.cmdDeleteStatusReport",
      "source": "bff.cmdDeleteStatusReport",
      "command": "cmdDeleteStatusReport",
      "description": "Excluir Relatório de status",
      "kind": "command",
      "stateKey": "ui.statusReportCatalogue.output.cmdDeleteStatusReport",
      "inputStateKeys": [
        "ui.statusReportCatalogue.input.cmdDeleteStatusReport.statusReportId"
      ],
      "inputs": [
        {
          "name": "statusReportId",
          "stateKey": "ui.statusReportCatalogue.input.cmdDeleteStatusReport.statusReportId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.statusReportCatalogue.qryProjectPicker",
      "source": "bff.qryProjectPicker",
      "command": "qryProjectPicker",
      "description": "Listar Obra",
      "kind": "query",
      "stateKey": "ui.statusReportCatalogue.data.qryProjectPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "statusReportCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/statusReportCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/statusReportCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "statusReportCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
