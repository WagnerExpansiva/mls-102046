/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.defs.ts" enhancement="_blank"/>

export const clientPortalAccessDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ClientPortalAccess",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ClientPortalAccess",
    "title": "Vínculo de acesso do cliente",
    "fields": [
      {
        "fieldId": "clientPortalAccessId",
        "title": "Identificador do vínculo de acesso do cliente",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada.",
        "constraints": [
          {
            "constraintId": "uniqueClientPortalAccessId",
            "kind": "unique",
            "value": "true",
            "description": "Cada vínculo de acesso do cliente possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "clientId",
        "title": "Cliente associado",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto ao cliente ao qual o usuário externo está associado.",
        "constraints": []
      },
      {
        "fieldId": "platformUserId",
        "title": "Usuário externo da plataforma",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto ao usuário externo da plataforma associado ao cliente.",
        "constraints": []
      },
      {
        "fieldId": "status",
        "title": "Status do vínculo de acesso",
        "type": "string",
        "required": true,
        "description": "Indica se o vínculo atualmente concede ou não associação do usuário ao cliente.",
        "constraints": [
          {
            "constraintId": "clientPortalAccessStatusEnum",
            "kind": "enum",
            "value": "[\"active\",\"revoked\"]",
            "description": "O status do vínculo é ativo ou revogado.",
            "source": "inferred"
          }
        ],
        "enum": [
          "active",
          "revoked"
        ]
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "active",
      "revoked"
    ],
    "invariants": [
      "O identificador do vínculo deve ser único e permanecer estável durante todo o ciclo de vida.",
      "O vínculo deve associar exatamente um cliente a exatamente um usuário externo da plataforma.",
      "O status inicial deve ser active ou revoked; somente vínculos active concedem associação do usuário ao cliente.",
      "A transição de active para revoked é permitida e representa a revogação do acesso.",
      "Após ser revoked, o vínculo não pode retornar a active; a revogação é irreversível."
    ]
  }
} as const;

export default clientPortalAccessDomainEntity;

export const pipeline = [
  {
    "id": "clientPortalAccess__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.defs.ts",
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
