{
  "savedAt": "2026-08-18T12:20:04.860Z",
  "agentName": "agentCbDomainEntity",
  "stepId": 10,
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
              "entityId": "ProjectTimeline",
              "title": "",
              "fields": [],
              "valueObjects": [],
              "invariants": [
                "The project identifier must be present and valid.",
                "The timeline must refer to exactly one project and must not combine tasks from different projects.",
                "Derived task and schedule data must remain consistent with the source project's tasks.",
                "Tasks and schedule entries must preserve the planned sequence and must not contain duplicate task identities.",
                "A schedule entry may be present only for a task belonging to the referenced project.",
                "When task dates are available, the planned start must not be later than the planned finish.",
                "Chronological ordering of schedule entries must respect the planned task sequence and applicable date ordering.",
                "Missing task dates must not be represented as fabricated or contradictory dates."
              ],
              "statusEnum": []
            }
          ]
        },
        "questions": [],
        "trace": []
      }
    },
    "status": "completed",
    "stepId": 21,
    "interaction": null,
    "nextSteps": null
  }
}
