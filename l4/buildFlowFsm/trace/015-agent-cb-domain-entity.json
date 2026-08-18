{
  "savedAt": "2026-08-18T12:19:52.037Z",
  "agentName": "agentCbDomainEntity",
  "stepId": 15,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitDomainEntities",
      "arguments": {
        "status": "ok",
        "result": {
          "items": [
            {
              "entityId": "WorkTask",
              "title": "",
              "fields": [],
              "valueObjects": [],
              "invariants": [
                "workTaskId must be unique and remain stable throughout the task lifecycle.",
                "Valid status transitions are: planned → inProgress or cancelled; inProgress → completed or cancelled; completed and cancelled are terminal states.",
                "A task may be marked completed only from inProgress.",
                "progressUpdate is required when status is inProgress or completed and must describe the latest execution progress; it is not required for planned or cancelled tasks.",
                "dueDate must be on or after the task planning/creation date.",
                "A cancelled task must not transition back to planned, inProgress, or completed.",
                "A completed task must not transition back to planned, inProgress, or cancelled."
              ],
              "statusEnum": []
            }
          ]
        },
        "questions": [],
        "trace": [
          "Derived lifecycle and conditional rules from WorkTask status, dueDate, and progressUpdate descriptions."
        ]
      }
    },
    "status": "completed",
    "stepId": 25,
    "interaction": null,
    "nextSteps": null
  }
}
