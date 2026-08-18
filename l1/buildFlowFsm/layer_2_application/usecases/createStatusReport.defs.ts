/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createStatusReport.defs.ts" enhancement="_blank"/>

export const createStatusReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createStatusReport",
    "ports": [
      "StatusReport",
      "Project",
      "ProjectExecutionOverview",
      "ScheduleRiskAssessment"
    ],
    "rulesApplied": [
      "statusReportUsesProjectExecutionData"
    ],
    "functions": [
      {
        "functionName": "createStatusReport",
        "inputTypeName": "CreateStatusReportInput",
        "outputTypeName": "CreateStatusReportOutput",
        "input": [
          {
            "name": "projectProjectId",
            "type": "string",
            "required": true,
            "description": "Obra",
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
          "StatusReport",
          "Project",
          "ProjectExecutionOverview",
          "ScheduleRiskAssessment"
        ],
        "rulesApplied": [
          "statusReportUsesProjectExecutionData"
        ],
        "transactional": true,
        "steps": [
          "Load Project by projectProjectId through the Project port and reject when it does not exist.",
          "Load ProjectExecutionOverview through its port using projectExecutionOverviewProjectId and verify that its projectId matches the route project id.",
          "Load ScheduleRiskAssessment records for the project through its port and use the execution overview and risk assessments as the source for the report.",
          "Apply statusReportUsesProjectExecutionData inline: require the project execution data to be present, derive the communicated risk summary from the available schedule risk indicators, and reject with the rule id in validation details when the required execution data is inconsistent or unavailable.",
          "Create a StatusReport through the StatusReport port with a generated id, status draft, project id, title, content, communicated risks, generated timestamp from ctx.clock, and the supplied generator and optional publisher values.",
          "Return the persisted StatusReport using the declared output shape."
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

export default createStatusReportUsecase;

export const pipeline = [
  {
    "id": "createStatusReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createStatusReport.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createStatusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.d.ts"
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
