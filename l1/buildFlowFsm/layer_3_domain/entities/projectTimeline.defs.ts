/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.defs.ts" enhancement="_blank"/>

export const projectTimelineDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ProjectTimeline",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ProjectTimeline",
    "title": "Cronograma da obra",
    "fields": [
      {
        "fieldId": "projectId",
        "title": "Identificador da obra",
        "type": "uuid",
        "required": true,
        "description": "Identidade da obra que delimita a projeção derivada do cronograma.",
        "constraints": []
      },
      {
        "fieldId": "workTasks",
        "title": "Tarefas da obra",
        "type": "json",
        "required": false,
        "description": "Lista derivada das tarefas da obra, organizada para exibir sua sequência e seus prazos no cronograma.",
        "constraints": []
      },
      {
        "fieldId": "scheduleEntries",
        "title": "Entradas do cronograma",
        "type": "json",
        "required": false,
        "description": "Entradas derivadas para a visualização sequenciada ou tipo Gantt, incluindo a ordem planejada e as datas disponíveis das tarefas.",
        "constraints": []
      }
    ],
    "valueObjects": [],
    "statusEnum": [],
    "invariants": [
      "The project identifier must be present and valid.",
      "The timeline must refer to exactly one project and must not combine tasks from different projects.",
      "Derived task and schedule data must remain consistent with the source project's tasks.",
      "Tasks and schedule entries must preserve the planned sequence and must not contain duplicate task identities.",
      "A schedule entry may be present only for a task belonging to the referenced project.",
      "When task dates are available, the planned start must not be later than the planned finish.",
      "Chronological ordering of schedule entries must respect the planned task sequence and applicable date ordering.",
      "Missing task dates must not be represented as fabricated or contradictory dates."
    ]
  }
} as const;

export default projectTimelineDomainEntity;

export const pipeline = [
  {
    "id": "projectTimeline__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.defs.ts",
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
