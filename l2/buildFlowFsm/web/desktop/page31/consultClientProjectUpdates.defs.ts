/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/consultClientProjectUpdates.defs.ts" enhancement="_blank"/>

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
    "actor": "Cliente da obra",
    "jobToBeDone": "Acompanhar o andamento publicado da própria obra e entender como alterações aprovadas se refletem no faturamento.",
    "primaryDecision": "Selecionar a própria obra e, em seguida, decidir se o principal acompanhamento é o status publicado ou a posição financeira.",
    "decisiveInfo": [
      "name",
      "status",
      "address",
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
    "usageFrequency": "Ocasional, quando o cliente deseja acompanhar uma atualização da obra ou conferir valores faturados.",
    "informationHierarchy": [
      "obra selecionada e status atual",
      "resumo financeiro com valores aprovados, faturáveis, faturados e disponíveis",
      "relatório publicado com conteúdo e riscos comunicados",
      "referências de alterações e faturas",
      "metadados de publicação"
    ],
    "successCriteria": "O cliente identifica rapidamente a obra correta, entende o estado atual, compara os principais valores financeiros e encontra o relatório publicado e seus riscos sem inserir identificadores técnicos.",
    "antiPatterns": [
      "formulário CRUD genérico",
      "campos de id digitáveis",
      "status como campo editável ou select livre",
      "seção de consulta separada que repete a seleção da obra",
      "exibir relatórios não publicados como se fossem atualizações válidas",
      "priorizar metadados técnicos antes do status, conteúdo e valores"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a obra associada ao cliente",
        "presentation": "master-detail selection surface with contextual selection"
      },
      {
        "action": "Consultar o resumo de faturamento da obra selecionada",
        "presentation": "summary-first contextual query result"
      },
      {
        "action": "Consultar o relatório de status publicado",
        "presentation": "master-detail contextual query result"
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
    "id": "consultClientProjectUpdates__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/consultClientProjectUpdates.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/consultClientProjectUpdates.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "consultClientProjectUpdates__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
