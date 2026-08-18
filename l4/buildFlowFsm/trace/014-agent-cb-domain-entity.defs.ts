{
  "savedAt": "2026-08-18T12:19:53.062Z",
  "agentName": "agentCbDomainEntity",
  "stepId": 14,
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
              "entityId": "StatusReport",
              "title": "",
              "fields": [],
              "valueObjects": [],
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
              ],
              "statusEnum": []
            }
          ]
        },
        "questions": [],
        "trace": [
          "Derivado dos estados draft/published/withdrawn e das descrições dos campos de geração, publicação e retirada."
        ]
      }
    },
    "status": "completed",
    "stepId": 26,
    "interaction": null,
    "nextSteps": null
  }
}
