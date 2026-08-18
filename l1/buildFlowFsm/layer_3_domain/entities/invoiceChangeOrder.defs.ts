/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const invoiceChangeOrderDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "InvoiceChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InvoiceChangeOrder",
    "title": "Aplicação de ordem de mudança na fatura",
    "fields": [
      {
        "fieldId": "invoiceChangeOrderId",
        "title": "Identificador da aplicação de ordem de mudança na fatura",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do vínculo de faturamento entre uma fatura e uma ordem de mudança aprovada.",
        "constraints": [
          {
            "constraintId": "uniqueInvoiceChangeOrderId",
            "kind": "unique",
            "value": "true",
            "description": "Cada aplicação de ordem de mudança na fatura possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "invoiceId",
        "title": "Fatura",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto à fatura emitida que incorpora a ordem de mudança.",
        "constraints": []
      },
      {
        "fieldId": "changeOrderId",
        "title": "Ordem de mudança",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto à ordem de mudança aprovada incorporada na fatura.",
        "constraints": []
      },
      {
        "fieldId": "billedAmount",
        "title": "Valor faturado",
        "type": "money",
        "required": true,
        "description": "Valor efetivamente faturado nesta fatura em razão da ordem de mudança vinculada.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "O identificador da aplicação deve ser único e estável.",
      "A fatura referenciada deve existir e a ordem de mudança referenciada deve estar aprovada.",
      "O valor faturado deve ser monetário, não negativo e maior que zero quando houver valor efetivamente incorporado à fatura.",
      "A aplicação deve vincular exatamente uma fatura a exatamente uma ordem de mudança aprovada.",
      "A mesma ordem de mudança não pode ser incorporada mais de uma vez na mesma fatura.",
      "O valor faturado deve corresponder ao valor da parcela da ordem de mudança incorporada na fatura e não pode exceder o valor aprovado ainda não faturado da ordem de mudança."
    ]
  }
} as const;

export default invoiceChangeOrderDomainEntity;

export const pipeline = [
  {
    "id": "invoiceChangeOrder__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.defs.ts",
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
