/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.defs.ts" enhancement="_blank"/>

export const platformUserDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "PlatformUser",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "PlatformUser",
    "title": "Usuário da plataforma",
    "fields": [
      {
        "fieldId": "platformUserId",
        "title": "ID do usuário da plataforma",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do usuário autenticado, fornecido pela plataforma e usado como referência externa pelos vínculos do módulo.",
        "constraints": [
          {
            "constraintId": "uniquePlatformUserId",
            "kind": "unique",
            "value": "true",
            "description": "Cada usuário externo da plataforma possui um identificador estável único.",
            "source": "inferred"
          }
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "platformUserId must be a valid UUID.",
      "platformUserId must be unique across all platform users and immutable after creation."
    ]
  }
} as const;

export default platformUserDomainEntity;

export const pipeline = [
  {
    "id": "platformUser__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.defs.ts",
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
