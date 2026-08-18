/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffStatusReportToClient.defs.ts" enhancement="_blank"/>

export const handoffStatusReportToClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffStatusReportToClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffStatusReportToClient",
    "ports": [
      "StatusReport"
    ],
    "rulesApplied": [
      "clientVisibleStatusReport"
    ],
    "functions": [
      {
        "functionName": "handoffStatusReportToClient",
        "inputTypeName": "HandoffStatusReportToClientInput",
        "outputTypeName": "HandoffStatusReportToClientOutput",
        "input": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "description": "Relatório de status",
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.statusReportId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "description": "Título profissional que identifica a comunicação de status da obra.",
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.title",
            "item": {
              "fields": []
            }
          },
          {
            "name": "content",
            "type": "string",
            "required": true,
            "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação.",
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.content",
            "item": {
              "fields": []
            }
          },
          {
            "name": "communicatedRisks",
            "type": "string",
            "required": false,
            "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório.",
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.communicatedRisks",
            "item": {
              "fields": []
            }
          },
          {
            "name": "generatedByUserId",
            "type": "string",
            "required": true,
            "description": "Identificador do gerente responsável por gerar o relatório para revisão.",
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.generatedByUserId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "publishedByUserId",
            "type": "string",
            "required": false,
            "description": "Identificador do gerente responsável pela publicação observável do relatório.",
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.publishedByUserId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "content",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "communicatedRisks",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "generatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "generatedByUserId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "publishedAt",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "publishedByUserId",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "withdrawnAt",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          }
        ],
        "ports": [
          "StatusReport"
        ],
        "rulesApplied": [
          "clientVisibleStatusReport"
        ],
        "transactional": true,
        "steps": [
          "Load the StatusReport aggregate through the StatusReport port using statusReportId.",
          "Validate that the report has the required professional title and reviewed content; if the client-visible status rule blocks publication, reject with rule id clientVisibleStatusReport in the validation error details.",
          "Apply the user-provided report fields and transition status to published, set publishedByUserId, and set publishedAt using ctx.clock.",
          "Persist the updated StatusReport through the StatusReport port inside the transaction wrapper.",
          "Return the canonical published report projection, including all fields declared by outputShape."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "statusReportId",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.statusReportId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.projectId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.status"
            },
            {
              "name": "title",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.title"
            },
            {
              "name": "content",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.content"
            },
            {
              "name": "communicatedRisks",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.communicatedRisks"
            },
            {
              "name": "generatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.generatedAt"
            },
            {
              "name": "generatedByUserId",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.generatedByUserId"
            },
            {
              "name": "publishedAt",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.publishedAt"
            },
            {
              "name": "publishedByUserId",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.publishedByUserId"
            },
            {
              "name": "withdrawnAt",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.withdrawnAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default handoffStatusReportToClientUsecase;

export const pipeline = [
  {
    "id": "handoffStatusReportToClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffStatusReportToClient.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffStatusReportToClient.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "clientVisibleStatusReport"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
