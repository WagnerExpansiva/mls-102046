/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.defs.ts" enhancement="_blank"/>

export const changeOrderDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrder",
    "title": "Ordem de mudança",
    "fields": [
      {
        "fieldId": "changeOrderId",
        "title": "ID da ordem de mudança",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável da ordem de mudança, transportado entre as etapas conectadas.",
        "constraints": [
          {
            "constraintId": "uniqueChangeOrderId",
            "kind": "unique",
            "value": "true",
            "description": "Cada ordem de mudança possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "clientRef",
        "title": "Cliente",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto ao cliente para o qual a alteração é proposta, selecionada no catálogo compartilhado.",
        "constraints": []
      },
      {
        "fieldId": "projectRef",
        "title": "Obra",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto à obra do cliente à qual a alteração está vinculada.",
        "constraints": []
      },
      {
        "fieldId": "description",
        "title": "Descrição da alteração",
        "type": "text",
        "required": true,
        "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente.",
        "constraints": []
      },
      {
        "fieldId": "scopeImpact",
        "title": "Impacto de escopo",
        "type": "text",
        "required": true,
        "description": "Impacto proposto da alteração no escopo da obra.",
        "constraints": []
      },
      {
        "fieldId": "scheduleImpact",
        "title": "Impacto de prazo",
        "type": "text",
        "required": true,
        "description": "Impacto proposto da alteração no prazo de execução da obra.",
        "constraints": []
      },
      {
        "fieldId": "changeAmount",
        "title": "Valor da alteração",
        "type": "money",
        "required": true,
        "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento.",
        "constraints": []
      },
      {
        "fieldId": "submittedAt",
        "title": "Data de submissão",
        "type": "datetime",
        "required": true,
        "description": "Data e hora em que a alteração foi formalizada e submetida para tratamento gerencial.",
        "constraints": []
      },
      {
        "fieldId": "forwardedForClientApprovalAt",
        "title": "Data de encaminhamento ao cliente",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que a ordem foi encaminhada ao cliente para decisão.",
        "constraints": []
      },
      {
        "fieldId": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "Estado atual da ordem de mudança no ciclo de tratamento, aprovação do cliente e faturamento.",
        "constraints": [
          {
            "constraintId": "changeOrderStatusEnum",
            "kind": "enum",
            "value": "[\"submitted\",\"pendingClientApproval\",\"approved\",\"declined\"]",
            "description": "O status deve corresponder a um estado definido do ciclo de vida da ordem de mudança.",
            "source": "journey"
          }
        ],
        "enum": [
          "submitted",
          "pendingClientApproval",
          "approved",
          "declined"
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "submitted",
      "pendingClientApproval",
      "approved",
      "declined"
    ],
    "invariants": [
      "changeOrderId is unique and immutable once assigned.",
      "changeAmount must be monetary and non-negative.",
      "submittedAt must be set before or equal to forwardedForClientApprovalAt when the latter is present.",
      "A newly submitted order must have status submitted.",
      "Transition to pendingClientApproval requires forwardedForClientApprovalAt to be present and not earlier than submittedAt.",
      "Transition to approved or declined is allowed only from pendingClientApproval.",
      "An order in approved or declined status must have been previously forwarded for client approval.",
      "Once approved or declined, the status is terminal and cannot transition to another status.",
      "forwardedForClientApprovalAt may be set only when the order is forwarded for client approval and cannot be cleared thereafter.",
      "The clientRef and projectRef must identify the client and a project belonging to that client.",
      "description, scopeImpact, and scheduleImpact must not be blank."
    ]
  }
} as const;

export default changeOrderDomainEntity;

export const pipeline = [
  {
    "id": "changeOrder__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.defs.ts",
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
