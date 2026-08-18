/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/generateAndPublishProjectStatusReport.defs.ts" enhancement="_blank"/>

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
    "actor": "Project manager or site manager responsible for client communication.",
    "jobToBeDone": "Review the selected project's execution and schedule risks, generate an accurate status report, publish it, and hand it off to the client.",
    "primaryDecision": "Whether the reviewed report is ready to publish and send to the client.",
    "decisiveInfo": [
      "project name and current project status",
      "task summary and upcoming commitments",
      "total logged hours",
      "actual cost, budget amount, and cost variance",
      "at-risk task status, due date, progress, risk indicators, and explanation",
      "status report title, content, communicated risks, and current report status"
    ],
    "usageFrequency": "Occasional, typically at a reporting milestone or when a client update is due; deliberate back-office workflow rather than continuous operational use.",
    "informationHierarchy": [
      "selected project identity and status",
      "execution and cost summary",
      "schedule risks and explanations",
      "draft report content and communicated risks",
      "current report lifecycle status",
      "publish action",
      "client handoff action and confirmation"
    ],
    "successCriteria": "The user can verify the report against current execution and risk evidence, create it without retyping context or actor identifiers, clearly distinguish draft from published state, and complete publication and client handoff with unambiguous feedback.",
    "antiPatterns": [
      "separate transition form for publishing",
      "free status select for lifecycle changes",
      "manually typed project or status-report identifiers",
      "manually entered generatedByUserId or publishedByUserId when actor context is available",
      "publishing before showing current report status and supporting execution evidence",
      "duplicating inspection queries into disconnected sections",
      "adding urgency or persuasion language to an operational communication workflow"
    ],
    "criticalActions": [
      {
        "action": "Inspect execution and schedule risk evidence for the selected project",
        "presentation": "contextual master-detail summary with risk details adjacent to the project selection"
      },
      {
        "action": "Generate the report for review",
        "presentation": "primary-button contextual command with a focused content editor and derived project context"
      },
      {
        "action": "Publish the reviewed draft",
        "presentation": "contextual-transition-actions on the selected report, showing current status and only the valid next transition"
      },
      {
        "action": "Hand off the published report to the client",
        "presentation": "contextual-transition-actions with explicit confirmation for external communication"
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
    "id": "generateAndPublishProjectStatusReport__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/generateAndPublishProjectStatusReport.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/generateAndPublishProjectStatusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "generateAndPublishProjectStatusReport__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/approvalWorkflow/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
