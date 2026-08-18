/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.defs.ts" enhancement="_blank"/>

export const fieldWorkerDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "FieldWorker",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "FieldWorker",
    "title": "Trabalhador de campo",
    "fields": [
      {
        "fieldId": "platformUserId",
        "title": "Usuário da plataforma",
        "type": "uuid",
        "required": true,
        "description": "Referência ao usuário da plataforma qualificado como trabalhador de campo, selecionada no diretório organizacional.",
        "constraints": [
          {
            "constraintId": "uniquePlatformUserId",
            "kind": "unique",
            "value": "true",
            "description": "Um usuário da plataforma corresponde a, no máximo, uma referência de trabalhador de campo.",
            "source": "inferred"
          }
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "A platform user may correspond to at most one FieldWorker record.",
      "The referenced platform user must be qualified as a field worker in the organizational directory."
    ]
  }
} as const;

export default fieldWorkerDomainEntity;

export const pipeline = [
  {
    "id": "fieldWorker__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.defs.ts",
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
