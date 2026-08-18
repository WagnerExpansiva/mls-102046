/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/monitorDailyProjectRecords.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável pela execução ou acompanhamento de uma obra",
    "jobToBeDone": "Selecionar a obra relevante e rapidamente entender seu andamento diário, horas registradas, consumo de materiais e desvios de custo ou prazo.",
    "primaryDecision": "Decidir se a obra selecionada exige atenção imediata e em qual aspecto operacional investigar primeiro.",
    "decisiveInfo": [
      "projectId",
      "name",
      "address",
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
      "workDate",
      "hoursWorked",
      "hourlyLaborCost",
      "quantity",
      "usageDescription",
      "consumedOn",
      "unitCostBasis"
    ],
    "usageFrequency": "Recorrente durante o acompanhamento operacional diário, com consultas rápidas e leitura comparativa da execução.",
    "informationHierarchy": [
      "Obra selecionada e seu status",
      "Resumo de andamento, registros, próximos compromissos e custos",
      "Desvio entre custo real e orçamento",
      "Registros diários de horas e custo de mão de obra",
      "Consumos de materiais, quantidades e custos",
      "Metadados técnicos e identificadores somente quando necessários para contexto"
    ],
    "successCriteria": "O usuário identifica a obra correta sem digitar IDs, compreende sua situação em poucos segundos e consegue aprofundar horas ou materiais sem navegar por formulários CRUD ou perder o contexto.",
    "antiPatterns": [
      "Empilhar uma seção independente para cada consulta sem um contexto de obra compartilhado",
      "Exigir digitação manual de projectId, timeLogId ou materialUsageId",
      "Expor status ou datas calculadas como campos editáveis",
      "Usar um seletor livre de status em uma página somente de consulta",
      "Priorizar detalhes técnicos antes do resumo de execução",
      "Adicionar ações de criação, edição ou exclusão inexistentes no contrato"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra que exige acompanhamento",
        "presentation": "surface-selection with contextual master-detail"
      },
      {
        "action": "Analisar a execução consolidada",
        "presentation": "summary-first overview panel"
      },
      {
        "action": "Consultar registros diários de horas",
        "presentation": "contextual-detail drill-in"
      },
      {
        "action": "Consultar consumos de materiais",
        "presentation": "contextual-detail drill-in"
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
    "id": "monitorDailyProjectRecords__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/monitorDailyProjectRecords.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/monitorDailyProjectRecords.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "monitorDailyProjectRecords__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
