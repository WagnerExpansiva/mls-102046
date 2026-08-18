/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/seeds.ts" enhancement="_blank"/>

// Deterministic initial data for buildFlowFsm. Scenario planned by agentCbSeeds; rows and ids compiled locally.
// TableSeedRows exports are discovered by shape and merged by the persistence registry.

/* <agentCbSeedsPlan>
{
  "version": 1,
  "moduleName": "buildFlowFsm",
  "language": "en",
  "plan": {
    "summary": "Three status reports for the existing Alpha, Beta, and Gamma projects, covering draft, published, and withdrawn states.",
    "localTables": [
      {
        "tableId": "ChangeOrder",
        "rows": [
          {
            "key": "change-order-alpha-pending",
            "columns": [
              {
                "name": "change_order_id",
                "value": "change-order-alpha-pending"
              },
              {
                "name": "status",
                "value": "pendingClientApproval"
              }
            ],
            "details": [
              {
                "name": "clientRef",
                "value": {
                  "ref": "local:Client.client-alpha"
                }
              },
              {
                "name": "projectRef",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              },
              {
                "name": "description",
                "value": "Adequação do quadro elétrico após revisão do escopo"
              },
              {
                "name": "scopeImpact",
                "value": "Substituição de disjuntores e reorganização do quadro principal"
              },
              {
                "name": "scheduleImpact",
                "value": "Acrescenta dois dias úteis ao planejamento"
              },
              {
                "name": "changeAmount",
                "value": 1850
              },
              {
                "name": "submittedAt",
                "value": "2026-07-01T09:00:00.000Z"
              },
              {
                "name": "forwardedForClientApprovalAt",
                "value": "2026-07-01T11:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "change-order-beta-approved",
            "columns": [
              {
                "name": "change_order_id",
                "value": "change-order-beta-approved"
              },
              {
                "name": "status",
                "value": "approved"
              }
            ],
            "details": [
              {
                "name": "clientRef",
                "value": {
                  "ref": "local:Client.client-beta"
                }
              },
              {
                "name": "projectRef",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "description",
                "value": "Inclusão de ponto de inspeção na rede hidráulica"
              },
              {
                "name": "scopeImpact",
                "value": "Adiciona registro de inspeção e acesso técnico"
              },
              {
                "name": "scheduleImpact",
                "value": "Sem impacto relevante no prazo"
              },
              {
                "name": "changeAmount",
                "value": 640
              },
              {
                "name": "submittedAt",
                "value": "2026-07-02T08:30:00.000Z"
              },
              {
                "name": "forwardedForClientApprovalAt",
                "value": "2026-07-02T10:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "change-order-gamma-declined",
            "columns": [
              {
                "name": "change_order_id",
                "value": "change-order-gamma-declined"
              },
              {
                "name": "status",
                "value": "declined"
              }
            ],
            "details": [
              {
                "name": "clientRef",
                "value": {
                  "ref": "local:Client.client-gamma"
                }
              },
              {
                "name": "projectRef",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              },
              {
                "name": "description",
                "value": "Instalação de luminárias decorativas adicionais"
              },
              {
                "name": "scopeImpact",
                "value": "Amplia o conjunto de luminárias além do escopo contratado"
              },
              {
                "name": "scheduleImpact",
                "value": "Exigiria três dias adicionais"
              },
              {
                "name": "changeAmount",
                "value": 2100
              },
              {
                "name": "submittedAt",
                "value": "2026-07-03T09:15:00.000Z"
              },
              {
                "name": "forwardedForClientApprovalAt",
                "value": "2026-07-03T12:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "ChangeOrderDecision",
        "rows": [
          {
            "key": "decision-beta-approved",
            "columns": [
              {
                "name": "decision",
                "value": "approved"
              }
            ],
            "details": [
              {
                "name": "changeOrder",
                "value": {
                  "ref": "local:ChangeOrder.change-order-beta-approved"
                }
              },
              {
                "name": "madeByPlatformUser",
                "value": {
                  "ref": "actor:projectManager.u1"
                }
              },
              {
                "name": "decidedAt",
                "value": "2026-07-02T09:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "decision-gamma-declined",
            "columns": [
              {
                "name": "decision",
                "value": "declined"
              }
            ],
            "details": [
              {
                "name": "changeOrder",
                "value": {
                  "ref": "local:ChangeOrder.change-order-gamma-declined"
                }
              },
              {
                "name": "madeByPlatformUser",
                "value": {
                  "ref": "actor:projectManager.u1"
                }
              },
              {
                "name": "decidedAt",
                "value": "2026-07-03T14:30:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "Client",
        "rows": [
          {
            "key": "client-alpha",
            "columns": [],
            "details": [
              {
                "name": "clientName",
                "value": "Atlas Facilities Ltda."
              },
              {
                "name": "contactEmail",
                "value": "contato@atlasfacilities.example"
              },
              {
                "name": "contactPhone",
                "value": "+55 11 4000-0101"
              }
            ],
            "children": []
          },
          {
            "key": "client-beta",
            "columns": [],
            "details": [
              {
                "name": "clientName",
                "value": "Norte Comercial S.A."
              },
              {
                "name": "contactEmail",
                "value": "operacoes@nortecomercial.example"
              },
              {
                "name": "contactPhone",
                "value": "+55 21 4000-0202"
              }
            ],
            "children": []
          },
          {
            "key": "client-gamma",
            "columns": [],
            "details": [
              {
                "name": "clientName",
                "value": "Horizonte Residencial Ltda."
              },
              {
                "name": "contactEmail",
                "value": "administracao@horizonteresidencial.example"
              },
              {
                "name": "contactPhone",
                "value": "+55 31 4000-0303"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "ClientBillingSummary",
        "rows": [
          {
            "key": "billing-alpha",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-alpha"
                }
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              }
            ],
            "details": [
              {
                "name": "approvedChangeOrderReferences",
                "value": null
              },
              {
                "name": "invoiceReferences",
                "value": null
              },
              {
                "name": "approvedChangeOrderAmount",
                "value": 0
              },
              {
                "name": "billableAmount",
                "value": 0
              },
              {
                "name": "invoicedAmount",
                "value": 0
              },
              {
                "name": "clientAvailableAmount",
                "value": 0
              }
            ],
            "children": []
          },
          {
            "key": "billing-beta",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-beta"
                }
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              }
            ],
            "details": [
              {
                "name": "approvedChangeOrderReferences",
                "value": {
                  "ref": "local:ChangeOrder.change-order-beta-approved"
                }
              },
              {
                "name": "invoiceReferences",
                "value": {
                  "ref": "local:Invoice.invoice-beta-available"
                }
              },
              {
                "name": "approvedChangeOrderAmount",
                "value": 18500
              },
              {
                "name": "billableAmount",
                "value": 18500
              },
              {
                "name": "invoicedAmount",
                "value": 12000
              },
              {
                "name": "clientAvailableAmount",
                "value": 6500
              }
            ],
            "children": []
          },
          {
            "key": "billing-gamma",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-gamma"
                }
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              }
            ],
            "details": [
              {
                "name": "approvedChangeOrderReferences",
                "value": null
              },
              {
                "name": "invoiceReferences",
                "value": {
                  "ref": "local:Invoice.invoice-gamma-cancelled"
                }
              },
              {
                "name": "approvedChangeOrderAmount",
                "value": 0
              },
              {
                "name": "billableAmount",
                "value": 7600
              },
              {
                "name": "invoicedAmount",
                "value": 0
              },
              {
                "name": "clientAvailableAmount",
                "value": 7600
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "ClientPortalAccess",
        "rows": [
          {
            "key": "portal-access-alpha",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-alpha"
                }
              },
              {
                "name": "platform_user_id",
                "value": {
                  "ref": "actor:client.u1"
                }
              },
              {
                "name": "status",
                "value": "active"
              }
            ],
            "details": [],
            "children": []
          },
          {
            "key": "portal-access-beta",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-beta"
                }
              },
              {
                "name": "platform_user_id",
                "value": {
                  "ref": "actor:client.u2"
                }
              },
              {
                "name": "status",
                "value": "revoked"
              }
            ],
            "details": [],
            "children": []
          },
          {
            "key": "portal-access-gamma",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-gamma"
                }
              },
              {
                "name": "platform_user_id",
                "value": {
                  "ref": "actor:client.u3"
                }
              },
              {
                "name": "status",
                "value": "active"
              }
            ],
            "details": [],
            "children": []
          }
        ]
      },
      {
        "tableId": "FieldWorker",
        "rows": [
          {
            "key": "field-worker-1",
            "columns": [
              {
                "name": "platform_user_id",
                "value": {
                  "ref": "actor:fieldWorker.u1"
                }
              }
            ],
            "details": [],
            "children": []
          },
          {
            "key": "field-worker-2",
            "columns": [
              {
                "name": "platform_user_id",
                "value": {
                  "ref": "actor:fieldWorker.u2"
                }
              }
            ],
            "details": [],
            "children": []
          }
        ]
      },
      {
        "tableId": "InventoryBalance",
        "rows": [
          {
            "key": "balance-cable-available",
            "columns": [
              {
                "name": "inventory_item_id",
                "value": {
                  "ref": "local:InventoryItem.item-cable"
                }
              },
              {
                "name": "status",
                "value": "available"
              }
            ],
            "details": [
              {
                "name": "physicalQuantity",
                "value": 240
              },
              {
                "name": "applicableUnitCost",
                "value": 7.45
              }
            ],
            "children": []
          },
          {
            "key": "balance-lamp-depleted",
            "columns": [
              {
                "name": "inventory_item_id",
                "value": {
                  "ref": "local:InventoryItem.item-lamp"
                }
              },
              {
                "name": "status",
                "value": "depleted"
              }
            ],
            "details": [
              {
                "name": "physicalQuantity",
                "value": 0
              },
              {
                "name": "applicableUnitCost",
                "value": 18.9
              }
            ],
            "children": []
          },
          {
            "key": "balance-valve-retired",
            "columns": [
              {
                "name": "inventory_item_id",
                "value": {
                  "ref": "local:InventoryItem.item-valve"
                }
              },
              {
                "name": "status",
                "value": "retired"
              }
            ],
            "details": [
              {
                "name": "physicalQuantity",
                "value": 12
              },
              {
                "name": "applicableUnitCost",
                "value": 64.5
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "InventoryItem",
        "rows": [
          {
            "key": "item-cable",
            "columns": [
              {
                "name": "status",
                "value": "active"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Cabo elétrico 2,5 mm²"
              },
              {
                "name": "description",
                "value": "Cabo de cobre para instalações internas."
              },
              {
                "name": "unitOfMeasure",
                "value": "meter"
              },
              {
                "name": "referenceUnitCost",
                "value": 4.8
              }
            ],
            "children": []
          },
          {
            "key": "item-valve",
            "columns": [
              {
                "name": "status",
                "value": "active"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Válvula de esfera 1 polegada"
              },
              {
                "name": "description",
                "value": "Válvula metálica para redes hidráulicas."
              },
              {
                "name": "unitOfMeasure",
                "value": "unit"
              },
              {
                "name": "referenceUnitCost",
                "value": 38.5
              }
            ],
            "children": []
          },
          {
            "key": "item-lamp",
            "columns": [
              {
                "name": "status",
                "value": "retired"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Lâmpada LED tubular 18W"
              },
              {
                "name": "description",
                "value": "Modelo descontinuado, mantido para histórico."
              },
              {
                "name": "unitOfMeasure",
                "value": "unit"
              },
              {
                "name": "referenceUnitCost",
                "value": 22.9
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "Invoice",
        "rows": [
          {
            "key": "invoice-alpha-issued",
            "columns": [
              {
                "name": "invoice_id",
                "value": "invoice-alpha-issued"
              },
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-alpha"
                }
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              },
              {
                "name": "status",
                "value": "issued"
              }
            ],
            "details": [
              {
                "name": "commercialReference",
                "value": "FAT-ALPHA-001"
              },
              {
                "name": "amount",
                "value": 12800
              }
            ],
            "children": []
          },
          {
            "key": "invoice-beta-available",
            "columns": [
              {
                "name": "invoice_id",
                "value": "invoice-beta-available"
              },
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-beta"
                }
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "status",
                "value": "availableToClient"
              }
            ],
            "details": [
              {
                "name": "commercialReference",
                "value": "FAT-BETA-002"
              },
              {
                "name": "amount",
                "value": 24650
              }
            ],
            "children": []
          },
          {
            "key": "invoice-gamma-cancelled",
            "columns": [
              {
                "name": "invoice_id",
                "value": "invoice-gamma-cancelled"
              },
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-gamma"
                }
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              },
              {
                "name": "status",
                "value": "cancelled"
              }
            ],
            "details": [
              {
                "name": "commercialReference",
                "value": "FAT-GAMMA-003"
              },
              {
                "name": "amount",
                "value": 9800
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "InvoiceChangeOrder",
        "rows": [
          {
            "key": "invoice-change-order-beta",
            "columns": [
              {
                "name": "invoice_id",
                "value": {
                  "ref": "local:Invoice.invoice-beta-available"
                }
              },
              {
                "name": "change_order_id",
                "value": {
                  "ref": "local:ChangeOrder.change-order-beta-approved"
                }
              }
            ],
            "details": [
              {
                "name": "billedAmount",
                "value": 12000
              }
            ],
            "children": []
          },
          {
            "key": "invoice-change-order-alpha-pending",
            "columns": [
              {
                "name": "invoice_id",
                "value": {
                  "ref": "local:Invoice.invoice-alpha-issued"
                }
              },
              {
                "name": "change_order_id",
                "value": {
                  "ref": "local:ChangeOrder.change-order-alpha-pending"
                }
              }
            ],
            "details": [
              {
                "name": "billedAmount",
                "value": 0
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "MaterialUsage",
        "rows": [
          {
            "key": "material-usage-beta-cable",
            "columns": [
              {
                "name": "material_usage_id",
                "value": "material-usage-beta-cable"
              },
              {
                "name": "status",
                "value": "recorded"
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "inventory_item_id",
                "value": {
                  "ref": "local:InventoryItem.item-cable"
                }
              },
              {
                "name": "inventory_balance_id",
                "value": {
                  "ref": "local:InventoryBalance.balance-cable-available"
                }
              }
            ],
            "details": [
              {
                "name": "quantity",
                "value": 120
              },
              {
                "name": "usageDescription",
                "value": "Cabo utilizado na alimentação do novo quadro hidráulico auxiliar"
              },
              {
                "name": "consumedOn",
                "value": "2026-07-04T14:00:00.000Z"
              },
              {
                "name": "unitCostBasis",
                "value": 4.75
              }
            ],
            "children": []
          },
          {
            "key": "material-usage-gamma-lamp-voided",
            "columns": [
              {
                "name": "material_usage_id",
                "value": "material-usage-gamma-lamp-voided"
              },
              {
                "name": "status",
                "value": "voided"
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              },
              {
                "name": "inventory_item_id",
                "value": {
                  "ref": "local:InventoryItem.item-lamp"
                }
              },
              {
                "name": "inventory_balance_id",
                "value": {
                  "ref": "local:InventoryBalance.balance-lamp-depleted"
                }
              }
            ],
            "details": [
              {
                "name": "quantity",
                "value": 18
              },
              {
                "name": "usageDescription",
                "value": "Registro de lâmpadas separado para a instalação concluída e posteriormente estornado"
              },
              {
                "name": "consumedOn",
                "value": "2026-07-05T10:00:00.000Z"
              },
              {
                "name": "unitCostBasis",
                "value": 32.5
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "PlatformUser",
        "rows": [
          {
            "key": "platform-user-manager-1",
            "columns": [],
            "details": [],
            "children": []
          },
          {
            "key": "platform-user-coordinator-1",
            "columns": [],
            "details": [],
            "children": []
          },
          {
            "key": "platform-user-worker-1",
            "columns": [],
            "details": [],
            "children": []
          }
        ]
      },
      {
        "tableId": "Project",
        "rows": [
          {
            "key": "project-alpha-planned",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-alpha"
                }
              },
              {
                "name": "status",
                "value": "planned"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Adequação elétrica da unidade Alpha"
              },
              {
                "name": "address",
                "value": "Rua das Palmeiras, 120, São Paulo - SP"
              },
              {
                "name": "authorizedBudget",
                "value": 48500
              },
              {
                "name": "plannedStartDate",
                "value": "2026-07-02T08:00:00.000Z"
              },
              {
                "name": "plannedEndDate",
                "value": "2026-07-07T17:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "project-beta-active",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-beta"
                }
              },
              {
                "name": "status",
                "value": "active"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Reforma hidráulica da unidade Beta"
              },
              {
                "name": "address",
                "value": "Avenida Central, 845, Campinas - SP"
              },
              {
                "name": "authorizedBudget",
                "value": 73200
              },
              {
                "name": "plannedStartDate",
                "value": "2026-07-01T08:00:00.000Z"
              },
              {
                "name": "plannedEndDate",
                "value": "2026-07-06T17:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "project-gamma-completed",
            "columns": [
              {
                "name": "client_id",
                "value": {
                  "ref": "local:Client.client-gamma"
                }
              },
              {
                "name": "status",
                "value": "completed"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Instalação de iluminação da unidade Gamma"
              },
              {
                "name": "address",
                "value": "Rua do Comércio, 56, Santos - SP"
              },
              {
                "name": "authorizedBudget",
                "value": 31900
              },
              {
                "name": "plannedStartDate",
                "value": "2026-07-01T07:30:00.000Z"
              },
              {
                "name": "plannedEndDate",
                "value": "2026-07-04T16:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "ProjectCoordinationAssignment",
        "rows": [
          {
            "key": "coordination-beta-active",
            "columns": [
              {
                "name": "project_coordination_assignment_id",
                "value": "coordination-beta-active"
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "field_coordinator_id",
                "value": {
                  "ref": "actor:fieldCoordinator.u2"
                }
              },
              {
                "name": "status",
                "value": "active"
              }
            ],
            "details": [],
            "children": []
          },
          {
            "key": "coordination-alpha-closed",
            "columns": [
              {
                "name": "project_coordination_assignment_id",
                "value": "coordination-alpha-closed"
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              },
              {
                "name": "field_coordinator_id",
                "value": {
                  "ref": "actor:fieldCoordinator.u1"
                }
              },
              {
                "name": "status",
                "value": "closed"
              }
            ],
            "details": [],
            "children": []
          }
        ]
      },
      {
        "tableId": "ProjectExecutionOverview",
        "rows": [
          {
            "key": "overview-alpha",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              }
            ],
            "details": [
              {
                "name": "projectId",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              },
              {
                "name": "projectName",
                "value": "Adequação elétrica da unidade Alpha"
              },
              {
                "name": "projectStatus",
                "value": "PLANNED"
              },
              {
                "name": "workTaskIds",
                "value": "[{\"ref\":\"local:WorkTask.work-task-alpha-planned\"}]"
              },
              {
                "name": "taskSummary",
                "value": "{\"total\":1,\"planned\":1,\"inProgress\":0,\"completed\":0}"
              },
              {
                "name": "upcomingCommitments",
                "value": "{\"nextMilestone\":\"Mobilização da equipe\",\"commitmentCount\":1}"
              },
              {
                "name": "timeLogIds",
                "value": "[]"
              },
              {
                "name": "totalLoggedHours",
                "value": 0
              },
              {
                "name": "materialUsageIds",
                "value": "[]"
              },
              {
                "name": "materialUsageSummary",
                "value": "{\"distinctItems\":0,\"quantityUsed\":0}"
              },
              {
                "name": "actualLaborCost",
                "value": 0
              },
              {
                "name": "actualMaterialCost",
                "value": 0
              },
              {
                "name": "actualCost",
                "value": 0
              },
              {
                "name": "budgetAmount",
                "value": 18000
              },
              {
                "name": "costVariance",
                "value": -18000
              },
              {
                "name": "changeOrderIds",
                "value": "[{\"ref\":\"local:ChangeOrder.change-order-alpha-pending\"}]"
              },
              {
                "name": "changeOrderImpactSummary",
                "value": "{\"pendingCount\":1,\"approvedImpact\":0,\"declinedImpact\":0}"
              },
              {
                "name": "calculatedAt",
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "overview-beta",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              }
            ],
            "details": [
              {
                "name": "projectId",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "projectName",
                "value": "Reforma hidráulica da unidade Beta"
              },
              {
                "name": "projectStatus",
                "value": "IN_PROGRESS"
              },
              {
                "name": "workTaskIds",
                "value": "[{\"ref\":\"local:WorkTask.work-task-beta-in-progress\"}]"
              },
              {
                "name": "taskSummary",
                "value": "{\"total\":1,\"planned\":0,\"inProgress\":1,\"completed\":0}"
              },
              {
                "name": "upcomingCommitments",
                "value": "{\"nextMilestone\":\"Instalação das válvulas\",\"dueAt\":\"2026-07-06T16:00:00.000Z\",\"commitmentCount\":1}"
              },
              {
                "name": "timeLogIds",
                "value": "[{\"ref\":\"local:TimeLog.time-log-beta-followup\"},{\"ref\":\"local:TimeLog.time-log-beta-recorded\"}]"
              },
              {
                "name": "totalLoggedHours",
                "value": 14.5
              },
              {
                "name": "materialUsageIds",
                "value": "[{\"ref\":\"local:MaterialUsage.material-usage-beta-cable\"}]"
              },
              {
                "name": "materialUsageSummary",
                "value": "{\"distinctItems\":1,\"quantityUsed\":120,\"unit\":\"m\",\"estimatedCost\":480}"
              },
              {
                "name": "actualLaborCost",
                "value": 1250
              },
              {
                "name": "actualMaterialCost",
                "value": 480
              },
              {
                "name": "actualCost",
                "value": 1730
              },
              {
                "name": "budgetAmount",
                "value": 5000
              },
              {
                "name": "costVariance",
                "value": -3270
              },
              {
                "name": "changeOrderIds",
                "value": "[{\"ref\":\"local:ChangeOrder.change-order-beta-approved\"}]"
              },
              {
                "name": "changeOrderImpactSummary",
                "value": "{\"pendingCount\":0,\"approvedCount\":1,\"approvedImpact\":850,\"declinedCount\":0}"
              },
              {
                "name": "calculatedAt",
                "value": "2026-07-04T15:30:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "overview-gamma",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              }
            ],
            "details": [
              {
                "name": "projectId",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              },
              {
                "name": "projectName",
                "value": "Instalação de iluminação da unidade Gamma"
              },
              {
                "name": "projectStatus",
                "value": "COMPLETED"
              },
              {
                "name": "workTaskIds",
                "value": "[{\"ref\":\"local:WorkTask.work-task-gamma-completed\"}]"
              },
              {
                "name": "taskSummary",
                "value": "{\"total\":1,\"planned\":0,\"inProgress\":0,\"completed\":1}"
              },
              {
                "name": "upcomingCommitments",
                "value": "{\"nextMilestone\":null,\"commitmentCount\":0}"
              },
              {
                "name": "timeLogIds",
                "value": "[{\"ref\":\"local:TimeLog.time-log-gamma-voided\"}]"
              },
              {
                "name": "totalLoggedHours",
                "value": 0
              },
              {
                "name": "materialUsageIds",
                "value": "[{\"ref\":\"local:MaterialUsage.material-usage-gamma-lamp-voided\"}]"
              },
              {
                "name": "materialUsageSummary",
                "value": "{\"distinctItems\":0,\"quantityUsed\":0,\"voidedQuantity\":24}"
              },
              {
                "name": "actualLaborCost",
                "value": 2400
              },
              {
                "name": "actualMaterialCost",
                "value": 900
              },
              {
                "name": "actualCost",
                "value": 3300
              },
              {
                "name": "budgetAmount",
                "value": 3200
              },
              {
                "name": "costVariance",
                "value": 100
              },
              {
                "name": "changeOrderIds",
                "value": "[{\"ref\":\"local:ChangeOrder.change-order-gamma-declined\"}]"
              },
              {
                "name": "changeOrderImpactSummary",
                "value": "{\"pendingCount\":0,\"approvedCount\":0,\"declinedCount\":1,\"declinedImpact\":600}"
              },
              {
                "name": "calculatedAt",
                "value": "2026-07-07T17:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "ProjectTimeline",
        "rows": [
          {
            "key": "timeline-alpha",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              }
            ],
            "details": [
              {
                "name": "workTasks",
                "value": {
                  "ref": "local:WorkTask.work-task-alpha-planned"
                }
              },
              {
                "name": "scheduleEntries",
                "value": "Mobilization planned for 2026-07-07"
              }
            ],
            "children": []
          },
          {
            "key": "timeline-beta",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              }
            ],
            "details": [
              {
                "name": "workTasks",
                "value": {
                  "ref": "local:WorkTask.work-task-beta-in-progress"
                }
              },
              {
                "name": "scheduleEntries",
                "value": "Hydraulic rough-in underway; inspection scheduled for 2026-07-06"
              }
            ],
            "children": []
          },
          {
            "key": "timeline-gamma",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              }
            ],
            "details": [
              {
                "name": "workTasks",
                "value": {
                  "ref": "local:WorkTask.work-task-gamma-completed"
                }
              },
              {
                "name": "scheduleEntries",
                "value": "Closeout completed on 2026-07-04"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "ScheduleRiskAssessment",
        "rows": [
          {
            "key": "risk-beta-in-progress",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "work_task_id",
                "value": {
                  "ref": "local:WorkTask.work-task-beta-in-progress"
                }
              }
            ],
            "details": [
              {
                "name": "taskStatus",
                "value": "in-progress"
              },
              {
                "name": "dueDate",
                "value": "2026-07-06T17:00:00.000Z"
              },
              {
                "name": "progressPercent",
                "value": 65
              },
              {
                "name": "riskIndicators",
                "value": "inspection dependency; material availability"
              },
              {
                "name": "riskExplanation",
                "value": "Work is active at 65 percent and may slip if the pending inspection is not completed by the due date."
              },
              {
                "name": "assessedAt",
                "value": "2026-07-05T10:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "risk-alpha-planned",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              },
              {
                "name": "work_task_id",
                "value": {
                  "ref": "local:WorkTask.work-task-alpha-planned"
                }
              }
            ],
            "details": [
              {
                "name": "taskStatus",
                "value": "planned"
              },
              {
                "name": "dueDate",
                "value": "2026-07-07T17:00:00.000Z"
              },
              {
                "name": "progressPercent",
                "value": 0
              },
              {
                "name": "riskIndicators",
                "value": "未started mobilization"
              },
              {
                "name": "riskExplanation",
                "value": "The task has not started, but the planned mobilization remains inside the current delivery window."
              },
              {
                "name": "assessedAt",
                "value": "2026-07-02T08:30:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "risk-gamma-completed",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              },
              {
                "name": "work_task_id",
                "value": {
                  "ref": "local:WorkTask.work-task-gamma-completed"
                }
              }
            ],
            "details": [
              {
                "name": "taskStatus",
                "value": "completed"
              },
              {
                "name": "dueDate",
                "value": "2026-07-04T16:00:00.000Z"
              },
              {
                "name": "progressPercent",
                "value": 100
              },
              {
                "name": "riskIndicators",
                "value": "none"
              },
              {
                "name": "riskExplanation",
                "value": "The task reached completion before its due date and has no active schedule risk."
              },
              {
                "name": "assessedAt",
                "value": "2026-07-04T16:30:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "StatusReport",
        "rows": [
          {
            "key": "status-report-alpha-draft",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              },
              {
                "name": "status",
                "value": "draft"
              },
              {
                "name": "generated_by_user_id",
                "value": {
                  "ref": "actor:projectManager.u1"
                }
              },
              {
                "name": "published_by_user_id",
                "value": null
              }
            ],
            "details": [
              {
                "name": "statusReportId",
                "value": "status-report-alpha-draft"
              },
              {
                "name": "projectId",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              },
              {
                "name": "title",
                "value": "Relatório inicial de adequação elétrica Alpha"
              },
              {
                "name": "content",
                "value": "O projeto está em planejamento, com escopo elétrico validado e mobilização pendente."
              },
              {
                "name": "communicatedRisks",
                "value": {
                  "ref": "local:ScheduleRiskAssessment.risk-alpha-planned"
                }
              },
              {
                "name": "generatedAt",
                "value": "2026-07-01T09:00:00.000Z"
              },
              {
                "name": "generatedByUserId",
                "value": {
                  "ref": "actor:projectManager.u1"
                }
              },
              {
                "name": "publishedAt",
                "value": null
              },
              {
                "name": "publishedByUserId",
                "value": null
              },
              {
                "name": "withdrawnAt",
                "value": null
              }
            ],
            "children": []
          },
          {
            "key": "status-report-beta-published",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "status",
                "value": "published"
              },
              {
                "name": "generated_by_user_id",
                "value": {
                  "ref": "actor:projectManager.u2"
                }
              },
              {
                "name": "published_by_user_id",
                "value": {
                  "ref": "actor:projectManager.u2"
                }
              }
            ],
            "details": [
              {
                "name": "statusReportId",
                "value": "status-report-beta-published"
              },
              {
                "name": "projectId",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "title",
                "value": "Relatório semanal da reforma hidráulica Beta"
              },
              {
                "name": "content",
                "value": "A execução está em andamento, com o acompanhamento de campo atualizado e risco de prazo comunicado ao cliente."
              },
              {
                "name": "communicatedRisks",
                "value": {
                  "ref": "local:ScheduleRiskAssessment.risk-beta-in-progress"
                }
              },
              {
                "name": "generatedAt",
                "value": "2026-07-03T14:00:00.000Z"
              },
              {
                "name": "generatedByUserId",
                "value": {
                  "ref": "actor:projectManager.u2"
                }
              },
              {
                "name": "publishedAt",
                "value": "2026-07-03T16:00:00.000Z"
              },
              {
                "name": "publishedByUserId",
                "value": {
                  "ref": "actor:projectManager.u2"
                }
              },
              {
                "name": "withdrawnAt",
                "value": null
              }
            ],
            "children": []
          },
          {
            "key": "status-report-gamma-withdrawn",
            "columns": [
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              },
              {
                "name": "status",
                "value": "withdrawn"
              },
              {
                "name": "generated_by_user_id",
                "value": {
                  "ref": "actor:projectManager.u3"
                }
              },
              {
                "name": "published_by_user_id",
                "value": {
                  "ref": "actor:projectManager.u3"
                }
              }
            ],
            "details": [
              {
                "name": "statusReportId",
                "value": "status-report-gamma-withdrawn"
              },
              {
                "name": "projectId",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              },
              {
                "name": "title",
                "value": "Relatório de encerramento da iluminação Gamma"
              },
              {
                "name": "content",
                "value": "O relatório foi retirado após revisão administrativa do encerramento e não deve mais ser distribuído."
              },
              {
                "name": "communicatedRisks",
                "value": {
                  "ref": "local:ScheduleRiskAssessment.risk-gamma-completed"
                }
              },
              {
                "name": "generatedAt",
                "value": "2026-07-05T10:00:00.000Z"
              },
              {
                "name": "generatedByUserId",
                "value": {
                  "ref": "actor:projectManager.u3"
                }
              },
              {
                "name": "publishedAt",
                "value": "2026-07-05T11:00:00.000Z"
              },
              {
                "name": "publishedByUserId",
                "value": {
                  "ref": "actor:projectManager.u3"
                }
              },
              {
                "name": "withdrawnAt",
                "value": "2026-07-06T09:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "TimeLog",
        "rows": [
          {
            "key": "time-log-beta-recorded",
            "columns": [
              {
                "name": "status",
                "value": "recorded"
              },
              {
                "name": "work_task_id",
                "value": {
                  "ref": "local:WorkTask.work-task-beta-in-progress"
                }
              },
              {
                "name": "field_worker_id",
                "value": {
                  "ref": "local:FieldWorker.field-worker-1"
                }
              }
            ],
            "details": [
              {
                "name": "workDate",
                "value": "2026-07-02T00:00:00.000Z"
              },
              {
                "name": "hoursWorked",
                "value": 7.5
              },
              {
                "name": "hourlyLaborCost",
                "value": 42
              }
            ],
            "children": []
          },
          {
            "key": "time-log-beta-followup",
            "columns": [
              {
                "name": "status",
                "value": "recorded"
              },
              {
                "name": "work_task_id",
                "value": {
                  "ref": "local:WorkTask.work-task-beta-in-progress"
                }
              },
              {
                "name": "field_worker_id",
                "value": {
                  "ref": "local:FieldWorker.field-worker-2"
                }
              }
            ],
            "details": [
              {
                "name": "workDate",
                "value": "2026-07-05T00:00:00.000Z"
              },
              {
                "name": "hoursWorked",
                "value": 6
              },
              {
                "name": "hourlyLaborCost",
                "value": 38
              }
            ],
            "children": []
          },
          {
            "key": "time-log-gamma-voided",
            "columns": [
              {
                "name": "status",
                "value": "voided"
              },
              {
                "name": "work_task_id",
                "value": {
                  "ref": "local:WorkTask.work-task-gamma-completed"
                }
              },
              {
                "name": "field_worker_id",
                "value": {
                  "ref": "local:FieldWorker.field-worker-1"
                }
              }
            ],
            "details": [
              {
                "name": "workDate",
                "value": "2026-07-03T00:00:00.000Z"
              },
              {
                "name": "hoursWorked",
                "value": 4
              },
              {
                "name": "hourlyLaborCost",
                "value": 42
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "WorkTask",
        "rows": [
          {
            "key": "work-task-beta-in-progress",
            "columns": [
              {
                "name": "work_task_id",
                "value": "work-task-beta-in-progress"
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-beta-active"
                }
              },
              {
                "name": "assigned_field_worker_id",
                "value": {
                  "ref": "actor:fieldWorker.u1"
                }
              },
              {
                "name": "status",
                "value": "inProgress"
              }
            ],
            "details": [
              {
                "name": "description",
                "value": "Executar teste de estanqueidade na ala hidráulica"
              },
              {
                "name": "dueDate",
                "value": "2026-07-06T17:00:00.000Z"
              },
              {
                "name": "progressUpdate",
                "value": "Tubulação instalada; teste em andamento no trecho norte"
              }
            ],
            "children": []
          },
          {
            "key": "work-task-alpha-planned",
            "columns": [
              {
                "name": "work_task_id",
                "value": "work-task-alpha-planned"
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-alpha-planned"
                }
              },
              {
                "name": "assigned_field_worker_id",
                "value": {
                  "ref": "actor:fieldWorker.u2"
                }
              },
              {
                "name": "status",
                "value": "planned"
              }
            ],
            "details": [
              {
                "name": "description",
                "value": "Preparar passagem dos cabos do quadro principal"
              },
              {
                "name": "dueDate",
                "value": "2026-07-07T16:00:00.000Z"
              },
              {
                "name": "progressUpdate",
                "value": "Aguardando aprovação da alteração de escopo"
              }
            ],
            "children": []
          },
          {
            "key": "work-task-gamma-completed",
            "columns": [
              {
                "name": "work_task_id",
                "value": "work-task-gamma-completed"
              },
              {
                "name": "project_id",
                "value": {
                  "ref": "local:Project.project-gamma-completed"
                }
              },
              {
                "name": "assigned_field_worker_id",
                "value": {
                  "ref": "actor:fieldWorker.u2"
                }
              },
              {
                "name": "status",
                "value": "completed"
              }
            ],
            "details": [
              {
                "name": "description",
                "value": "Concluir conferência das luminárias instaladas"
              },
              {
                "name": "dueDate",
                "value": "2026-07-03T15:00:00.000Z"
              },
              {
                "name": "progressUpdate",
                "value": "Conferência concluída sem pendências"
              }
            ],
            "children": []
          }
        ]
      }
    ],
    "mdmEntities": []
  }
}
</agentCbSeedsPlan> */

// <agentCbSeedAssetUrls>
const seedAssetUrls: Record<string, string> = {};
const seedAssetWarnings: string[] = [];
// </agentCbSeedAssetUrls>

function seedAssetUrl(assetId: string): string | null { return seedAssetUrls[assetId] ?? null; }

import type { TableSeedRows } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const changeOrderSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmChangeOrder",
  "rows": [
    {
      "change_order_id": "e6363466-e736-45f9-8436-3140e53632d3",
      "status": "pendingClientApproval",
      "details": {
        "clientRef": "c25cac0f-c15c-4a7c-845c-af35c35cada2",
        "projectRef": "0301df36-0401-40c9-8101-dc100201dda3",
        "description": "Adequação do quadro elétrico após revisão do escopo",
        "scopeImpact": "Substituição de disjuntores e reorganização do quadro principal",
        "scheduleImpact": "Acrescenta dois dias úteis ao planejamento",
        "changeAmount": 1850,
        "submittedAt": "2026-07-01T09:00:00.000Z",
        "forwardedForClientApprovalAt": "2026-07-01T11:00:00.000Z"
      }
    },
    {
      "change_order_id": "dbcb5492-dccb-4625-89cb-516cdacb52ff",
      "status": "approved",
      "details": {
        "clientRef": "7b739fc3-7a73-4e30-8d73-a2e97c73a156",
        "projectRef": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
        "description": "Inclusão de ponto de inspeção na rede hidráulica",
        "scopeImpact": "Adiciona registro de inspeção e acesso técnico",
        "scheduleImpact": "Sem impacto relevante no prazo",
        "changeAmount": 640,
        "submittedAt": "2026-07-02T08:30:00.000Z",
        "forwardedForClientApprovalAt": "2026-07-02T10:00:00.000Z"
      }
    },
    {
      "change_order_id": "dc078aa6-dd07-4c39-8a07-8780db078913",
      "status": "declined",
      "details": {
        "clientRef": "1a6ebada-1b6e-4c6d-886e-b7b4196eb947",
        "projectRef": "40f54b68-41f5-4cfb-82f5-4e8e43f55021",
        "description": "Instalação de luminárias decorativas adicionais",
        "scopeImpact": "Amplia o conjunto de luminárias além do escopo contratado",
        "scheduleImpact": "Exigiria três dias adicionais",
        "changeAmount": 2100,
        "submittedAt": "2026-07-03T09:15:00.000Z",
        "forwardedForClientApprovalAt": "2026-07-03T12:00:00.000Z"
      }
    }
  ]
};

export const changeOrderDecisionSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmChangeOrderDecision",
  "rows": [
    {
      "change_order_decision_id": "f0837137-ef83-4fa4-8283-745df18372ca",
      "decision": "approved",
      "details": {
        "changeOrder": "dbcb5492-dccb-4625-89cb-516cdacb52ff",
        "madeByPlatformUser": "d005e388-d105-451b-8205-e6aed305e841",
        "decidedAt": "2026-07-02T09:00:00.000Z"
      }
    },
    {
      "change_order_decision_id": "71986551-7098-43be-8f98-622b6e986098",
      "decision": "declined",
      "details": {
        "changeOrder": "dc078aa6-dd07-4c39-8a07-8780db078913",
        "madeByPlatformUser": "d005e388-d105-451b-8205-e6aed305e841",
        "decidedAt": "2026-07-03T14:30:00.000Z"
      }
    }
  ]
};

export const clientSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmClient",
  "rows": [
    {
      "client_id": "c25cac0f-c15c-4a7c-845c-af35c35cada2",
      "details": {
        "clientName": "Atlas Facilities Ltda.",
        "contactEmail": "contato@atlasfacilities.example",
        "contactPhone": "+55 11 4000-0101"
      }
    },
    {
      "client_id": "7b739fc3-7a73-4e30-8d73-a2e97c73a156",
      "details": {
        "clientName": "Norte Comercial S.A.",
        "contactEmail": "operacoes@nortecomercial.example",
        "contactPhone": "+55 21 4000-0202"
      }
    },
    {
      "client_id": "1a6ebada-1b6e-4c6d-886e-b7b4196eb947",
      "details": {
        "clientName": "Horizonte Residencial Ltda.",
        "contactEmail": "administracao@horizonteresidencial.example",
        "contactPhone": "+55 31 4000-0303"
      }
    }
  ]
};

export const clientBillingSummarySeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmClientBillingSummary",
  "rows": [
    {
      "client_id": "1d75aec3-1c75-4d30-8f75-b1e91e75b056",
      "project_id": "a4520e35-a352-4ca2-8252-0b0fa152097c",
      "details": {
        "approvedChangeOrderReferences": null,
        "invoiceReferences": null,
        "approvedChangeOrderAmount": 0,
        "billableAmount": 0,
        "invoicedAmount": 0,
        "clientAvailableAmount": 0
      }
    },
    {
      "client_id": "4f3c9bad-4e3c-4a1a-8d3c-98874c3c96f4",
      "project_id": "b85903a3-b759-4210-8a59-06c9b9590536",
      "details": {
        "approvedChangeOrderReferences": "dbcb5492-dccb-4625-89cb-516cdacb52ff",
        "invoiceReferences": "0f27ed8b-0e27-4bf8-8127-f0b11027ef1e",
        "approvedChangeOrderAmount": 18500,
        "billableAmount": 18500,
        "invoicedAmount": 12000,
        "clientAvailableAmount": 6500
      }
    },
    {
      "client_id": "0b76ffa2-0c77-4135-8976-fc7c0a76fe0f",
      "project_id": "5587ee76-5687-4009-8387-eb505487ece3",
      "details": {
        "approvedChangeOrderReferences": null,
        "invoiceReferences": "30294f4a-3129-40dd-8e29-4c242f294db7",
        "approvedChangeOrderAmount": 0,
        "billableAmount": 7600,
        "invoicedAmount": 0,
        "clientAvailableAmount": 7600
      }
    }
  ]
};

export const clientPortalAccessSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmClientPortalAccess",
  "rows": [
    {
      "client_portal_access_id": "5c133d81-5b13-4bee-8a13-3a5b591338c8",
      "client_id": "c25cac0f-c15c-4a7c-845c-af35c35cada2",
      "platform_user_id": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
      "status": "active"
    },
    {
      "client_portal_access_id": "05e11f7d-04e1-4dea-83e1-1c5702e11ac4",
      "client_id": "7b739fc3-7a73-4e30-8d73-a2e97c73a156",
      "platform_user_id": "6d235660-6e23-47f3-8f23-598670235b19",
      "status": "revoked"
    },
    {
      "client_portal_access_id": "e546ad78-e646-4f0b-8746-b09ee846b231",
      "client_id": "1a6ebada-1b6e-4c6d-886e-b7b4196eb947",
      "platform_user_id": "63c473cf-62c4-423c-85c4-76f564c47562",
      "status": "active"
    }
  ]
};

export const fieldWorkerSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmFieldWorker",
  "rows": [
    {
      "platform_user_id": "bbd94dc9-bad9-4c36-89d9-4aa3b8d94910"
    },
    {
      "platform_user_id": "3a70b3f4-3b70-4587-8c70-b71a3d70b8ad"
    }
  ]
};

export const inventoryBalanceSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmInventoryBalance",
  "rows": [
    {
      "inventory_balance_id": "466c32a2-476c-4435-846c-2f7c456c310f",
      "inventory_item_id": "c17fedce-c27f-4f61-8f7f-eaa8c07fec3b",
      "status": "available",
      "details": {
        "physicalQuantity": 240,
        "applicableUnitCost": 7.45
      }
    },
    {
      "inventory_balance_id": "d3970b47-d297-49b4-8597-0e6dd4970cda",
      "inventory_item_id": "22405717-2140-4584-8440-5a3d234058aa",
      "status": "depleted",
      "details": {
        "physicalQuantity": 0,
        "applicableUnitCost": 18.9
      }
    },
    {
      "inventory_balance_id": "e70105d3-e601-4440-8901-08f9e8010766",
      "inventory_item_id": "621e9015-611e-4e82-801e-8cef5f1e8b5c",
      "status": "retired",
      "details": {
        "physicalQuantity": 12,
        "applicableUnitCost": 64.5
      }
    }
  ]
};

export const inventoryItemSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmInventoryItem",
  "rows": [
    {
      "inventory_item_id": "c17fedce-c27f-4f61-8f7f-eaa8c07fec3b",
      "status": "active",
      "details": {
        "name": "Cabo elétrico 2,5 mm²",
        "description": "Cabo de cobre para instalações internas.",
        "unitOfMeasure": "meter",
        "referenceUnitCost": 4.8
      }
    },
    {
      "inventory_item_id": "621e9015-611e-4e82-801e-8cef5f1e8b5c",
      "status": "active",
      "details": {
        "name": "Válvula de esfera 1 polegada",
        "description": "Válvula metálica para redes hidráulicas.",
        "unitOfMeasure": "unit",
        "referenceUnitCost": 38.5
      }
    },
    {
      "inventory_item_id": "22405717-2140-4584-8440-5a3d234058aa",
      "status": "retired",
      "details": {
        "name": "Lâmpada LED tubular 18W",
        "description": "Modelo descontinuado, mantido para histórico.",
        "unitOfMeasure": "unit",
        "referenceUnitCost": 22.9
      }
    }
  ]
};

export const invoiceSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmInvoice",
  "rows": [
    {
      "invoice_id": "e8ce23a1-e7ce-420e-86ce-207be5ce1ee8",
      "client_id": "c25cac0f-c15c-4a7c-845c-af35c35cada2",
      "project_id": "0301df36-0401-40c9-8101-dc100201dda3",
      "status": "issued",
      "details": {
        "commercialReference": "FAT-ALPHA-001",
        "amount": 12800
      }
    },
    {
      "invoice_id": "0f27ed8b-0e27-4bf8-8127-f0b11027ef1e",
      "client_id": "7b739fc3-7a73-4e30-8d73-a2e97c73a156",
      "project_id": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
      "status": "availableToClient",
      "details": {
        "commercialReference": "FAT-BETA-002",
        "amount": 24650
      }
    },
    {
      "invoice_id": "30294f4a-3129-40dd-8e29-4c242f294db7",
      "client_id": "1a6ebada-1b6e-4c6d-886e-b7b4196eb947",
      "project_id": "40f54b68-41f5-4cfb-82f5-4e8e43f55021",
      "status": "cancelled",
      "details": {
        "commercialReference": "FAT-GAMMA-003",
        "amount": 9800
      }
    }
  ]
};

export const invoiceChangeOrderSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmInvoiceChangeOrder",
  "rows": [
    {
      "invoice_change_order_id": "58687515-5768-4382-8668-71ef5568705c",
      "invoice_id": "0f27ed8b-0e27-4bf8-8127-f0b11027ef1e",
      "change_order_id": "dbcb5492-dccb-4625-89cb-516cdacb52ff",
      "details": {
        "billedAmount": 12000
      }
    },
    {
      "invoice_change_order_id": "3a4d1737-394d-45a4-8c4d-1a5d3b4d18ca",
      "invoice_id": "e8ce23a1-e7ce-420e-86ce-207be5ce1ee8",
      "change_order_id": "e6363466-e736-45f9-8436-3140e53632d3",
      "details": {
        "billedAmount": 0
      }
    }
  ]
};

export const materialUsageSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmMaterialUsage",
  "rows": [
    {
      "material_usage_id": "5483b1c4-5583-4357-8683-b4ea5783b67d",
      "status": "recorded",
      "project_id": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
      "inventory_item_id": "c17fedce-c27f-4f61-8f7f-eaa8c07fec3b",
      "inventory_balance_id": "466c32a2-476c-4435-846c-2f7c456c310f",
      "details": {
        "quantity": 120,
        "usageDescription": "Cabo utilizado na alimentação do novo quadro hidráulico auxiliar",
        "consumedOn": "2026-07-04T14:00:00.000Z",
        "unitCostBasis": 4.75
      }
    },
    {
      "material_usage_id": "6f541fa8-7054-413b-8154-22ce72542461",
      "status": "voided",
      "project_id": "40f54b68-41f5-4cfb-82f5-4e8e43f55021",
      "inventory_item_id": "22405717-2140-4584-8440-5a3d234058aa",
      "inventory_balance_id": "d3970b47-d297-49b4-8597-0e6dd4970cda",
      "details": {
        "quantity": 18,
        "usageDescription": "Registro de lâmpadas separado para a instalação concluída e posteriormente estornado",
        "consumedOn": "2026-07-05T10:00:00.000Z",
        "unitCostBasis": 32.5
      }
    }
  ]
};

export const platformUserSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmPlatformUser",
  "rows": [
    {
      "platform_user_id": "9b7554d9-9a75-4346-8975-51b398755020"
    },
    {
      "platform_user_id": "39e4511c-3ae4-42af-8be4-54423ce455d5"
    },
    {
      "platform_user_id": "677a0c10-687a-4da3-897a-0f366a7a10c9"
    }
  ]
};

export const projectSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmProject",
  "rows": [
    {
      "project_id": "0301df36-0401-40c9-8101-dc100201dda3",
      "client_id": "c25cac0f-c15c-4a7c-845c-af35c35cada2",
      "status": "planned",
      "details": {
        "name": "Adequação elétrica da unidade Alpha",
        "address": "Rua das Palmeiras, 120, São Paulo - SP",
        "authorizedBudget": 48500,
        "plannedStartDate": "2026-07-02T08:00:00.000Z",
        "plannedEndDate": "2026-07-07T17:00:00.000Z"
      }
    },
    {
      "project_id": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
      "client_id": "7b739fc3-7a73-4e30-8d73-a2e97c73a156",
      "status": "active",
      "details": {
        "name": "Reforma hidráulica da unidade Beta",
        "address": "Avenida Central, 845, Campinas - SP",
        "authorizedBudget": 73200,
        "plannedStartDate": "2026-07-01T08:00:00.000Z",
        "plannedEndDate": "2026-07-06T17:00:00.000Z"
      }
    },
    {
      "project_id": "40f54b68-41f5-4cfb-82f5-4e8e43f55021",
      "client_id": "1a6ebada-1b6e-4c6d-886e-b7b4196eb947",
      "status": "completed",
      "details": {
        "name": "Instalação de iluminação da unidade Gamma",
        "address": "Rua do Comércio, 56, Santos - SP",
        "authorizedBudget": 31900,
        "plannedStartDate": "2026-07-01T07:30:00.000Z",
        "plannedEndDate": "2026-07-04T16:00:00.000Z"
      }
    }
  ]
};

export const projectCoordinationAssignmentSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmProjectCoordinationAssignment",
  "rows": [
    {
      "project_coordination_assignment_id": "c4d4d084-c5d4-4217-86d4-d3aac7d4d53d",
      "project_id": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
      "field_coordinator_id": "0f6f11f7-0e6f-4064-816f-151d106f138a",
      "status": "active"
    },
    {
      "project_coordination_assignment_id": "50239562-5123-46f5-8e23-923c4f2393cf",
      "project_id": "0301df36-0401-40c9-8101-dc100201dda3",
      "field_coordinator_id": "3293b646-3393-47d9-8093-b3203193b4b3",
      "status": "closed"
    }
  ]
};

export const projectExecutionOverviewSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmProjectExecutionOverview",
  "rows": [
    {
      "project_id": "0b0a8614-0c0a-47a7-8d0a-893a0e0a8acd",
      "details": {
        "projectId": "0301df36-0401-40c9-8101-dc100201dda3",
        "projectName": "Adequação elétrica da unidade Alpha",
        "projectStatus": "PLANNED",
        "workTaskIds": "[{\"ref\":\"local:WorkTask.work-task-alpha-planned\"}]",
        "taskSummary": "{\"total\":1,\"planned\":1,\"inProgress\":0,\"completed\":0}",
        "upcomingCommitments": "{\"nextMilestone\":\"Mobilização da equipe\",\"commitmentCount\":1}",
        "timeLogIds": "[]",
        "totalLoggedHours": 0,
        "materialUsageIds": "[]",
        "materialUsageSummary": "{\"distinctItems\":0,\"quantityUsed\":0}",
        "actualLaborCost": 0,
        "actualMaterialCost": 0,
        "actualCost": 0,
        "budgetAmount": 18000,
        "costVariance": -18000,
        "changeOrderIds": "[{\"ref\":\"local:ChangeOrder.change-order-alpha-pending\"}]",
        "changeOrderImpactSummary": "{\"pendingCount\":1,\"approvedImpact\":0,\"declinedImpact\":0}",
        "calculatedAt": "2026-07-01T09:00:00.000Z"
      }
    },
    {
      "project_id": "c989889e-ca89-4a31-8789-8578c889870b",
      "details": {
        "projectId": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
        "projectName": "Reforma hidráulica da unidade Beta",
        "projectStatus": "IN_PROGRESS",
        "workTaskIds": "[{\"ref\":\"local:WorkTask.work-task-beta-in-progress\"}]",
        "taskSummary": "{\"total\":1,\"planned\":0,\"inProgress\":1,\"completed\":0}",
        "upcomingCommitments": "{\"nextMilestone\":\"Instalação das válvulas\",\"dueAt\":\"2026-07-06T16:00:00.000Z\",\"commitmentCount\":1}",
        "timeLogIds": "[{\"ref\":\"local:TimeLog.time-log-beta-followup\"},{\"ref\":\"local:TimeLog.time-log-beta-recorded\"}]",
        "totalLoggedHours": 14.5,
        "materialUsageIds": "[{\"ref\":\"local:MaterialUsage.material-usage-beta-cable\"}]",
        "materialUsageSummary": "{\"distinctItems\":1,\"quantityUsed\":120,\"unit\":\"m\",\"estimatedCost\":480}",
        "actualLaborCost": 1250,
        "actualMaterialCost": 480,
        "actualCost": 1730,
        "budgetAmount": 5000,
        "costVariance": -3270,
        "changeOrderIds": "[{\"ref\":\"local:ChangeOrder.change-order-beta-approved\"}]",
        "changeOrderImpactSummary": "{\"pendingCount\":0,\"approvedCount\":1,\"approvedImpact\":850,\"declinedCount\":0}",
        "calculatedAt": "2026-07-04T15:30:00.000Z"
      }
    },
    {
      "project_id": "d4913d1d-d391-4b8a-8291-39f7d1913864",
      "details": {
        "projectId": "40f54b68-41f5-4cfb-82f5-4e8e43f55021",
        "projectName": "Instalação de iluminação da unidade Gamma",
        "projectStatus": "COMPLETED",
        "workTaskIds": "[{\"ref\":\"local:WorkTask.work-task-gamma-completed\"}]",
        "taskSummary": "{\"total\":1,\"planned\":0,\"inProgress\":0,\"completed\":1}",
        "upcomingCommitments": "{\"nextMilestone\":null,\"commitmentCount\":0}",
        "timeLogIds": "[{\"ref\":\"local:TimeLog.time-log-gamma-voided\"}]",
        "totalLoggedHours": 0,
        "materialUsageIds": "[{\"ref\":\"local:MaterialUsage.material-usage-gamma-lamp-voided\"}]",
        "materialUsageSummary": "{\"distinctItems\":0,\"quantityUsed\":0,\"voidedQuantity\":24}",
        "actualLaborCost": 2400,
        "actualMaterialCost": 900,
        "actualCost": 3300,
        "budgetAmount": 3200,
        "costVariance": 100,
        "changeOrderIds": "[{\"ref\":\"local:ChangeOrder.change-order-gamma-declined\"}]",
        "changeOrderImpactSummary": "{\"pendingCount\":0,\"approvedCount\":0,\"declinedCount\":1,\"declinedImpact\":600}",
        "calculatedAt": "2026-07-07T17:00:00.000Z"
      }
    }
  ]
};

export const projectTimelineSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmProjectTimeline",
  "rows": [
    {
      "project_id": "7f44eb00-8044-4c93-8144-ee268244efb9",
      "details": {
        "workTasks": "27f65ddb-26f6-4c48-89f6-610128f65f6e",
        "scheduleEntries": "Mobilization planned for 2026-07-07"
      }
    },
    {
      "project_id": "b47458da-b574-4a6d-8274-55b4b3745747",
      "details": {
        "workTasks": "5e349c8a-5f34-4e1d-8c34-99645d349af7",
        "scheduleEntries": "Hydraulic rough-in underway; inspection scheduled for 2026-07-06"
      }
    },
    {
      "project_id": "ebc8d2b9-eac8-4126-89c8-cf93e8c8ce00",
      "details": {
        "workTasks": "65320669-6432-44d6-8332-0343623201b0",
        "scheduleEntries": "Closeout completed on 2026-07-04"
      }
    }
  ]
};

export const scheduleRiskAssessmentSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmScheduleRiskAssessment",
  "rows": [
    {
      "project_id": "d370cb85-d270-49f2-8170-c85fd070c6cc",
      "work_task_id": "1046c3cf-0f46-423c-8246-c6f51146c562",
      "details": {
        "taskStatus": "in-progress",
        "dueDate": "2026-07-06T17:00:00.000Z",
        "progressPercent": 65,
        "riskIndicators": "inspection dependency; material availability",
        "riskExplanation": "Work is active at 65 percent and may slip if the pending inspection is not completed by the due date.",
        "assessedAt": "2026-07-05T10:00:00.000Z"
      }
    },
    {
      "project_id": "008664ba-0186-464d-8e86-6194ff866327",
      "work_task_id": "510f4328-520f-44bb-830f-464e540f47e1",
      "details": {
        "taskStatus": "planned",
        "dueDate": "2026-07-07T17:00:00.000Z",
        "progressPercent": 0,
        "riskIndicators": "未started mobilization",
        "riskExplanation": "The task has not started, but the planned mobilization remains inside the current delivery window.",
        "assessedAt": "2026-07-02T08:30:00.000Z"
      }
    },
    {
      "project_id": "57d42ae8-58d4-4c7b-89d4-2e0e5ad42fa1",
      "work_task_id": "bb445eba-bc44-404d-8944-5b94ba445d27",
      "details": {
        "taskStatus": "completed",
        "dueDate": "2026-07-04T16:00:00.000Z",
        "progressPercent": 100,
        "riskIndicators": "none",
        "riskExplanation": "The task reached completion before its due date and has no active schedule risk.",
        "assessedAt": "2026-07-04T16:30:00.000Z"
      }
    }
  ]
};

export const statusReportSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmStatusReport",
  "rows": [
    {
      "status_report_id": "50027934-5102-4ac7-8202-7c5a53027ded",
      "project_id": "0301df36-0401-40c9-8101-dc100201dda3",
      "status": "draft",
      "generated_by_user_id": "d005e388-d105-451b-8205-e6aed305e841",
      "published_by_user_id": null,
      "details": {
        "statusReportId": "status-report-alpha-draft",
        "projectId": "0301df36-0401-40c9-8101-dc100201dda3",
        "title": "Relatório inicial de adequação elétrica Alpha",
        "content": "O projeto está em planejamento, com escopo elétrico validado e mobilização pendente.",
        "communicatedRisks": "54d07fc1-53d0-4e2e-82d0-7c9b51d07b08",
        "generatedAt": "2026-07-01T09:00:00.000Z",
        "generatedByUserId": "d005e388-d105-451b-8205-e6aed305e841",
        "publishedAt": null,
        "publishedByUserId": null,
        "withdrawnAt": null
      }
    },
    {
      "status_report_id": "ddea963b-dcea-44a8-8fea-9961deea97ce",
      "project_id": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
      "status": "published",
      "generated_by_user_id": "f059542d-ef59-429a-8e59-5107ed594f74",
      "published_by_user_id": "f059542d-ef59-429a-8e59-5107ed594f74",
      "details": {
        "statusReportId": "status-report-beta-published",
        "projectId": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
        "title": "Relatório semanal da reforma hidráulica Beta",
        "content": "A execução está em andamento, com o acompanhamento de campo atualizado e risco de prazo comunicado ao cliente.",
        "communicatedRisks": "f9793c74-fa79-4e07-8b79-3f9afc79412d",
        "generatedAt": "2026-07-03T14:00:00.000Z",
        "generatedByUserId": "f059542d-ef59-429a-8e59-5107ed594f74",
        "publishedAt": "2026-07-03T16:00:00.000Z",
        "publishedByUserId": "f059542d-ef59-429a-8e59-5107ed594f74",
        "withdrawnAt": null
      }
    },
    {
      "status_report_id": "f18944b2-f289-4645-8f89-418cf089431f",
      "project_id": "40f54b68-41f5-4cfb-82f5-4e8e43f55021",
      "status": "withdrawn",
      "generated_by_user_id": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
      "published_by_user_id": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
      "details": {
        "statusReportId": "status-report-gamma-withdrawn",
        "projectId": "40f54b68-41f5-4cfb-82f5-4e8e43f55021",
        "title": "Relatório de encerramento da iluminação Gamma",
        "content": "O relatório foi retirado após revisão administrativa do encerramento e não deve mais ser distribuído.",
        "communicatedRisks": "8b3a9ca3-8a3a-4b10-8d3a-9fc98c3a9e36",
        "generatedAt": "2026-07-05T10:00:00.000Z",
        "generatedByUserId": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
        "publishedAt": "2026-07-05T11:00:00.000Z",
        "publishedByUserId": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
        "withdrawnAt": "2026-07-06T09:00:00.000Z"
      }
    }
  ]
};

export const timeLogSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmTimeLog",
  "rows": [
    {
      "time_log_id": "dc656f71-db65-4dde-8a65-6c4bd9656ab8",
      "status": "recorded",
      "work_task_id": "5e349c8a-5f34-4e1d-8c34-99645d349af7",
      "field_worker_id": "bbd94dc9-bad9-4c36-89d9-4aa3b8d94910",
      "details": {
        "workDate": "2026-07-02T00:00:00.000Z",
        "hoursWorked": 7.5,
        "hourlyLaborCost": 42
      }
    },
    {
      "time_log_id": "cf616309-ce61-4176-8d61-5fe3cc615e50",
      "status": "recorded",
      "work_task_id": "5e349c8a-5f34-4e1d-8c34-99645d349af7",
      "field_worker_id": "3a70b3f4-3b70-4587-8c70-b71a3d70b8ad",
      "details": {
        "workDate": "2026-07-05T00:00:00.000Z",
        "hoursWorked": 6,
        "hourlyLaborCost": 38
      }
    },
    {
      "time_log_id": "0a6e5f53-096e-4dc0-8c6e-62790b6e60e6",
      "status": "voided",
      "work_task_id": "65320669-6432-44d6-8332-0343623201b0",
      "field_worker_id": "bbd94dc9-bad9-4c36-89d9-4aa3b8d94910",
      "details": {
        "workDate": "2026-07-03T00:00:00.000Z",
        "hoursWorked": 4,
        "hourlyLaborCost": 42
      }
    }
  ]
};

export const workTaskSeeds: TableSeedRows = {
  "seedFor": "buildFlowFsmWorkTask",
  "rows": [
    {
      "work_task_id": "5e349c8a-5f34-4e1d-8c34-99645d349af7",
      "project_id": "bfaff9d2-c0af-4b65-8daf-f6acbeaff83f",
      "assigned_field_worker_id": "c42001f2-c520-4385-821f-feccc320005f",
      "status": "inProgress",
      "details": {
        "description": "Executar teste de estanqueidade na ala hidráulica",
        "dueDate": "2026-07-06T17:00:00.000Z",
        "progressUpdate": "Tubulação instalada; teste em andamento no trecho norte"
      }
    },
    {
      "work_task_id": "27f65ddb-26f6-4c48-89f6-610128f65f6e",
      "project_id": "0301df36-0401-40c9-8101-dc100201dda3",
      "assigned_field_worker_id": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
      "status": "planned",
      "details": {
        "description": "Preparar passagem dos cabos do quadro principal",
        "dueDate": "2026-07-07T16:00:00.000Z",
        "progressUpdate": "Aguardando aprovação da alteração de escopo"
      }
    },
    {
      "work_task_id": "65320669-6432-44d6-8332-0343623201b0",
      "project_id": "40f54b68-41f5-4cfb-82f5-4e8e43f55021",
      "assigned_field_worker_id": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
      "status": "completed",
      "details": {
        "description": "Concluir conferência das luminárias instaladas",
        "dueDate": "2026-07-03T15:00:00.000Z",
        "progressUpdate": "Conferência concluída sem pendências"
      }
    }
  ]
};

export const mdmEntityIndexSeeds: TableSeedRows = {
  "seedFor": "mdmEntityIndex",
  "rows": [
    {
      "mdmId": "d005e388-d105-451b-8205-e6aed305e841",
      "subtype": "Person",
      "name": "Gerente de projeto 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "projectManager"
      ],
      "searchVector": "gerente de projeto 1 projectmanager buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "d005e388-d105-451b-8205-e6aed305e841",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "f059542d-ef59-429a-8e59-5107ed594f74",
      "subtype": "Person",
      "name": "Gerente de projeto 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "projectManager"
      ],
      "searchVector": "gerente de projeto 2 projectmanager buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "f059542d-ef59-429a-8e59-5107ed594f74",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
      "subtype": "Person",
      "name": "Gerente de projeto 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "projectManager"
      ],
      "searchVector": "gerente de projeto 3 projectmanager buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "3293b646-3393-47d9-8093-b3203193b4b3",
      "subtype": "Person",
      "name": "Coordenador de campo 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldCoordinator"
      ],
      "searchVector": "coordenador de campo 1 fieldcoordinator buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "3293b646-3393-47d9-8093-b3203193b4b3",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "0f6f11f7-0e6f-4064-816f-151d106f138a",
      "subtype": "Person",
      "name": "Coordenador de campo 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldCoordinator"
      ],
      "searchVector": "coordenador de campo 2 fieldcoordinator buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "0f6f11f7-0e6f-4064-816f-151d106f138a",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "18cdf488-19cd-461b-8acd-f7ae1bcdf941",
      "subtype": "Person",
      "name": "Coordenador de campo 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldCoordinator"
      ],
      "searchVector": "coordenador de campo 3 fieldcoordinator buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "18cdf488-19cd-461b-8acd-f7ae1bcdf941",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "c42001f2-c520-4385-821f-feccc320005f",
      "subtype": "Person",
      "name": "Trabalhador de campo 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldWorker"
      ],
      "searchVector": "trabalhador de campo 1 fieldworker buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "c42001f2-c520-4385-821f-feccc320005f",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
      "subtype": "Person",
      "name": "Trabalhador de campo 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldWorker"
      ],
      "searchVector": "trabalhador de campo 2 fieldworker buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "2944e4a4-2a44-4637-8b44-e7ca2c44e95d",
      "subtype": "Person",
      "name": "Trabalhador de campo 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldWorker"
      ],
      "searchVector": "trabalhador de campo 3 fieldworker buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "2944e4a4-2a44-4637-8b44-e7ca2c44e95d",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "2aece0ad-29ec-4f1a-88ec-dd8727ecdbf4",
      "subtype": "Person",
      "name": "Equipe administrativa de faturamento 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "billingStaff"
      ],
      "searchVector": "equipe administrativa de faturamento 1 billingstaff buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "2aece0ad-29ec-4f1a-88ec-dd8727ecdbf4",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "0a997008-0b99-419b-8c99-732e0d9974c1",
      "subtype": "Person",
      "name": "Equipe administrativa de faturamento 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "billingStaff"
      ],
      "searchVector": "equipe administrativa de faturamento 2 billingstaff buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "0a997008-0b99-419b-8c99-732e0d9974c1",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "013a8d77-003a-4be4-833a-909d023a8f0a",
      "subtype": "Person",
      "name": "Equipe administrativa de faturamento 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "billingStaff"
      ],
      "searchVector": "equipe administrativa de faturamento 3 billingstaff buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "013a8d77-003a-4be4-833a-909d023a8f0a",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
      "subtype": "Person",
      "name": "Cliente 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "client"
      ],
      "searchVector": "cliente 1 client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "6d235660-6e23-47f3-8f23-598670235b19",
      "subtype": "Person",
      "name": "Cliente 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "client"
      ],
      "searchVector": "cliente 2 client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "6d235660-6e23-47f3-8f23-598670235b19",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "63c473cf-62c4-423c-85c4-76f564c47562",
      "subtype": "Person",
      "name": "Cliente 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "client"
      ],
      "searchVector": "cliente 3 client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "63c473cf-62c4-423c-85c4-76f564c47562",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    }
  ]
};

export const mdmDocumentSeeds: TableSeedRows = {
  "seedFor": "mdmDocumentCache",
  "rows": [
    {
      "mdmId": "d005e388-d105-451b-8205-e6aed305e841",
      "version": 1,
      "details": {
        "mdmId": "d005e388-d105-451b-8205-e6aed305e841",
        "subtype": "Person",
        "name": "Gerente de projeto 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "projectManager"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "projectManager"
      }
    },
    {
      "mdmId": "f059542d-ef59-429a-8e59-5107ed594f74",
      "version": 1,
      "details": {
        "mdmId": "f059542d-ef59-429a-8e59-5107ed594f74",
        "subtype": "Person",
        "name": "Gerente de projeto 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "projectManager"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "projectManager"
      }
    },
    {
      "mdmId": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
      "version": 1,
      "details": {
        "mdmId": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
        "subtype": "Person",
        "name": "Gerente de projeto 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "projectManager"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "projectManager"
      }
    },
    {
      "mdmId": "3293b646-3393-47d9-8093-b3203193b4b3",
      "version": 1,
      "details": {
        "mdmId": "3293b646-3393-47d9-8093-b3203193b4b3",
        "subtype": "Person",
        "name": "Coordenador de campo 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldCoordinator"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldCoordinator"
      }
    },
    {
      "mdmId": "0f6f11f7-0e6f-4064-816f-151d106f138a",
      "version": 1,
      "details": {
        "mdmId": "0f6f11f7-0e6f-4064-816f-151d106f138a",
        "subtype": "Person",
        "name": "Coordenador de campo 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldCoordinator"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldCoordinator"
      }
    },
    {
      "mdmId": "18cdf488-19cd-461b-8acd-f7ae1bcdf941",
      "version": 1,
      "details": {
        "mdmId": "18cdf488-19cd-461b-8acd-f7ae1bcdf941",
        "subtype": "Person",
        "name": "Coordenador de campo 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldCoordinator"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldCoordinator"
      }
    },
    {
      "mdmId": "c42001f2-c520-4385-821f-feccc320005f",
      "version": 1,
      "details": {
        "mdmId": "c42001f2-c520-4385-821f-feccc320005f",
        "subtype": "Person",
        "name": "Trabalhador de campo 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldWorker"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldWorker"
      }
    },
    {
      "mdmId": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
      "version": 1,
      "details": {
        "mdmId": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
        "subtype": "Person",
        "name": "Trabalhador de campo 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldWorker"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldWorker"
      }
    },
    {
      "mdmId": "2944e4a4-2a44-4637-8b44-e7ca2c44e95d",
      "version": 1,
      "details": {
        "mdmId": "2944e4a4-2a44-4637-8b44-e7ca2c44e95d",
        "subtype": "Person",
        "name": "Trabalhador de campo 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldWorker"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldWorker"
      }
    },
    {
      "mdmId": "2aece0ad-29ec-4f1a-88ec-dd8727ecdbf4",
      "version": 1,
      "details": {
        "mdmId": "2aece0ad-29ec-4f1a-88ec-dd8727ecdbf4",
        "subtype": "Person",
        "name": "Equipe administrativa de faturamento 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "billingStaff"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "billingStaff"
      }
    },
    {
      "mdmId": "0a997008-0b99-419b-8c99-732e0d9974c1",
      "version": 1,
      "details": {
        "mdmId": "0a997008-0b99-419b-8c99-732e0d9974c1",
        "subtype": "Person",
        "name": "Equipe administrativa de faturamento 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "billingStaff"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "billingStaff"
      }
    },
    {
      "mdmId": "013a8d77-003a-4be4-833a-909d023a8f0a",
      "version": 1,
      "details": {
        "mdmId": "013a8d77-003a-4be4-833a-909d023a8f0a",
        "subtype": "Person",
        "name": "Equipe administrativa de faturamento 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "billingStaff"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "billingStaff"
      }
    },
    {
      "mdmId": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
      "version": 1,
      "details": {
        "mdmId": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
        "subtype": "Person",
        "name": "Cliente 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "client"
      }
    },
    {
      "mdmId": "6d235660-6e23-47f3-8f23-598670235b19",
      "version": 1,
      "details": {
        "mdmId": "6d235660-6e23-47f3-8f23-598670235b19",
        "subtype": "Person",
        "name": "Cliente 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "client"
      }
    },
    {
      "mdmId": "63c473cf-62c4-423c-85c4-76f564c47562",
      "version": 1,
      "details": {
        "mdmId": "63c473cf-62c4-423c-85c4-76f564c47562",
        "subtype": "Person",
        "name": "Cliente 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "client"
      }
    }
  ]
};
