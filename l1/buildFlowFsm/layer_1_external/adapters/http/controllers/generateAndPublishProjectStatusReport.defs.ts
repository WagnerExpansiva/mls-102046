/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/generateAndPublishProjectStatusReport.defs.ts" enhancement="_blank"/>

export const generateAndPublishProjectStatusReportController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "generateAndPublishProjectStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "generateAndPublishProjectStatusReport",
    "controllerName": "GenerateAndPublishProjectStatusReportController",
    "ownerKind": "workspace",
    "workspaceId": "generateAndPublishProjectStatusReport",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "generateAndPublishProjectStatusReportQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject",
        "kind": "query",
        "usecaseRef": "locateProject",
        "usecaseRefs": [
          "locateProject"
        ],
        "inputTypeName": "LocateProjectInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "locateProject",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "locateProject",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "locateProject",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "address",
              "operationId": "locateProject",
              "path": [
                "address"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "locateProject",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "authorizedBudget",
              "operationId": "locateProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": true
            },
            {
              "name": "plannedStartDate",
              "operationId": "locateProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": true
            },
            {
              "name": "plannedEndDate",
              "operationId": "locateProject",
              "path": [
                "plannedEndDate"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "generateAndPublishProjectStatusReportQryInspectProjectExecutionOverviewHandler",
        "command": "qryInspectProjectExecutionOverview",
        "bffId": "qryInspectProjectExecutionOverview",
        "route": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview",
        "kind": "query",
        "usecaseRef": "inspectProjectExecutionOverview",
        "usecaseRefs": [
          "inspectProjectExecutionOverview"
        ],
        "inputTypeName": "InspectProjectExecutionOverviewInput",
        "inputContract": [
          {
            "inputId": "projectExecutionOverviewProjectId",
            "fieldRef": "ProjectExecutionOverview.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Visão consolidada de execução da obra"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "projectStatus",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "projectStatus"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "workTaskIds"
              ],
              "fromItems": false
            },
            {
              "name": "taskSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "taskSummary"
              ],
              "fromItems": false
            },
            {
              "name": "upcomingCommitments",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "upcomingCommitments"
              ],
              "fromItems": false
            },
            {
              "name": "timeLogIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "timeLogIds"
              ],
              "fromItems": false
            },
            {
              "name": "totalLoggedHours",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "totalLoggedHours"
              ],
              "fromItems": false
            },
            {
              "name": "materialUsageIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "materialUsageIds"
              ],
              "fromItems": false
            },
            {
              "name": "materialUsageSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "materialUsageSummary"
              ],
              "fromItems": false
            },
            {
              "name": "actualLaborCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualLaborCost"
              ],
              "fromItems": false
            },
            {
              "name": "actualMaterialCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualMaterialCost"
              ],
              "fromItems": false
            },
            {
              "name": "actualCost",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "actualCost"
              ],
              "fromItems": false
            },
            {
              "name": "budgetAmount",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "budgetAmount"
              ],
              "fromItems": false
            },
            {
              "name": "costVariance",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "costVariance"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderIds",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "changeOrderIds"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderImpactSummary",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "changeOrderImpactSummary"
              ],
              "fromItems": false
            },
            {
              "name": "calculatedAt",
              "operationId": "inspectProjectExecutionOverview",
              "path": [
                "calculatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "generateAndPublishProjectStatusReportQryInspectScheduleRiskAssessmentHandler",
        "command": "qryInspectScheduleRiskAssessment",
        "bffId": "qryInspectScheduleRiskAssessment",
        "route": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment",
        "kind": "query",
        "usecaseRef": "inspectScheduleRiskAssessment",
        "usecaseRefs": [
          "inspectScheduleRiskAssessment"
        ],
        "inputTypeName": "InspectScheduleRiskAssessmentInput",
        "inputContract": [
          {
            "inputId": "scheduleRiskAssessmentProjectId",
            "fieldRef": "ScheduleRiskAssessment.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Avaliação de risco de atraso"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "taskStatus",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "taskStatus"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "progressPercent",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "progressPercent"
              ],
              "fromItems": false
            },
            {
              "name": "riskIndicators",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "riskIndicators"
              ],
              "fromItems": false
            },
            {
              "name": "riskExplanation",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "riskExplanation"
              ],
              "fromItems": false
            },
            {
              "name": "assessedAt",
              "operationId": "inspectScheduleRiskAssessment",
              "path": [
                "assessedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "generateAndPublishProjectStatusReportCmdCreateStatusReportHandler",
        "command": "cmdCreateStatusReport",
        "bffId": "cmdCreateStatusReport",
        "route": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport",
        "kind": "command",
        "usecaseRef": "createStatusReport",
        "usecaseRefs": [
          "createStatusReport"
        ],
        "inputTypeName": "CreateStatusReportInput",
        "inputContract": [
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
          {
            "inputId": "projectExecutionOverviewProjectId",
            "fieldRef": "ProjectExecutionOverview.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Visão consolidada de execução da obra"
          },
          {
            "inputId": "title",
            "fieldRef": "StatusReport.title",
            "required": true,
            "source": "userInput",
            "description": "Título profissional que identifica a comunicação de status da obra."
          },
          {
            "inputId": "content",
            "fieldRef": "StatusReport.content",
            "required": true,
            "source": "userInput",
            "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação."
          },
          {
            "inputId": "communicatedRisks",
            "fieldRef": "StatusReport.communicatedRisks",
            "required": false,
            "source": "userInput",
            "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório."
          },
          {
            "inputId": "generatedByUserId",
            "fieldRef": "StatusReport.generatedByUserId",
            "required": true,
            "source": "userInput",
            "description": "Identificador do gerente responsável por gerar o relatório para revisão."
          },
          {
            "inputId": "publishedByUserId",
            "fieldRef": "StatusReport.publishedByUserId",
            "required": false,
            "source": "userInput",
            "description": "Identificador do gerente responsável pela publicação observável do relatório."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "createStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "createStatusReport",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "content",
              "operationId": "createStatusReport",
              "path": [
                "content"
              ],
              "fromItems": false
            },
            {
              "name": "communicatedRisks",
              "operationId": "createStatusReport",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "createStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "generatedByUserId",
              "operationId": "createStatusReport",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "publishedAt",
              "operationId": "createStatusReport",
              "path": [
                "publishedAt"
              ],
              "fromItems": false
            },
            {
              "name": "publishedByUserId",
              "operationId": "createStatusReport",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "withdrawnAt",
              "operationId": "createStatusReport",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "generateAndPublishProjectStatusReportCmdPublishStatusReportHandler",
        "command": "cmdPublishStatusReport",
        "bffId": "cmdPublishStatusReport",
        "route": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport",
        "kind": "command",
        "usecaseRef": "publishStatusReport",
        "usecaseRefs": [
          "publishStatusReport"
        ],
        "inputTypeName": "PublishStatusReportInput",
        "inputContract": [
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
          {
            "inputId": "projectExecutionOverviewProjectId",
            "fieldRef": "ProjectExecutionOverview.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Visão consolidada de execução da obra"
          },
          {
            "inputId": "statusReportStatusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "selectedEntity",
            "description": "Relatório de status"
          },
          {
            "inputId": "status",
            "fieldRef": "StatusReport.status",
            "required": true,
            "source": "userInput",
            "description": "Decisão tomada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "publishStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "publishStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "publishStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "publishStatusReport",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "content",
              "operationId": "publishStatusReport",
              "path": [
                "content"
              ],
              "fromItems": false
            },
            {
              "name": "communicatedRisks",
              "operationId": "publishStatusReport",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "publishStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "generatedByUserId",
              "operationId": "publishStatusReport",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "publishedAt",
              "operationId": "publishStatusReport",
              "path": [
                "publishedAt"
              ],
              "fromItems": false
            },
            {
              "name": "publishedByUserId",
              "operationId": "publishStatusReport",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "withdrawnAt",
              "operationId": "publishStatusReport",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "generateAndPublishProjectStatusReportCmdHandoffStatusReportToClientHandler",
        "command": "cmdHandoffStatusReportToClient",
        "bffId": "cmdHandoffStatusReportToClient",
        "route": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient",
        "kind": "command",
        "usecaseRef": "handoffStatusReportToClient",
        "usecaseRefs": [
          "handoffStatusReportToClient"
        ],
        "inputTypeName": "HandoffStatusReportToClientInput",
        "inputContract": [
          {
            "inputId": "statusReportStatusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "selectedEntity",
            "description": "Relatório de status"
          },
          {
            "inputId": "title",
            "fieldRef": "StatusReport.title",
            "required": true,
            "source": "userInput",
            "description": "Título profissional que identifica a comunicação de status da obra."
          },
          {
            "inputId": "content",
            "fieldRef": "StatusReport.content",
            "required": true,
            "source": "userInput",
            "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação."
          },
          {
            "inputId": "communicatedRisks",
            "fieldRef": "StatusReport.communicatedRisks",
            "required": false,
            "source": "userInput",
            "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório."
          },
          {
            "inputId": "generatedByUserId",
            "fieldRef": "StatusReport.generatedByUserId",
            "required": true,
            "source": "userInput",
            "description": "Identificador do gerente responsável por gerar o relatório para revisão."
          },
          {
            "inputId": "publishedByUserId",
            "fieldRef": "StatusReport.publishedByUserId",
            "required": false,
            "source": "userInput",
            "description": "Identificador do gerente responsável pela publicação observável do relatório."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "content",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "content"
              ],
              "fromItems": false
            },
            {
              "name": "communicatedRisks",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "generatedByUserId",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "publishedAt",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "publishedAt"
              ],
              "fromItems": false
            },
            {
              "name": "publishedByUserId",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "withdrawnAt",
              "operationId": "handoffStatusReportToClient",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject",
        "handlerName": "generateAndPublishProjectStatusReportQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview",
        "handlerName": "generateAndPublishProjectStatusReportQryInspectProjectExecutionOverviewHandler"
      },
      {
        "key": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment",
        "handlerName": "generateAndPublishProjectStatusReportQryInspectScheduleRiskAssessmentHandler"
      },
      {
        "key": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport",
        "handlerName": "generateAndPublishProjectStatusReportCmdCreateStatusReportHandler"
      },
      {
        "key": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport",
        "handlerName": "generateAndPublishProjectStatusReportCmdPublishStatusReportHandler"
      },
      {
        "key": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient",
        "handlerName": "generateAndPublishProjectStatusReportCmdHandoffStatusReportToClientHandler"
      }
    ]
  }
} as const;

export default generateAndPublishProjectStatusReportController;

export const pipeline = [
  {
    "id": "generateAndPublishProjectStatusReport__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/generateAndPublishProjectStatusReport.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/generateAndPublishProjectStatusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createStatusReport.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.cmdCreateStatusReport.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/publishStatusReport.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.cmdPublishStatusReport.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffStatusReportToClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
