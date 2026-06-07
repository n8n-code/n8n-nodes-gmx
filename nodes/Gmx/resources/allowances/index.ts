import type { INodeProperties } from 'n8n-workflow';

export const allowancesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Allowances"
					]
				}
			},
			"options": [
				{
					"name": "Get Allowances",
					"value": "Get Allowances",
					"action": "Get Allowances",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/allowances"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /allowances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowances"
					],
					"operation": [
						"Get Allowances"
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
						"Allowances"
					],
					"operation": [
						"Get Allowances"
					]
				}
			}
		},
		{
			"displayName": "Spender",
			"name": "spender",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "spender",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Allowances"
					],
					"operation": [
						"Get Allowances"
					]
				}
			}
		},
];
