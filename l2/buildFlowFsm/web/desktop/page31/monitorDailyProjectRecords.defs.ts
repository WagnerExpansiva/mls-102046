/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/monitorDailyProjectRecords.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "monitorDailyProjectRecords",
  "pageName": "Acompanhar registros diários da obra",
  "baseClassName": "BuildFlowFsmMonitorDailyProjectRecordsBase",
  "actor": "fieldCoordinator",
  "purpose": "Consultar horas e materiais recebidos para acompanhar execução e cronograma.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Gestor ou responsável pelo acompanhamento da execução da obra",
    "jobToBeDone": "Selecionar uma obra ativa e verificar rapidamente seu andamento, custos, horas registradas, consumos de materiais e próximos compromissos.",
    "primaryDecision": "Decidir se a execução da obra selecionada está sob controle ou exige investigação imediata.",
    "decisiveInfo": [
      "name",
      "status",
      "plannedStartDate",
      "plannedEndDate",
      "taskSummary",
      "upcomingCommitments",
      "totalLoggedHours",
      "materialUsageSummary",
      "actualLaborCost",
      "actualMaterialCost",
      "actualCost",
      "budgetAmount",
      "costVariance",
      "changeOrderImpactSummary",
      "workDate",
      "hoursWorked",
      "quantity",
      "consumedOn",
      "usageDescription"
    ],
    "usageFrequency": "Recorrente durante o acompanhamento operacional diário, com consultas rápidas e investigação sob demanda.",
    "informationHierarchy": [
      "obra selecionada e seu status",
      "resumo de execução, andamento e próximos compromissos",
      "custo real versus orçamento e variância",
      "horas registradas e custo de mão de obra",
      "consumos de materiais, quantidades e custos",
      "detalhes técnicos e identificadores somente como contexto"
    ],
    "successCriteria": "O usuário identifica em poucos segundos a obra que precisa de atenção, entende sua situação financeira e operacional e consegue aprofundar horas ou materiais sem digitar IDs nem navegar por formulários separados.",
    "antiPatterns": [
      "empilhar uma seção independente para cada consulta sem contexto compartilhado",
      "expor identificadores como campos digitáveis",
      "permitir edição manual de status",
      "tratar a página como CRUD",
      "priorizar detalhes técnicos antes do resumo executivo",
      "adicionar filtros ou ações não suportados pelo contrato"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra que exige atenção",
        "presentation": "master-detail-selection-surface"
      },
      {
        "action": "Analisar a execução da obra selecionada",
        "presentation": "summary-first-contextual-detail"
      },
      {
        "action": "Consultar registros diários de horas",
        "presentation": "contextual-detail-action"
      },
      {
        "action": "Consultar consumos de materiais",
        "presentation": "contextual-detail-action"
      }
    ]
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
    "id": "monitorDailyProjectRecords__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/monitorDailyProjectRecords.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/monitorDailyProjectRecords.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "monitorDailyProjectRecords__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
