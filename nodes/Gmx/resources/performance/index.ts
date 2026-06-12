import type { INodeProperties } from 'n8n-workflow';

export const performanceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Performance"
					]
				}
			},
			"options": [
				{
					"name": "Get Annualized",
					"value": "Get Annualized",
					"action": "Get Annualized",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/performance/annualized"
						}
					}
				},
				{
					"name": "Get Snapshots",
					"value": "Get Snapshots",
					"action": "Get Snapshots",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/performance/snapshots"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /performance/annualized",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Performance"
					],
					"operation": [
						"Get Annualized"
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
						"Performance"
					],
					"operation": [
						"Get Annualized"
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
						"Performance"
					],
					"operation": [
						"Get Annualized"
					]
				}
			}
		},
		{
			"displayName": "GET /performance/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Performance"
					],
					"operation": [
						"Get Snapshots"
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
						"Performance"
					],
					"operation": [
						"Get Snapshots"
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
						"Performance"
					],
					"operation": [
						"Get Snapshots"
					]
				}
			}
		},
];
