import type { INodeProperties } from 'n8n-workflow';

export const ratesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Rates"
					]
				}
			},
			"options": [
				{
					"name": "Get Rates",
					"value": "Get Rates",
					"action": "Get Rates",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rates"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /rates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rates"
					],
					"operation": [
						"Get Rates"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"default": "1d",
			"type": "options",
			"options": [
				{
					"name": "1 D",
					"value": "1d"
				},
				{
					"name": "7 D",
					"value": "7d"
				},
				{
					"name": "30 D",
					"value": "30d"
				},
				{
					"name": "90 D",
					"value": "90d"
				},
				{
					"name": "180 D",
					"value": "180d"
				},
				{
					"name": "1 Y",
					"value": "1y"
				},
				{
					"name": "Total",
					"value": "total"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "period",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rates"
					],
					"operation": [
						"Get Rates"
					]
				}
			}
		},
		{
			"displayName": "Average By",
			"name": "averageBy",
			"default": "1d",
			"type": "options",
			"options": [
				{
					"name": "1 D",
					"value": "1d"
				},
				{
					"name": "7 D",
					"value": "7d"
				},
				{
					"name": "30 D",
					"value": "30d"
				},
				{
					"name": "90 D",
					"value": "90d"
				},
				{
					"name": "180 D",
					"value": "180d"
				},
				{
					"name": "1 Y",
					"value": "1y"
				},
				{
					"name": "Total",
					"value": "total"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "averageBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rates"
					],
					"operation": [
						"Get Rates"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
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
						"Rates"
					],
					"operation": [
						"Get Rates"
					]
				}
			}
		},
];
