/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/publishStatusReport.defs.ts" enhancement="_blank"/>

export const publishStatusReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "publishStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "publishStatusReport",
    "ports": [
      "StatusReport",
      "Project",
      "ProjectExecutionOverview"
    ],
    "rulesApplied": [
      "statusReportUsesProjectExecutionData"
    ],
    "functions": [
      {
        "functionName": "publishStatusReport",
        "inputTypeName": "PublishStatusReportInput",
        "outputTypeName": "PublishStatusReportOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Obra",
            "ofEntity": "Project",
            "fieldRef": "Project.projectId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "projectExecutionOverviewProjectId",
            "type": "string",
            "required": true,
            "description": "Visão consolidada de execução da obra",
            "fieldRef": "ProjectExecutionOverview.projectId",
            "item": {
              "fields": []
            }
          },
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
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Decisão tomada.",
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.status",
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
          "StatusReport",
          "Project",
          "ProjectExecutionOverview"
        ],
        "rulesApplied": [
          "statusReportUsesProjectExecutionData"
        ],
        "transactional": true,
        "steps": [
          "Dentro de uma única transação, carregar o Project pelo projectId, o ProjectExecutionOverview pelo projectExecutionOverviewProjectId e o StatusReport pelo statusReportId usando somente seus ports.",
          "Validar que projectId, Project.projectId, ProjectExecutionOverview.projectId e StatusReport.projectId representam a mesma obra; se algum registro não existir ou houver divergência, rejeitar a operação com erro de validação referenciando a regra statusReportUsesProjectExecutionData.",
          "Validar que o status recebido é um valor permitido do StatusReport e que a operação de publicação solicita status published; se não, rejeitar com erro de validação referenciando a regra statusReportUsesProjectExecutionData.",
          "Aplicar inline a regra statusReportUsesProjectExecutionData: garantir que o relatório seja publicado com os dados atuais da visão consolidada de execução da obra; preservar os campos de conteúdo do relatório e usar a visão carregada como fonte de validação da execução correspondente.",
          "Definir status como published, publishedAt com ctx.clock.now() e publishedByUserId com o usuário da sessão; salvar o StatusReport pelo port dentro da mesma transação.",
          "Retornar exatamente os campos do StatusReport definidos no output, incluindo os valores atualizados de publicação."
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

export default publishStatusReportUsecase;

export const pipeline = [
  {
    "id": "publishStatusReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/publishStatusReport.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/publishStatusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "statusReportUsesProjectExecutionData"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
