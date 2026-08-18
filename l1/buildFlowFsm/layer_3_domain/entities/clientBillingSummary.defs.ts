/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.defs.ts" enhancement="_blank"/>

export const clientBillingSummaryDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ClientBillingSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ClientBillingSummary",
    "title": "Resumo de faturamento do cliente",
    "fields": [
      {
        "fieldId": "clientId",
        "title": "Cliente",
        "type": "uuid",
        "required": true,
        "description": "Identificador derivado do cliente selecionado para o qual o resumo de faturamento é consolidado.",
        "constraints": []
      },
      {
        "fieldId": "projectId",
        "title": "Obra",
        "type": "uuid",
        "required": true,
        "description": "Identificador derivado da obra faturável do cliente que segmenta o resumo.",
        "constraints": []
      },
      {
        "fieldId": "approvedChangeOrderReferences",
        "title": "Ordens de mudança aprovadas",
        "type": "json",
        "required": false,
        "description": "Referências derivadas às ordens de mudança aprovadas da obra que compõem o resumo comercial.",
        "constraints": []
      },
      {
        "fieldId": "invoiceReferences",
        "title": "Faturas",
        "type": "json",
        "required": false,
        "description": "Referências derivadas às faturas da obra consolidadas no resumo.",
        "constraints": []
      },
      {
        "fieldId": "approvedChangeOrderAmount",
        "title": "Valor de ordens de mudança aprovadas",
        "type": "money",
        "required": true,
        "description": "Total derivado dos valores das ordens de mudança aprovadas para a obra.",
        "constraints": []
      },
      {
        "fieldId": "billableAmount",
        "title": "Valor faturável",
        "type": "money",
        "required": true,
        "description": "Valor comercial derivado disponível para composição de faturamento da obra.",
        "constraints": []
      },
      {
        "fieldId": "invoicedAmount",
        "title": "Valor faturado",
        "type": "money",
        "required": true,
        "description": "Total derivado dos valores das faturas emitidas para a obra.",
        "constraints": []
      },
      {
        "fieldId": "clientAvailableAmount",
        "title": "Valor disponibilizado ao cliente",
        "type": "money",
        "required": true,
        "description": "Total derivado dos valores de faturamento disponibilizados para consulta do cliente.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "The summary must consolidate data for exactly one client and one billable project; the client and project references must be valid and correspond to each other.",
      "All monetary amounts must be non-negative.",
      "The approved change-order amount must equal the sum of the values of the approved change orders referenced by the summary.",
      "The invoiced amount must equal the sum of the amounts of the invoice references consolidated in the summary.",
      "The billable amount must not be less than the approved change-order amount.",
      "The invoiced amount must not exceed the billable amount.",
      "The client-available amount must be non-negative and must not exceed the invoiced amount.",
      "Referenced approved change orders and invoices must belong to the summarized project and must not be counted more than once.",
      "The summary amounts and references must be recalculated or updated atomically so that derived totals remain consistent with their source references."
    ]
  }
} as const;

export default clientBillingSummaryDomainEntity;

export const pipeline = [
  {
    "id": "clientBillingSummary__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
