/// <mls fileReference="_102046_/l4/buildFlowFsm/workflows/statusReportLifecycle.defs.ts" enhancement="_blank"/>

import type { Ns4WorkflowArtifactV2 } from '/_102020_/l2/agentNewSolution4/types.js';

export const statusReportLifecycleWorkflow = {
  "schemaVersion": "2026-08-11-ns4-workflow-v4",
  "moduleName": "buildFlowFsm",
  "workflowId": "statusReportLifecycle",
  "entityRef": "StatusReport",
  "initialState": "draft",
  "terminalStates": [],
  "states": [
    "draft",
    "published"
  ],
  "transitions": [
    {
      "transitionId": "publishStatusReport",
      "entityRef": "StatusReport",
      "fromStates": [
        "draft"
      ],
      "toState": "published",
      "useRules": [
        "statusReportUsesProjectExecutionData"
      ],
      "useCaseId": "publishStatusReport"
    }
  ],
  "workflowHash": "sha256:35b38401018c144fffc4bce4220b6a29fd6cb75ae69749c578c1f16d09f28842"
} as const satisfies Ns4WorkflowArtifactV2;

export type StatusReportLifecycleWorkflowType = typeof statusReportLifecycleWorkflow;

export default statusReportLifecycleWorkflow;
