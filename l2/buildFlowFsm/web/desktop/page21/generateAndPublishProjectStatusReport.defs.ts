/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/generateAndPublishProjectStatusReport.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "generateAndPublishProjectStatusReport",
  "pageName": "Gerar e publicar relatório de status",
  "baseClassName": "BuildFlowFsmGenerateAndPublishProjectStatusReportBase",
  "actor": "projectManager",
  "purpose": "Produzir comunicação profissional sobre a obra, incluindo riscos de atraso, e disponibilizá-la ao cliente.",
  "presentation": {
    "categoryRef": "approvalWorkflow"
  },
  "pageObjective": {
    "actor": "Gerente de projetos ou responsável pela comunicação da obra",
    "jobToBeDone": "Analisar rapidamente a execução e os riscos de uma obra, gerar um relatório profissional, publicá-lo e encaminhá-lo ao cliente.",
    "primaryDecision": "Decidir se o relatório revisado está pronto para publicação e, em seguida, enviá-lo ao cliente.",
    "decisiveInfo": [
      "projectName",
      "projectStatus",
      "taskSummary",
      "upcomingCommitments",
      "totalLoggedHours",
      "actualCost",
      "budgetAmount",
      "costVariance",
      "changeOrderImpactSummary",
      "workTaskId",
      "taskStatus",
      "dueDate",
      "progressPercent",
      "riskIndicators",
      "riskExplanation",
      "status",
      "title",
      "content",
      "communicatedRisks"
    ],
    "usageFrequency": "Recorrente, normalmente em ciclos de acompanhamento e comunicação de status; exige leitura rápida de dados operacionais antes de cada publicação.",
    "informationHierarchy": [
      "obra selecionada e status atual",
      "resumo de execução e variação de custo",
      "tarefas em risco, prazos e explicações",
      "rascunho do relatório e riscos comunicados",
      "estado do relatório e revisão final",
      "próxima transição válida: publicar",
      "confirmação e encaminhamento ao cliente"
    ],
    "successCriteria": "O responsável identifica a obra correta, entende os principais desvios sem abrir telas adicionais, produz um relatório fundamentado, revisa seu conteúdo, publica apenas quando estiver pronto e encaminha a versão publicada sem redigitar identificadores.",
    "antiPatterns": [
      "formulário CRUD expondo ids de projeto ou relatório",
      "entrada manual de generatedByUserId ou publishedByUserId",
      "campo livre para editar status com todos os valores do enum",
      "formulário de publicação separado do relatório selecionado",
      "encaminhar relatório antes da publicação",
      "ocultar riscos e variações em meio a detalhes secundários",
      "duplicar consultas em seções isoladas sem contexto compartilhado"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra e carregar seus diagnósticos",
        "presentation": "master-detail com seleção na superfície da obra e painéis contextuais de execução e riscos"
      },
      {
        "action": "Gerar relatório para revisão",
        "presentation": "primary-button contextual ao diagnóstico, com editor somente para decisões de título, conteúdo e riscos"
      },
      {
        "action": "Publicar relatório revisado",
        "presentation": "contextual-transition-actions junto ao relatório selecionado, mostrando estado atual e apenas a transição válida"
      },
      {
        "action": "Encaminhar relatório publicado ao cliente",
        "presentation": "contextual-transition-actions de etapa final, habilitada somente no estado publicado e com confirmação explícita"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.generateAndPublishProjectStatusReport.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.generateAndPublishProjectStatusReport.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview",
      "source": "bff.qryInspectProjectExecutionOverview",
      "command": "qryInspectProjectExecutionOverview",
      "description": "Analisar a execução da obra",
      "kind": "query",
      "stateKey": "ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "inputs": [
        {
          "name": "projectExecutionOverviewProjectId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment",
      "source": "bff.qryInspectScheduleRiskAssessment",
      "command": "qryInspectScheduleRiskAssessment",
      "description": "Consultar tarefas em risco de atraso",
      "kind": "query",
      "stateKey": "ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId"
      ],
      "inputs": [
        {
          "name": "scheduleRiskAssessmentProjectId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.generateAndPublishProjectStatusReport.cmdCreateStatusReport",
      "source": "bff.cmdCreateStatusReport",
      "command": "cmdCreateStatusReport",
      "description": "Gerar relatório profissional de status",
      "kind": "command",
      "stateKey": "ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId"
      ],
      "inputs": [
        {
          "name": "projectProjectId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "projectExecutionOverviewProjectId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "title",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "content",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "communicatedRisks",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "generatedByUserId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "publishedByUserId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.generateAndPublishProjectStatusReport.cmdPublishStatusReport",
      "source": "bff.cmdPublishStatusReport",
      "command": "cmdPublishStatusReport",
      "description": "Publicar o relatório de status",
      "kind": "command",
      "stateKey": "ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status"
      ],
      "inputs": [
        {
          "name": "projectProjectId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "projectExecutionOverviewProjectId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "statusReportStatusReportId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "status",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient",
      "source": "bff.cmdHandoffStatusReportToClient",
      "command": "cmdHandoffStatusReportToClient",
      "description": "Encaminhar o relatório ao cliente",
      "kind": "command",
      "stateKey": "ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId"
      ],
      "inputs": [
        {
          "name": "statusReportStatusReportId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "title",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "content",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "communicatedRisks",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "generatedByUserId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "publishedByUserId",
          "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "generateAndPublishProjectStatusReport__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/generateAndPublishProjectStatusReport.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/generateAndPublishProjectStatusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "generateAndPublishProjectStatusReport__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/approvalWorkflow/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
