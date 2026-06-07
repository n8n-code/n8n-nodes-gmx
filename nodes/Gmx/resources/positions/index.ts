import type { INodeProperties } from 'n8n-workflow';

export const positionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Positions"
					]
				}
			},
			"options": [
				{
					"name": "Get Positions Info",
					"value": "Get Positions Info",
					"action": "Get Positions Info",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/positions"
						}
					}
				},
				{
					"name": "Get Position By Key",
					"value": "Get Position By Key",
					"action": "Get Position By Key",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/positions/{{$parameter[\"key\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /positions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Positions"
					],
					"operation": [
						"Get Positions Info"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Positions"
					],
					"operation": [
						"Get Positions Info"
					]
				}
			}
		},
		{
			"displayName": "Include Related Orders",
			"name": "includeRelatedOrders",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeRelatedOrders",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Positions"
					],
					"operation": [
						"Get Positions Info"
					]
				}
			}
		},
		{
			"displayName": "GET /positions/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Positions"
					],
					"operation": [
						"Get Position By Key"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Positions"
					],
					"operation": [
						"Get Position By Key"
					]
				}
			}
		},
		{
			"displayName": "Include Related Orders",
			"name": "includeRelatedOrders",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeRelatedOrders",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Positions"
					],
					"operation": [
						"Get Position By Key"
					]
				}
			}
		},
];
