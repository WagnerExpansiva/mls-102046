/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.defs.ts" enhancement="_blank"/>

export const scheduleRiskAssessmentDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ScheduleRiskAssessment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ScheduleRiskAssessment",
    "title": "Avaliação de risco de atraso",
    "fields": [
      {
        "fieldId": "projectId",
        "title": "Obra",
        "type": "uuid",
        "required": true,
        "description": "Identidade da obra cujo contexto de execução fundamenta a avaliação derivada de risco.",
        "constraints": []
      },
      {
        "fieldId": "workTaskId",
        "title": "Tarefa",
        "type": "uuid",
        "required": true,
        "description": "Identidade da tarefa não concluída avaliada quanto ao risco de atraso.",
        "constraints": []
      },
      {
        "fieldId": "taskStatus",
        "title": "Status da tarefa",
        "type": "string",
        "required": true,
        "description": "Estado da tarefa considerado na identificação do risco de atraso.",
        "constraints": []
      },
      {
        "fieldId": "dueDate",
        "title": "Prazo da tarefa",
        "type": "date",
        "required": true,
        "description": "Data de prazo da tarefa usada na projeção do risco de atraso.",
        "constraints": []
      },
      {
        "fieldId": "progressPercent",
        "title": "Andamento da tarefa",
        "type": "number",
        "required": false,
        "description": "Percentual de andamento disponível da tarefa no momento da avaliação.",
        "constraints": []
      },
      {
        "fieldId": "riskIndicators",
        "title": "Indicadores de risco",
        "type": "json",
        "required": true,
        "description": "Indicadores derivados de prazo, estado, andamento e contexto de execução que explicam o risco identificado.",
        "constraints": []
      },
      {
        "fieldId": "riskExplanation",
        "title": "Explicação do risco",
        "type": "text",
        "required": true,
        "description": "Síntese profissional dos fatores que tornam a tarefa suscetível a atraso, para consulta na obra e no relatório de status.",
        "constraints": []
      },
      {
        "fieldId": "assessedAt",
        "title": "Data e hora da avaliação",
        "type": "datetime",
        "required": true,
        "description": "Momento em que os dados de execução foram consolidados para gerar esta avaliação derivada.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "projectId and workTaskId must be present and identify the execution context and the assessed task; the task must be not completed when assessed.",
      "dueDate and assessedAt must be present, and assessedAt must represent the consolidation moment for the assessment.",
      "progressPercent, when provided, must be numeric and within 0 to 100 inclusive.",
      "riskIndicators must be present and consistent with the task due date, task status, available progress, and execution context; riskExplanation must accurately synthesize the factors represented by those indicators.",
      "The assessment must identify a credible susceptibility to delay; a task with no supporting delay-risk factors must not receive a risk assessment.",
      "The assessment is derived from the execution data available at assessedAt and must not claim facts or progress unavailable at that moment."
    ]
  }
} as const;

export default scheduleRiskAssessmentDomainEntity;

export const pipeline = [
  {
    "id": "scheduleRiskAssessment__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.defs.ts",
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
