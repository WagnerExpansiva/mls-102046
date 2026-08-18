/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/recordWorkTime.qryLocateFieldWorker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/recordWorkTime.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryLocateFieldWorker (query); Output kind=list; route buildFlowFsm.recordWorkTime.qryLocateFieldWorker.

export interface QryLocateFieldWorkerInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryLocateFieldWorkerOutput {
  platformUserId: string;
}

export const qryLocateFieldWorkerRoute = 'buildFlowFsm.recordWorkTime.qryLocateFieldWorker' as const;
