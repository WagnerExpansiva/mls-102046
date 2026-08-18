/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/reviewProjectPortfolio.defs.ts" enhancement="_blank"/>

export const reviewProjectPortfolioController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "reviewProjectPortfolio",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "reviewProjectPortfolio",
    "controllerName": "ReviewProjectPortfolioController",
    "ownerKind": "workspace",
    "workspaceId": "reviewProjectPortfolio",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "reviewProjectPortfolioQryInspectProjectDashboardHandler",
        "command": "qryInspectProjectDashboard",
        "bffId": "qryInspectProjectDashboard",
        "route": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard",
        "kind": "query",
        "usecaseRef": "inspectProjectDashboard",
        "usecaseRefs": [
          "inspectProjectDashboard"
        ],
        "inputTypeName": "InspectProjectDashboardInput",
        "inputContract": [],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "activeProjects",
              "operationId": "inspectProjectDashboard",
              "path": [
                "activeProjects"
              ],
              "fromItems": false
            },
            {
              "name": "activeProjectCount",
              "operationId": "inspectProjectDashboard",
              "path": [
                "activeProjectCount"
              ],
              "fromItems": false
            },
            {
              "name": "totalBudget",
              "operationId": "inspectProjectDashboard",
              "path": [
                "totalBudget"
              ],
              "fromItems": false
            },
            {
              "name": "totalActualCost",
              "operationId": "inspectProjectDashboard",
              "path": [
                "totalActualCost"
              ],
              "fromItems": false
            },
            {
              "name": "budgetVariance",
              "operationId": "inspectProjectDashboard",
              "path": [
                "budgetVariance"
              ],
              "fromItems": false
            },
            {
              "name": "costAttentionProjects",
              "operationId": "inspectProjectDashboard",
              "path": [
                "costAttentionProjects"
              ],
              "fromItems": false
            },
            {
              "name": "upcomingTasks",
              "operationId": "inspectProjectDashboard",
              "path": [
                "upcomingTasks"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "reviewProjectPortfolioQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.reviewProjectPortfolio.qryLocateProject",
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
        "handlerName": "reviewProjectPortfolioQryInspectProjectExecutionOverviewHandler",
        "command": "qryInspectProjectExecutionOverview",
        "bffId": "qryInspectProjectExecutionOverview",
        "route": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview",
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
        "handlerName": "reviewProjectPortfolioCmdHandoffProjectToFieldCoordinatorHandler",
        "command": "cmdHandoffProjectToFieldCoordinator",
        "bffId": "cmdHandoffProjectToFieldCoordinator",
        "route": "buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator",
        "kind": "command",
        "usecaseRef": "handoffProjectToFieldCoordinator",
        "usecaseRefs": [
          "handoffProjectToFieldCoordinator"
        ],
        "inputTypeName": "HandoffProjectToFieldCoordinatorInput",
        "inputContract": [
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
          {
            "inputId": "clientId",
            "fieldRef": "Project.clientId",
            "required": true,
            "source": "userInput",
            "description": "Referência ao cliente selecionado ao qual a obra pertence."
          },
          {
            "inputId": "name",
            "fieldRef": "Project.name",
            "required": true,
            "source": "userInput",
            "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente."
          },
          {
            "inputId": "address",
            "fieldRef": "Project.address",
            "required": true,
            "source": "userInput",
            "description": "Endereço do local de execução da obra."
          },
          {
            "inputId": "authorizedBudget",
            "fieldRef": "Project.authorizedBudget",
            "required": true,
            "source": "userInput",
            "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra."
          },
          {
            "inputId": "plannedStartDate",
            "fieldRef": "Project.plannedStartDate",
            "required": true,
            "source": "userInput",
            "description": "Data planejada para início da execução da obra."
          },
          {
            "inputId": "plannedEndDate",
            "fieldRef": "Project.plannedEndDate",
            "required": true,
            "source": "userInput",
            "description": "Data planejada para conclusão da obra."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "handoffProjectToFieldCoordinator",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "handoffProjectToFieldCoordinator",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "handoffProjectToFieldCoordinator",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "address",
              "operationId": "handoffProjectToFieldCoordinator",
              "path": [
                "address"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "handoffProjectToFieldCoordinator",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "authorizedBudget",
              "operationId": "handoffProjectToFieldCoordinator",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": false
            },
            {
              "name": "plannedStartDate",
              "operationId": "handoffProjectToFieldCoordinator",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": false
            },
            {
              "name": "plannedEndDate",
              "operationId": "handoffProjectToFieldCoordinator",
              "path": [
                "plannedEndDate"
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
        "key": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard",
        "handlerName": "reviewProjectPortfolioQryInspectProjectDashboardHandler"
      },
      {
        "key": "buildFlowFsm.reviewProjectPortfolio.qryLocateProject",
        "handlerName": "reviewProjectPortfolioQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview",
        "handlerName": "reviewProjectPortfolioQryInspectProjectExecutionOverviewHandler"
      },
      {
        "key": "buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator",
        "handlerName": "reviewProjectPortfolioCmdHandoffProjectToFieldCoordinatorHandler"
      }
    ]
  }
} as const;

export default reviewProjectPortfolioController;

export const pipeline = [
  {
    "id": "reviewProjectPortfolio__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/reviewProjectPortfolio.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/reviewProjectPortfolio.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/reviewProjectPortfolio.qryInspectProjectDashboard.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/reviewProjectPortfolio.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/reviewProjectPortfolio.qryInspectProjectExecutionOverview.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffProjectToFieldCoordinator.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.defs.ts"
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
