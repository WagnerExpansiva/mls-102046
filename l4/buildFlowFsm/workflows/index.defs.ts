/// <mls fileReference="_102046_/l4/buildFlowFsm/workflows/index.defs.ts" enhancement="_blank"/>

import type { Ns4WorkflowIndexArtifactV3 } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmWorkflowIndex = {
  "schemaVersion": "2026-08-12-ns4-workflow-index-v5",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "workflows": [
    {
      "workflowId": "changeOrderLifecycle",
      "entityRef": "ChangeOrder",
      "workflowHash": "sha256:37b17277d39a51cd69a60ce03e4daf6535acd313bfdb56fe47499adc765b0429",
      "artifactPath": "l4/buildFlowFsm/workflows/changeOrderLifecycle.defs.ts"
    },
    {
      "workflowId": "invoiceLifecycle",
      "entityRef": "Invoice",
      "workflowHash": "sha256:fc23b66cee48662881a76dec0dfc38e06bc8cab13844f140a5f64bcd41d882f6",
      "artifactPath": "l4/buildFlowFsm/workflows/invoiceLifecycle.defs.ts"
    },
    {
      "workflowId": "statusReportLifecycle",
      "entityRef": "StatusReport",
      "workflowHash": "sha256:35b38401018c144fffc4bce4220b6a29fd6cb75ae69749c578c1f16d09f28842",
      "artifactPath": "l4/buildFlowFsm/workflows/statusReportLifecycle.defs.ts"
    }
  ],
  "sourceHashes": {
    "journeys": [
      {
        "journeyId": "reviewProjectPortfolio",
        "businessHash": "sha256:891adc546d2653aa4f33541c209547512fbe229f94299fc956edf1277c3fb222"
      },
      {
        "journeyId": "assignWorkTask",
        "businessHash": "sha256:cdbcb3a3ad03be4ad68ccf7b47b3f2b347ad66e0ff5ba03fff10b36888eab801"
      },
      {
        "journeyId": "updateWorkTaskProgress",
        "businessHash": "sha256:48192c1ca691362a95a952f0318683b326e4963ef6c4f184eda6f987975eb7fe"
      },
      {
        "journeyId": "recordWorkTime",
        "businessHash": "sha256:44b320707bc484ad97793f6e6d7c46c78917e142a326b806810007d379b98ad5"
      },
      {
        "journeyId": "recordProjectMaterialUsage",
        "businessHash": "sha256:6a1aff3069802a281c21a0e2d32f888aeaa83d8657c97de3bc2afb4715dd6b28"
      },
      {
        "journeyId": "submitChangeOrder",
        "businessHash": "sha256:7a3a3d284888ad73cf1bb49fb05556adeeec816694b299a7e7af2d4930a22b0e"
      },
      {
        "journeyId": "forwardChangeOrderForClientApproval",
        "businessHash": "sha256:c0a982b3347ed3fc7556c87549ed804d96411db8cb9511615578d5a71933d5cf"
      },
      {
        "journeyId": "approveChangeOrder",
        "businessHash": "sha256:fdb7fad37b2aef98b3454d6b76429aade62571518fa4c1cdce697cfdfab79b2a"
      },
      {
        "journeyId": "declineChangeOrder",
        "businessHash": "sha256:4eebbd9234b3e8986c1bb68ffc58d447a046d2e56dd1539d618d043c4592f102"
      },
      {
        "journeyId": "issueProjectInvoice",
        "businessHash": "sha256:8885b209892bab2b2cfb2dc50b3f17b24938dab59a6afcb19ca4b40b233ddfc1"
      },
      {
        "journeyId": "generateAndPublishProjectStatusReport",
        "businessHash": "sha256:c8d871cd8eeebd637bdcc544ddec3c72b243892f213a611e2ba0097521b2ab78"
      },
      {
        "journeyId": "consultClientProjectUpdates",
        "businessHash": "sha256:a433187c999cb8a3b002bac545bbb5063c815cbe624d65c9ff6ecc214bf95f45"
      },
      {
        "journeyId": "monitorDailyProjectRecords",
        "businessHash": "sha256:d30f1bb4a9e2b06ee2b5b83316e6f2ea789c6c7c4634b9cbdc720b55dbdf49e8"
      },
      {
        "journeyId": "consultApprovedProjectChangeOrders",
        "businessHash": "sha256:87f34d1d637c9ce21c57f8bdc9272519d900fcde870dbb7fd4d7021732c6a613"
      }
    ],
    "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
    "rulesHash": "sha256:bca2794185272cf67b9c4fc198aa6cb88cd6ffa37c4c55d52b07702e5acadd99"
  },
  "realizationHash": "sha256:98b07b40141ea12f3be5f5805b591d669547b3db8a3225c2d718f4388b78be93",
  "generatedAt": "2026-08-17T19:33:13.791Z",
  "systemDecisions": [
    {
      "decisionId": "shrinkInventoryBalanceDepleted",
      "stage": "e7",
      "question": "Como o estado inalcançável InventoryBalance.depleted deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:InventoryBalance.depleted",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance InventoryBalance.depleted antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkInventoryBalanceRetired",
      "stage": "e7",
      "question": "Como o estado inalcançável InventoryBalance.retired deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:InventoryBalance.retired",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance InventoryBalance.retired antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "omitInventoryBalanceWorkflow",
      "stage": "e7",
      "question": "InventoryBalance está sem fluxo de estados operado nesta versão.",
      "chosen": "omitWorkflow",
      "alternatives": [
        "omitWorkflow",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.missing:InventoryBalance",
      "changeHint": "Adicione no E2 uma jornada que opere uma transição de InventoryBalance; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkInvoiceCancelled",
      "stage": "e7",
      "question": "Como o estado inalcançável Invoice.cancelled deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:Invoice.cancelled",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance Invoice.cancelled antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkProjectActive",
      "stage": "e7",
      "question": "Como o estado inalcançável Project.active deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:Project.active",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance Project.active antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkProjectCompleted",
      "stage": "e7",
      "question": "Como o estado inalcançável Project.completed deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:Project.completed",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance Project.completed antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkProjectCancelled",
      "stage": "e7",
      "question": "Como o estado inalcançável Project.cancelled deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:Project.cancelled",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance Project.cancelled antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "dormantProjectActiveProject",
      "stage": "e7",
      "question": "O critério activeProject não tem efeito nesta versão — nenhum estado que o satisfaz é alcançado.",
      "chosen": "leavePredicateDormant",
      "alternatives": [
        "leavePredicateDormant",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.predicate.dead:Project.activeProject",
      "changeHint": "Adicione no E2 uma jornada que alcance um dos estados active; a regra E5 e a ontologia E4 permanecem inalteradas."
    },
    {
      "decisionId": "omitProjectWorkflow",
      "stage": "e7",
      "question": "Project está sem fluxo de estados operado nesta versão.",
      "chosen": "omitWorkflow",
      "alternatives": [
        "omitWorkflow",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.missing:Project",
      "changeHint": "Adicione no E2 uma jornada que opere uma transição de Project; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkStatusReportWithdrawn",
      "stage": "e7",
      "question": "Como o estado inalcançável StatusReport.withdrawn deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:StatusReport.withdrawn",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance StatusReport.withdrawn antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkWorkTaskInProgress",
      "stage": "e7",
      "question": "Como o estado inalcançável WorkTask.inProgress deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:WorkTask.inProgress",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance WorkTask.inProgress antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkWorkTaskCompleted",
      "stage": "e7",
      "question": "Como o estado inalcançável WorkTask.completed deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:WorkTask.completed",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance WorkTask.completed antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "shrinkWorkTaskCancelled",
      "stage": "e7",
      "question": "Como o estado inalcançável WorkTask.cancelled deve ser tratado?",
      "chosen": "shrinkLifecycle",
      "alternatives": [
        "shrinkLifecycle",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.state.unreachable:WorkTask.cancelled",
      "changeHint": "Adicione uma jornada/operação explícita no E2 que alcance WorkTask.cancelled antes de restaurá-lo no workflow compilado; a ontologia E4 permanece inalterada."
    },
    {
      "decisionId": "omitWorkTaskWorkflow",
      "stage": "e7",
      "question": "WorkTask está sem fluxo de estados operado nesta versão.",
      "chosen": "omitWorkflow",
      "alternatives": [
        "omitWorkflow",
        "operateState"
      ],
      "decidedBy": "system",
      "findingRef": "workflow.missing:WorkTask",
      "changeHint": "Adicione no E2 uma jornada que opere uma transição de WorkTask; a ontologia E4 permanece inalterada."
    }
  ]
} as const satisfies Ns4WorkflowIndexArtifactV3;

export type BuildFlowFsmWorkflowIndexType = typeof buildFlowFsmWorkflowIndex;

export default buildFlowFsmWorkflowIndex;
