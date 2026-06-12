import type { INodeProperties } from 'n8n-workflow';

export const tradesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					]
				}
			},
			"options": [
				{
					"name": "Get Trades",
					"value": "Get Trades",
					"action": "Get Trades",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trades"
						}
					}
				},
				{
					"name": "Search Trades",
					"value": "Search Trades",
					"action": "Search Trades",
					"description": "Trade history search supporting the same filters used by the GMX UI:\nmarketsDirections (per-tuple market+direction+collateral) and\norderEventCombinations (orderType+eventName+isDepositOrWithdraw+isTwap).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/trades/search"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /trades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Get Trades"
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
						"Trades"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
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
						"Trades"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "Market Address",
			"name": "marketAddress",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "marketAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
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
						"Trades"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "Until",
			"name": "until",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "until",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "Actions",
			"name": "actions",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "actions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Get Trades"
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
						"Trades"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "POST /trades/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"type": "string",
			"default": "",
			"description": "Opaque pagination cursor returned by previous response.",
			"routing": {
				"send": {
					"property": "cursor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"type": "number",
			"default": 0,
			"description": "Page size, 1..1000. Defaults to 100.",
			"routing": {
				"send": {
					"property": "limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "Show Debug Values",
			"name": "showDebugValues",
			"type": "boolean",
			"default": true,
			"description": "When false (default), excludes MarketIncrease/Decrease/Swap OrderCreated debug events.",
			"routing": {
				"send": {
					"property": "showDebugValues",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "Order Event Combinations",
			"name": "orderEventCombinations",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "orderEventCombinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "Markets Directions",
			"name": "marketsDirections",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "marketsDirections",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "To Timestamp",
			"name": "toTimestamp",
			"type": "number",
			"default": 0,
			"description": "Inclusive upper-bound timestamp filter. Accepts seconds or milliseconds.",
			"routing": {
				"send": {
					"property": "toTimestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "From Timestamp",
			"name": "fromTimestamp",
			"type": "number",
			"default": 0,
			"description": "Inclusive lower-bound timestamp filter. Accepts seconds or milliseconds.",
			"routing": {
				"send": {
					"property": "fromTimestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "For All Accounts",
			"name": "forAllAccounts",
			"type": "boolean",
			"default": true,
			"description": "When true, returns trades for all accounts.",
			"routing": {
				"send": {
					"property": "forAllAccounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "Trader address. Required unless `forAllAccounts` is true.",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"Search Trades"
					]
				}
			}
		},
];
