/// <mls fileReference="_102046_/l4/buildFlowFsm/workflows/changeOrderLifecycle.defs.ts" enhancement="_blank"/>

import type { Ns4WorkflowArtifactV2 } from '/_102020_/l2/agentNewSolution4/types.js';

export const changeOrderLifecycleWorkflow = {
  "schemaVersion": "2026-08-11-ns4-workflow-v4",
  "moduleName": "buildFlowFsm",
  "workflowId": "changeOrderLifecycle",
  "entityRef": "ChangeOrder",
  "initialState": "submitted",
  "terminalStates": [
    "approved",
    "declined"
  ],
  "states": [
    "submitted",
    "pendingClientApproval",
    "approved",
    "declined"
  ],
  "transitions": [
    {
      "transitionId": "approveChangeOrder",
      "entityRef": "ChangeOrder",
      "fromStates": [
        "pendingClientApproval"
      ],
      "toState": "approved",
      "useRules": [
        "clientApprovableChangeOrder"
      ],
      "useCaseId": "approveChangeOrderDecision"
    },
    {
      "transitionId": "declineChangeOrder",
      "entityRef": "ChangeOrder",
      "fromStates": [
        "submitted"
      ],
      "toState": "declined",
      "useRules": [
        "managerActionableChangeOrder"
      ],
      "useCaseId": "declineChangeOrderDecision"
    },
    {
      "transitionId": "handoffChangeOrderToClient",
      "entityRef": "ChangeOrder",
      "fromStates": [
        "submitted"
      ],
      "toState": "pendingClientApproval",
      "useRules": [
        "managerActionableChangeOrder"
      ],
      "useCaseId": "handoffChangeOrderToClient"
    }
  ],
  "workflowHash": "sha256:37b17277d39a51cd69a60ce03e4daf6535acd313bfdb56fe47499adc765b0429"
} as const satisfies Ns4WorkflowArtifactV2;

export type ChangeOrderLifecycleWorkflowType = typeof changeOrderLifecycleWorkflow;

export default changeOrderLifecycleWorkflow;
