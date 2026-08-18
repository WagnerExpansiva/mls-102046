/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.defs.ts" enhancement="_blank"/>

export const statusReportDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "StatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StatusReport",
    "title": "Relatório de status",
    "fields": [
      {
        "fieldId": "statusReportId",
        "title": "Identificador do relatório de status",
        "type": "uuid",
        "required": true,
        "description": "Identificador estável do relatório, transportado entre as etapas conectadas da jornada.",
        "constraints": [
          {
            "constraintId": "uniqueStatusReportId",
            "kind": "unique",
            "value": "true",
            "description": "Cada relatório de status possui um identificador estável exclusivo.",
            "source": "inferred"
          }
        ]
      },
      {
        "fieldId": "projectId",
        "title": "Obra",
        "type": "uuid",
        "required": true,
        "description": "Referência de contexto à obra específica cuja situação é comunicada pelo relatório.",
        "constraints": []
      },
      {
        "fieldId": "status",
        "title": "Status",
        "type": "string",
        "required": true,
        "description": "Estado do ciclo de vida do relatório para revisão, comunicação ao cliente ou retirada.",
        "constraints": [
          {
            "constraintId": "statusReportStatusEnum",
            "kind": "enum",
            "value": "[\"draft\",\"published\",\"withdrawn\"]",
            "description": "O relatório pode estar em rascunho, publicado ou retirado.",
            "source": "journey"
          }
        ],
        "enum": [
          "draft",
          "published",
          "withdrawn"
        ]
      },
      {
        "fieldId": "title",
        "title": "Título",
        "type": "string",
        "required": true,
        "description": "Título profissional que identifica a comunicação de status da obra.",
        "constraints": []
      },
      {
        "fieldId": "content",
        "title": "Conteúdo do relatório",
        "type": "text",
        "required": true,
        "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação.",
        "constraints": []
      },
      {
        "fieldId": "communicatedRisks",
        "title": "Riscos comunicados",
        "type": "json",
        "required": false,
        "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório.",
        "constraints": []
      },
      {
        "fieldId": "generatedAt",
        "title": "Gerado em",
        "type": "datetime",
        "required": true,
        "description": "Data e hora em que o relatório foi gerado para revisão.",
        "constraints": []
      },
      {
        "fieldId": "generatedByUserId",
        "title": "Gerado por",
        "type": "uuid",
        "required": true,
        "description": "Identificador do gerente responsável por gerar o relatório para revisão.",
        "constraints": []
      },
      {
        "fieldId": "publishedAt",
        "title": "Publicado em",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que o relatório foi aprovado para comunicação ao cliente.",
        "constraints": []
      },
      {
        "fieldId": "publishedByUserId",
        "title": "Publicado por",
        "type": "uuid",
        "required": false,
        "description": "Identificador do gerente responsável pela publicação observável do relatório.",
        "constraints": []
      },
      {
        "fieldId": "withdrawnAt",
        "title": "Retirado em",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que um relatório publicado foi retirado de circulação.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "draft",
      "published",
      "withdrawn"
    ],
    "invariants": [
      "O identificador do relatório deve ser estável e exclusivo.",
      "O status deve ser um dos estados permitidos: draft, published ou withdrawn.",
      "Um relatório inicia em draft; a publicação só é permitida a partir de draft, e a retirada só é permitida a partir de published.",
      "Enquanto estiver em draft, publishedAt e publishedByUserId devem estar ausentes.",
      "Enquanto estiver em published, publishedAt e publishedByUserId são obrigatórios, e withdrawnAt deve estar ausente.",
      "Enquanto estiver em withdrawn, publishedAt e publishedByUserId devem existir e withdrawnAt deve ser obrigatório.",
      "generatedAt não pode ser posterior a publishedAt nem a withdrawnAt.",
      "publishedAt e publishedByUserId devem ser definidos conjuntamente; não pode existir um sem o outro.",
      "A publicação deve registrar o gerente responsável pela publicação, e a retirada só pode ocorrer após a publicação."
    ]
  }
} as const;

export default statusReportDomainEntity;

export const pipeline = [
  {
    "id": "statusReport__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.defs.ts",
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
