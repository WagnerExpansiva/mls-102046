/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/consultClientProjectUpdates.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consultClientProjectUpdates",
  "pageName": "Consultar status e faturamento da obra",
  "baseClassName": "BuildFlowFsmConsultClientProjectUpdatesBase",
  "actor": "client",
  "purpose": "Acompanhar informações publicadas sobre a execução e os valores da própria obra.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "dataBindings": [
    {
      "id": "binding.consultClientProjectUpdates.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.consultClientProjectUpdates.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.consultClientProjectUpdates.qryInspectStatusReport",
      "source": "bff.qryInspectStatusReport",
      "command": "qryInspectStatusReport",
      "description": "Consultar o relatório de status publicado",
      "kind": "query",
      "stateKey": "ui.consultClientProjectUpdates.data.qryInspectStatusReport",
      "inputStateKeys": [
        "ui.consultClientProjectUpdates.input.qryInspectStatusReport.statusReportStatusReportId"
      ],
      "inputs": [
        {
          "name": "statusReportStatusReportId",
          "stateKey": "ui.consultClientProjectUpdates.input.qryInspectStatusReport.statusReportStatusReportId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.consultClientProjectUpdates.qryInspectClientBillingSummary",
      "source": "bff.qryInspectClientBillingSummary",
      "command": "qryInspectClientBillingSummary",
      "description": "Consultar o resumo de faturamento",
      "kind": "query",
      "stateKey": "ui.consultClientProjectUpdates.data.qryInspectClientBillingSummary",
      "inputStateKeys": [
        "ui.consultClientProjectUpdates.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "inputs": [
        {
          "name": "clientBillingSummaryClientId",
          "stateKey": "ui.consultClientProjectUpdates.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
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
    "id": "consultClientProjectUpdates__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/consultClientProjectUpdates.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/consultClientProjectUpdates.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "consultClientProjectUpdates__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
