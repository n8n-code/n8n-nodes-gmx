import type { INodeProperties } from 'n8n-workflow';

export const apyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"APY"
					]
				}
			},
			"options": [
				{
					"name": "Get Apy",
					"value": "Get Apy",
					"action": "Get Apy",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /apy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"APY"
					],
					"operation": [
						"Get Apy"
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
						"APY"
					],
					"operation": [
						"Get Apy"
					]
				}
			}
		},
];
