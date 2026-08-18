/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.defs.ts" enhancement="_blank"/>

export const fieldCoordinatorDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "FieldCoordinator",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "FieldCoordinator",
    "title": "Coordenador de campo",
    "fields": [
      {
        "fieldId": "platformUserRef",
        "title": "Usuário da plataforma",
        "type": "uuid",
        "required": true,
        "description": "Referência externa ao usuário organizacional qualificado como coordenador de campo.",
        "constraints": [
          {
            "constraintId": "uniquePlatformUserRef",
            "kind": "unique",
            "value": "true",
            "description": "Cada usuário da plataforma corresponde a no máximo um coordenador de campo.",
            "source": "inferred"
          }
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "The platform user reference must identify an organizationally qualified field coordinator.",
      "A platform user may correspond to at most one FieldCoordinator entity."
    ]
  }
} as const;

export default fieldCoordinatorDomainEntity;

export const pipeline = [
  {
    "id": "fieldCoordinator__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.defs.ts",
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
