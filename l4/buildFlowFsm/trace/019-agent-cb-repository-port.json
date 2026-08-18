{
  "savedAt": "2026-08-18T12:21:06.289Z",
  "agentName": "agentCbRepositoryPort",
  "stepId": 19,
  "planning": {
    "planId": "cb-gen-port",
    "dependsOn": [
      "cb-domain-fanout"
    ],
    "executionMode": "sequential",
    "executionHost": "client"
  },
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitRepositoryPorts",
      "arguments": {
        "status": "ok",
        "result": {
          "items": [
            {
              "entityId": "ChangeOrderDecision",
              "interfaceName": "IChangeOrderDecisionRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ChangeOrderDecisionId"
                  ],
                  "returns": "ChangeOrderDecision | null",
                  "description": "Retrieve a change order decision by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ChangeOrderDecisionFilter"
                  ],
                  "returns": "ChangeOrderDecision[]",
                  "description": "List change order decisions matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ChangeOrderDecision"
                  ],
                  "returns": "void",
                  "description": "Persist a change order decision aggregate."
                },
                {
                  "name": "listByChangeOrderId",
                  "params": [
                    "changeOrderId: ChangeOrderId"
                  ],
                  "returns": "ChangeOrderDecision[]",
                  "description": "List decisions associated with a change order."
                }
              ]
            },
            {
              "entityId": "ChangeOrder",
              "interfaceName": "IChangeOrderRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ChangeOrderId"
                  ],
                  "returns": "ChangeOrder | null",
                  "description": "Retrieve a change order by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ChangeOrderFilter"
                  ],
                  "returns": "ChangeOrder[]",
                  "description": "List change orders matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ChangeOrder"
                  ],
                  "returns": "void",
                  "description": "Persist a change order aggregate."
                },
                {
                  "name": "listByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "ChangeOrder[]",
                  "description": "List change orders belonging to a project."
                }
              ]
            },
            {
              "entityId": "ClientPortalAccess",
              "interfaceName": "IClientPortalAccessRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ClientPortalAccessId"
                  ],
                  "returns": "ClientPortalAccess | null",
                  "description": "Retrieve client portal access by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ClientPortalAccessFilter"
                  ],
                  "returns": "ClientPortalAccess[]",
                  "description": "List client portal access records matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ClientPortalAccess"
                  ],
                  "returns": "void",
                  "description": "Persist a client portal access aggregate."
                },
                {
                  "name": "getByClientId",
                  "params": [
                    "clientId: ClientId"
                  ],
                  "returns": "ClientPortalAccess | null",
                  "description": "Retrieve portal access for a client."
                }
              ]
            },
            {
              "entityId": "Client",
              "interfaceName": "IClientRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ClientId"
                  ],
                  "returns": "Client | null",
                  "description": "Retrieve a client by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ClientFilter"
                  ],
                  "returns": "Client[]",
                  "description": "List clients matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: Client"
                  ],
                  "returns": "void",
                  "description": "Persist a client aggregate."
                },
                {
                  "name": "findByName",
                  "params": [
                    "name: ClientName"
                  ],
                  "returns": "Client | null",
                  "description": "Find a client by its domain name."
                }
              ]
            },
            {
              "entityId": "FieldCoordinator",
              "interfaceName": "IFieldCoordinatorRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: FieldCoordinatorId"
                  ],
                  "returns": "FieldCoordinator | null",
                  "description": "Retrieve a field coordinator by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: FieldCoordinatorFilter"
                  ],
                  "returns": "FieldCoordinator[]",
                  "description": "List field coordinators matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: FieldCoordinator"
                  ],
                  "returns": "void",
                  "description": "Persist a field coordinator aggregate."
                },
                {
                  "name": "getByPlatformUserId",
                  "params": [
                    "platformUserId: PlatformUserId"
                  ],
                  "returns": "FieldCoordinator | null",
                  "description": "Retrieve the field coordinator associated with a platform user."
                }
              ]
            },
            {
              "entityId": "FieldWorker",
              "interfaceName": "IFieldWorkerRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: FieldWorkerId"
                  ],
                  "returns": "FieldWorker | null",
                  "description": "Retrieve a field worker by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: FieldWorkerFilter"
                  ],
                  "returns": "FieldWorker[]",
                  "description": "List field workers matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: FieldWorker"
                  ],
                  "returns": "void",
                  "description": "Persist a field worker aggregate."
                },
                {
                  "name": "getByPlatformUserId",
                  "params": [
                    "platformUserId: PlatformUserId"
                  ],
                  "returns": "FieldWorker | null",
                  "description": "Retrieve the field worker associated with a platform user."
                }
              ]
            },
            {
              "entityId": "InventoryBalance",
              "interfaceName": "IInventoryBalanceRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: InventoryBalanceId"
                  ],
                  "returns": "InventoryBalance | null",
                  "description": "Retrieve an inventory balance by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: InventoryBalanceFilter"
                  ],
                  "returns": "InventoryBalance[]",
                  "description": "List inventory balances matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: InventoryBalance"
                  ],
                  "returns": "void",
                  "description": "Persist an inventory balance aggregate."
                },
                {
                  "name": "getByItemId",
                  "params": [
                    "inventoryItemId: InventoryItemId"
                  ],
                  "returns": "InventoryBalance | null",
                  "description": "Retrieve the balance for an inventory item."
                }
              ]
            },
            {
              "entityId": "InventoryItem",
              "interfaceName": "IInventoryItemRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: InventoryItemId"
                  ],
                  "returns": "InventoryItem | null",
                  "description": "Retrieve an inventory item by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: InventoryItemFilter"
                  ],
                  "returns": "InventoryItem[]",
                  "description": "List inventory items matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: InventoryItem"
                  ],
                  "returns": "void",
                  "description": "Persist an inventory item aggregate."
                },
                {
                  "name": "findBySku",
                  "params": [
                    "sku: InventoryItemSku"
                  ],
                  "returns": "InventoryItem | null",
                  "description": "Find an inventory item by its domain SKU."
                }
              ]
            },
            {
              "entityId": "InvoiceChangeOrder",
              "interfaceName": "IInvoiceChangeOrderRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: InvoiceChangeOrderId"
                  ],
                  "returns": "InvoiceChangeOrder | null",
                  "description": "Retrieve an invoice change order by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: InvoiceChangeOrderFilter"
                  ],
                  "returns": "InvoiceChangeOrder[]",
                  "description": "List invoice change orders matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: InvoiceChangeOrder"
                  ],
                  "returns": "void",
                  "description": "Persist an invoice change order aggregate."
                },
                {
                  "name": "listByInvoiceId",
                  "params": [
                    "invoiceId: InvoiceId"
                  ],
                  "returns": "InvoiceChangeOrder[]",
                  "description": "List change orders associated with an invoice."
                }
              ]
            },
            {
              "entityId": "Invoice",
              "interfaceName": "IInvoiceRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: InvoiceId"
                  ],
                  "returns": "Invoice | null",
                  "description": "Retrieve an invoice by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: InvoiceFilter"
                  ],
                  "returns": "Invoice[]",
                  "description": "List invoices matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: Invoice"
                  ],
                  "returns": "void",
                  "description": "Persist an invoice aggregate."
                },
                {
                  "name": "listByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "Invoice[]",
                  "description": "List invoices belonging to a project."
                }
              ]
            },
            {
              "entityId": "MaterialUsage",
              "interfaceName": "IMaterialUsageRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: MaterialUsageId"
                  ],
                  "returns": "MaterialUsage | null",
                  "description": "Retrieve material usage by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: MaterialUsageFilter"
                  ],
                  "returns": "MaterialUsage[]",
                  "description": "List material usage records matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: MaterialUsage"
                  ],
                  "returns": "void",
                  "description": "Persist a material usage aggregate."
                },
                {
                  "name": "listByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "MaterialUsage[]",
                  "description": "List material usage records for a project."
                }
              ]
            },
            {
              "entityId": "PlatformUser",
              "interfaceName": "IPlatformUserRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: PlatformUserId"
                  ],
                  "returns": "PlatformUser | null",
                  "description": "Retrieve a platform user by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: PlatformUserFilter"
                  ],
                  "returns": "PlatformUser[]",
                  "description": "List platform users matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: PlatformUser"
                  ],
                  "returns": "void",
                  "description": "Persist a platform user aggregate."
                },
                {
                  "name": "findByEmail",
                  "params": [
                    "email: EmailAddress"
                  ],
                  "returns": "PlatformUser | null",
                  "description": "Find a platform user by email address."
                }
              ]
            },
            {
              "entityId": "ProjectCoordinationAssignment",
              "interfaceName": "IProjectCoordinationAssignmentRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ProjectCoordinationAssignmentId"
                  ],
                  "returns": "ProjectCoordinationAssignment | null",
                  "description": "Retrieve a project coordination assignment by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ProjectCoordinationAssignmentFilter"
                  ],
                  "returns": "ProjectCoordinationAssignment[]",
                  "description": "List assignments matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ProjectCoordinationAssignment"
                  ],
                  "returns": "void",
                  "description": "Persist a project coordination assignment aggregate."
                },
                {
                  "name": "listByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "ProjectCoordinationAssignment[]",
                  "description": "List coordination assignments for a project."
                }
              ]
            },
            {
              "entityId": "Project",
              "interfaceName": "IProjectRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ProjectId"
                  ],
                  "returns": "Project | null",
                  "description": "Retrieve a project by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ProjectFilter"
                  ],
                  "returns": "Project[]",
                  "description": "List projects matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: Project"
                  ],
                  "returns": "void",
                  "description": "Persist a project aggregate."
                },
                {
                  "name": "listByClientId",
                  "params": [
                    "clientId: ClientId"
                  ],
                  "returns": "Project[]",
                  "description": "List projects belonging to a client."
                }
              ]
            },
            {
              "entityId": "StatusReport",
              "interfaceName": "IStatusReportRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: StatusReportId"
                  ],
                  "returns": "StatusReport | null",
                  "description": "Retrieve a status report by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: StatusReportFilter"
                  ],
                  "returns": "StatusReport[]",
                  "description": "List status reports matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: StatusReport"
                  ],
                  "returns": "void",
                  "description": "Persist a status report aggregate."
                },
                {
                  "name": "listByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "StatusReport[]",
                  "description": "List status reports for a project."
                }
              ]
            },
            {
              "entityId": "TimeLog",
              "interfaceName": "ITimeLogRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: TimeLogId"
                  ],
                  "returns": "TimeLog | null",
                  "description": "Retrieve a time log by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: TimeLogFilter"
                  ],
                  "returns": "TimeLog[]",
                  "description": "List time logs matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: TimeLog"
                  ],
                  "returns": "void",
                  "description": "Persist a time log aggregate."
                },
                {
                  "name": "listByFieldWorkerId",
                  "params": [
                    "fieldWorkerId: FieldWorkerId"
                  ],
                  "returns": "TimeLog[]",
                  "description": "List time logs recorded by a field worker."
                }
              ]
            },
            {
              "entityId": "WorkTask",
              "interfaceName": "IWorkTaskRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: WorkTaskId"
                  ],
                  "returns": "WorkTask | null",
                  "description": "Retrieve a work task by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: WorkTaskFilter"
                  ],
                  "returns": "WorkTask[]",
                  "description": "List work tasks matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: WorkTask"
                  ],
                  "returns": "void",
                  "description": "Persist a work task aggregate."
                },
                {
                  "name": "listByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "WorkTask[]",
                  "description": "List work tasks for a project."
                }
              ]
            },
            {
              "entityId": "ClientBillingSummary",
              "interfaceName": "IClientBillingSummaryRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ClientBillingSummaryId"
                  ],
                  "returns": "ClientBillingSummary | null",
                  "description": "Retrieve a client billing summary by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ClientBillingSummaryFilter"
                  ],
                  "returns": "ClientBillingSummary[]",
                  "description": "List client billing summaries matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ClientBillingSummary"
                  ],
                  "returns": "void",
                  "description": "Persist a client billing summary aggregate."
                },
                {
                  "name": "getByClientId",
                  "params": [
                    "clientId: ClientId"
                  ],
                  "returns": "ClientBillingSummary | null",
                  "description": "Retrieve the billing summary for a client."
                }
              ]
            },
            {
              "entityId": "ProjectDashboard",
              "interfaceName": "IProjectDashboardRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ProjectDashboardId"
                  ],
                  "returns": "ProjectDashboard | null",
                  "description": "Retrieve a project dashboard by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ProjectDashboardFilter"
                  ],
                  "returns": "ProjectDashboard[]",
                  "description": "List project dashboards matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ProjectDashboard"
                  ],
                  "returns": "void",
                  "description": "Persist a project dashboard aggregate."
                },
                {
                  "name": "getByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "ProjectDashboard | null",
                  "description": "Retrieve the dashboard for a project."
                }
              ]
            },
            {
              "entityId": "ProjectExecutionOverview",
              "interfaceName": "IProjectExecutionOverviewRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ProjectExecutionOverviewId"
                  ],
                  "returns": "ProjectExecutionOverview | null",
                  "description": "Retrieve a project execution overview by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ProjectExecutionOverviewFilter"
                  ],
                  "returns": "ProjectExecutionOverview[]",
                  "description": "List project execution overviews matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ProjectExecutionOverview"
                  ],
                  "returns": "void",
                  "description": "Persist a project execution overview aggregate."
                },
                {
                  "name": "getByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "ProjectExecutionOverview | null",
                  "description": "Retrieve the execution overview for a project."
                }
              ]
            },
            {
              "entityId": "ProjectTimeline",
              "interfaceName": "IProjectTimelineRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ProjectTimelineId"
                  ],
                  "returns": "ProjectTimeline | null",
                  "description": "Retrieve a project timeline by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ProjectTimelineFilter"
                  ],
                  "returns": "ProjectTimeline[]",
                  "description": "List project timelines matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ProjectTimeline"
                  ],
                  "returns": "void",
                  "description": "Persist a project timeline aggregate."
                },
                {
                  "name": "getByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "ProjectTimeline | null",
                  "description": "Retrieve the timeline for a project."
                }
              ]
            },
            {
              "entityId": "ScheduleRiskAssessment",
              "interfaceName": "IScheduleRiskAssessmentRepository",
              "methods": [
                {
                  "name": "getById",
                  "params": [
                    "id: ScheduleRiskAssessmentId"
                  ],
                  "returns": "ScheduleRiskAssessment | null",
                  "description": "Retrieve a schedule risk assessment by its domain identifier."
                },
                {
                  "name": "list",
                  "params": [
                    "filter: ScheduleRiskAssessmentFilter"
                  ],
                  "returns": "ScheduleRiskAssessment[]",
                  "description": "List schedule risk assessments matching a domain filter."
                },
                {
                  "name": "save",
                  "params": [
                    "aggregate: ScheduleRiskAssessment"
                  ],
                  "returns": "void",
                  "description": "Persist a schedule risk assessment aggregate."
                },
                {
                  "name": "listByProjectId",
                  "params": [
                    "projectId: ProjectId"
                  ],
                  "returns": "ScheduleRiskAssessment[]",
                  "description": "List schedule risk assessments for a project."
                }
              ]
            }
          ]
        },
        "questions": [],
        "trace": [
          "Generated one aggregate repository port per supplied aggregate.",
          "No append-only event ports supplied."
        ]
      }
    },
    "status": "completed",
    "stepId": 9,
    "interaction": null,
    "nextSteps": null
  }
}
