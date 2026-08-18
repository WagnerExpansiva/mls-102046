/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.defs.ts" enhancement="_blank"/>

export const projectCoordinationAssignmentDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ProjectCoordinationAssignment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectCoordinationAssignment",
    "title": "Atribuição de coordenação da obra",
    "fields": [
      {
        "fieldId": "projectCoordinationAssignmentId",
        "title": "Identificador da atribuição de coordenação",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do registro operacional de encaminhamento da obra para coordenação de campo.",
        "constraints": [
          {
            "constraintId": "uniqueProjectCoordinationAssignmentId",
            "kind": "unique",
            "value": "true",
            "description": "Cada atribuição de coordenação possui um identificador estável e exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "projectId",
        "title": "Obra",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto à obra específica encaminhada para acompanhamento de campo.",
        "constraints": []
      },
      {
        "fieldId": "fieldCoordinatorId",
        "title": "Coordenador de campo",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto ao coordenador de campo responsável pelo acompanhamento da obra.",
        "constraints": []
      },
      {
        "fieldId": "status",
        "title": "Status da atribuição",
        "type": "string",
        "required": true,
        "description": "Estado operacional atual da atribuição de coordenação da obra.",
        "constraints": [
          {
            "constraintId": "projectCoordinationAssignmentStatusEnum",
            "kind": "enum",
            "value": "[\"active\",\"closed\",\"revoked\"]",
            "description": "O status da atribuição deve corresponder a um estado previsto em seu ciclo de vida.",
            "source": "inferred"
          }
        ],
        "enum": [
          "active",
          "closed",
          "revoked"
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "active",
      "closed",
      "revoked"
    ],
    "invariants": [
      "A atribuição deve referenciar uma única obra e um único coordenador de campo, e o identificador da atribuição deve ser estável e exclusivo.",
      "O status deve iniciar como \"active\".",
      "Uma atribuição \"active\" pode transitar para \"closed\" ou \"revoked\".",
      "Uma atribuição \"closed\" ou \"revoked\" é terminal e não pode retornar a \"active\" nem transitar para o outro estado terminal."
    ]
  }
} as const;

export default projectCoordinationAssignmentDomainEntity;

export const pipeline = [
  {
    "id": "projectCoordinationAssignment__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.defs.ts",
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
