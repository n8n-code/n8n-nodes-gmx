import type { INodeProperties } from 'n8n-workflow';

export const statsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					]
				}
			},
			"options": [
				{
					"name": "Get Summary",
					"value": "Get Summary",
					"action": "Get Summary",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats/summary"
						}
					}
				},
				{
					"name": "Get Timeseries",
					"value": "Get Timeseries",
					"action": "Get Timeseries",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats/timeseries"
						}
					}
				},
				{
					"name": "Get Sources",
					"value": "Get Sources",
					"action": "Get Sources",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats/sources"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /stats/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Summary"
					]
				}
			}
		},
		{
			"displayName": "Networks",
			"name": "networks",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "networks",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Summary"
					]
				}
			}
		},
		{
			"displayName": "Versions",
			"name": "versions",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "versions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /stats/timeseries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Timeseries"
					]
				}
			}
		},
		{
			"displayName": "Metric",
			"name": "metric",
			"required": true,
			"default": "volume.perps",
			"type": "options",
			"options": [
				{
					"name": "Volume Perps",
					"value": "volume.perps"
				},
				{
					"name": "Volume Swaps",
					"value": "volume.swaps"
				},
				{
					"name": "Volume Total",
					"value": "volume.total"
				},
				{
					"name": "Fees Trading",
					"value": "fees.trading"
				},
				{
					"name": "Fees Swap",
					"value": "fees.swap"
				},
				{
					"name": "Fees Total",
					"value": "fees.total"
				},
				{
					"name": "Revenue Protocol",
					"value": "revenue.protocol"
				},
				{
					"name": "Revenue Lp",
					"value": "revenue.lp"
				},
				{
					"name": "Trades Perps",
					"value": "trades.perps"
				},
				{
					"name": "Trades Swaps",
					"value": "trades.swaps"
				},
				{
					"name": "Users Active",
					"value": "users.active"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "metric",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Timeseries"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"default": "network",
			"type": "options",
			"options": [
				{
					"name": "Network",
					"value": "network"
				},
				{
					"name": "Version",
					"value": "version"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "groupBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Timeseries"
					]
				}
			}
		},
		{
			"displayName": "Networks",
			"name": "networks",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "networks",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Timeseries"
					]
				}
			}
		},
		{
			"displayName": "Versions",
			"name": "versions",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "versions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Timeseries"
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
						"Stats"
					],
					"operation": [
						"Get Timeseries"
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
						"Stats"
					],
					"operation": [
						"Get Timeseries"
					]
				}
			}
		},
		{
			"displayName": "GET /stats/sources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Sources"
					]
				}
			}
		},
];
