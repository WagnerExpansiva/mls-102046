/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/consultClientProjectUpdates.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consultClientProjectUpdates",
  "pageName": "Consultar status e faturamento da obra",
  "baseClassName": "BuildFlowFsmConsultClientProjectUpdatesBase",
  "actor": "client",
  "purpose": "Acompanhar informações publicadas sobre a execução e os valores da própria obra.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Cliente que acompanha a própria obra.",
    "jobToBeDone": "Selecionar a própria obra e compreender rapidamente seu andamento publicado, riscos comunicados e situação de faturamento.",
    "primaryDecision": "Decidir se a obra está evoluindo conforme esperado e se os valores faturados e disponíveis estão coerentes.",
    "decisiveInfo": [
      "name",
      "status",
      "plannedStartDate",
      "plannedEndDate",
      "title",
      "content",
      "communicatedRisks",
      "publishedAt",
      "approvedChangeOrderAmount",
      "billableAmount",
      "invoicedAmount",
      "clientAvailableAmount",
      "approvedChangeOrderReferences",
      "invoiceReferences"
    ],
    "usageFrequency": "Ocasionalmente, quando o cliente recebe uma atualização ou precisa conferir o andamento e os valores da obra.",
    "informationHierarchy": [
      "Obra selecionada e seu status geral",
      "Relatório publicado e riscos comunicados",
      "Valores aprovados, faturáveis, faturados e disponíveis",
      "Referências de alterações aprovadas e faturas",
      "Endereço e datas planejadas da obra"
    ],
    "successCriteria": "O cliente identifica a obra correta sem digitar identificadores, entende o status e os riscos publicados e compara os principais valores financeiros em uma única leitura contextual.",
    "antiPatterns": [
      "Expor ids técnicos como campos digitáveis",
      "Separar cada consulta em um formulário independente",
      "Permitir edição manual de status ou datas",
      "Apresentar valores financeiros sem contexto da obra selecionada",
      "Adicionar ações de alteração ou faturamento que não existem no contrato"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra associada ao cliente",
        "presentation": "master-detail-selection"
      },
      {
        "action": "Consultar o relatório de status da obra selecionada",
        "presentation": "contextual-detail-load"
      },
      {
        "action": "Consultar o resumo de faturamento da obra selecionada",
        "presentation": "contextual-detail-load"
      }
    ]
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
    "id": "consultClientProjectUpdates__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/consultClientProjectUpdates.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/consultClientProjectUpdates.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "consultClientProjectUpdates__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
