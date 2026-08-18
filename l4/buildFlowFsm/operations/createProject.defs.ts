/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createProject.defs.ts" enhancement="_blank"/>

export const operationCreateProject = {
  "operationId": "createProject",
  "title": "Criar Obra",
  "actors": [
    "billingStaff",
    "client",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "Project",
  "kind": "create",
  "reads": [
    "Client",
    "Project"
  ],
  "writes": [
    "Project"
  ],
  "rulesApplied": [
    "activeProject",
    "ongoingProject"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Criar Obra",
    "steps": [
      "Informar os dados do novo registro."
    ],
    "outcome": "Informar os dados do novo registro."
  },
  "accessPattern": {
    "kind": "create",
    "description": "Criar Obra",
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
      "inputId": "status",
      "fieldRef": "Project.status",
      "required": true,
      "source": "systemDefault",
      "description": "Situação operacional atual da obra."
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
  "pageId": "projectCatalogue",
  "commandName": "cmdCreateProject",
  "bffName": "cmdCreateProject"
} as const;

export default operationCreateProject;
