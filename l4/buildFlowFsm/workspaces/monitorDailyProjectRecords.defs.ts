/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/monitorDailyProjectRecords.defs.ts" enhancement="_blank"/>

export const monitorDailyProjectRecordsWorkspace = {
  "workspaceId": "monitorDailyProjectRecords",
  "title": "Acompanhar registros diários da obra",
  "actors": [
    "fieldCoordinator"
  ],
  "kind": "operation",
  "entity": "Project",
  "bffCalls": [
    {
      "bffId": "qryLocateProject",
      "kind": "query",
      "uses": [
        {
          "operationId": "locateProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "locateProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "locateProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "locateProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "locateProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "locateProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "locateProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "locateProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "locateProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.monitorDailyProjectRecords.qryLocateProject"
    },
    {
      "bffId": "qryInspectProjectTimeLogs",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectTimeLogs"
        }
      ],
      "input": [
        {
          "name": "timeLogTimeLogId",
          "from": "inspectProjectTimeLogs.timeLogTimeLogId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "timeLogId",
            "from": "inspectProjectTimeLogs.timeLogId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "inspectProjectTimeLogs.status",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskId",
            "from": "inspectProjectTimeLogs.workTaskId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldWorkerId",
            "from": "inspectProjectTimeLogs.fieldWorkerId",
            "type": "string",
            "required": true
          },
          {
            "name": "workDate",
            "from": "inspectProjectTimeLogs.workDate",
            "type": "string",
            "required": true
          },
          {
            "name": "hoursWorked",
            "from": "inspectProjectTimeLogs.hoursWorked",
            "type": "number",
            "required": true
          },
          {
            "name": "hourlyLaborCost",
            "from": "inspectProjectTimeLogs.hourlyLaborCost",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs"
    },
    {
      "bffId": "qryInspectProjectMaterialUsages",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectMaterialUsages"
        }
      ],
      "input": [
        {
          "name": "materialUsageMaterialUsageId",
          "from": "inspectProjectMaterialUsages.materialUsageMaterialUsageId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "materialUsageId",
            "from": "inspectProjectMaterialUsages.materialUsageId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "inspectProjectMaterialUsages.status",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "inspectProjectMaterialUsages.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryItemId",
            "from": "inspectProjectMaterialUsages.inventoryItemId",
            "type": "string",
            "required": true
          },
          {
            "name": "inventoryBalanceId",
            "from": "inspectProjectMaterialUsages.inventoryBalanceId",
            "type": "string",
            "required": true
          },
          {
            "name": "quantity",
            "from": "inspectProjectMaterialUsages.quantity",
            "type": "number",
            "required": true
          },
          {
            "name": "usageDescription",
            "from": "inspectProjectMaterialUsages.usageDescription",
            "type": "string",
            "required": true
          },
          {
            "name": "consumedOn",
            "from": "inspectProjectMaterialUsages.consumedOn",
            "type": "string",
            "required": true
          },
          {
            "name": "unitCostBasis",
            "from": "inspectProjectMaterialUsages.unitCostBasis",
            "type": "number",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages"
    },
    {
      "bffId": "qryInspectProjectExecutionOverview",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectExecutionOverview"
        }
      ],
      "input": [
        {
          "name": "projectExecutionOverviewProjectId",
          "from": "inspectProjectExecutionOverview.projectExecutionOverviewProjectId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectId",
            "from": "inspectProjectExecutionOverview.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectName",
            "from": "inspectProjectExecutionOverview.projectName",
            "type": "string",
            "required": true
          },
          {
            "name": "projectStatus",
            "from": "inspectProjectExecutionOverview.projectStatus",
            "type": "string",
            "required": true
          },
          {
            "name": "workTaskIds",
            "from": "inspectProjectExecutionOverview.workTaskIds",
            "type": "string",
            "required": false
          },
          {
            "name": "taskSummary",
            "from": "inspectProjectExecutionOverview.taskSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "upcomingCommitments",
            "from": "inspectProjectExecutionOverview.upcomingCommitments",
            "type": "string",
            "required": true
          },
          {
            "name": "timeLogIds",
            "from": "inspectProjectExecutionOverview.timeLogIds",
            "type": "string",
            "required": false
          },
          {
            "name": "totalLoggedHours",
            "from": "inspectProjectExecutionOverview.totalLoggedHours",
            "type": "number",
            "required": true
          },
          {
            "name": "materialUsageIds",
            "from": "inspectProjectExecutionOverview.materialUsageIds",
            "type": "string",
            "required": false
          },
          {
            "name": "materialUsageSummary",
            "from": "inspectProjectExecutionOverview.materialUsageSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "actualLaborCost",
            "from": "inspectProjectExecutionOverview.actualLaborCost",
            "type": "number",
            "required": true
          },
          {
            "name": "actualMaterialCost",
            "from": "inspectProjectExecutionOverview.actualMaterialCost",
            "type": "number",
            "required": true
          },
          {
            "name": "actualCost",
            "from": "inspectProjectExecutionOverview.actualCost",
            "type": "number",
            "required": true
          },
          {
            "name": "budgetAmount",
            "from": "inspectProjectExecutionOverview.budgetAmount",
            "type": "number",
            "required": true
          },
          {
            "name": "costVariance",
            "from": "inspectProjectExecutionOverview.costVariance",
            "type": "number",
            "required": true
          },
          {
            "name": "changeOrderIds",
            "from": "inspectProjectExecutionOverview.changeOrderIds",
            "type": "string",
            "required": false
          },
          {
            "name": "changeOrderImpactSummary",
            "from": "inspectProjectExecutionOverview.changeOrderImpactSummary",
            "type": "string",
            "required": true
          },
          {
            "name": "calculatedAt",
            "from": "inspectProjectExecutionOverview.calculatedAt",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview"
    }
  ],
  "sections": [
    {
      "sectionId": "locateProject",
      "intent": "Uma obra ativa está selecionada para acompanhamento.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryLocateProject",
          "usage": "picker"
        }
      ]
    },
    {
      "sectionId": "inspectProjectTimeLogs",
      "intent": "Registros de horas da obra estão visíveis.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectProjectTimeLogs"
        }
      ]
    },
    {
      "sectionId": "inspectProjectMaterialUsages",
      "intent": "Consumos associados à obra estão visíveis.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectProjectMaterialUsages"
        }
      ]
    },
    {
      "sectionId": "inspectProjectExecutionOverview",
      "intent": "Andamento, registros e próximos prazos estão consolidados.",
      "organisms": [
        {
          "role": "detailPanel",
          "dataSource": "qryInspectProjectExecutionOverview"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectProjectExecutionOverview",
    "inspectProjectMaterialUsages",
    "inspectProjectTimeLogs",
    "locateProject"
  ],
  "purpose": "Consultar horas e materiais recebidos para acompanhar execução e cronograma.",
  "presentation": {
    "categoryRef": "processWizard",
    "confidence": 10,
    "classificationNote": "Derived from the journey tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:4a7902dd"
} as const;

export default monitorDailyProjectRecordsWorkspace;
