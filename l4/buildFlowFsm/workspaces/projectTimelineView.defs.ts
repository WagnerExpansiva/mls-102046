/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/projectTimelineView.defs.ts" enhancement="_blank"/>

export const projectTimelineViewWorkspace = {
  "workspaceId": "projectTimelineView",
  "title": "Cronograma da obra",
  "actors": [
    "fieldCoordinator"
  ],
  "kind": "landing",
  "entity": "ProjectTimeline",
  "bffCalls": [
    {
      "bffId": "qryProjectTimelineView",
      "kind": "query",
      "uses": [
        {
          "operationId": "inspectProjectTimeline"
        }
      ],
      "input": [
        {
          "name": "projectTimelineProjectId",
          "from": "inspectProjectTimeline.projectTimelineProjectId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectId",
            "from": "inspectProjectTimeline.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "workTasks",
            "from": "inspectProjectTimeline.workTasks",
            "type": "string",
            "required": false
          },
          {
            "name": "scheduleEntries",
            "from": "inspectProjectTimeline.scheduleEntries",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.projectTimelineView.qryProjectTimelineView"
    }
  ],
  "sections": [
    {
      "sectionId": "overview",
      "intent": "Projeção do sequenciamento das tarefas e prazos de uma obra para planejamento, atribuição e acompanhamento de campo.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryProjectTimelineView"
        }
      ]
    }
  ],
  "operationIds": [
    "inspectProjectTimeline"
  ],
  "purpose": "Projeção do sequenciamento das tarefas e prazos de uma obra para planejamento, atribuição e acompanhamento de campo.",
  "presentation": {
    "categoryRef": "dashboardCommandCenter",
    "confidence": 10,
    "classificationNote": "Derived from the projection tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:ea4a8b02"
} as const;

export default projectTimelineViewWorkspace;
