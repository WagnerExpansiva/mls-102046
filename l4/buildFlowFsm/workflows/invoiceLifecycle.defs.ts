/// <mls fileReference="_102046_/l4/buildFlowFsm/workflows/invoiceLifecycle.defs.ts" enhancement="_blank"/>

import type { Ns4WorkflowArtifactV2 } from '/_102020_/l2/agentNewSolution/types.js';

export const invoiceLifecycleWorkflow = {
  "schemaVersion": "2026-08-11-ns4-workflow-v4",
  "moduleName": "buildFlowFsm",
  "workflowId": "invoiceLifecycle",
  "entityRef": "Invoice",
  "initialState": "issued",
  "terminalStates": [],
  "states": [
    "issued",
    "availableToClient"
  ],
  "transitions": [
    {
      "transitionId": "makeInvoiceAvailableToClient",
      "entityRef": "Invoice",
      "fromStates": [
        "issued"
      ],
      "toState": "availableToClient",
      "useRules": [
        "clientVisibleInvoice"
      ],
      "useCaseId": "handoffInvoiceToClient"
    }
  ],
  "workflowHash": "sha256:fc23b66cee48662881a76dec0dfc38e06bc8cab13844f140a5f64bcd41d882f6"
} as const satisfies Ns4WorkflowArtifactV2;

export type InvoiceLifecycleWorkflowType = typeof invoiceLifecycleWorkflow;

export default invoiceLifecycleWorkflow;
