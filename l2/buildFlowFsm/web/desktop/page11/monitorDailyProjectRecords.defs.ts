/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/monitorDailyProjectRecords.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "monitorDailyProjectRecords",
  "pageName": "Acompanhar registros diários da obra",
  "baseClassName": "BuildFlowFsmMonitorDailyProjectRecordsBase",
  "actor": "fieldCoordinator",
  "purpose": "Consultar horas e materiais recebidos para acompanhar execução e cronograma.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "dataBindings": [
    {
      "id": "binding.monitorDailyProjectRecords.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.monitorDailyProjectRecords.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.monitorDailyProjectRecords.qryInspectProjectTimeLogs",
      "source": "bff.qryInspectProjectTimeLogs",
      "command": "qryInspectProjectTimeLogs",
      "description": "Consultar os registros diários de horas",
      "kind": "query",
      "stateKey": "ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs",
      "inputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId"
      ],
      "inputs": [
        {
          "name": "timeLogTimeLogId",
          "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.monitorDailyProjectRecords.qryInspectProjectMaterialUsages",
      "source": "bff.qryInspectProjectMaterialUsages",
      "command": "qryInspectProjectMaterialUsages",
      "description": "Consultar os consumos de materiais",
      "kind": "query",
      "stateKey": "ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages",
      "inputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId"
      ],
      "inputs": [
        {
          "name": "materialUsageMaterialUsageId",
          "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.monitorDailyProjectRecords.qryInspectProjectExecutionOverview",
      "source": "bff.qryInspectProjectExecutionOverview",
      "command": "qryInspectProjectExecutionOverview",
      "description": "Analisar a execução da obra",
      "kind": "query",
      "stateKey": "ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview",
      "inputStateKeys": [
        "ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "inputs": [
        {
          "name": "projectExecutionOverviewProjectId",
          "stateKey": "ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "monitorDailyProjectRecords__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/monitorDailyProjectRecords.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/monitorDailyProjectRecords.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "monitorDailyProjectRecords__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
