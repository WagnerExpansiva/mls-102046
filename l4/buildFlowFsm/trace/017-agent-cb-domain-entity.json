{
  "savedAt": "2026-08-18T12:19:56.443Z",
  "agentName": "agentCbDomainEntity",
  "stepId": 17,
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
              "entityId": "ClientBillingSummary",
              "title": "",
              "fields": [],
              "valueObjects": [],
              "invariants": [
                "The summary must consolidate data for exactly one client and one billable project; the client and project references must be valid and correspond to each other.",
                "All monetary amounts must be non-negative.",
                "The approved change-order amount must equal the sum of the values of the approved change orders referenced by the summary.",
                "The invoiced amount must equal the sum of the amounts of the invoice references consolidated in the summary.",
                "The billable amount must not be less than the approved change-order amount.",
                "The invoiced amount must not exceed the billable amount.",
                "The client-available amount must be non-negative and must not exceed the invoiced amount.",
                "Referenced approved change orders and invoices must belong to the summarized project and must not be counted more than once.",
                "The summary amounts and references must be recalculated or updated atomically so that derived totals remain consistent with their source references."
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
    "stepId": 20,
    "interaction": null,
    "nextSteps": null
  }
}
