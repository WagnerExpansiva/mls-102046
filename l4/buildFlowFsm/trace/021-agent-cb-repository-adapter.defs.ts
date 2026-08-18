{
  "savedAt": "2026-08-18T12:23:49.551Z",
  "agentName": "agentCbRepositoryAdapter",
  "stepId": 21,
  "planning": {
    "planId": "cb-gen-adapter",
    "dependsOn": [
      "cb-gen-table"
    ],
    "executionMode": "sequential",
    "executionHost": "client"
  },
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitRepositoryAdapters",
      "arguments": {
        "status": "ok",
        "result": {
          "items": [
            {
              "entityId": "ChangeOrderDecision",
              "className": "ChangeOrderDecisionRepositoryAdapter",
              "portRef": "IChangeOrderDecisionRepository",
              "tableRef": "change_order_decisions",
              "mdmReads": [],
              "notes": [
                "Maps change_order_decision_id and decision as snake_case columns; stores change_order, made_by_platform_user, and decided_at in details JSONB."
              ]
            },
            {
              "entityId": "ChangeOrder",
              "className": "ChangeOrderRepositoryAdapter",
              "portRef": "IChangeOrderRepository",
              "tableRef": "change_orders",
              "mdmReads": [],
              "notes": [
                "Maps change_order_id and status as snake_case columns; stores client_ref, project_ref, description, scope_impact, schedule_impact, change_amount, submitted_at, and forwarded_for_client_approval_at in details JSONB."
              ]
            },
            {
              "entityId": "ClientPortalAccess",
              "className": "ClientPortalAccessRepositoryAdapter",
              "portRef": "IClientPortalAccessRepository",
              "tableRef": "client_portal_accesses",
              "mdmReads": [],
              "notes": [
                "Maps client_portal_access_id, client_id, platform_user_id, and status as snake_case columns; no details fields."
              ]
            },
            {
              "entityId": "Client",
              "className": "ClientRepositoryAdapter",
              "portRef": "IClientRepository",
              "tableRef": "clients",
              "mdmReads": [],
              "notes": [
                "Maps client_id as a snake_case column; stores client_name, contact_email, and contact_phone in details JSONB."
              ]
            },
            {
              "entityId": "FieldCoordinator",
              "className": "FieldCoordinatorRepositoryAdapter",
              "portRef": "IFieldCoordinatorRepository",
              "tableRef": "field_coordinators",
              "mdmReads": [],
              "notes": [
                "Uses an adapter row with no real domain columns; stores platform_user_ref in details JSONB."
              ]
            },
            {
              "entityId": "FieldWorker",
              "className": "FieldWorkerRepositoryAdapter",
              "portRef": "IFieldWorkerRepository",
              "tableRef": "field_workers",
              "mdmReads": [],
              "notes": [
                "Maps platform_user_id as a snake_case column; no details fields."
              ]
            },
            {
              "entityId": "InventoryBalance",
              "className": "InventoryBalanceRepositoryAdapter",
              "portRef": "IInventoryBalanceRepository",
              "tableRef": "inventory_balances",
              "mdmReads": [],
              "notes": [
                "Maps inventory_balance_id, inventory_item_id, and status as snake_case columns; stores physical_quantity and applicable_unit_cost in details JSONB."
              ]
            },
            {
              "entityId": "InventoryItem",
              "className": "InventoryItemRepositoryAdapter",
              "portRef": "IInventoryItemRepository",
              "tableRef": "inventory_items",
              "mdmReads": [],
              "notes": [
                "Maps inventory_item_id and status as snake_case columns; stores name, description, unit_of_measure, and reference_unit_cost in details JSONB."
              ]
            },
            {
              "entityId": "InvoiceChangeOrder",
              "className": "InvoiceChangeOrderRepositoryAdapter",
              "portRef": "IInvoiceChangeOrderRepository",
              "tableRef": "invoice_change_orders",
              "mdmReads": [],
              "notes": [
                "Maps invoice_change_order_id, invoice_id, and change_order_id as snake_case columns; stores billed_amount in details JSONB."
              ]
            },
            {
              "entityId": "Invoice",
              "className": "InvoiceRepositoryAdapter",
              "portRef": "IInvoiceRepository",
              "tableRef": "invoices",
              "mdmReads": [],
              "notes": [
                "Maps invoice_id, client_id, project_id, and status as snake_case columns; stores commercial_reference and amount in details JSONB."
              ]
            },
            {
              "entityId": "MaterialUsage",
              "className": "MaterialUsageRepositoryAdapter",
              "portRef": "IMaterialUsageRepository",
              "tableRef": "material_usages",
              "mdmReads": [],
              "notes": [
                "Maps material_usage_id, status, project_id, inventory_item_id, and inventory_balance_id as snake_case columns; stores quantity, usage_description, consumed_on, and unit_cost_basis in details JSONB."
              ]
            },
            {
              "entityId": "PlatformUser",
              "className": "PlatformUserRepositoryAdapter",
              "portRef": "IPlatformUserRepository",
              "tableRef": "platform_users",
              "mdmReads": [],
              "notes": [
                "Maps platform_user_id as a snake_case column; no details fields."
              ]
            },
            {
              "entityId": "ProjectCoordinationAssignment",
              "className": "ProjectCoordinationAssignmentRepositoryAdapter",
              "portRef": "IProjectCoordinationAssignmentRepository",
              "tableRef": "project_coordination_assignments",
              "mdmReads": [],
              "notes": [
                "Maps project_coordination_assignment_id, project_id, field_coordinator_id, and status as snake_case columns; no details fields."
              ]
            },
            {
              "entityId": "Project",
              "className": "ProjectRepositoryAdapter",
              "portRef": "IProjectRepository",
              "tableRef": "projects",
              "mdmReads": [],
              "notes": [
                "Maps project_id, client_id, and status as snake_case columns; stores name, address, authorized_budget, planned_start_date, and planned_end_date in details JSONB."
              ]
            },
            {
              "entityId": "StatusReport",
              "className": "StatusReportRepositoryAdapter",
              "portRef": "IStatusReportRepository",
              "tableRef": "status_reports",
              "mdmReads": [],
              "notes": [
                "Maps status_report_id, project_id, status, generated_by_user_id, and published_by_user_id as snake_case columns; stores title, content, communicated_risks, generated_at, published_at, and withdrawn_at in details JSONB."
              ]
            },
            {
              "entityId": "TimeLog",
              "className": "TimeLogRepositoryAdapter",
              "portRef": "ITimeLogRepository",
              "tableRef": "time_logs",
              "mdmReads": [],
              "notes": [
                "Maps time_log_id, status, work_task_id, and field_worker_id as snake_case columns; stores work_date, hours_worked, and hourly_labor_cost in details JSONB."
              ]
            },
            {
              "entityId": "WorkTask",
              "className": "WorkTaskRepositoryAdapter",
              "portRef": "IWorkTaskRepository",
              "tableRef": "work_tasks",
              "mdmReads": [],
              "notes": [
                "Maps work_task_id, project_id, assigned_field_worker_id, and status as snake_case columns; stores description, due_date, and progress_update in details JSONB."
              ]
            },
            {
              "entityId": "ClientBillingSummary",
              "className": "ClientBillingSummaryRepositoryAdapter",
              "portRef": "IClientBillingSummaryRepository",
              "tableRef": "client_billing_summaries",
              "mdmReads": [],
              "notes": [
                "Maps client_id and project_id as snake_case columns; stores approved_change_order_references, invoice_references, approved_change_order_amount, billable_amount, invoiced_amount, and client_available_amount in details JSONB."
              ]
            },
            {
              "entityId": "ProjectDashboard",
              "className": "ProjectDashboardRepositoryAdapter",
              "portRef": "IProjectDashboardRepository",
              "tableRef": "project_dashboards",
              "mdmReads": [],
              "notes": [
                "Uses an adapter row with no real domain columns; stores active_projects, active_project_count, total_budget, total_actual_cost, budget_variance, cost_attention_projects, and upcoming_tasks in details JSONB."
              ]
            },
            {
              "entityId": "ProjectExecutionOverview",
              "className": "ProjectExecutionOverviewRepositoryAdapter",
              "portRef": "IProjectExecutionOverviewRepository",
              "tableRef": "project_execution_overviews",
              "mdmReads": [],
              "notes": [
                "Maps project_id as a snake_case column; stores project_name, project_status, work_task_ids, task_summary, upcoming_commitments, time_log_ids, total_logged_hours, material_usage_ids, material_usage_summary, actual_labor_cost, actual_material_cost, actual_cost, budget_amount, cost_variance, change_order_ids, change_order_impact_summary, and calculated_at in details JSONB."
              ]
            },
            {
              "entityId": "ProjectTimeline",
              "className": "ProjectTimelineRepositoryAdapter",
              "portRef": "IProjectTimelineRepository",
              "tableRef": "project_timelines",
              "mdmReads": [],
              "notes": [
                "Maps project_id as a snake_case column; stores work_tasks and schedule_entries in details JSONB."
              ]
            },
            {
              "entityId": "ScheduleRiskAssessment",
              "className": "ScheduleRiskAssessmentRepositoryAdapter",
              "portRef": "IScheduleRiskAssessmentRepository",
              "tableRef": "schedule_risk_assessments",
              "mdmReads": [],
              "notes": [
                "Maps project_id and work_task_id as snake_case columns; stores task_status, due_date, progress_percent, risk_indicators, risk_explanation, and assessed_at in details JSONB."
              ]
            }
          ]
        },
        "questions": [],
        "trace": [
          "21 aggregate repository adapters registered; append-only event adapter list is empty.",
          "No mdmRefs were declared, so no ctx.mdm reads are required."
        ]
      }
    },
    "status": "completed",
    "stepId": 9,
    "interaction": null,
    "nextSteps": null
  }
}
