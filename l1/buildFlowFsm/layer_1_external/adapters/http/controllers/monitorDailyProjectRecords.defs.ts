/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/monitorDailyProjectRecords.defs.ts" enhancement="_blank"/>

export const monitorDailyProjectRecordsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "monitorDailyProjectRecords",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "monitorDailyProjectRecords",
    "controllerName": "MonitorDailyProjectRecordsController",
    "ownerKind": "workspace",
    "workspaceId": "monitorDailyProjectRecords",
    "actors": [
      "fieldCoordinator"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "monitorDailyProjectRecordsQryLocateProjectHandler",
        "command": "qryLocateProject",
        "bffId": "qryLocateProject",
        "route": "buildFlowFsm.monitorDailyProjectRecords.qryLocateProject",
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
        "handlerName": "monitorDailyProjectRecordsQryInspectProjectTimeLogsHandler",
        "command": "qryInspectProjectTimeLogs",
        "bffId": "qryInspectProjectTimeLogs",
        "route": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs",
        "kind": "query",
        "usecaseRef": "inspectProjectTimeLogs",
        "usecaseRefs": [
          "inspectProjectTimeLogs"
        ],
        "inputTypeName": "InspectProjectTimeLogsInput",
        "inputContract": [
          {
            "inputId": "timeLogTimeLogId",
            "fieldRef": "TimeLog.timeLogId",
            "required": true,
            "source": "selectedEntity",
            "description": "Registro de horas"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "timeLogId",
              "operationId": "inspectProjectTimeLogs",
              "path": [
                "timeLogId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "inspectProjectTimeLogs",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "inspectProjectTimeLogs",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "fieldWorkerId",
              "operationId": "inspectProjectTimeLogs",
              "path": [
                "fieldWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "workDate",
              "operationId": "inspectProjectTimeLogs",
              "path": [
                "workDate"
              ],
              "fromItems": false
            },
            {
              "name": "hoursWorked",
              "operationId": "inspectProjectTimeLogs",
              "path": [
                "hoursWorked"
              ],
              "fromItems": false
            },
            {
              "name": "hourlyLaborCost",
              "operationId": "inspectProjectTimeLogs",
              "path": [
                "hourlyLaborCost"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "monitorDailyProjectRecordsQryInspectProjectMaterialUsagesHandler",
        "command": "qryInspectProjectMaterialUsages",
        "bffId": "qryInspectProjectMaterialUsages",
        "route": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages",
        "kind": "query",
        "usecaseRef": "inspectProjectMaterialUsages",
        "usecaseRefs": [
          "inspectProjectMaterialUsages"
        ],
        "inputTypeName": "InspectProjectMaterialUsagesInput",
        "inputContract": [
          {
            "inputId": "materialUsageMaterialUsageId",
            "fieldRef": "MaterialUsage.materialUsageId",
            "required": true,
            "source": "selectedEntity",
            "description": "Consumo de material"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "materialUsageId",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "materialUsageId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryItemId",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "inventoryItemId"
              ],
              "fromItems": false
            },
            {
              "name": "inventoryBalanceId",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "inventoryBalanceId"
              ],
              "fromItems": false
            },
            {
              "name": "quantity",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "quantity"
              ],
              "fromItems": false
            },
            {
              "name": "usageDescription",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "usageDescription"
              ],
              "fromItems": false
            },
            {
              "name": "consumedOn",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "consumedOn"
              ],
              "fromItems": false
            },
            {
              "name": "unitCostBasis",
              "operationId": "inspectProjectMaterialUsages",
              "path": [
                "unitCostBasis"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "monitorDailyProjectRecordsQryInspectProjectExecutionOverviewHandler",
        "command": "qryInspectProjectExecutionOverview",
        "bffId": "qryInspectProjectExecutionOverview",
        "route": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview",
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
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.monitorDailyProjectRecords.qryLocateProject",
        "handlerName": "monitorDailyProjectRecordsQryLocateProjectHandler"
      },
      {
        "key": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs",
        "handlerName": "monitorDailyProjectRecordsQryInspectProjectTimeLogsHandler"
      },
      {
        "key": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages",
        "handlerName": "monitorDailyProjectRecordsQryInspectProjectMaterialUsagesHandler"
      },
      {
        "key": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview",
        "handlerName": "monitorDailyProjectRecordsQryInspectProjectExecutionOverviewHandler"
      }
    ]
  }
} as const;

export default monitorDailyProjectRecordsController;

export const pipeline = [
  {
    "id": "monitorDailyProjectRecords__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/monitorDailyProjectRecords.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/monitorDailyProjectRecords.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/monitorDailyProjectRecords.qryLocateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeLogs.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/monitorDailyProjectRecords.qryInspectProjectTimeLogs.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectMaterialUsages.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/monitorDailyProjectRecords.qryInspectProjectMaterialUsages.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/monitorDailyProjectRecords.qryInspectProjectExecutionOverview.defs.ts"
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
