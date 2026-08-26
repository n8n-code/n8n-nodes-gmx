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
					"name": "Get Trading Capacity",
					"value": "Get Trading Capacity",
					"action": "Get Trading Capacity",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/markets/trading-capacity"
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
				},
				{
					"name": "Get Markets Config",
					"value": "Get Markets Config",
					"action": "Get Markets Config",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/markets/config"
						}
					}
				},
				{
					"name": "Get Markets Values",
					"value": "Get Markets Values",
					"action": "Get Markets Values",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/markets/values"
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
			"displayName": "GET /markets/trading-capacity",
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
						"Get Trading Capacity"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbol",
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
						"Get Trading Capacity"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"required": true,
			"default": "long",
			"type": "options",
			"options": [
				{
					"name": "Long",
					"value": "long"
				},
				{
					"name": "Short",
					"value": "short"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
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
						"Get Trading Capacity"
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
		{
			"displayName": "GET /markets/config",
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
						"Get Markets Config"
					]
				}
			}
		},
		{
			"displayName": "GET /markets/values",
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
						"Get Markets Values"
					]
				}
			}
		},
];
