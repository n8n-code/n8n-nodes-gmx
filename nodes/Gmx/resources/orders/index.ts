import type { INodeProperties } from 'n8n-workflow';

export const ordersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					]
				}
			},
			"options": [
				{
					"name": "Get Orders By Address",
					"value": "Get Orders By Address",
					"action": "Get Orders By Address",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/orders"
						}
					}
				},
				{
					"name": "Get Order By Key",
					"value": "Get Order By Key",
					"action": "Get Order By Key",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/orders/{{$parameter[\"key\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Get Orders By Address"
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
						"Orders"
					],
					"operation": [
						"Get Orders By Address"
					]
				}
			}
		},
		{
			"displayName": "GET /orders/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Get Order By Key"
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
						"Orders"
					],
					"operation": [
						"Get Order By Key"
					]
				}
			}
		},
];
