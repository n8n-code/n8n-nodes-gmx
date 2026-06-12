import type { INodeProperties } from 'n8n-workflow';

export const jitDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"JIT"
					]
				}
			},
			"options": [
				{
					"name": "Get Liquidity Info",
					"value": "Get Liquidity Info",
					"action": "Get Liquidity Info",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jit/liquidity_info"
						}
					}
				},
				{
					"name": "Get Liquidity History",
					"value": "Get Liquidity History",
					"action": "Get Liquidity History",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jit/liquidity_history"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /jit/liquidity_info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"JIT"
					],
					"operation": [
						"Get Liquidity Info"
					]
				}
			}
		},
		{
			"displayName": "GET /jit/liquidity_history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"JIT"
					],
					"operation": [
						"Get Liquidity History"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"default": "1h",
			"type": "options",
			"options": [
				{
					"name": "1 H",
					"value": "1h"
				},
				{
					"name": "1 D",
					"value": "1d"
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
						"JIT"
					],
					"operation": [
						"Get Liquidity History"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"JIT"
					],
					"operation": [
						"Get Liquidity History"
					]
				}
			}
		},
		{
			"displayName": "To",
			"name": "to",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"JIT"
					],
					"operation": [
						"Get Liquidity History"
					]
				}
			}
		},
];
