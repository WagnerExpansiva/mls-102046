/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.defs.ts" enhancement="_blank"/>

export const changeOrderDecisionDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ChangeOrderDecision",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrderDecision",
    "title": "Decisão sobre ordem de mudança",
    "fields": [
      {
        "fieldId": "changeOrderDecisionId",
        "title": "ID da decisão da ordem de mudança",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável da decisão registrada sobre uma ordem de mudança.",
        "constraints": [
          {
            "constraintId": "uniqueChangeOrderDecisionId",
            "kind": "unique",
            "value": "true",
            "description": "Cada decisão registrada possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "changeOrder",
        "title": "Ordem de mudança",
        "type": "uuid",
        "required": true,
        "description": "Referência à ordem de mudança que recebeu a decisão.",
        "constraints": []
      },
      {
        "fieldId": "madeByPlatformUser",
        "title": "Usuário responsável pela decisão",
        "type": "uuid",
        "required": true,
        "description": "Referência ao usuário que aprovou ou recusou a ordem de mudança.",
        "constraints": []
      },
      {
        "fieldId": "decision",
        "title": "Decisão",
        "type": "string",
        "required": true,
        "description": "Resultado registrado para a ordem de mudança.",
        "constraints": [
          {
            "constraintId": "decisionAllowedValues",
            "kind": "enum",
            "value": "[\"approved\",\"declined\"]",
            "description": "A decisão registrada é aprovação do cliente ou recusa do gerente.",
            "source": "journey"
          }
        ],
        "enum": [
          "approved",
          "declined"
        ]
      },
      {
        "fieldId": "decidedAt",
        "title": "Data e hora da decisão",
        "type": "datetime",
        "required": true,
        "description": "Data e hora em que a decisão foi registrada.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "A decisão deve ser exclusivamente \"approved\" ou \"declined\".",
      "A decisão deve referenciar uma ordem de mudança e um usuário responsável válidos.",
      "A data e hora da decisão deve ser válida e não pode estar no futuro em relação à data atual do sistema.",
      "Uma ordem de mudança não pode receber decisões conflitantes; após registrada uma decisão, outra decisão para a mesma ordem de mudança só pode ser registrada se o processo permitir explicitamente redecisão.",
      "O identificador da decisão deve ser único e estável."
    ]
  }
} as const;

export default changeOrderDecisionDomainEntity;

export const pipeline = [
  {
    "id": "changeOrderDecision__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.defs.ts",
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
