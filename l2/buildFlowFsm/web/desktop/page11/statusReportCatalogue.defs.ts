/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/statusReportCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "statusReportCatalogue",
  "pageName": "Relatório de status",
  "baseClassName": "BuildFlowFsmStatusReportCatalogueBase",
  "actor": "client",
  "purpose": "Cadastro de Relatório de status.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
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
    "id": "statusReportCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/statusReportCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/statusReportCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "statusReportCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
