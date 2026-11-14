import type { INodeProperties } from 'n8n-workflow';

export const pricesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Prices"
					]
				}
			},
			"options": [
				{
					"name": "Get Ohlcv",
					"value": "Get Ohlcv",
					"action": "Get Ohlcv",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/prices/ohlcv"
						}
					}
				},
				{
					"name": "Get Tickers",
					"value": "Get Tickers",
					"action": "Get Tickers",
					"description": "The snapshot the `prices` WebSocket channel streams. Prices are USD with 30 decimals per whole token, keyed by\ntoken address; the keeper's own /prices/tickers quotes per-unit contract prices instead.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/prices/tickers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /prices/ohlcv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prices"
					],
					"operation": [
						"Get Ohlcv"
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
						"Prices"
					],
					"operation": [
						"Get Ohlcv"
					]
				}
			}
		},
		{
			"displayName": "Timeframe",
			"name": "timeframe",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "timeframe",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prices"
					],
					"operation": [
						"Get Ohlcv"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prices"
					],
					"operation": [
						"Get Ohlcv"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "Unix timestamp in milliseconds",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prices"
					],
					"operation": [
						"Get Ohlcv"
					]
				}
			}
		},
		{
			"displayName": "GET /prices/tickers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prices"
					],
					"operation": [
						"Get Tickers"
					]
				}
			}
		},
];
