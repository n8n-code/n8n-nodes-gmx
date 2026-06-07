import type { INodeProperties } from 'n8n-workflow';

export const marketsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					]
				}
			},
			"options": [
				{
					"name": "Get Markets",
					"value": "Get Markets",
					"action": "Get Markets",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/markets"
						}
					}
				},
				{
					"name": "Get Markets Tickers",
					"value": "Get Markets Tickers",
					"action": "Get Markets Tickers",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/markets/tickers"
						}
					}
				},
				{
					"name": "Get Markets Info",
					"value": "Get Markets Info",
					"action": "Get Markets Info",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/markets/info"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /markets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"Get Markets"
					]
				}
			}
		},
		{
			"displayName": "GET /markets/tickers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"Get Markets Tickers"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "addresses",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"Get Markets Tickers"
					]
				}
			}
		},
		{
			"displayName": "Symbols",
			"name": "symbols",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"Get Markets Tickers"
					]
				}
			}
		},
		{
			"displayName": "GET /markets/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"Get Markets Info"
					]
				}
			}
		},
];
