/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/handoffProjectToFieldCoordinator.defs.ts" enhancement="_blank"/>

export const operationHandoffProjectToFieldCoordinator = {
  "operationId": "handoffProjectToFieldCoordinator",
  "title": "Encaminhar a obra para acompanhamento de campo",
  "actors": [
    "projectManager"
  ],
  "entity": "Project",
  "kind": "commandInput",
  "reads": [
    "Project",
    "ProjectCoordinationAssignment"
  ],
  "writes": [
    "Project"
  ],
  "rulesApplied": [
    "activeProjectCoordination",
    "ongoingProject"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Encaminhar a obra para acompanhamento de campo",
    "steps": [
      "Encaminhar a obra para acompanhamento de campo",
      "O coordenador de campo recebe a obra para coordenar a execução."
    ],
    "outcome": "O coordenador de campo recebe a obra para coordenar a execução."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Encaminhar a obra para acompanhamento de campo",
    "entity": "Project",
    "keyField": "Project.projectId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Project.projectId",
      "Project.clientId",
      "Project.name",
      "Project.address",
      "Project.status",
      "Project.authorizedBudget",
      "Project.plannedStartDate",
      "Project.plannedEndDate"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "Project.projectId"
      },
      {
        "name": "clientId",
        "type": "string",
        "required": true,
        "fieldRef": "Project.clientId"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "fieldRef": "Project.name"
      },
      {
        "name": "address",
        "type": "string",
        "required": true,
        "fieldRef": "Project.address"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Project.status"
      },
      {
        "name": "authorizedBudget",
        "type": "number",
        "required": true,
        "fieldRef": "Project.authorizedBudget"
      },
      {
        "name": "plannedStartDate",
        "type": "string",
        "required": true,
        "fieldRef": "Project.plannedStartDate"
      },
      {
        "name": "plannedEndDate",
        "type": "string",
        "required": true,
        "fieldRef": "Project.plannedEndDate"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectProjectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "routeParam",
      "description": "Obra"
    },
    {
      "inputId": "clientId",
      "fieldRef": "Project.clientId",
      "required": true,
      "source": "userInput",
      "description": "Referência ao cliente selecionado ao qual a obra pertence."
    },
    {
      "inputId": "name",
      "fieldRef": "Project.name",
      "required": true,
      "source": "userInput",
      "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente."
    },
    {
      "inputId": "address",
      "fieldRef": "Project.address",
      "required": true,
      "source": "userInput",
      "description": "Endereço do local de execução da obra."
    },
    {
      "inputId": "authorizedBudget",
      "fieldRef": "Project.authorizedBudget",
      "required": true,
      "source": "userInput",
      "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra."
    },
    {
      "inputId": "plannedStartDate",
      "fieldRef": "Project.plannedStartDate",
      "required": true,
      "source": "userInput",
      "description": "Data planejada para início da execução da obra."
    },
    {
      "inputId": "plannedEndDate",
      "fieldRef": "Project.plannedEndDate",
      "required": true,
      "source": "userInput",
      "description": "Data planejada para conclusão da obra."
    }
  ],
  "pageId": "reviewProjectPortfolio",
  "commandName": "cmdHandoffProjectToFieldCoordinator",
  "bffName": "cmdHandoffProjectToFieldCoordinator"
} as const;

export default operationHandoffProjectToFieldCoordinator;
